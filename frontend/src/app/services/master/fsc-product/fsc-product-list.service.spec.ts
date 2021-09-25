import { TestBed } from '@angular/core/testing';

import { FscProductListService } from './fsc-product-list.service';

describe('FscProductListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FscProductListService = TestBed.get(FscProductListService);
    expect(service).toBeTruthy();
  });
});
