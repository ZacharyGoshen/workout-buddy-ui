import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exercise-select-form-field',
  templateUrl: './exercise-select-form-field.component.html',
  styleUrls: ['./exercise-select-form-field.component.css']
})
export class ExerciseSelectFormFieldComponent {

  @Input() exercise: FormControl = new FormControl(null);
  @Input() exerciseNames: string[] = [];

}
