import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDescriptionNameFormFieldComponent } from './exercise-description-name-form-field.component';

describe('ExerciseDescriptionNameFormFieldComponent', () => {
  let component: ExerciseDescriptionNameFormFieldComponent;
  let fixture: ComponentFixture<ExerciseDescriptionNameFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseDescriptionNameFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDescriptionNameFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
