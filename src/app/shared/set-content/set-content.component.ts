import { Component, Input } from '@angular/core';
import { Set } from '../set.model';

@Component({
  selector: 'app-set-content',
  templateUrl: './set-content.component.html',
  styleUrls: ['./set-content.component.css']
})
export class SetContentComponent {

  @Input() set: Set = {
    type: "",
    exercises: [],
    workoutId: ""
  };

}
