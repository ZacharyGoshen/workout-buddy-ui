import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableSetComponent } from './editable-set.component';

describe('EditableSetComponent', () => {
  let component: EditableSetComponent;
  let fixture: ComponentFixture<EditableSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditableSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
