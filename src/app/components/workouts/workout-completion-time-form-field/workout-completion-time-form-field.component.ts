import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-workout-completion-time-form-field',
  templateUrl: './workout-completion-time-form-field.component.html',
  styleUrls: ['./workout-completion-time-form-field.component.css']
})
export class WorkoutCompletionTimeFormFieldComponent {

  @Input() completionTime: FormControl = new FormControl();

}
