import { TestBed } from '@angular/core/testing';

import { BaseFilterService } from './base-filter.service';

describe('BaseFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseFilterService = TestBed.get(BaseFilterService);
    expect(service).toBeTruthy();
  });
});
