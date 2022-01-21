import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Workout } from "../../models/workout.model";

@Injectable({ providedIn: 'root' })
export class WorkoutCreationService {

    constructor(private httpClient: HttpClient) { }

    create(workout: Workout): Observable<any> {
        let queryString: string = 'http://localhost:8080/api/workouts'; 
        return this.httpClient.post<any>(queryString, workout, { responseType: 'text' as 'json' });
    }

    createNotCompletedCopy(idOfWorkoutToCopy: string): Observable<any> {
        let queryString: string = 'http://localhost:8080/api/workouts/' + idOfWorkoutToCopy + '/copy'; 
        return this.httpClient.post<any>(queryString, null, { responseType: 'text' as 'json' });
    }

}