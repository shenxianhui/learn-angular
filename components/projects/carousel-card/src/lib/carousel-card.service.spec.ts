import { TestBed } from '@angular/core/testing';

import { CarouselCardService } from './carousel-card.service';

describe('CarouselCardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarouselCardService = TestBed.get(CarouselCardService);
    expect(service).toBeTruthy();
  });
});
