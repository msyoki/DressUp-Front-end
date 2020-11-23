import { TestBed } from '@angular/core/testing';

import { JuniorProductsService } from './junior-products.service';

describe('JuniorProductsService', () => {
  let service: JuniorProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuniorProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
