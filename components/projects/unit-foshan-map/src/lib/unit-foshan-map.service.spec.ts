import { TestBed } from '@angular/core/testing';

import { UnitFoShanMapService } from './unit-foshan-map';

describe('BaseFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitFoShanMapService = TestBed.get(UnitFoShanMapService);
    expect(service).toBeTruthy();
  });
});
