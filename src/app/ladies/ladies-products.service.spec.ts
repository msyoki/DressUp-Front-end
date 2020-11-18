import { TestBed } from '@angular/core/testing';

import { LadiesProductsService } from './ladies-products.service';

describe('LadiesProductsService', () => {
  let service: LadiesProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LadiesProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
