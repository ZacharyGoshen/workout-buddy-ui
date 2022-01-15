import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSearchFilterComponent } from './exercise-search-filter.component';

describe('ExerciseSearchFilterComponent', () => {
  let component: ExerciseSearchFilterComponent;
  let fixture: ComponentFixture<ExerciseSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseSearchFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
