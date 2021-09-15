import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysettingspageComponent } from './mysettingspage.component';

describe('MysettingspageComponent', () => {
  let component: MysettingspageComponent;
  let fixture: ComponentFixture<MysettingspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysettingspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysettingspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
