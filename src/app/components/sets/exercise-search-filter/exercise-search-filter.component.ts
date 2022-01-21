import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExerciseSearchFilterForm } from 'src/app/forms/exercise-search-filter-form.model';

@Component({
  selector: 'app-exercise-search-filter',
  templateUrl: './exercise-search-filter.component.html',
  styleUrls: ['./exercise-search-filter.component.css']
})
export class ExerciseSearchFilterComponent {

  @Input() filter: ExerciseSearchFilterForm = new ExerciseSearchFilterForm({});

  @Input() exerciseNames: string[] = [];
  
  @Output() remove: EventEmitter<null> = new EventEmitter();

  emitRemoveEvent(): void {
    this.remove.emit();
  }

}
