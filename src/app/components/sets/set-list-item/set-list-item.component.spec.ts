import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetListItemComponent } from './set-list-item.component';

describe('SetListItemComponent', () => {
  let component: SetListItemComponent;
  let fixture: ComponentFixture<SetListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
