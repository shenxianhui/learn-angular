import { TestBed } from '@angular/core/testing';

import { InfoStatisticsService } from './info-statistics.service';

describe('InfoStatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoStatisticsService = TestBed.get(InfoStatisticsService);
    expect(service).toBeTruthy();
  });
});
