import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetContentComponent } from './set-content.component';

describe('SetContentComponent', () => {
  let component: SetContentComponent;
  let fixture: ComponentFixture<SetContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
