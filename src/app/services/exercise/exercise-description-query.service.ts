import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ExerciseDescription } from "../../models/exercise-description.model";

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

    findByNameSorted(name: string, sortBy: string): Observable<ExerciseDescription[]> {
        let url: string = 'http://localhost:8080/api/exercise-descriptions?name=' + name + '&sortBy=' + sortBy;
        return this.httpClient.get<ExerciseDescription[]>(url);
    }

}