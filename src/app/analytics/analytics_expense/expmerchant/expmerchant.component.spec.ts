import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpmerchantComponent } from './expmerchant.component';

describe('ExpmerchantComponent', () => {
  let component: ExpmerchantComponent;
  let fixture: ComponentFixture<ExpmerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpmerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpmerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
