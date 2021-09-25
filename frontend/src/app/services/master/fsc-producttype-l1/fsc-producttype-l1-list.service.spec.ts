import { TestBed } from '@angular/core/testing';

import { FscProducttypeL1ListService } from './fsc-producttype-l1-list.service';

describe('FscProducttypeL1ListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FscProducttypeL1ListService = TestBed.get(FscProducttypeL1ListService);
    expect(service).toBeTruthy();
  });
});
