import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetListComponent } from './components/sets/set-list/set-list.component';
import { WorkoutComponent } from './components/workouts/workout/workout.component';
import { SetListItemComponent } from './components/sets/set-list-item/set-list-item.component';
import { SetFormComponent } from './components/workouts/set-form/set-form.component';
import { ExerciseFormComponent } from './components/workouts/exercise-form/exercise-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditableSetComponent } from './components/workouts/editable-set/editable-set.component';
import { ExerciseHeadersComponent } from './components/shared/exercise-headers/exercise-headers.component';
import { ConstraintComponent } from './components/shared/constraint/constraint.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetSearchCriteriaComponent } from './components/sets/set-search-criteria/set-search-criteria.component';
import { ExerciseSearchFilterComponent } from './components/sets/exercise-search-filter/exercise-search-filter.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NumericRangeFormComponent } from './components/shared/numeric-range-form/numeric-range-form.component';
import { ExerciseComponent } from './components/shared/exercise/exercise.component';
import { SetContentComponent } from './components/shared/set-content/set-content.component';
import { ExerciseDescriptionComponent } from './components/exercises/exercise-description/exercise-description.component';
import { ExerciseDescriptionListComponent } from './components/exercises/exercise-description-list/exercise-description-list.component';
import { WorkoutListComponent } from './components/workouts/workout-list/workout-list.component';
import { WorkoutListItemComponent } from './components/workouts/workout-list-item/workout-list-item.component';
import { ExerciseDescriptionNameFormFieldComponent } from './components/exercises/exercise-description-name-form-field/exercise-description-name-form-field.component';
import { WorkoutNameFormFieldComponent } from './components/workouts/workout-name-form-field/workout-name-form-field.component';
import { EditableWorkoutCompletionTimeComponent } from './components/workouts/editable-workout-completion-time/editable-workout-completion-time.component';
import { WorkoutSetHeadersComponent } from './components/workouts/workout-set-headers/workout-set-headers.component';
import { ExerciseSelectFormFieldComponent } from './components/shared/exercise-select-form-field/exercise-select-form-field.component';
import { ConstraintFormComponent } from './components/workouts/constraint-form/constraint-form.component';
import { EditExerciseDescriptionDialogComponent } from './components/exercises/edit-exercise-description-dialog/edit-exercise-description-dialog.component';
import { AddExerciseDescriptionDialogComponent } from './components/exercises/add-exercise-description-dialog/add-exercise-description-dialog.component';
import { EditWorkoutNameDialogComponent } from './components/workouts/edit-workout-name-dialog/edit-workout-name-dialog.component';
import { EditSetDialogComponent } from './components/workouts/edit-set-dialog/edit-set-dialog.component';
import { AddSetDialogComponent } from './components/workouts/add-set-dialog/add-set-dialog.component';
import { SetListItemHeadersComponent } from './components/sets/set-list-item-headers/set-list-item-headers.component';
import { EditSetSearchCriteriaDialogComponent } from './components/sets/edit-set-search-criteria-dialog/edit-set-search-criteria-dialog.component';
import { WorkoutExecutorComponent } from './components/workouts/workout-executor/workout-executor.component';
import { WorkoutExecutorSetComponent } from './components/workouts/workout-executor-set/workout-executor-set.component';
import { ErrorDialogComponent } from './components/shared/error-dialog/error-dialog.component';
import { MuscleGroupsFormComponent } from './components/exercises/muscle-groups-form/muscle-groups-form.component';
import { ExerciseDescriptionFormComponent } from './components/exercises/exercise-description-form/exercise-description-form.component';
import { ExerciseDescriptionSearchOptionsComponent } from './components/exercises/exercise-description-search-options/exercise-description-search-options.component';
import { ExerciseDescriptionOptionsComponent } from './components/exercises/exercise-description-options/exercise-description-options.component';
import { ExerciseDescriptionOptionsBarComponent } from './components/exercises/exercise-description-options-bar/exercise-description-options-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SetListComponent,
    WorkoutComponent,
    EditableSetComponent,
    SetListItemComponent,
    SetFormComponent,
    ExerciseFormComponent,
    ExerciseHeadersComponent,
    ConstraintComponent,
    SetSearchCriteriaComponent,
    ExerciseSearchFilterComponent,
    NavbarComponent,
    NumericRangeFormComponent,
    ExerciseComponent,
    SetContentComponent,
    ExerciseDescriptionComponent,
    ExerciseDescriptionListComponent,
    WorkoutListComponent,
    WorkoutListItemComponent,
    ExerciseDescriptionNameFormFieldComponent,
    WorkoutNameFormFieldComponent,
    EditableWorkoutCompletionTimeComponent,
    WorkoutSetHeadersComponent,
    ExerciseSelectFormFieldComponent,
    ConstraintFormComponent,
    EditExerciseDescriptionDialogComponent,
    AddExerciseDescriptionDialogComponent,
    EditWorkoutNameDialogComponent,
    EditSetDialogComponent,
    AddSetDialogComponent,
    SetListItemHeadersComponent,
    EditSetSearchCriteriaDialogComponent,
    WorkoutExecutorComponent,
    WorkoutExecutorSetComponent,
    ErrorDialogComponent,
    MuscleGroupsFormComponent,
    ExerciseDescriptionFormComponent,
    ExerciseDescriptionSearchOptionsComponent,
    ExerciseDescriptionOptionsComponent,
    ExerciseDescriptionOptionsBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatMenuModule,
    MatChipsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
