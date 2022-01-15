import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-numeric-range-form',
  templateUrl: './numeric-range-form.component.html',
  styleUrls: ['./numeric-range-form.component.css']
})
export class NumericRangeFormComponent {

  @Input() lowerBound?: number = undefined;
  @Input() upperBound?: number = undefined;

  @Output() changeLowerBound: EventEmitter<number> = new EventEmitter();
  @Output() changeUpperBound: EventEmitter<number> = new EventEmitter();

  emitChangeLowerBoundEvent(): void {
    this.changeLowerBound.emit(this.lowerBound);
  }

  emitChangeUpperBoundEvent(): void {
    this.changeUpperBound.emit(this.upperBound);
  }

}
