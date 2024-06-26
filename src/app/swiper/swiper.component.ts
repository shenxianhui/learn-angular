import { Component, AfterViewInit } from '@angular/core'
import Swiper from 'swiper'

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.less'],
})
export class SwiperComponent implements AfterViewInit {
  mySwiper: Swiper
  mySwiper1: Swiper

  ngAfterViewInit() {
    // demo
    this.mySwiper = new Swiper('#swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      spaceBetween: 50,
      slidesPerView: 3,
    })

    // demo1
    this.mySwiper1 = new Swiper('#swiper1', {
      direction: 'vertical',
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    })
  }
}
