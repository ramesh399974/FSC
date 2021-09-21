import { TestBed } from '@angular/core/testing';

import { FscStandardService } from './fsc-standard.service';

describe('FscStandardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FscStandardService = TestBed.get(FscStandardService);
    expect(service).toBeTruthy();
  });
});
