import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDescriptionListComponent } from './exercise-description-list.component';

describe('ExerciseDescriptionListComponent', () => {
  let component: ExerciseDescriptionListComponent;
  let fixture: ComponentFixture<ExerciseDescriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseDescriptionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
