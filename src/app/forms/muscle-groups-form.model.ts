import { FormControl, FormGroup } from "@angular/forms";

export class MuscleGroupsForm extends FormGroup {

    constructor(muscleGroups: string[]) {
        let abs: FormControl = new FormControl(
            muscleGroups.includes('Abs')
        );

        let biceps: FormControl = new FormControl(
            muscleGroups.includes('Biceps')
        );

        let calves: FormControl = new FormControl(
            muscleGroups.includes('Calves')
        );

        let delts: FormControl = new FormControl(
            muscleGroups.includes('Delts')
        );

        let glutes: FormControl = new FormControl(
            muscleGroups.includes('Glutes')
        );

        let hamstrings: FormControl = new FormControl(
            muscleGroups.includes('Hamstrings')
        );

        let lats: FormControl = new FormControl(
            muscleGroups.includes('Lats')
        );

        let lowerBack: FormControl = new FormControl(
            muscleGroups.includes('Lower Back')
        );

        let obliques: FormControl = new FormControl(
            muscleGroups.includes('Obliques')
        );

        let pecs: FormControl = new FormControl(
            muscleGroups.includes('Pecs')
        );

        let quads: FormControl = new FormControl(
            muscleGroups.includes('Quads')
        );

        let traps: FormControl = new FormControl(
            muscleGroups.includes('Traps')
        );

        let triceps: FormControl = new FormControl(
            muscleGroups.includes('Triceps')
        );

        super({
            abs: abs,
            biceps: biceps,
            calves: calves,
            delts: delts,
            glutes: glutes,
            hamstrings: hamstrings,
            lats: lats,
            lowerBack: lowerBack,
            obliques: obliques,
            pecs: pecs,
            quads: quads,
            traps: traps,
            triceps: triceps
        });
    }

    get abs(): FormControl {
        return this.controls['abs'] as FormControl;
    }

    get biceps(): FormControl {
        return this.controls['biceps'] as FormControl;
    }

    get calves(): FormControl {
        return this.controls['calves'] as FormControl;
    }

    get delts(): FormControl {
        return this.controls['delts'] as FormControl;
    }

    get glutes(): FormControl {
        return this.controls['glutes'] as FormControl;
    }

    get hamstrings(): FormControl {
        return this.controls['hamstrings'] as FormControl;
    }

    get lats(): FormControl {
        return this.controls['lats'] as FormControl;
    }

    get lowerBack(): FormControl {
        return this.controls['lowerBack'] as FormControl;
    }

    get obliques(): FormControl {
        return this.controls['obliques'] as FormControl;
    }

    get pecs(): FormControl {
        return this.controls['pecs'] as FormControl;
    }

    get quads(): FormControl {
        return this.controls['quads'] as FormControl;
    }

    get traps(): FormControl {
        return this.controls['traps'] as FormControl;
    }

    get triceps(): FormControl {
        return this.controls['triceps'] as FormControl;
    }

    toMuscleGroups(): string[] {
        let muscleGroups: string[] = [];

        if (this.abs.value) {
            muscleGroups.push('Abs');
        }

        if (this.biceps.value) {
            muscleGroups.push('Biceps');
        }

        if (this.calves.value) {
            muscleGroups.push('Calves');
        }

        if (this.delts.value) {
            muscleGroups.push('Delts');
        }

        if (this.glutes.value) {
            muscleGroups.push('Glutes');
        }

        if (this.hamstrings.value) {
            muscleGroups.push('Hamstrings');
        }

        if (this.lats.value) {
            muscleGroups.push('Lats');
        }

        if (this.lowerBack.value) {
            muscleGroups.push('Lower Back');
        }

        if (this.obliques.value) {
            muscleGroups.push('Obliques');
        }

        if (this.pecs.value) {
            muscleGroups.push('Pecs');
        }

        if (this.quads.value) {
            muscleGroups.push('Quads');
        }

        if (this.traps.value) {
            muscleGroups.push('Traps');
        }

        if (this.triceps.value) {
            muscleGroups.push('Triceps');
        }

        return muscleGroups;
    }

}