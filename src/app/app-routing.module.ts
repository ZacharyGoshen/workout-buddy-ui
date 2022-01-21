import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseDescriptionListComponent } from './components/exercises/exercise-description-list/exercise-description-list.component';
import { SetListComponent } from './components/sets/set-list/set-list.component';
import { WorkoutListComponent } from './components/workouts/workout-list/workout-list.component';
import { WorkoutComponent } from './components/workouts/workout/workout.component';

const routes: Routes = [
  { path: 'workouts', component: WorkoutListComponent },
  { path: 'workouts/:id', component: WorkoutComponent },
  { path: 'sets', component: SetListComponent },
  { path: 'exercises', component: ExerciseDescriptionListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {};
