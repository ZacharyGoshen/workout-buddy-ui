import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { ExerciseSearchFilter } from "../models/exercise-search-filter.model";
import { SetSearchCriteria } from "../models/set-search-criteria.model";
import { ExerciseSearchFilterForm } from "./exercise-search-filter-form.model";

export class SetSearchCriteriaForm extends FormGroup {

    constructor(criteria: SetSearchCriteria) {
        let sortBy: FormControl = new FormControl(criteria.sortBy);
        let minimumTimeRested: FormControl = new FormControl(criteria.minimumTimeRested);
        let maximumTimeRested: FormControl = new FormControl(criteria.maximumTimeRested);
        let exerciseFilters: FormArray = SetSearchCriteriaForm.buildExerciseSearchFilterForms(criteria.exerciseFilters);

        super({
            sortBy: sortBy,
            minimumTimeRested: minimumTimeRested,
            maximumTimeRested: maximumTimeRested,
            exerciseFilters: exerciseFilters
        });
    }

    private static buildExerciseSearchFilterForms(filters: ExerciseSearchFilter[]): FormArray {
        let filterForms: FormArray = new FormArray([]);

        for (let filter of filters) {
            let filterForm: ExerciseSearchFilterForm = new ExerciseSearchFilterForm(filter);
            filterForms.push(filterForm);
        }

        return filterForms;
    }

    get sortBy(): FormControl {
        return this.controls['sortBy'] as FormControl;
    }

    get minimumTimeRested(): FormControl {
        return this.controls['minimumTimeRested'] as FormControl;
    }

    get maximumTimeRested(): FormControl {
        return this.controls['maximumTimeRested'] as FormControl;
    }

    get exerciseFilters(): ExerciseSearchFilterForm[] {
        let filtersFormArray: FormArray = this.get('exerciseFilters') as FormArray;
        
        let filterForms: ExerciseSearchFilterForm[] = [];
        for (let control of filtersFormArray.controls) {
          let filterForm: ExerciseSearchFilterForm = control as ExerciseSearchFilterForm;
          filterForms.push(filterForm); 
        }
    
        return filterForms;
    }

    addExerciseFilter(filter: ExerciseSearchFilterForm): void {
        let filters: FormArray = this.get('exerciseFilters') as FormArray;
        filters.push(filter);
    }

    removeExerciseFilter(index: number): void {
        let filters: FormArray = this.get('exerciseFilters') as FormArray;
        filters.removeAt(index);
    }

    toSetSearchCriteria(): SetSearchCriteria {
        let exerciseFilters: ExerciseSearchFilter[] = this.exerciseFilters.map(filter => filter.toExerciseSearchFilter());

        return {
            sortBy: this.sortBy.value,
            minimumTimeRested: this.minimumTimeRested.value,
            maximumTimeRested: this.maximumTimeRested.value,
            exerciseFilters: exerciseFilters
        };
    }

}