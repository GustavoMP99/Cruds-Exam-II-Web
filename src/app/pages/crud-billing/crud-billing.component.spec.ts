import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBillingComponent } from './crud-billing.component';

describe('CrudBillingComponent', () => {
  let component: CrudBillingComponent;
  let fixture: ComponentFixture<CrudBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
