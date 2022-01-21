import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SetForm } from 'src/app/forms/set-form.model';
import { Set } from 'src/app/models/set.model';

@Component({
  selector: 'app-edit-set-dialog',
  templateUrl: './edit-set-dialog.component.html',
  styleUrls: ['./edit-set-dialog.component.css']
})
export class EditSetDialogComponent {

  index: number = 0;

  set: SetForm = new SetForm({ workoutId: '', type: '', exercises: [] });

  exerciseNames: string[] = [];

  constructor(
      private dialog: MatDialogRef<EditSetDialogComponent>,
      @Inject(MAT_DIALOG_DATA) private data: { index: number, set: Set, exerciseNames: string[] }) { 

    this.index = data.index;
    this.set = new SetForm(data.set);
    this.exerciseNames = data.exerciseNames;
  }

}
