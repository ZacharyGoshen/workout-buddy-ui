import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetListItemHeadersComponent } from './set-list-item-headers.component';

describe('SetListItemHeadersComponent', () => {
  let component: SetListItemHeadersComponent;
  let fixture: ComponentFixture<SetListItemHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetListItemHeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetListItemHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
