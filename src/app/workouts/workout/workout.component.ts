import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateFormatter } from 'src/app/shared/date-formatter';
import { Set } from 'src/app/shared/set.model';
import { Workout } from 'src/app/workouts/shared/workout.model';
import { ExerciseDescriptionQueryService } from 'src/app/core/exercise-description-query.service';
import { WorkoutQueryService } from 'src/app/core/workout-query.service';
import { WorkoutUpdateService } from 'src/app/core/workout-update.service';
import { ExerciseDescription } from 'src/app/exercises/shared/exercise-description.model';

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
  exerciseNames: string[] = [];
  formattedCompletionTime: string = "";

  constructor(
    private workoutQueryService: WorkoutQueryService, 
    private workoutUpdateService: WorkoutUpdateService, 
    private exerciseDescriptionQueryService: ExerciseDescriptionQueryService, 
    private route: ActivatedRoute) {}

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
        this.formattedCompletionTime = DateFormatter.format(workout.timeCompleted!)});
  }

  fetchExerciseNames(): void {
    this.exerciseDescriptionQueryService
      .findAll()
      .subscribe(exerciseDescriptions => this.setExerciseNames(exerciseDescriptions));
  }

  setExerciseNames(exerciseDescriptions: ExerciseDescription[]): void {
    this.exerciseNames = exerciseDescriptions.map(exerciseDescription => exerciseDescription.name);
  }

  moveSet(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.workout.sets, event.previousIndex, event.currentIndex);

    this.workoutUpdateService
      .moveSet(this.workoutId, event.previousIndex, event.currentIndex)
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
