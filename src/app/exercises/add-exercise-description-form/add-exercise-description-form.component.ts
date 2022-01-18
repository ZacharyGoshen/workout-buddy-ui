import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExerciseDescriptionCreationService } from 'src/app/core/exercise-description-creation.service';
import { ExerciseDescription } from '../shared/exercise-description.model';

@Component({
  selector: 'app-add-exercise-description-form',
  templateUrl: './add-exercise-description-form.component.html',
  styleUrls: ['./add-exercise-description-form.component.css']
})
export class AddExerciseDescriptionFormComponent {

  @Output() submit: EventEmitter<null> = new EventEmitter();
  @Output() cancel: EventEmitter<null> = new EventEmitter();

  form: FormGroup = this.formBuilder.group({
    name: [
      '', 
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
    ]
  });

  constructor(private formBuilder: FormBuilder, private exerciseDescriptionCreationService: ExerciseDescriptionCreationService) {}

  get nameFormControl(): FormControl {
    return this.form.controls['name'] as FormControl;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    
    let exerciseDescription: ExerciseDescription = {
      id: '',
      name: this.form.controls['name'].value
    }

    this.exerciseDescriptionCreationService
      .create(exerciseDescription)
      .subscribe(observer => { 
        this.submit.emit();
        this.form.reset();
      });
  }

  onCancel(): void {
    this.cancel.emit();
  }

}
