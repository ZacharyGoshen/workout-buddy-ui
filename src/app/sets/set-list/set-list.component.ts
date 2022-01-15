import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Set } from 'src/app/shared/set.model';
import { SetSearchCriteria } from 'src/app/sets/shared/set-search-criteria.model';
import { SetQueryService } from 'src/app/core/set-query.service';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.css']
})
export class SetListComponent implements OnInit {

  sets: Set[] = [];
  criteria: SetSearchCriteria = {
    sortBy: "mostRecentCompletionTime",
    exerciseFilters: []
  };

  constructor(private setQueryService: SetQueryService) {}

  ngOnInit(): void {
    this.fetchSets();
  }

  fetchSets(): void {
    let setsObservable: Observable<Set[]> = this.setQueryService.findByCriteria(this.criteria);
    setsObservable.subscribe(sets => this.sets = sets);
  }

}
