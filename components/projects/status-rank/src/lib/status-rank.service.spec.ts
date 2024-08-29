import { TestBed } from '@angular/core/testing';

import { StatusRankService } from './status-rank.service';

describe('StatusRankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusRankService = TestBed.get(StatusRankService);
    expect(service).toBeTruthy();
  });
});
