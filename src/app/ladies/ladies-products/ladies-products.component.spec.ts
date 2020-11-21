import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesProductsComponent } from './ladies-products.component';

describe('LadiesProductsComponent', () => {
  let component: LadiesProductsComponent;
  let fixture: ComponentFixture<LadiesProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadiesProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadiesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
