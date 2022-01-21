import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutCreationService } from 'src/app/services/workout/workout-creation.service';
import { WorkoutDeletionService } from 'src/app/services/workout/workout-deletion.service';
import { DateFormatter } from 'src/app/models/date-formatter';
import { Workout } from '../../../models/workout.model';

@Component({
  selector: 'app-workout-list-item',
  templateUrl: './workout-list-item.component.html',
  styleUrls: ['./workout-list-item.component.css']
})
export class WorkoutListItemComponent {

  @Input() workout: Workout = {
    id: '',
    sets: []
  }

  @Output() delete: EventEmitter<null> = new EventEmitter();

  workoutUrl: string = '';
  formattedCompletionTime: string = '';

  constructor(private router: Router, private workoutCreationService: WorkoutCreationService, private workoutDeletionService: WorkoutDeletionService) {}
  
  ngOnInit(): void {
    this.workoutUrl = '/workouts/' + this.workout.id;
    this.formattedCompletionTime = DateFormatter.format(this.workout.timeCompleted!);
  }

  createNotCompletedCopyOfWorkout(): void {
    this.workoutCreationService
      .createNotCompletedCopy(this.workout.id)
      .subscribe(id => this.router.navigate(['/workouts', id]));
  }

  deleteWorkout(): void {
    this.workoutDeletionService
      .deleteById(this.workout.id)
      .subscribe(observer => this.delete.emit());
   }

}
