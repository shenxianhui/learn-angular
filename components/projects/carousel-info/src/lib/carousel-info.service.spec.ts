import { TestBed } from '@angular/core/testing';

import { CarouselInfoService } from './carousel-info.service';

describe('CarouselInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarouselInfoService = TestBed.get(CarouselInfoService);
    expect(service).toBeTruthy();
  });
});
