import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Set } from 'src/app/models/set.model';
import { Workout } from 'src/app/models/workout.model';
import { ExerciseDescriptionQueryService } from 'src/app/services/exercise/exercise-description-query.service';
import { WorkoutQueryService } from 'src/app/services/workout/workout-query.service';
import { WorkoutUpdateService } from 'src/app/services/workout/workout-update.service';
import { ExerciseDescription } from 'src/app/models/exercise-description.model';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { EditWorkoutNameDialogComponent } from '../edit-workout-name-dialog/edit-workout-name-dialog.component';
import { AddSetDialogComponent } from '../add-set-dialog/add-set-dialog.component';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {

  workoutId: string = "";

  workout: Workout = {
    id: "",
    sets: []
  };

  workoutHasBeenFetched: boolean = false;

  exerciseNames: string[] = [];

  exercisesHaveBeenFetched: boolean = false;

  isAddingNewSet: boolean = false;

  constructor(
    private workoutQueryService: WorkoutQueryService, 
    private workoutUpdateService: WorkoutUpdateService, 
    private exerciseDescriptionQueryService: ExerciseDescriptionQueryService, 
    private route: ActivatedRoute,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchWorkout();
    this.fetchExerciseNames();
  }

  fetchWorkout(): void {
    this.workoutId = this.route.snapshot.paramMap.get('id')!;

    this.workoutQueryService
      .findById(this.workoutId)
      .subscribe(workout => { 
        this.workout = workout;
        this.workoutHasBeenFetched = true;
      });
  }

  fetchExerciseNames(): void {
    this.exerciseDescriptionQueryService
      .findAll()
      .subscribe(exerciseDescriptions => { 
        this.setExerciseNames(exerciseDescriptions);
        this.exercisesHaveBeenFetched = true;
      });
  }

  setExerciseNames(exerciseDescriptions: ExerciseDescription[]): void {
    this.exerciseNames = exerciseDescriptions.map(exerciseDescription => exerciseDescription.name);
  }

  openUpdateWorkoutNameDialog(): void {
    let dialogConfiguration: MatDialogConfig = {
      data: {
        name: this.workout.name
      }
    }

    let dialog: MatDialogRef<EditWorkoutNameDialogComponent> = this.dialog.open(EditWorkoutNameDialogComponent, dialogConfiguration);

    dialog.afterClosed().subscribe(name => this.updateWorkoutName(name));
  }

  updateWorkoutName(name: string): void {
    if (!name) {
      return;
    }

    this.workout.name = name;
    
    this.workoutUpdateService
      .update(this.workoutId, this.workout)
      .subscribe();
  }
  
  updateWorkoutCompletionTime(completionTime: string): void {
    this.workout.timeCompleted = completionTime;

    this.workoutUpdateService
      .update(this.workoutId, this.workout)
      .subscribe();
  }

  openAddSetDialog(): void {
    let dialogConfiguration: MatDialogConfig = {
      data: {
        exerciseNames: this.exerciseNames
      }
    }

    let dialog: MatDialogRef<AddSetDialogComponent> = this.dialog.open(AddSetDialogComponent, dialogConfiguration);

    dialog.afterClosed().subscribe(set => this.addSet(set));
  }

  addSet(set: Set): void {
    if (!set) {
      return;
    }

    this.workoutUpdateService
      .addSet(this.workoutId, this.workout.sets.length, set)
      .subscribe(observer => this.fetchWorkout());
  }

  moveSet(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.workout.sets, event.previousIndex, event.currentIndex);

    this.workoutUpdateService
      .moveSet(this.workoutId, event.previousIndex, event.currentIndex)
      .subscribe(observer => this.fetchWorkout());
  }

  updateSet(index: number, set: Set): void {
    if (!set) {
      return;
    }

    this.workoutUpdateService
      .updateSet(this.workoutId, index, set)
      .subscribe(observer => this.fetchWorkout());
  }

  duplicateSet(index: number): void {
    let set: Set = this.workout.sets[index];

    this.workoutUpdateService
      .addSet(this.workoutId, index, set)
      .subscribe(observer => this.fetchWorkout());
  }

  removeSet(index: number): void {
    this.workoutUpdateService
      .removeSet(this.workoutId, index)
      .subscribe(observer => this.fetchWorkout());
  }

}
