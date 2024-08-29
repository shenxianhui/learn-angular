import { TestBed } from '@angular/core/testing';

import { ComprehensiveListService } from './comprehensive-list.service';

describe('ComprehensiveListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComprehensiveListService = TestBed.get(ComprehensiveListService);
    expect(service).toBeTruthy();
  });
});
