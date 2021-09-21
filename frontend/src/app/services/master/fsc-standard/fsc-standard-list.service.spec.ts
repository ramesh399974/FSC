import { TestBed } from '@angular/core/testing';

import { FscStandardListService } from './fsc-standard-list.service';

describe('FscStandardListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FscStandardListService = TestBed.get(FscStandardListService);
    expect(service).toBeTruthy();
  });
});
