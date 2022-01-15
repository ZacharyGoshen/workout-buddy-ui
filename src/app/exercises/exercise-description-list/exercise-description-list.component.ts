import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ExerciseDescriptionQueryService } from 'src/app/core/exercise-description-query.service';
import { ExerciseDescription } from '../shared/exercise-description.model';

@Component({
  selector: 'app-exercise-description-list',
  templateUrl: './exercise-description-list.component.html',
  styleUrls: ['./exercise-description-list.component.css']
})
export class ExerciseDescriptionListComponent implements OnInit {

  exerciseDescriptions: ExerciseDescription[] = [];

  constructor(private exerciseDescriptionQueryService: ExerciseDescriptionQueryService) {}

  ngOnInit(): void {
    this.fetchExerciseDescriptions();
  }

  fetchExerciseDescriptions(): void {
    let exerciseDescriptionsObservable: Observable<ExerciseDescription[]> = this.exerciseDescriptionQueryService.findAll();
    exerciseDescriptionsObservable.subscribe(exerciseDescriptions => this.exerciseDescriptions = exerciseDescriptions);
  }

}
