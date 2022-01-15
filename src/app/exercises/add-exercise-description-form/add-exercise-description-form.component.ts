import { Component, EventEmitter, Output } from '@angular/core';
import { ExerciseDescriptionCreationService } from 'src/app/core/exercise-description-creation.service';
import { ExerciseDescription } from '../shared/exercise-description.model';

@Component({
  selector: 'app-add-exercise-description-form',
  templateUrl: './add-exercise-description-form.component.html',
  styleUrls: ['./add-exercise-description-form.component.css']
})
export class AddExerciseDescriptionFormComponent {

  @Output() addExerciseDescription: EventEmitter<null> = new EventEmitter();
  
  exerciseDescription: ExerciseDescription = {
    id: "",
    name: ""
  };

  constructor(private exerciseDescriptionCreationService: ExerciseDescriptionCreationService) {}

  submit(): void {
    this.exerciseDescriptionCreationService
      .create(this.exerciseDescription)
      .subscribe(observer => this.addExerciseDescription.emit());
  }

}
