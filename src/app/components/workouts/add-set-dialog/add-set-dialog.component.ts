import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SetForm } from 'src/app/forms/set-form.model';

@Component({
  selector: 'app-add-set-dialog',
  templateUrl: './add-set-dialog.component.html',
  styleUrls: ['./add-set-dialog.component.css']
})
export class AddSetDialogComponent {

  set: SetForm = new SetForm(
    { 
      workoutId: '', 
      type: 'Single Exercise Set', 
      exercises: [ 
        {
          name: ''
        } 
      ] 
    }
  );

  exerciseNames: string[] = [];

  constructor(
      private dialog: MatDialogRef<AddSetDialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data: { exerciseNames: string[] }) { 

    this.exerciseNames = data.exerciseNames;
  }

}
