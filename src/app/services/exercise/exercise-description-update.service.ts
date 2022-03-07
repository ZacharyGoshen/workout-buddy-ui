import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ExerciseDescription } from "../../models/exercise-description.model";

@Injectable({ providedIn: 'root' })
export class ExerciseDescriptionUpdateService {

    httpHeader = {
        headers: new HttpHeaders({
            'ContentType': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) { }

    update(id: string, exerciseDescription: ExerciseDescription): Observable<null> {
        let queryString: string = 'http://localhost:8080/api/exercise-descriptions/' + id; 
        return this.httpClient.patch<null>(queryString, exerciseDescription);
    }

}