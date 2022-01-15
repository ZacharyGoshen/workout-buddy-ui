import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSetFormComponent } from './add-set-form.component';

describe('AddSetFormComponent', () => {
  let component: AddSetFormComponent;
  let fixture: ComponentFixture<AddSetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSetFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
