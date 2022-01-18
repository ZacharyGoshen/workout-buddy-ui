import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutCreationService } from 'src/app/core/workout-creation.service';
import { WorkoutQueryService } from 'src/app/core/workout-query.service';
import { Workout } from '../shared/workout.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {

  workouts: Workout[] = [];

  constructor(
    private router: Router,
    private workoutQueryService: WorkoutQueryService, 
    private workoutCreationService: WorkoutCreationService) {}

  ngOnInit(): void {
    this.fetchWorkouts();
  }

  fetchWorkouts(): void {
    this.workoutQueryService
      .findAll()
      .subscribe(workouts => this.workouts = workouts);
  }

  createNewWorkout(): void {
    let workout: Workout = {
      id: '',
      name: 'New Workout',
      sets: []
    }

    this.workoutCreationService
      .create(workout)
      .subscribe(id => this.router.navigate(['/workouts', id]));
  }

}
