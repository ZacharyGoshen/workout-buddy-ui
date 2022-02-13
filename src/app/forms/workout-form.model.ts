import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Workout } from "../models/workout.model";

export class WorkoutForm extends FormGroup {

    constructor(workout: Workout) {
        let name: FormControl = new FormControl(            
            workout.name, 
            [
                Validators.required, 
                Validators.minLength(3), 
                Validators.maxLength(50)
            ]
        );

        let completionTime: FormControl = new FormControl(workout.timeCompleted);
        
        super({
            name: name,
            completionTime: completionTime
        });
    }

    get name(): FormControl {
        return this.controls['name'] as FormControl;
    }

    get completionTime(): FormControl {
        return this.controls['completionTime'] as FormControl;
    }

}