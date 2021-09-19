import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkaddreportsComponent } from './bulkaddreports.component';

describe('BulkaddreportsComponent', () => {
  let component: BulkaddreportsComponent;
  let fixture: ComponentFixture<BulkaddreportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkaddreportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkaddreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
