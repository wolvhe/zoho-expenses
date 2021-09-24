import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndivdualComponent } from './indivdual.component';

describe('IndivdualComponent', () => {
  let component: IndivdualComponent;
  let fixture: ComponentFixture<IndivdualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndivdualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndivdualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
