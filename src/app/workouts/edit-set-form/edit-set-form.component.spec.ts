import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSetFormComponent } from './edit-set-form.component';

describe('EditSetFormComponent', () => {
  let component: EditSetFormComponent;
  let fixture: ComponentFixture<EditSetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
