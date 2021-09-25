import { TestBed } from '@angular/core/testing';

import { FscProducttypeL2ListService } from './fsc-producttype-l2-list.service';

describe('FscProducttypeL2ListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FscProducttypeL2ListService = TestBed.get(FscProducttypeL2ListService);
    expect(service).toBeTruthy();
  });
});
