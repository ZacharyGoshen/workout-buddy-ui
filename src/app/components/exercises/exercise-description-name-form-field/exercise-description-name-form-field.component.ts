import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exercise-description-name-form-field',
  templateUrl: './exercise-description-name-form-field.component.html',
  styleUrls: ['./exercise-description-name-form-field.component.css']
})
export class ExerciseDescriptionNameFormFieldComponent {

  @Input() name: FormControl = new FormControl('');

}
