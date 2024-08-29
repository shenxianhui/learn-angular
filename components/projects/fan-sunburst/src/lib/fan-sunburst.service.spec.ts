import { TestBed } from '@angular/core/testing';

import { FanSunburstService } from './fan-sunburst.service';

describe('FanSunburstService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FanSunburstService = TestBed.get(FanSunburstService);
    expect(service).toBeTruthy();
  });
});
