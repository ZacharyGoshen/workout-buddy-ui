import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-constraint-form',
  templateUrl: './constraint-form.component.html',
  styleUrls: ['./constraint-form.component.css']
})
export class ConstraintFormComponent {

  @Input() name: string = '';

  @Input() constraint: FormGroup = new FormGroup({});

  get recordedValue(): FormControl {
    return this.constraint.controls['recordedValue'] as FormControl;
  }

  get minimumAllowedValue(): FormControl {
    return this.constraint.controls['minimumAllowedValue'] as FormControl;
  }

  get maximumAllowedValue(): FormControl {
    return this.constraint.controls['maximumAllowedValue'] as FormControl;
  }

}
