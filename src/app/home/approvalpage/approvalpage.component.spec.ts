import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalpageComponent } from './approvalpage.component';

describe('ApprovalpageComponent', () => {
  let component: ApprovalpageComponent;
  let fixture: ComponentFixture<ApprovalpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
