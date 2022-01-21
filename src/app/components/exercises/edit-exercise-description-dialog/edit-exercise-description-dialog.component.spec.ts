import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExerciseDescriptionDialogComponent } from './edit-exercise-description-dialog.component';

describe('EditExerciseDescriptionDialogComponent', () => {
  let component: EditExerciseDescriptionDialogComponent;
  let fixture: ComponentFixture<EditExerciseDescriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExerciseDescriptionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExerciseDescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
