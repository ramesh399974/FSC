import { TestBed } from '@angular/core/testing';

import { FscProducttypeL2Service } from './fsc-producttype-l2.service';

describe('FscProducttypeL2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FscProducttypeL2Service = TestBed.get(FscProducttypeL2Service);
    expect(service).toBeTruthy();
  });
});
