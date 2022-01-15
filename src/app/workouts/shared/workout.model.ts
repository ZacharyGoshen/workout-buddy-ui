import { Set } from "../../shared/set.model";

export interface Workout {
    id: string,
    name?: string,
    timeCompleted?: string,
    sets: Set[]
}