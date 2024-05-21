import { Component, AfterViewInit } from '@angular/core'
import Swiper from 'swiper'

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.less'],
})
export class SwiperComponent implements AfterViewInit {
  mySwiper: Swiper

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
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
  }
}
