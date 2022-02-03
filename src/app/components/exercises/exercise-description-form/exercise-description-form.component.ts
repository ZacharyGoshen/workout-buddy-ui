import { Component, Input } from '@angular/core';
import { ExerciseDescriptionForm } from 'src/app/forms/exercise-description-form.model';

@Component({
  selector: 'app-exercise-description-form',
  templateUrl: './exercise-description-form.component.html',
  styleUrls: ['./exercise-description-form.component.css']
})
export class ExerciseDescriptionFormComponent {

  @Input() exerciseDescription: ExerciseDescriptionForm = new ExerciseDescriptionForm({ 
      id: '', 
      notes: '',
      name: '', 
      muscleGroups: [] 
  });

}
