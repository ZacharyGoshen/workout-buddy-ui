import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Set } from 'src/app/shared/set.model';

@Component({
  selector: 'app-editable-set',
  templateUrl: './editable-set.component.html',
  styleUrls: ['./editable-set.component.css']
})
export class EditableSetComponent {

  @Input() workoutId: string = "";

  @Input() index: number = 0;

  @Input() set: Set = {
    type: "",
    exercises: [],
    workoutId: ""
  };

  @Input() setForm: FormGroup = new FormGroup({});

  @Input() exerciseNames: string[] = [];

  @Output() update: EventEmitter<null> = new EventEmitter();

  @Output() duplicate: EventEmitter<null> = new EventEmitter();
  
  @Output() remove: EventEmitter<null> = new EventEmitter();

  isBeingEdited: boolean = false;

  startEditing(): void {
    this.isBeingEdited = true;
  }

  updateSet(): void {
    this.update.emit();
  }

  duplicateSet(): void {
    this.duplicate.emit();
  }

  removeSet(): void {
    this.remove.emit();
  }

}
