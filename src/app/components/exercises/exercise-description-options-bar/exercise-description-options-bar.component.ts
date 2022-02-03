import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exercise-description-options-bar',
  templateUrl: './exercise-description-options-bar.component.html',
  styleUrls: ['./exercise-description-options-bar.component.css']
})
export class ExerciseDescriptionOptionsBarComponent {

  @Input() sortBy: FormControl = new FormControl('nameAlphabetically');

  @Input() searchByName = new FormControl('');

  @Output() search: EventEmitter<null> = new EventEmitter();

  @Output() create: EventEmitter<null> = new EventEmitter();

}
