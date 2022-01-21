import { Component, Input, OnInit} from '@angular/core';
import { DateFormatter } from 'src/app/models/date-formatter';
import { Set } from 'src/app/models/set.model';

@Component({
  selector: 'app-set-list-item',
  templateUrl: './set-list-item.component.html',
  styleUrls: ['./set-list-item.component.css']
})
export class SetListItemComponent implements OnInit {

  @Input() set!: Set;

  workoutUrl: string = "";
  formattedCompletionTime: string = "";
  
  ngOnInit(): void {
    this.workoutUrl = "/workouts/" + this.set.workoutId;
    this.formattedCompletionTime = DateFormatter.format(this.set.timeCompleted!);
  }

}
