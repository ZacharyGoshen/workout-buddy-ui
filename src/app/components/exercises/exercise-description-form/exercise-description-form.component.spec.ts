import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDescriptionFormComponent } from './exercise-description-form.component';

describe('ExerciseDescriptionFormComponent', () => {
  let component: ExerciseDescriptionFormComponent;
  let fixture: ComponentFixture<ExerciseDescriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseDescriptionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
