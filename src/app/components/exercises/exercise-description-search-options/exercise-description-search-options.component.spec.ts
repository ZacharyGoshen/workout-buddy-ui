import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDescriptionSearchOptionsComponent } from './exercise-description-search-options.component';

describe('ExerciseDescriptionSearchOptionsComponent', () => {
  let component: ExerciseDescriptionSearchOptionsComponent;
  let fixture: ComponentFixture<ExerciseDescriptionSearchOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseDescriptionSearchOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDescriptionSearchOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
