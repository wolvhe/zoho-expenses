import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseTabledetailsComponent } from './expense-tabledetails.component';

describe('ExpenseTabledetailsComponent', () => {
  let component: ExpenseTabledetailsComponent;
  let fixture: ComponentFixture<ExpenseTabledetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseTabledetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseTabledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
