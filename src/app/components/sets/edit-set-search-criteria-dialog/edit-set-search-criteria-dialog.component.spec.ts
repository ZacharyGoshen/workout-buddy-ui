import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSetSearchCriteriaDialogComponent } from './edit-set-search-criteria-dialog.component';

describe('EditSetSearchCriteriaDialogComponent', () => {
  let component: EditSetSearchCriteriaDialogComponent;
  let fixture: ComponentFixture<EditSetSearchCriteriaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSetSearchCriteriaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSetSearchCriteriaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
