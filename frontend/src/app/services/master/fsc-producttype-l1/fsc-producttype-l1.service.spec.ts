import { TestBed } from '@angular/core/testing';

import { FscProducttypeL1Service } from './fsc-producttype-l1.service';

describe('FscProducttypeL1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FscProducttypeL1Service = TestBed.get(FscProducttypeL1Service);
    expect(service).toBeTruthy();
  });
});
