import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualadvanceComponent } from './individualadvance.component';

describe('IndividualadvanceComponent', () => {
  let component: IndividualadvanceComponent;
  let fixture: ComponentFixture<IndividualadvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualadvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualadvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
