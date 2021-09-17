import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllexpensesComponent } from './allexpenses.component';

describe('AllexpensesComponent', () => {
  let component: AllexpensesComponent;
  let fixture: ComponentFixture<AllexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllexpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
