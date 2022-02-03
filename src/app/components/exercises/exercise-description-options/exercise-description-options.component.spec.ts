import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDescriptionOptionsComponent } from './exercise-description-options.component';

describe('ExerciseDescriptionOptionsComponent', () => {
  let component: ExerciseDescriptionOptionsComponent;
  let fixture: ComponentFixture<ExerciseDescriptionOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseDescriptionOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDescriptionOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
