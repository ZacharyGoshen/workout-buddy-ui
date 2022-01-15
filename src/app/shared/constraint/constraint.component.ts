import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-constraint',
  templateUrl: './constraint.component.html',
  styleUrls: ['./constraint.component.css']
})
export class ConstraintComponent implements OnInit {

  @Input() name: string = "";
  @Input() recordedValue?: number = 0;
  @Input() minimumValueAllowed?: number = 0;
  @Input() maximumValueAllowed?: number = 0;

  isVisible: boolean = true;

  ngOnInit(): void {
    this.isVisible = this.recordedValue != null || this.minimumValueAllowed != null || this.maximumValueAllowed != null;
  }

}
