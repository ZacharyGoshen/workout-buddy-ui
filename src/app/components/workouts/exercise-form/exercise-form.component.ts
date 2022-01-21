import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExerciseForm } from 'src/app/forms/exercise-form.model';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent {

  @Input() exerciseNames: string[] = [];

  @Input() exercise: ExerciseForm = new ExerciseForm({ name: '' });

  @Input() needsRemoveButton: boolean = false;

  @Output() remove: EventEmitter<null> = new EventEmitter();

  removeExercise(): void {
    this.remove.emit();
  }

}
