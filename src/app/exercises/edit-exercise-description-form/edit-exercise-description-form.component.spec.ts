import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExerciseDescriptionFormComponent } from './edit-exercise-description-form.component';

describe('EditExerciseDescriptionFormComponent', () => {
  let component: EditExerciseDescriptionFormComponent;
  let fixture: ComponentFixture<EditExerciseDescriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExerciseDescriptionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExerciseDescriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
