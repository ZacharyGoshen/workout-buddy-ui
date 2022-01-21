export interface Exercise {
    name: string,
    weightUsed?: number,
    minimumWeightAllowed?: number,
    maximumWeightAllowed?: number,
    repsCompleted?: number,
    minimumRepsAllowed?: number,
    maximumRepsAllowed?: number,
    timePerformed?: number,
    minimumDurationAllowed?: number,
    maximumDurationAllowed?: number
}