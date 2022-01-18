import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editable-workout-name',
  templateUrl: './editable-workout-name.component.html',
  styleUrls: ['./editable-workout-name.component.css']
})
export class EditableWorkoutNameComponent {

  @Input() name: FormControl = new FormControl('');

  @Output() edit: EventEmitter<null> = new EventEmitter();

  isBeingEdited: boolean = false;

  onEdit(): void {
    this.edit.emit();
    this.isBeingEdited = false;
  }

}
