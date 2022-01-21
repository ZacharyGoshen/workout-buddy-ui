import { FormControl } from "@angular/forms";

export class WorkoutCompletionTimeForm extends FormControl {

    constructor(completionTime: string | undefined) {
        super(completionTime);
    }

}