import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Exercise } from 'src/app/shared/exercise.model';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent {

  @Input() exerciseNames: string[] = [];
  @Input() exercise: Exercise = {
    name: ""
  };
  @Input() needsRemoveButton: boolean = false;

  @Output() remove: EventEmitter<null> = new EventEmitter();

  removeExercise(): void {
    this.remove.emit();
  }

}
