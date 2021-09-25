import { TestBed } from '@angular/core/testing';

import { FscProductService } from './fsc-product.service';

describe('FscProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FscProductService = TestBed.get(FscProductService);
    expect(service).toBeTruthy();
  });
});
