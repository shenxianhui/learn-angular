import { TestBed } from '@angular/core/testing';

import { ThemeAreaLineService } from './theme-area-line.service';

describe('ThemeAreaLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeAreaLineService = TestBed.get(ThemeAreaLineService);
    expect(service).toBeTruthy();
  });
});
