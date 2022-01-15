import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exercise } from 'src/app/shared/exercise.model';
import { Set } from 'src/app/shared/set.model';
import { WorkoutUpdateService } from 'src/app/core/workout-update.service';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.css']
})
export class SetFormComponent {

  @Input() set: Set = {
    type: "",
    exercises: [
      {
        name: ""
      }
    ],
    workoutId: ""
  };
  @Input() exerciseNames: string[] = [];

  @Output() submit: EventEmitter<null> = new EventEmitter();

  constructor(private workoutUpdateService: WorkoutUpdateService) {}

  addExercise(): void {
    let exercise: Exercise = {
      name: ""
    };

    this.set.exercises.push(exercise);
    
    this.updateSetType();
  }

  removeExercise(index: number): void {
    this.set.exercises.splice(index, 1);

    this.updateSetType();
  }

  updateSetType(): void {
    if (this.set.exercises.length > 1) {
      this.set.type = "Superset";
    } else {
      this.set.type = "Single Exercise Set";
    }
  }

}
