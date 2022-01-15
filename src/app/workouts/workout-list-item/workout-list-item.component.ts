import { Component, Input } from '@angular/core';
import { WorkoutDeletionService } from 'src/app/core/workout-deletion.service';
import { DateFormatter } from 'src/app/shared/date-formatter';
import { Workout } from '../shared/workout.model';

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

  workoutUrl: string = '';
  formattedCompletionTime: string = '';

  constructor(private workoutDeletionService: WorkoutDeletionService) {}
  
  ngOnInit(): void {
    this.workoutUrl = '/workout/' + this.workout.id;
    this.formattedCompletionTime = DateFormatter.format(this.workout.timeCompleted!);
  }

  delete(): void {
    this.workoutDeletionService.deleteById(this.workout.id).subscribe();
   }

}
