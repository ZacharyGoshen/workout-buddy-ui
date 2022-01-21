import { FormControl, FormGroup } from "@angular/forms";
import { ConstraintForm } from "./constraint-form.model";
import { Exercise } from "../models/exercise.model";

export class ExerciseForm extends FormGroup {

    constructor(exercise: Exercise) {
        let name: FormControl = new FormControl(exercise.name);

        let weightConstraint: ConstraintForm = new ConstraintForm(
            exercise.weightUsed, 
            exercise.minimumWeightAllowed, 
            exercise.maximumWeightAllowed);

        let repsConstraint: ConstraintForm = new ConstraintForm(
            exercise.repsCompleted, 
            exercise.minimumRepsAllowed, 
            exercise.maximumRepsAllowed);

        let durationConstraint: ConstraintForm = new ConstraintForm(
            exercise.timePerformed, 
            exercise.minimumDurationAllowed, 
            exercise.maximumDurationAllowed);

        super({
            name: name,
            weightConstraint: weightConstraint,
            repsConstraint: repsConstraint,
            durationConstraint: durationConstraint
        });
    }

    get name(): FormControl {
        return this.controls['name'] as FormControl;
    }

    get weightConstraint(): ConstraintForm {
        return this.get('weightConstraint') as ConstraintForm;
    }

    get repsConstraint(): ConstraintForm {
        return this.get('repsConstraint') as ConstraintForm;
    }

    get durationConstraint(): ConstraintForm {
        return this.get('durationConstraint') as ConstraintForm;
    }

    toExercise(): Exercise {
        return {
            name: this.name.value,
            weightUsed: this.weightConstraint.recordedValue.value,
            minimumWeightAllowed: this.weightConstraint.minimumAllowedValue.value,
            maximumWeightAllowed: this.weightConstraint.maximumAllowedValue.value,
            repsCompleted: this.repsConstraint.recordedValue.value,
            minimumRepsAllowed: this.repsConstraint.minimumAllowedValue.value,
            maximumRepsAllowed: this.repsConstraint.maximumAllowedValue.value,
            timePerformed: this.durationConstraint.recordedValue.value,
            minimumDurationAllowed: this.durationConstraint.minimumAllowedValue.value,
            maximumDurationAllowed: this.durationConstraint.maximumAllowedValue.value,
        }
    }

}