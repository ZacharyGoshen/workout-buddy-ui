import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDescriptionOptionsBarComponent } from './exercise-description-options-bar.component';

describe('ExerciseDescriptionOptionsBarComponent', () => {
  let component: ExerciseDescriptionOptionsBarComponent;
  let fixture: ComponentFixture<ExerciseDescriptionOptionsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseDescriptionOptionsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseDescriptionOptionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
