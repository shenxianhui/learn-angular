import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SSwiperComponent } from './s-swiper.component';

describe('SSwiperComponent', () => {
  let component: SSwiperComponent;
  let fixture: ComponentFixture<SSwiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SSwiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
