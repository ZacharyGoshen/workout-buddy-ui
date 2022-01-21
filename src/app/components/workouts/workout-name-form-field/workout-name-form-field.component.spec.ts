import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutNameFormFieldComponent } from './workout-name-form-field.component';

describe('WorkoutNameFormFieldComponent', () => {
  let component: WorkoutNameFormFieldComponent;
  let fixture: ComponentFixture<WorkoutNameFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutNameFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutNameFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
