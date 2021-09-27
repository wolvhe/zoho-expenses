import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpdetailsComponent } from './expdetails.component';

describe('ExpdetailsComponent', () => {
  let component: ExpdetailsComponent;
  let fixture: ComponentFixture<ExpdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
