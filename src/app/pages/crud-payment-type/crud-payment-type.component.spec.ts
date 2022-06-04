import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPaymentTypeComponent } from './crud-payment-type.component';

describe('CrudPaymentTypeComponent', () => {
  let component: CrudPaymentTypeComponent;
  let fixture: ComponentFixture<CrudPaymentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudPaymentTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPaymentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
