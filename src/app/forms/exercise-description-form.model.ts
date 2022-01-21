import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ExerciseDescription } from "../models/exercise-description.model";

export class ExerciseDescriptionForm extends FormGroup {

    constructor(exerciseDescription: ExerciseDescription) {
        let nameControl: FormControl = new FormControl(
            exerciseDescription.name,
            [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
        );

        super({
            name: nameControl
        });
    }

    get name(): FormControl {
        return this.controls['name'] as FormControl;
    }

    toExerciseDescription(): ExerciseDescription {
        return {
            id: '',
            name: this.name.value
        }
    }

}