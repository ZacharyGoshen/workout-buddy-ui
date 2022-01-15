import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExerciseSearchFilter } from 'src/app/sets/shared/exercise-search-filter.model';

@Component({
  selector: 'app-exercise-search-filter',
  templateUrl: './exercise-search-filter.component.html',
  styleUrls: ['./exercise-search-filter.component.css']
})
export class ExerciseSearchFilterComponent {

  @Input() exerciseNames: string[];
  @Input() index: number;
  @Input() filter: ExerciseSearchFilter;
  
  @Output() remove: EventEmitter<number> = new EventEmitter();

  constructor() {
    this.exerciseNames = [];
    this.index = 0;
    this.filter = {};
  }

  emitRemoveEvent(): void {
    this.remove.emit(this.index);
  }

}
