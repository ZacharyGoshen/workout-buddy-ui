import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutExecutorSetComponent } from './workout-executor-set.component';

describe('WorkoutExecutorSetComponent', () => {
  let component: WorkoutExecutorSetComponent;
  let fixture: ComponentFixture<WorkoutExecutorSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutExecutorSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutExecutorSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
