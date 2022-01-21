import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-workout-set-headers',
  templateUrl: './workout-set-headers.component.html',
  styleUrls: ['./workout-set-headers.component.css']
})
export class WorkoutSetHeadersComponent {

  @Input() index: number = 0;

}
