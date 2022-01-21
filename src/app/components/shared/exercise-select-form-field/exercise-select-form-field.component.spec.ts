import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseSelectFormFieldComponent } from './exercise-select-form-field.component';

describe('ExerciseSelectFormFieldComponent', () => {
  let component: ExerciseSelectFormFieldComponent;
  let fixture: ComponentFixture<ExerciseSelectFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseSelectFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseSelectFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
