import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorProductsComponent } from './junior-products.component';

describe('JuniorProductsComponent', () => {
  let component: JuniorProductsComponent;
  let fixture: ComponentFixture<JuniorProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuniorProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
