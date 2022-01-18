import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExerciseDescriptionUpdateService } from 'src/app/core/exercise-description-update.service';
import { ExerciseDescription } from '../shared/exercise-description.model';

@Component({
  selector: 'app-edit-exercise-description-form',
  templateUrl: './edit-exercise-description-form.component.html',
  styleUrls: ['./edit-exercise-description-form.component.css']
})
export class EditExerciseDescriptionFormComponent implements OnInit {

  @Input() exerciseDescription: ExerciseDescription = {
    id: '',
    name: ''
  }

  @Output() submit: EventEmitter<null> = new EventEmitter();

  form: FormGroup = this.formBuilder.group({
    name: [
      '', 
      [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
    ]
  });

  constructor(private formBuilder: FormBuilder, private exerciseDescriptionUpdateService: ExerciseDescriptionUpdateService) {}

  ngOnInit(): void {
    this.form.controls['name'].setValue(this.exerciseDescription.name);
  }

  get nameFormControl(): FormControl {
    return this.form.controls['name'] as FormControl;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    
    let exerciseDescription: ExerciseDescription = {
      id: this.exerciseDescription.id,
      name: this.form.controls['name'].value
    }

    this.exerciseDescriptionUpdateService
      .update(exerciseDescription)
      .subscribe(observer => { 
        this.submit.emit();
        this.form.reset();
      });
  }

}
