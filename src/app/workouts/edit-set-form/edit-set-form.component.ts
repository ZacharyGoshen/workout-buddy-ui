import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Set } from 'src/app/shared/set.model';
import { WorkoutUpdateService } from 'src/app/core/workout-update.service';

@Component({
  selector: 'app-edit-set-form',
  templateUrl: './edit-set-form.component.html',
  styleUrls: ['./edit-set-form.component.css']
})
export class EditSetFormComponent implements OnInit {

  @Input() workoutId: string = "";
  @Input() setIndex: number = 0;
  @Input() set: Set = {
    type: "",
    exercises: [],
    workoutId: ""
  };
  @Input() exerciseNames: string[] = [];

  @Output() submit: EventEmitter<null> = new EventEmitter();

  constructor(private workoutUpdateService: WorkoutUpdateService) {}

  ngOnInit(): void {
    this.set.workoutId = this.workoutId;
  }

  save(): void {
    this.workoutUpdateService
      .updateSet(this.workoutId, this.setIndex, this.set)
      .subscribe(observer => this.submit.emit());
  }

}
