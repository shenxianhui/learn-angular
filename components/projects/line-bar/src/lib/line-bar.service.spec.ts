import { TestBed } from '@angular/core/testing';

import { LineBarService } from './line-bar.service';

describe('LineBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LineBarService = TestBed.get(LineBarService);
    expect(service).toBeTruthy();
  });
});
