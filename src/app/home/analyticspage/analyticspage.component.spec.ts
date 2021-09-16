import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticspageComponent } from './analyticspage.component';

describe('AnalyticspageComponent', () => {
  let component: AnalyticspageComponent;
  let fixture: ComponentFixture<AnalyticspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
