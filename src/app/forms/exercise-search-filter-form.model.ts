import { FormControl, FormGroup } from "@angular/forms";
import { ExerciseSearchFilter } from "../models/exercise-search-filter.model";

export class ExerciseSearchFilterForm extends FormGroup {

    constructor(exerciseSearchFilter: ExerciseSearchFilter) {
        let name: FormControl = new FormControl(exerciseSearchFilter.name);
        let minimumWeightUsed: FormControl = new FormControl(exerciseSearchFilter.minimumWeightUsed);
        let maximumWeightUsed: FormControl = new FormControl(exerciseSearchFilter.maximumWeightUsed);
        let minimumRepsCompleted: FormControl = new FormControl(exerciseSearchFilter.minimumRepsCompleted);
        let maximumRepsCompleted: FormControl = new FormControl(exerciseSearchFilter.maximumRepsCompleted);
        let minimumTimePerformed: FormControl = new FormControl(exerciseSearchFilter.minimumTimePerformed);
        let maximumTimePerformed: FormControl = new FormControl(exerciseSearchFilter.maximumTimePerformed);

        super({
            name: name,
            minimumWeightUsed: minimumWeightUsed,
            maximumWeightUsed: maximumWeightUsed,
            minimumRepsCompleted: minimumRepsCompleted,
            maximumRepsCompleted: maximumRepsCompleted,
            minimumTimePerformed: minimumTimePerformed,
            maximumTimePerformed: maximumTimePerformed
        });
    }

    get name(): FormControl {
        return this.controls['name'] as FormControl;
    }

    get minimumWeightUsed(): FormControl {
        return this.controls['minimumWeightUsed'] as FormControl;
    }

    get maximumWeightUsed(): FormControl {
        return this.controls['maximumWeightUsed'] as FormControl;
    }

    get minimumRepsCompleted(): FormControl {
        return this.controls['minimumRepsCompleted'] as FormControl;
    }

    get maximumRepsCompleted(): FormControl {
        return this.controls['maximumRepsCompleted'] as FormControl;
    }

    get minimumTimePerformed(): FormControl {
        return this.controls['minimumTimePerformed'] as FormControl;
    }

    get maximumTimePerformed(): FormControl {
        return this.controls['maximumTimePerformed'] as FormControl;
    }

    toExerciseSearchFilter(): ExerciseSearchFilter {
        let name: string | undefined;
        let nameFormControl = this.name;

        if (nameFormControl.value != 'Any') {
            name = nameFormControl.value;
        }

        return {
            name: name,
            minimumWeightUsed: this.minimumWeightUsed.value,
            maximumWeightUsed: this.maximumWeightUsed.value,
            minimumRepsCompleted: this.minimumRepsCompleted.value,
            maximumRepsCompleted: this.maximumRepsCompleted.value,
            minimumTimePerformed: this.minimumTimePerformed.value,
            maximumTimePerformed: this.maximumTimePerformed.value
        };
    }

}