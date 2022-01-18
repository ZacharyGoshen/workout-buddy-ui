import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Set } from 'src/app/shared/set.model';
import { Workout } from 'src/app/workouts/shared/workout.model';
import { ExerciseDescriptionQueryService } from 'src/app/core/exercise-description-query.service';
import { WorkoutQueryService } from 'src/app/core/workout-query.service';
import { WorkoutUpdateService } from 'src/app/core/workout-update.service';
import { ExerciseDescription } from 'src/app/exercises/shared/exercise-description.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Exercise } from 'src/app/shared/exercise.model';

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

  form: FormGroup = this.formBuilder.group({});

  exerciseNames: string[] = [];

  exercisesHaveBeenFetched: boolean = false;

  constructor(
    private workoutQueryService: WorkoutQueryService, 
    private workoutUpdateService: WorkoutUpdateService, 
    private exerciseDescriptionQueryService: ExerciseDescriptionQueryService, 
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.fetchWorkout();
    this.fetchExerciseNames();
  }

  get nameFormControl(): FormControl {
    return this.form.controls['name'] as FormControl;
  }

  get completionTimeFormControl(): FormControl {
    return this.form.controls['completionTime'] as FormControl;
  }

  getSetForm(index: number): FormGroup {
    let setForms: FormArray = this.form.get('sets') as FormArray;
    return setForms.at(index) as FormGroup;
  }

  fetchWorkout(): void {
    this.workoutId = this.route.snapshot.paramMap.get('id')!;

    this.workoutQueryService
      .findById(this.workoutId)
      .subscribe(workout => { 
        this.workout = workout;
        this.form = this.buildWorkoutForm(workout);
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

  buildWorkoutForm(workout: Workout): FormGroup {
    let setFormGroups: FormGroup[] = this.buildSetForms(workout.sets);
    let setsFormArray: FormArray = this.formBuilder.array(setFormGroups);

    return this.formBuilder.group({
      name: [
        workout.name,
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ],
      completionTime: [
        workout.timeCompleted
      ],
      sets: setsFormArray
    });
  }

  buildSetForms(sets: Set[]): FormGroup[] {
    let setFormGroups: FormGroup[] = [];

    for (let set of sets) {
      let setFormGroup: FormGroup = this.buildSetForm(set);
      setFormGroups.push(setFormGroup);
    }

    return setFormGroups;
  }

  buildSetForm(set: Set): FormGroup {
    let exerciseFormGroups: FormGroup[] = this.buildExerciseForms(set.exercises);
    let exercisesFormArray: FormArray = this.formBuilder.array(exerciseFormGroups);

    return this.formBuilder.group({
      type: [set.type],
      exercises: exercisesFormArray,
      restTime: this.formBuilder.group({
        recordedValue: [set.timeRested],
        minimumAllowedValue: [set.minimumRestTimeAllowed],
        maximumAllowedValue: [set.maximumRestTimeAllowed]
      })
    });
  }

  buildExerciseForms(exercises: Exercise[]): FormGroup[] {
    let exerciseFormGroups: FormGroup[] = [];

    for (let exercise of exercises) {
      let exerciseFormGroup: FormGroup = this.buildExerciseForm(exercise);
      exerciseFormGroups.push(exerciseFormGroup);
    }

    return exerciseFormGroups;
  }

  buildExerciseForm(exercise: Exercise): FormGroup {
    return this.formBuilder.group({
      name: [exercise.name],
      weight: this.formBuilder.group({
        recordedValue: [exercise.weightUsed],
        minimumAllowedValue: [exercise.minimumWeightAllowed],
        maximumAllowedValue: [exercise.maximumWeightAllowed]
      }),
      reps: this.formBuilder.group({
        recordedValue: [exercise.repsCompleted],
        minimumAllowedValue: [exercise.minimumRepsAllowed],
        maximumAllowedValue: [exercise.maximumRepsAllowed]
      }),
      duration: this.formBuilder.group({
        recordedValue: [exercise.timePerformed],
        minimumAllowedValue: [exercise.minimumDurationAllowed],
        maximumAllowedValue: [exercise.maximumDurationAllowed]
      }),
    });
  }

  setExerciseNames(exerciseDescriptions: ExerciseDescription[]): void {
    this.exerciseNames = exerciseDescriptions.map(exerciseDescription => exerciseDescription.name);
  }

  updateWorkoutName(): void {
    this.workout.name = this.form.controls['name'].value;
    
    this.workoutUpdateService
      .update(this.workoutId, this.workout)
      .subscribe();
  }
  
  updateWorkoutCompletionTime(): void {
    this.workout.timeCompleted = this.form.controls['completionTime'].value;

    this.workoutUpdateService
      .update(this.workoutId, this.workout)
      .subscribe();
  }

  moveSet(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.workout.sets, event.previousIndex, event.currentIndex);

    this.workoutUpdateService
      .moveSet(this.workoutId, event.previousIndex, event.currentIndex)
      .subscribe(observer => this.fetchWorkout());
  }

  updateSet(index: number): void {
    
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
