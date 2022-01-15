import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetListComponent } from './sets/set-list/set-list.component';
import { WorkoutComponent } from './workouts/workout/workout.component';
import { SetComponent } from './sets/set/set.component';
import { SetFormComponent } from './workouts/set-form/set-form.component';
import { ExerciseFormComponent } from './workouts/exercise-form/exercise-form.component';
import { FormsModule } from '@angular/forms';
import { EditableSetComponent } from './workouts/editable-set/editable-set.component';
import { SetHeadersComponent } from './workouts/set-headers/set-headers.component';
import { AddSetFormComponent } from './workouts/add-set-form/add-set-form.component';
import { EditSetFormComponent } from './workouts/edit-set-form/edit-set-form.component';
import { ConstraintComponent } from './shared/constraint/constraint.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetSearchCriteriaComponent } from './sets/set-search-criteria/set-search-criteria.component';
import { ExerciseSearchFilterComponent } from './sets/exercise-search-filter/exercise-search-filter.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NumericRangeFormComponent } from './sets/shared/numeric-range-form/numeric-range-form.component';
import { ExerciseComponent } from './shared/exercise/exercise.component';
import { SetContentComponent } from './shared/set-content/set-content.component';
import { ExerciseDescriptionComponent } from './exercises/exercise-description/exercise-description.component';
import { ExerciseDescriptionListComponent } from './exercises/exercise-description-list/exercise-description-list.component';
import { AddExerciseDescriptionFormComponent } from './exercises/add-exercise-description-form/add-exercise-description-form.component';
import { WorkoutListComponent } from './workouts/workout-list/workout-list.component';
import { WorkoutListItemComponent } from './workouts/workout-list-item/workout-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SetListComponent,
    WorkoutComponent,
    EditableSetComponent,
    SetComponent,
    SetFormComponent,
    ExerciseFormComponent,
    SetHeadersComponent,
    AddSetFormComponent,
    EditSetFormComponent,
    ConstraintComponent,
    SetSearchCriteriaComponent,
    ExerciseSearchFilterComponent,
    NavbarComponent,
    NumericRangeFormComponent,
    ExerciseComponent,
    SetContentComponent,
    ExerciseDescriptionComponent,
    ExerciseDescriptionListComponent,
    AddExerciseDescriptionFormComponent,
    WorkoutListComponent,
    WorkoutListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
