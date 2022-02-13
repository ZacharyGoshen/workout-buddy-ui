import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Set } from 'src/app/models/set.model';

@Component({
  selector: 'app-workout-set-list',
  templateUrl: './workout-set-list.component.html',
  styleUrls: ['./workout-set-list.component.css']
})
export class WorkoutSetListComponent {

  @Input() sets: Set[] = [];

  @Input() exerciseNames: string[] = [];

  @Output() updateSet: EventEmitter<any> = new EventEmitter();

  @Output() moveSet: EventEmitter<any> = new EventEmitter();

  @Output() duplicateSet: EventEmitter<number> = new EventEmitter();

  @Output() removeSet: EventEmitter<number> = new EventEmitter();

}
