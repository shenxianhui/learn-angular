import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperFadeComponent } from './swiper-fade.component';

describe('SwiperFadeComponent', () => {
  let component: SwiperFadeComponent;
  let fixture: ComponentFixture<SwiperFadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperFadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperFadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
