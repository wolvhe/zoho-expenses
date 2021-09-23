import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnexpComponent } from './unexp.component';

describe('UnexpComponent', () => {
  let component: UnexpComponent;
  let fixture: ComponentFixture<UnexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnexpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
