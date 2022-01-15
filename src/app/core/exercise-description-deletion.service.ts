import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ExerciseDescriptionDeletionService {

    httpHeader = {
        headers: new HttpHeaders({
            'ContentType': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) { }

    deleteById(id: string): Observable<null> {
        let queryString: string = 'http://localhost:8080/api/exercise-descriptions/' + id;
        return this.httpClient.delete<null>(queryString);
    }

}