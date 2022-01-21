import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkoutCompletionTimeForm } from 'src/app/forms/workout-completion-time-form.model';

@Component({
  selector: 'app-editable-workout-completion-time',
  templateUrl: './editable-workout-completion-time.component.html',
  styleUrls: ['./editable-workout-completion-time.component.css']
})
export class EditableWorkoutCompletionTimeComponent implements OnInit {

  @Input() completionTime?: string = undefined;

  @Output() edit: EventEmitter<string> = new EventEmitter();

  completionTimeAsDate?: Date = undefined;

  completionTimeForm: WorkoutCompletionTimeForm = new WorkoutCompletionTimeForm(undefined);

  ngOnInit(): void {
    this.completionTimeForm = new WorkoutCompletionTimeForm(this.completionTime);
    this.setCompletionTimeAsDate();
  }

  setCompletionTimeAsDate() {
    let completionTime = this.completionTimeForm.value;

    if (completionTime) {
      this.completionTimeAsDate = new Date(completionTime);
    } else {
      this.completionTimeAsDate = undefined;
    }
  }

  markCompleted(): void {
    this.completionTimeForm.setValue(new Date());
    this.setCompletionTimeAsDate();
    this.onUpdate();
  }

  markNotCompleted(): void {
    this.completionTimeForm.setValue(null);
    this.onUpdate();
  }

  onUpdate(): void {
    this.setCompletionTimeAsDate();
    this.edit.emit(this.completionTimeForm.value);
  }

}
