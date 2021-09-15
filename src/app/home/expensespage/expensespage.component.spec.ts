import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensespageComponent } from './expensespage.component';

describe('ExpensespageComponent', () => {
  let component: ExpensespageComponent;
  let fixture: ComponentFixture<ExpensespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensespageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
