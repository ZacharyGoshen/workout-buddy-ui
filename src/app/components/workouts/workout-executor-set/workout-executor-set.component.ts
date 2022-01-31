import { Component, Input, OnInit } from '@angular/core';
import { SetForm } from 'src/app/forms/set-form.model';
import { Set } from 'src/app/models/set.model';

@Component({
  selector: 'app-workout-executor-set',
  templateUrl: './workout-executor-set.component.html',
  styleUrls: ['./workout-executor-set.component.css']
})
export class WorkoutExecutorSetComponent implements OnInit {

  @Input() set: Set = { workoutId: '', type: '', exercises: []};

  setForm: SetForm = new SetForm(this.set);

  ngOnInit(): void {
    this.setForm = new SetForm(this.set);
  }

}
