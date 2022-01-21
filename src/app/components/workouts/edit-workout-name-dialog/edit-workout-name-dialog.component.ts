import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkoutNameForm } from 'src/app/forms/workout-name-form.model';

@Component({
  selector: 'app-edit-workout-name-dialog',
  templateUrl: './edit-workout-name-dialog.component.html',
  styleUrls: ['./edit-workout-name-dialog.component.css']
})
export class EditWorkoutNameDialogComponent {

  name: WorkoutNameForm = new WorkoutNameForm(undefined);

  constructor(
      private dialog: MatDialogRef<EditWorkoutNameDialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data: { name: string }) { 

    this.name = new WorkoutNameForm(data.name);
  }

  onSubmit(): void {
    if (this.name.invalid) {
      return;
    }
    
    this.dialog.close(this.name.value);
  }

}
