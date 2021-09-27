import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpattendeeComponent } from './expattendee.component';

describe('ExpattendeeComponent', () => {
  let component: ExpattendeeComponent;
  let fixture: ComponentFixture<ExpattendeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpattendeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpattendeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
