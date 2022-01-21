import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExerciseSearchFilterForm } from 'src/app/forms/exercise-search-filter-form.model';
import { SetSearchCriteriaForm } from 'src/app/forms/set-search-criteria-form.model';
import { SetSearchCriteria } from 'src/app/models/set-search-criteria.model';

@Component({
  selector: 'app-edit-set-search-criteria-dialog',
  templateUrl: './edit-set-search-criteria-dialog.component.html',
  styleUrls: ['./edit-set-search-criteria-dialog.component.css']
})
export class EditSetSearchCriteriaDialogComponent {

  searchCriteria: SetSearchCriteriaForm = new SetSearchCriteriaForm({ sortBy: '', exerciseFilters: [] });

  exerciseNames: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) private data: { searchCriteria: SetSearchCriteria, exerciseNames: string[] }) {
    this.searchCriteria = new SetSearchCriteriaForm(data.searchCriteria);
    this.exerciseNames = data.exerciseNames;
  }

  addExerciseFilter(): void {
    let exerciseFilter: ExerciseSearchFilterForm = new ExerciseSearchFilterForm({ name: 'Any' });
    this.searchCriteria.addExerciseFilter(exerciseFilter);
  }

  removeExerciseFilter(index: number): void {
    this.searchCriteria.removeExerciseFilter(index);
  }

}
