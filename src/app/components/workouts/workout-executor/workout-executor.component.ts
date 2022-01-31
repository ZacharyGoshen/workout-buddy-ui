import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Workout } from 'src/app/models/workout.model';
import { WorkoutQueryService } from 'src/app/services/workout/workout-query.service';

@Component({
  selector: 'app-workout-executor',
  templateUrl: './workout-executor.component.html',
  styleUrls: ['./workout-executor.component.css']
})
export class WorkoutExecutorComponent implements OnInit {

  workout: Workout = {
    id: "",
    sets: []
  };

  currentSetIndex: number = 0;

  constructor(private workoutQueryService: WorkoutQueryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  fetchWorkout(): void {
    let workoutId = this.route.snapshot.paramMap.get('id')!;

    this.workoutQueryService
      .findById(workoutId)
      .subscribe(workout => this.workout = workout);
  }

}
