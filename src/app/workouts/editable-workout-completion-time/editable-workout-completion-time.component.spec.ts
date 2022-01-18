import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableWorkoutCompletionTimeComponent } from './editable-workout-completion-time.component';

describe('EditableWorkoutCompletionTimeComponent', () => {
  let component: EditableWorkoutCompletionTimeComponent;
  let fixture: ComponentFixture<EditableWorkoutCompletionTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableWorkoutCompletionTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableWorkoutCompletionTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
