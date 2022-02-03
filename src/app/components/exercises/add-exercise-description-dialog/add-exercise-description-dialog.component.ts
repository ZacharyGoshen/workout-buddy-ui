import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ExerciseDescriptionForm } from 'src/app/forms/exercise-description-form.model';

@Component({
  selector: 'app-add-exercise-description-dialog',
  templateUrl: './add-exercise-description-dialog.component.html',
  styleUrls: ['./add-exercise-description-dialog.component.css']
})
export class AddExerciseDescriptionDialogComponent {

  exerciseDescription: ExerciseDescriptionForm = new ExerciseDescriptionForm({ 
      id: '', 
      notes: '',
      name: '', 
      muscleGroups: [] 
  });

  constructor(private dialog: MatDialogRef<AddExerciseDescriptionDialogComponent>) {}

  onSubmit(): void {
    if (this.exerciseDescription.invalid) {
      return;
    }
    
    this.dialog.close(this.exerciseDescription.toExerciseDescription());
  }

}
