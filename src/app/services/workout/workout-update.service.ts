import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Workout } from "src/app/models/workout.model";
import { Set } from "../../models/set.model";

@Injectable({ providedIn: 'root' })
export class WorkoutUpdateService {

    httpHeader = {
        headers: new HttpHeaders({
            'ContentType': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) { }

    update(id: string, workout: Workout): Observable<null> {
        let queryString: string = 'http://localhost:8080/api/workouts/' + id; 
        return this.httpClient.put<null>(queryString, workout);
    }

    addSet(workoutId: string, setIndex: number, set: Set): Observable<null> {
        let queryString: string = 'http://localhost:8080/api/workouts/' + workoutId + '/addSet/' + setIndex; 
        return this.httpClient.post<null>(queryString, set);
    }

    replaceSet(workoutId: string, setIndex: number, set: Set): Observable<null> {
        let queryString: string = 'http://localhost:8080/api/workouts/' + workoutId + '/replaceSet/' + setIndex; 
        return this.httpClient.post<null>(queryString, set);
    }

    moveSet(workoutId: string, originalIndex: number, destinationIndex: number): Observable<null> {
        let queryString: string = 'http://localhost:8080/api/workouts/' + workoutId + '/moveSet/' + originalIndex + '/' + destinationIndex; 
        return this.httpClient.post<null>(queryString, null);
    }

    removeSet(workoutId: string, setIndex: number): Observable<null> {
        let queryString: string = 'http://localhost:8080/api/workouts/' + workoutId + '/removeSet/' + setIndex; 
        return this.httpClient.post<null>(queryString, null);
    }

}