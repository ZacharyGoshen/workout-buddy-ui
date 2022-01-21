import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExerciseDescriptionForm } from 'src/app/forms/exercise-description-form.model';
import { ExerciseDescription } from '../../../models/exercise-description.model';

@Component({
  selector: 'app-edit-exercise-description-dialog',
  templateUrl: './edit-exercise-description-dialog.component.html',
  styleUrls: ['./edit-exercise-description-dialog.component.css']
})
export class EditExerciseDescriptionDialogComponent {

  exerciseDescription: ExerciseDescriptionForm = new ExerciseDescriptionForm({ id: '', name: '' });

  constructor(
      private dialog: MatDialogRef<EditExerciseDescriptionDialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data: { exerciseDescription: ExerciseDescription }) { 
      
    this.exerciseDescription = new ExerciseDescriptionForm(data.exerciseDescription);
  }

  onSubmit(): void {
    if (this.exerciseDescription.invalid) {
      return;
    }
    
    this.dialog.close(this.exerciseDescription.toExerciseDescription());
  }

}
