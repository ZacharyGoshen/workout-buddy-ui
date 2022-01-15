import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExerciseDescriptionFormComponent } from './add-exercise-description-form.component';

describe('AddExerciseDescriptionFormComponent', () => {
  let component: AddExerciseDescriptionFormComponent;
  let fixture: ComponentFixture<AddExerciseDescriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExerciseDescriptionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExerciseDescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
