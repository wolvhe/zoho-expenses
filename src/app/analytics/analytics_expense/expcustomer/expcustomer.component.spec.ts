import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpcustomerComponent } from './expcustomer.component';

describe('ExpcustomerComponent', () => {
  let component: ExpcustomerComponent;
  let fixture: ComponentFixture<ExpcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
