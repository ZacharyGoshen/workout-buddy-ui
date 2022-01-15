import { ExerciseSearchFilter } from "./exercise-search-filter.model";

export interface SetSearchCriteria {
    sortBy: string,
    exerciseFilters: ExerciseSearchFilter[],
    minimumTimeRested?: number,
    maximumTimeRested?: number
}