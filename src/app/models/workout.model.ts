import { Set } from "./set.model";

export interface Workout {
    id: string,
    name?: string,
    timeCompleted?: string,
    sets: Set[]
}