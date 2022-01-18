import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-set-form',
  templateUrl: './edit-set-form.component.html',
  styleUrls: ['./edit-set-form.component.css']
})
export class EditSetFormComponent {

  @Input() index: number = 0;

  @Input() set: FormGroup = new FormGroup({});

  @Input() exerciseNames: string[] = [];

  @Output() submit: EventEmitter<null> = new EventEmitter();

}
