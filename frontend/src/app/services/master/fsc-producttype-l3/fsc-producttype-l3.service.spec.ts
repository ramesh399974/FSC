import { TestBed } from '@angular/core/testing';

import { FscProducttypeL3Service } from './fsc-producttype-l3.service';

describe('FscProducttypeL3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FscProducttypeL3Service = TestBed.get(FscProducttypeL3Service);
    expect(service).toBeTruthy();
  });
});
