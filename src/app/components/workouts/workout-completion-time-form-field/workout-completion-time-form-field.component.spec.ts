import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCompletionTimeFormFieldComponent } from './workout-completion-time-form-field.component';

describe('WorkoutCompletionTimeFormFieldComponent', () => {
  let component: WorkoutCompletionTimeFormFieldComponent;
  let fixture: ComponentFixture<WorkoutCompletionTimeFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutCompletionTimeFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutCompletionTimeFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
