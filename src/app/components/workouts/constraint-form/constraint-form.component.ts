import { Component, Input } from '@angular/core';
import { ConstraintForm } from 'src/app/forms/constraint-form.model';

@Component({
  selector: 'app-constraint-form',
  templateUrl: './constraint-form.component.html',
  styleUrls: ['./constraint-form.component.css']
})
export class ConstraintFormComponent {

  @Input() name: string = '';

  @Input() constraint: ConstraintForm = new ConstraintForm(undefined, undefined, undefined);

}
