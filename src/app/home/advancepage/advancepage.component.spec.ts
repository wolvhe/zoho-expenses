import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancepageComponent } from './advancepage.component';

describe('AdvancepageComponent', () => {
  let component: AdvancepageComponent;
  let fixture: ComponentFixture<AdvancepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
