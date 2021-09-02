import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkAddExpenseComponent } from './bulk-add-expense.component';

describe('BulkAddExpenseComponent', () => {
  let component: BulkAddExpenseComponent;
  let fixture: ComponentFixture<BulkAddExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkAddExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkAddExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
