import { TestBed } from '@angular/core/testing';

import { TopRankService } from './top-rank.service';

describe('TopRankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopRankService = TestBed.get(TopRankService);
    expect(service).toBeTruthy();
  });
});
