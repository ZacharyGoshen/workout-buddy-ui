import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ExerciseDescriptionCreationService } from 'src/app/services/exercise/exercise-description-creation.service';
import { ExerciseDescriptionQueryService } from 'src/app/services/exercise/exercise-description-query.service';
import { AddExerciseDescriptionDialogComponent } from '../add-exercise-description-dialog/add-exercise-description-dialog.component';
import { ExerciseDescription } from '../../../models/exercise-description.model';

@Component({
  selector: 'app-exercise-description-list',
  templateUrl: './exercise-description-list.component.html',
  styleUrls: ['./exercise-description-list.component.css']
})
export class ExerciseDescriptionListComponent implements OnInit {

  exerciseDescriptions: ExerciseDescription[] = [];

  constructor(
    private exerciseDescriptionQueryService: ExerciseDescriptionQueryService,
    private exerciseDescriptionCreationService: ExerciseDescriptionCreationService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchExerciseDescriptions();
  }

  fetchExerciseDescriptions(): void {
    let exerciseDescriptionsObservable: Observable<ExerciseDescription[]> = this.exerciseDescriptionQueryService.findAll();
    exerciseDescriptionsObservable.subscribe(exerciseDescriptions => this.exerciseDescriptions = exerciseDescriptions);
  }

  openCreateExerciseDescriptionDialog(): void {
    let dialog: MatDialogRef<AddExerciseDescriptionDialogComponent> = this.dialog.open(AddExerciseDescriptionDialogComponent);

    dialog.afterClosed()
      .subscribe(exerciseDescription => this.createNewExerciseDescription(exerciseDescription));
  }

  createNewExerciseDescription(exerciseDescription: ExerciseDescription): void {
    if (!exerciseDescription) {
      return;
    }
    
    this.exerciseDescriptionCreationService
      .create(exerciseDescription)
      .subscribe(observer => this.fetchExerciseDescriptions());
  }

}
