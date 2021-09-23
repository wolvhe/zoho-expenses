import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpcategoryComponent } from './expcategory.component';

describe('ExpcategoryComponent', () => {
  let component: ExpcategoryComponent;
  let fixture: ComponentFixture<ExpcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
