import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ExerciseDescription } from "../exercises/shared/exercise-description.model";

@Injectable({ providedIn: 'root' })
export class ExerciseDescriptionCreationService {

    httpHeader = {
        headers: new HttpHeaders({
            'ContentType': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) { }

    create(exerciseDescription: ExerciseDescription): Observable<null> {
        let queryString: string = 'http://localhost:8080/api/exercise-descriptions'; 
        return this.httpClient.post<null>(queryString, exerciseDescription);
    }

}