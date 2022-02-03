import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ExerciseDescription } from "../models/exercise-description.model";
import { MuscleGroupsForm } from "./muscle-groups-form.model";

export class ExerciseDescriptionForm extends FormGroup {

    constructor(exerciseDescription: ExerciseDescription) {
        let name: FormControl = new FormControl(
            exerciseDescription.name,
            [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
        );

        let muscleGroups: MuscleGroupsForm = new MuscleGroupsForm(exerciseDescription.muscleGroups);

        super({
            name: name,
            muscleGroups: muscleGroups
        });
    }

    get name(): FormControl {
        return this.controls['name'] as FormControl;
    }

    get muscleGroups(): MuscleGroupsForm {
        return this.get('muscleGroups') as MuscleGroupsForm;
    }

    toExerciseDescription(): ExerciseDescription {
        let muscleGroups: string[] = this.muscleGroups.toMuscleGroups();

        return {
            id: '',
            name: this.name.value,
            notes: '',
            muscleGroups: muscleGroups
        }
    }

}