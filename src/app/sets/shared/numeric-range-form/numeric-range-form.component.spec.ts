import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericRangeFormComponent } from './numeric-range-form.component';

describe('NumericRangeFormComponent', () => {
  let component: NumericRangeFormComponent;
  let fixture: ComponentFixture<NumericRangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumericRangeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericRangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
