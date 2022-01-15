import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Set } from "../shared/set.model";
import { SetSearchCriteria } from "../sets/shared/set-search-criteria.model";

@Injectable({ providedIn: 'root' })
export class SetQueryService {

    httpHeader = {
        headers: new HttpHeaders({
            'ContentType': 'application/json'
        })
    };

    constructor(private httpClient: HttpClient) { }

    findAll(): Observable<Set[]> {
        let url: string = 'http://localhost:8080/api/sets';
        return this.httpClient.get<Set[]>(url);
    }

    findByCriteria(criteria: SetSearchCriteria): Observable<Set[]> {
        let url: string = 'http://localhost:8080/api/sets/search';
        return this.httpClient.post<Set[]>(url, criteria);
    }

}