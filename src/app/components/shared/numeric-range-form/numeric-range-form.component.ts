import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-numeric-range-form',
  templateUrl: './numeric-range-form.component.html',
  styleUrls: ['./numeric-range-form.component.css']
})
export class NumericRangeFormComponent {

  @Input() lowerBound: FormControl = new FormControl('');
  @Input() upperBound: FormControl = new FormControl('');

}
