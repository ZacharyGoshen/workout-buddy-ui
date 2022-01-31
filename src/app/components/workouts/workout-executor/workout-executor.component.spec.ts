import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutExecutorComponent } from './workout-executor.component';

describe('WorkoutExecutorComponent', () => {
  let component: WorkoutExecutorComponent;
  let fixture: ComponentFixture<WorkoutExecutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutExecutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutExecutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
