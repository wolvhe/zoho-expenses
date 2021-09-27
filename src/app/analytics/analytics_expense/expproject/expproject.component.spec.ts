import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpprojectComponent } from './expproject.component';

describe('ExpprojectComponent', () => {
  let component: ExpprojectComponent;
  let fixture: ComponentFixture<ExpprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
