import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalTripsComponent } from './approval-trips.component';

describe('ApprovalTripsComponent', () => {
  let component: ApprovalTripsComponent;
  let fixture: ComponentFixture<ApprovalTripsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalTripsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
