import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExerciseDescriptionDeletionService } from 'src/app/core/exercise-description-deletion.service';
import { ExerciseDescriptionUpdateService } from 'src/app/core/exercise-description-update.service';
import { ExerciseDescription } from '../shared/exercise-description.model';

@Component({
  selector: 'app-exercise-description',
  templateUrl: './exercise-description.component.html',
  styleUrls: ['./exercise-description.component.css']
})
export class ExerciseDescriptionComponent {

  @Input() exerciseDescription: ExerciseDescription = {
    id: "",
    name: ""
  };

  @Output() update: EventEmitter<null> = new EventEmitter();

  isBeingEdited: boolean = false;

  constructor(
    private exerciseDescriptionUpdateService: ExerciseDescriptionUpdateService,
    private exerciseDescriptionDeletionService: ExerciseDescriptionDeletionService) {}

  edit(): void {
    this.isBeingEdited = true;
  }

  save(): void {
    this.exerciseDescriptionUpdateService
      .update(this.exerciseDescription)
      .subscribe(observer => {
        this.isBeingEdited = false;
        this.update.emit();
      });
  }

  delete(): void {
    this.exerciseDescriptionDeletionService
      .deleteById(this.exerciseDescription.id)
      .subscribe(observer => this.update.emit());
  }

}
