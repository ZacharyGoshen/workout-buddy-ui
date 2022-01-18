import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableWorkoutNameComponent } from './editable-workout-name.component';

describe('EditableWorkoutNameComponent', () => {
  let component: EditableWorkoutNameComponent;
  let fixture: ComponentFixture<EditableWorkoutNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableWorkoutNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableWorkoutNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
