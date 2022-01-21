import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { SetForm } from 'src/app/forms/set-form.model';
import { Set } from 'src/app/models/set.model';
import { EditSetDialogComponent } from '../edit-set-dialog/edit-set-dialog.component';

@Component({
  selector: 'app-editable-set',
  templateUrl: './editable-set.component.html',
  styleUrls: ['./editable-set.component.css']
})
export class EditableSetComponent {

  @Input() index: number = 0;

  @Input() set: Set = {
    type: "",
    exercises: [],
    workoutId: ""
  };

  @Input() exerciseNames: string[] = [];

  @Output() update: EventEmitter<Set> = new EventEmitter();

  @Output() duplicate: EventEmitter<null> = new EventEmitter();
  
  @Output() remove: EventEmitter<null> = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  openUpdateSetDialog(): void {
    let dialogConfiguration: MatDialogConfig = {
      data: {
        index: this.index,
        set: this.set,
        exerciseNames: this.exerciseNames
      }
    }

    let dialog: MatDialogRef<EditSetDialogComponent> = this.dialog.open(EditSetDialogComponent, dialogConfiguration);

    dialog.afterClosed().subscribe(set => this.update.emit(set));
  }

}
