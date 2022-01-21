import { FormControl, Validators } from "@angular/forms";

export class WorkoutNameForm extends FormControl {

    constructor(name: string | undefined) {
        super(
            name, 
            [
                Validators.required, 
                Validators.minLength(3), 
                Validators.maxLength(50)
            ]
        );
    }

}