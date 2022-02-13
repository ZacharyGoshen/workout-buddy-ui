import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutHeaderComponent } from './workout-header.component';

describe('WorkoutHeaderComponent', () => {
  let component: WorkoutHeaderComponent;
  let fixture: ComponentFixture<WorkoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
