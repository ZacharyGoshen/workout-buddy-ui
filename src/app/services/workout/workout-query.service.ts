import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Workout } from "src/app/models/workout.model";

@Injectable({ providedIn: 'root' })
export class WorkoutQueryService {

    httpHeader = {
        headers: new HttpHeaders({
            'ContentType': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) { }

    findAll(): Observable<Workout[]> {
        let queryString: string = 'http://localhost:8080/api/workouts';
        return this.httpClient.get<Workout[]>(queryString);
    }

    findById(id: string): Observable<Workout> {
        let queryString: string = 'http://localhost:8080/api/workouts/' + id;
        return this.httpClient.get<Workout>(queryString);
    }

}