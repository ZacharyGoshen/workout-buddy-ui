import { Component, Input } from '@angular/core';
import { MuscleGroupsForm } from 'src/app/forms/muscle-groups-form.model';

@Component({
  selector: 'app-muscle-groups-form',
  templateUrl: './muscle-groups-form.component.html',
  styleUrls: ['./muscle-groups-form.component.css']
})
export class MuscleGroupsFormComponent {

  @Input() muscleGroups: MuscleGroupsForm = new MuscleGroupsForm([]);

  addMuscleGroup(muscleGroup: string): void {
    this.updateMuscleGroup(muscleGroup, true);
  }

  removeMuscleGroup(muscleGroup: string): void {
    this.updateMuscleGroup(muscleGroup, false);
  }

  updateMuscleGroup(muscleGroup: string, value: boolean) {
    if (muscleGroup == 'Abs') {
      this.muscleGroups.abs.setValue(value);
    } else if (muscleGroup == 'Biceps') {
      this.muscleGroups.biceps.setValue(value);
    } else if (muscleGroup == 'Calves') {
      this.muscleGroups.calves.setValue(value);
    } else if (muscleGroup == 'Delts') {
      this.muscleGroups.delts.setValue(value);
    } else if (muscleGroup == 'Glutes') {
      this.muscleGroups.glutes.setValue(value);
    } else if (muscleGroup == 'Hamstrings') {
      this.muscleGroups.hamstrings.setValue(value);
    } else if (muscleGroup == 'Lats') {
      this.muscleGroups.lats.setValue(value);
    } else if (muscleGroup == 'Lower Back') {
      this.muscleGroups.lowerBack.setValue(value);
    } else if (muscleGroup == 'Obliques') {
      this.muscleGroups.obliques.setValue(value);
    } else if (muscleGroup == 'Pecs') {
      this.muscleGroups.pecs.setValue(value);
    } else if (muscleGroup == 'Quads') {
      this.muscleGroups.quads.setValue(value);
    } else if (muscleGroup == 'Traps') {
      this.muscleGroups.traps.setValue(value);
    } else if (muscleGroup == 'Triceps') {
      this.muscleGroups.triceps.setValue(value);
    }
  }

}
