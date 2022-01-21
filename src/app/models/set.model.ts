import { Exercise } from "./exercise.model";

export interface Set {
    type: string,
    timeCompleted?: string,
    timeRested?: number,
    minimumRestTimeAllowed?: number,
    maximumRestTimeAllowed?: number,
    exercises: Exercise[],
    workoutId: string,
    workoutName?: string,
    workoutCompletionTime?: string
}