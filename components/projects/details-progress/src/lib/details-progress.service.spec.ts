import { TestBed } from '@angular/core/testing';

import { DetailsProgressService } from './details-progress.service';

describe('DetailsProgressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailsProgressService = TestBed.get(DetailsProgressService);
    expect(service).toBeTruthy();
  });
});
