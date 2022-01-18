import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-workout-name-form-field',
  templateUrl: './workout-name-form-field.component.html',
  styleUrls: ['./workout-name-form-field.component.css']
})
export class WorkoutNameFormFieldComponent {

  @Input() name: FormControl = new FormControl('');

  @Output() enter: EventEmitter<null> = new EventEmitter();

  onEnter(): void {
    this.enter.emit();
  }

}
