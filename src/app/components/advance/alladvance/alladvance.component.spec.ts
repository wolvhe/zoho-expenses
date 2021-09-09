import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlladvanceComponent } from './alladvance.component';

describe('AlladvanceComponent', () => {
  let component: AlladvanceComponent;
  let fixture: ComponentFixture<AlladvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlladvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlladvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
