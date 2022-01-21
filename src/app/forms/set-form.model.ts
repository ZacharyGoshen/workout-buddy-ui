import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { ConstraintForm } from "./constraint-form.model";
import { ExerciseForm } from "./exercise-form.model";
import { Exercise } from "../models/exercise.model";
import { Set } from "../models/set.model";

export class SetForm extends FormGroup {

    constructor(set: Set) {
        let type: FormControl = new FormControl(set.type);
        let exercises: FormArray = SetForm.buildExerciseForms(set.exercises);

        let restTimeConstraint: ConstraintForm = new ConstraintForm(
            set.timeRested, 
            set.minimumRestTimeAllowed, 
            set.maximumRestTimeAllowed);

        super({
            type: type,
            restTimeConstraint: restTimeConstraint,
            exercises: exercises
        });
    }

    private static buildExerciseForms(exercises: Exercise[]): FormArray {
        let exerciseForms: FormArray = new FormArray([]);

        for (let exercise of exercises) {
            let exerciseForm: ExerciseForm = new ExerciseForm(exercise);
            exerciseForms.push(exerciseForm);
        }

        return exerciseForms;
    }

    get type(): FormControl {
        return this.controls['type'] as FormControl;
    }

    get exercises(): ExerciseForm[] {
        let exerciseFormsArray: FormArray = this.get('exercises') as FormArray;
        
        let exerciseForms: ExerciseForm[] = [];
        for (let control of exerciseFormsArray.controls) {
          let exerciseForm: ExerciseForm = control as ExerciseForm;
          exerciseForms.push(exerciseForm); 
        }
    
        return exerciseForms;
    }

    get restTimeConstraint(): ConstraintForm {
        return this.get('restTimeConstraint') as ConstraintForm;
    }

    toSet(): Set {
        let exercises: Exercise[] = this.exercises.map(exerciseForm => exerciseForm.toExercise());
        
        return {
            workoutId: '',
            type: this.type.value,
            exercises: exercises,
            timeRested: this.restTimeConstraint.recordedValue.value,
            minimumRestTimeAllowed: this.restTimeConstraint.minimumAllowedValue.value,
            maximumRestTimeAllowed: this.restTimeConstraint.maximumAllowedValue.value
        }
    }

    addExercise(exercise: ExerciseForm): void {
        let exerciseFormsArray: FormArray = this.get('exercises') as FormArray;
        exerciseFormsArray.push(exercise);
        this.updateSetType();
    }

    removeExercise(index: number): void {
        let exercises: FormArray = this.get('exercises') as FormArray;
        exercises.removeAt(index);
        this.updateSetType();
    }

    private updateSetType(): void {
        if (this.exercises.length > 1) {
            this.type.setValue('Superset');
        } else {
            this.type.setValue('Single Exercise Set');
        }
    }

}