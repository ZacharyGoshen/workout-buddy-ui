import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editable-workout-completion-time',
  templateUrl: './editable-workout-completion-time.component.html',
  styleUrls: ['./editable-workout-completion-time.component.css']
})
export class EditableWorkoutCompletionTimeComponent implements OnInit {

  @Input() completionTime: FormControl = new FormControl(null);

  @Output() edit: EventEmitter<null> = new EventEmitter();

  completionTimeAsDate?: Date = undefined;

  ngOnInit(): void {
    this.completionTimeAsDate = new Date(this.completionTime.value);
  }

  updateForm(): void {
    this.completionTime.setValue(this.completionTimeAsDate!.toISOString());
    this.edit.emit();
  }

  markCompleted(): void {
    this.completionTimeAsDate = new Date();
    this.completionTime.setValue(this.completionTimeAsDate.toISOString());
    this.edit.emit();
  }

  markNotCompleted(): void {
    this.completionTimeAsDate = undefined;
    this.completionTime.setValue(null);
    this.edit.emit();
  }

}
