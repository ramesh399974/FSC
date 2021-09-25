import { TestBed } from '@angular/core/testing';

import { FscProducttypeL3ListService } from './fsc-producttype-l3-list.service';

describe('FscProducttypeL3ListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FscProducttypeL3ListService = TestBed.get(FscProducttypeL3ListService);
    expect(service).toBeTruthy();
  });
});
