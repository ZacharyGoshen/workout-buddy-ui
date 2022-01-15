import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ExerciseDescription } from "../exercises/shared/exercise-description.model";

@Injectable({ providedIn: 'root' })
export class ExerciseDescriptionQueryService {

    httpHeader = {
        headers: new HttpHeaders({
            'ContentType': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) { }

    findAll(): Observable<ExerciseDescription[]> {
        return this.httpClient.get<ExerciseDescription[]>('http://localhost:8080/api/exercise-descriptions');
    }

}