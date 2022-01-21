import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseHeadersComponent } from './exercise-headers.component';

describe('ExerciseHeadersComponent', () => {
  let component: ExerciseHeadersComponent;
  let fixture: ComponentFixture<ExerciseHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseHeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
