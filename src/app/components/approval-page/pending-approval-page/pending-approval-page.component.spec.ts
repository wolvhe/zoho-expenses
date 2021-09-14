import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingApprovalPageComponent } from './pending-approval-page.component';

describe('PendingApprovalPageComponent', () => {
  let component: PendingApprovalPageComponent;
  let fixture: ComponentFixture<PendingApprovalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingApprovalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingApprovalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
