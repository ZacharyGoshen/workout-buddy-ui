import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent {

  @Input() exerciseNames: string[] = [];

  @Input() exercise: FormGroup = new FormGroup({});

  @Input() needsRemoveButton: boolean = false;

  @Output() remove: EventEmitter<null> = new EventEmitter();

  get nameFormControl(): FormControl {
    return this.exercise.controls['name'] as FormControl;
  }

  get weightConstraint(): FormGroup {
    let weightConstraintFormGroup = this.exercise.get('weight') as FormGroup;
    console.log(weightConstraintFormGroup);
    return weightConstraintFormGroup
  }

  get repsConstraint(): FormGroup {
    let repsConstraintFormGroup = this.exercise.get('reps') as FormGroup;
    console.log(repsConstraintFormGroup);
    return repsConstraintFormGroup
  }

  get durationConstraint(): FormGroup {
    let durationConstraintFormGroup = this.exercise.get('duration') as FormGroup;
    console.log(durationConstraintFormGroup);
    return durationConstraintFormGroup
  }

  removeExercise(): void {
    this.remove.emit();
  }

}
