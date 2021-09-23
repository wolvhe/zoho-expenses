import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpcurrencyComponent } from './expcurrency.component';

describe('ExpcurrencyComponent', () => {
  let component: ExpcurrencyComponent;
  let fixture: ComponentFixture<ExpcurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpcurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
