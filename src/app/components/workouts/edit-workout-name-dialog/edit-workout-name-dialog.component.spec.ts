import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkoutNameDialogComponent } from './edit-workout-name-dialog.component';

describe('EditWorkoutNameDialogComponent', () => {
  let component: EditWorkoutNameDialogComponent;
  let fixture: ComponentFixture<EditWorkoutNameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWorkoutNameDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWorkoutNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
