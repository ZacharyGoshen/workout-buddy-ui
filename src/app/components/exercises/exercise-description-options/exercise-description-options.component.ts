import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exercise-description-options',
  templateUrl: './exercise-description-options.component.html',
  styleUrls: ['./exercise-description-options.component.css']
})
export class ExerciseDescriptionOptionsComponent {

  @Input() sortBy: FormControl = new FormControl('nameAlphabetically');

  @Input() searchByName = new FormControl('');

  @Output() search: EventEmitter<null> = new EventEmitter();

  @Output() create: EventEmitter<null> = new EventEmitter();

}
