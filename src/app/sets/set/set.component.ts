import { Component, Input, OnInit} from '@angular/core';
import { DateFormatter } from 'src/app/shared/date-formatter';
import { Set } from 'src/app/shared/set.model';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {

  @Input() set!: Set;

  workoutUrl: string = "";
  formattedCompletionTime: string = "";
  
  ngOnInit(): void {
    this.workoutUrl = "/workout/" + this.set.workoutId;
    this.formattedCompletionTime = DateFormatter.format(this.set.timeCompleted!);
  }

}
