import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exercise-description-search-options',
  templateUrl: './exercise-description-search-options.component.html',
  styleUrls: ['./exercise-description-search-options.component.css']
})
export class ExerciseDescriptionSearchOptionsComponent {

  @Input() sortBy: FormControl = new FormControl('nameAlphabetically');

  @Input() name = new FormControl('');

  @Output() search: EventEmitter<null> = new EventEmitter();

}
