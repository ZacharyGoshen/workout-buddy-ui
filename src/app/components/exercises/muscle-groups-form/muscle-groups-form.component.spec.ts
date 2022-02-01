import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuscleGroupsFormComponent } from './muscle-groups-form.component';

describe('MuscleGroupsFormComponent', () => {
  let component: MuscleGroupsFormComponent;
  let fixture: ComponentFixture<MuscleGroupsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuscleGroupsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuscleGroupsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
