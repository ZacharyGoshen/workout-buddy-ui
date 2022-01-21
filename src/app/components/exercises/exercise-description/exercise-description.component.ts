import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ExerciseDescriptionDeletionService } from 'src/app/services/exercise/exercise-description-deletion.service';
import { ExerciseDescriptionUpdateService } from 'src/app/services/exercise/exercise-description-update.service';
import { EditExerciseDescriptionDialogComponent } from '../edit-exercise-description-dialog/edit-exercise-description-dialog.component';
import { ExerciseDescription } from '../../../models/exercise-description.model';

@Component({
  selector: 'app-exercise-description',
  templateUrl: './exercise-description.component.html',
  styleUrls: ['./exercise-description.component.css']
})
export class ExerciseDescriptionComponent {

  @Input() exerciseDescription: ExerciseDescription = {
    id: "",
    name: ""
  };

  @Output() update: EventEmitter<null> = new EventEmitter();

  constructor(
    private exerciseDescriptionUpdateService: ExerciseDescriptionUpdateService,
    private exerciseDescriptionDeletionService: ExerciseDescriptionDeletionService,
    private dialog: MatDialog) {}

  edit(): void {
    let dialogConfiguration: MatDialogConfig = {
      data: {
        exerciseDescription: this.exerciseDescription
      }
    }

    let dialog: MatDialogRef<EditExerciseDescriptionDialogComponent> = this.dialog.open(EditExerciseDescriptionDialogComponent, dialogConfiguration);

    dialog.afterClosed()
      .subscribe(exerciseDescription => this.updateExerciseDescription(exerciseDescription));
  }

  updateExerciseDescription(exerciseDescription: ExerciseDescription) {
    if (!exerciseDescription) {
      return;
    }
    
    this.exerciseDescriptionUpdateService
      .update(this.exerciseDescription.id, exerciseDescription)
      .subscribe(observer => this.update.emit());
  }

  delete(): void {
    this.exerciseDescriptionDeletionService
      .deleteById(this.exerciseDescription.id)
      .subscribe(observer => this.update.emit());
  }

}