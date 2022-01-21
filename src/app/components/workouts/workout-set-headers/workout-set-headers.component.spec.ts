import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutSetHeadersComponent } from './workout-set-headers.component';

describe('WorkoutSetHeadersComponent', () => {
  let component: WorkoutSetHeadersComponent;
  let fixture: ComponentFixture<WorkoutSetHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutSetHeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutSetHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
