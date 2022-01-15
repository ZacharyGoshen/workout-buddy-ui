import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExerciseSearchFilter } from 'src/app/sets/shared/exercise-search-filter.model';
import { SetSearchCriteria } from 'src/app/sets/shared/set-search-criteria.model';
import { ExerciseDescriptionQueryService } from 'src/app/core/exercise-description-query.service';
import { ExerciseDescription } from 'src/app/exercises/shared/exercise-description.model';

@Component({
  selector: 'app-set-search-criteria',
  templateUrl: './set-search-criteria.component.html',
  styleUrls: ['./set-search-criteria.component.css']
})
export class SetSearchCriteriaComponent implements OnInit {

  @Input() criteria: SetSearchCriteria = {
    sortBy: "",
    exerciseFilters: []
  };

  @Output() search: EventEmitter<null> = new EventEmitter();

  exerciseNames: string[] = [];

  constructor(private exerciseDescriptionQueryService: ExerciseDescriptionQueryService) {}

  ngOnInit(): void {
    this.fetchExerciseNames();
  }

  fetchExerciseNames(): void {
    this.exerciseDescriptionQueryService
      .findAll()
      .subscribe(exerciseDescriptions => this.setExerciseNames(exerciseDescriptions));
  }

  setExerciseNames(exerciseDescriptions: ExerciseDescription[]): void {
    this.exerciseNames = exerciseDescriptions.map(exerciseDescription => exerciseDescription.name);
  }

  addExerciseFilter(): void {
    let exerciseFilter: ExerciseSearchFilter = {
      name: undefined
    };

    this.criteria.exerciseFilters.push(exerciseFilter);
  }

  removeExerciseFilter(index: number): void {
    this.criteria.exerciseFilters.splice(index, 1);
  }

  emitSearchEvent(): void {
    this.search.emit();
  }

}
