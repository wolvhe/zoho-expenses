import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDocsComponent } from './travel-docs.component';

describe('TravelDocsComponent', () => {
  let component: TravelDocsComponent;
  let fixture: ComponentFixture<TravelDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
