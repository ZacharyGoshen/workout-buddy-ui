import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Set } from 'src/app/shared/set.model';
import { WorkoutUpdateService } from 'src/app/core/workout-update.service';

@Component({
  selector: 'app-add-set-form',
  templateUrl: './add-set-form.component.html',
  styleUrls: ['./add-set-form.component.css']
})
export class AddSetFormComponent implements OnInit {

  @Input() workoutId: string = "";
  @Input() numberOfSetsInWorkout: number = 0;
  @Input() exerciseNames: string[] = [];

  @Output() submit: EventEmitter<null> = new EventEmitter();

  set: Set = {
    type: "Single Exercise Set",
    exercises: [
      {
        name: ""
      }
    ],
    workoutId: ""
  };

  constructor(private workoutUpdateService: WorkoutUpdateService) {}

  ngOnInit(): void {
    this.set.workoutId = this.workoutId;
  }

  addSet(): void {
    this.workoutUpdateService
      .addSet(this.workoutId, this.numberOfSetsInWorkout, this.set)
      .subscribe(observer => this.submit.emit());
  }

}