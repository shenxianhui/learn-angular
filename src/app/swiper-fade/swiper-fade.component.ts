import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-swiper-fade',
  templateUrl: './swiper-fade.component.html',
  styleUrls: ['./swiper-fade.component.less'],
})
export class SwiperFadeComponent implements OnInit {
  interval = 3000
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  currentIndex = 0
  intervalId: any // 定时器ID，用于清除

  constructor() {
    this.startCarousel()
  }

  ngOnInit() {}

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length
    }, this.interval)
  }

  stopCarousel() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  resumeCarousel() {
    this.startCarousel()
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index
  }
}
