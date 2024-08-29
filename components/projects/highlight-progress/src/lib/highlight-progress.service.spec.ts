import { TestBed } from '@angular/core/testing';

import { HighlightProgressService } from './highlight-progress.service';

describe('HighlightProgressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighlightProgressService = TestBed.get(HighlightProgressService);
    expect(service).toBeTruthy();
  });
});
