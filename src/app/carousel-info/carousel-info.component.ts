import { Component, OnInit } from '@angular/core'
import schema from './schema.json'

interface Format {
  data: any
}

const { sampleCode, data: data_json } = schema
const { format = {} as Format } = data_json || {}
const { data = {} } = format
const color_json = sampleCode.replace(/'/g, '"') || '{}'
const color = JSON.parse(color_json)

@Component({
  selector: 'app-carousel-info',
  templateUrl: './carousel-info.component.html',
  styleUrls: ['./carousel-info.component.less'],
})
export class CarouselInfoComponent implements OnInit {
  data: any = data
  color: any = color

  currentIndex = 0
  intervalId: any // 定时器ID，用于清除

  constructor() {
    this.startCarousel()
  }

  ngOnInit() {}

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.data.list.length
    }, this.color.interval || 3000)
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
