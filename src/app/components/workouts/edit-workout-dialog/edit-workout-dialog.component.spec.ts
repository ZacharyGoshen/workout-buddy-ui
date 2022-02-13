import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkoutDialogComponent } from './edit-workout-dialog.component';

describe('EditWorkoutDialogComponent', () => {
  let component: EditWorkoutDialogComponent;
  let fixture: ComponentFixture<EditWorkoutDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWorkoutDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
