import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Set } from 'src/app/models/set.model';
import { SetQueryService } from 'src/app/services/set-query.service';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { EditSetSearchCriteriaDialogComponent } from '../edit-set-search-criteria-dialog/edit-set-search-criteria-dialog.component';
import { SetSearchCriteria } from '../../../models/set-search-criteria.model';
import { ExerciseDescriptionQueryService } from 'src/app/services/exercise/exercise-description-query.service';
import { ExerciseDescription } from 'src/app/models/exercise-description.model';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})
export class SetListComponent implements OnInit {

  sets: Set[] = [];

  exerciseNames: string[] = [];

  searchCriteria: SetSearchCriteria = {
    sortBy: "mostRecentCompletionTime",
    exerciseFilters: []
  };

  sortBy: FormControl = new FormControl('mostRecentCompletionTime');

  constructor(
      private setQueryService: SetQueryService, 
      private exerciseDescriptionQueryService: ExerciseDescriptionQueryService, 
      private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchSets();
    this.fetchExerciseNames();
  }

  fetchSets(): void {
    this.searchCriteria.sortBy = this.sortBy.value;
    let setsObservable: Observable<Set[]> = this.setQueryService.findByCriteria(this.searchCriteria);
    setsObservable.subscribe(sets => this.sets = sets);
  }

  fetchExerciseNames(): void {
    this.exerciseDescriptionQueryService
      .findAll()
      .subscribe(exerciseDescriptions => this.setExerciseNames(exerciseDescriptions));
  }

  setExerciseNames(exerciseDescriptions: ExerciseDescription[]): void {
    this.exerciseNames = exerciseDescriptions.map(exerciseDescription => exerciseDescription.name);
  }

  openEditSearchCriteriaDialog(): void {
    let dialogConfiguration: MatDialogConfig = {
      data: {
        searchCriteria: this.searchCriteria,
        exerciseNames: this.exerciseNames
      }
    }

    let dialog: MatDialogRef<EditSetSearchCriteriaDialogComponent> = this.dialog.open(EditSetSearchCriteriaDialogComponent, dialogConfiguration);

    dialog.afterClosed()
      .subscribe(searchCriteria => this.search(searchCriteria));
  }

  search(searchCriteria: SetSearchCriteria): void {
    if (!searchCriteria) {
      return;
    }

    this.searchCriteria = searchCriteria;
    this.fetchSets();
  }

}
