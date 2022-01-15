import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSearchCriteriaComponent } from './set-search-criteria.component';

describe('SetSearchCriteriaComponent', () => {
  let component: SetSearchCriteriaComponent;
  let fixture: ComponentFixture<SetSearchCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSearchCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSearchCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
