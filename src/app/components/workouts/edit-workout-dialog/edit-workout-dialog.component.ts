import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkoutForm } from 'src/app/forms/workout-form.model';
import { Workout } from 'src/app/models/workout.model';

@Component({
  selector: 'app-edit-workout-dialog',
  templateUrl: './edit-workout-dialog.component.html',
  styleUrls: ['./edit-workout-dialog.component.css']
})
export class EditWorkoutDialogComponent {

  workout: WorkoutForm = new WorkoutForm({
    id: "",
    sets: []
  });

  constructor(
      private dialog: MatDialogRef<EditWorkoutDialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data: { workout: Workout }) { 

    this.workout = new WorkoutForm(data.workout);
  }

  onSubmit(): void {
    if (this.workout.invalid) {
      return;
    }
    
    this.dialog.close(this.workout);
  }

}
