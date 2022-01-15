import { Component, Input } from '@angular/core';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent {

  @Input() exercise: Exercise = {
    name: ""
  };

}
