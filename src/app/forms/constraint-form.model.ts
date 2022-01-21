import { FormControl, FormGroup } from "@angular/forms";

export class ConstraintForm extends FormGroup {

    constructor(
            recordedValue: number | undefined, 
            minimumAllowedValue: number | undefined, 
            maximumAllowedValue: number | undefined) {

        let recordedValueControl = new FormControl(recordedValue);
        let minimumAllowedValueControl = new FormControl(minimumAllowedValue);
        let maximumAllowedValueControl = new FormControl(maximumAllowedValue);

        super({
            recordedValue: recordedValueControl, 
            minimumAllowedValue: minimumAllowedValueControl, 
            maximumAllowedValue: maximumAllowedValueControl
        });
    }

    get recordedValue(): FormControl {
        return this.controls['recordedValue'] as FormControl;
    }

    get minimumAllowedValue(): FormControl {
        return this.controls['minimumAllowedValue'] as FormControl;
    }

    get maximumAllowedValue(): FormControl {
        return this.controls['maximumAllowedValue'] as FormControl;
    }

}