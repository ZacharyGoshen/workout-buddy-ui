import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.css']
})
export class SetFormComponent {

  @Input() set: FormGroup = new FormGroup({});

  @Input() exerciseNames: string[] = [];

  @Output() submit: EventEmitter<null> = new EventEmitter();

  get exercises(): FormGroup[] {
    let exercisesFormArray: FormArray = this.set.get('exercises') as FormArray;
    
    let exerciseFormGroups: FormGroup[] = [];
    for (let exerciseAbstractControl of exercisesFormArray.controls) {
      let exerciseFormGroup: FormGroup = exerciseAbstractControl as FormGroup;
      exerciseFormGroups.push(exerciseFormGroup); 
    }

    return exerciseFormGroups;
  }

  get timeRestedConstraint(): FormGroup {
    return this.set.get('restTime') as FormGroup;
  }

  addExercise(): void {
    let exercises: FormArray = this.set.get('exercises') as FormArray;
    exercises.push(new FormGroup({}));
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
