import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExerciseDescriptionDialogComponent } from './add-exercise-description-dialog.component';

describe('AddExerciseDescriptionDialogComponent', () => {
  let component: AddExerciseDescriptionDialogComponent;
  let fixture: ComponentFixture<AddExerciseDescriptionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExerciseDescriptionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExerciseDescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
