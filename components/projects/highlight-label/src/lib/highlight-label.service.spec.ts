import { TestBed } from '@angular/core/testing';

import { HighlightLabelService } from './highlight-label.service';

describe('HighlightLabelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighlightLabelService = TestBed.get(HighlightLabelService);
    expect(service).toBeTruthy();
  });
});
