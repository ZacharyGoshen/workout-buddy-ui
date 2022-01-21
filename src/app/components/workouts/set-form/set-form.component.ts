import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray } from '@angular/forms';
import { ExerciseForm } from 'src/app/forms/exercise-form.model';
import { SetForm } from 'src/app/forms/set-form.model';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.css']
})
export class SetFormComponent {

  @Input() set: SetForm = new SetForm({ type: '', exercises: [], workoutId: ''})

  @Input() exerciseNames: string[] = [];

  @Output() submit: EventEmitter<null> = new EventEmitter();

  addExercise(): void {
    let exercise: ExerciseForm = new ExerciseForm({ name: '' });
    this.set.addExercise(exercise);
  }

  removeExercise(index: number): void {
    let exercises: FormArray = this.set.get('exercises') as FormArray;
    exercises.removeAt(index);

    this.updateSetType();
  }

  updateSetType(): void {
    let exercises: FormArray = this.set.get('exercises') as FormArray;
    if (exercises.length > 1) {
      this.set.controls['type'].setValue('SuperSet');
    } else {
      this.set.controls['type'].setValue('Single Exercise Set');
    }
  }

}
