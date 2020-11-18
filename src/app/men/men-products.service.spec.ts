import { TestBed } from '@angular/core/testing';

import { MenProductsService } from './men-products.service';

describe('MenProductsService', () => {
  let service: MenProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
