import { Component, OnInit } from '@angular/core';
import { WorkoutQueryService } from 'src/app/core/workout-query.service';
import { Workout } from '../shared/workout.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {

  workouts: Workout[] = [];

  constructor(private workoutQueryService: WorkoutQueryService) {}

  ngOnInit(): void {
    this.fetchWorkouts();
  }

  fetchWorkouts(): void {
    this.workoutQueryService
      .findAll()
      .subscribe(workouts => this.workouts = workouts);
  }

}
