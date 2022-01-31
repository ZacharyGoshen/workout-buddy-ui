import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Error } from 'src/app/models/error.model';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent {

  message: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) private data: { message: string }) {
    this.message = data.message;
  }

}
