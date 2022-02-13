import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Workout } from 'src/app/models/workout.model';

@Component({
  selector: 'app-workout-header',
  templateUrl: './workout-header.component.html',
  styleUrls: ['./workout-header.component.css']
})
export class WorkoutHeaderComponent {

  @Input() workout: Workout = {
    id: "",
    sets: []
  };

  @Output() editName: EventEmitter<null> = new EventEmitter();
  @Output() updateCompletionTime: EventEmitter<string> = new EventEmitter();
  @Output() addSet: EventEmitter<null> = new EventEmitter();

}
