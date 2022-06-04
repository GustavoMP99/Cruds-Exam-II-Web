import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudInventaryComponent } from './crud-inventary.component';

describe('CrudInventaryComponent', () => {
  let component: CrudInventaryComponent;
  let fixture: ComponentFixture<CrudInventaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudInventaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudInventaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
