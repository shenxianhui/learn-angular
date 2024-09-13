import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core'
import schema from './schema.json'

const { sampleCode, data: data_json } = schema
const { format = {} } = data_json || {}
const { data = {} } = format
const color_json = sampleCode.replace(/'/g, '"') || '{}'
const color = JSON.parse(color_json)

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.less'],
})
export class SlideListComponent implements OnDestroy, AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer: ElementRef
  @ViewChild('swiperWrapper') swiperWrapper: ElementRef

  data: any = data
  color: any = color

  private slideIndex = 0 // 从第0个幻灯片开始
  private containerHeight = 500
  private intervalId: any
  private readonly intervalTime = color.interval || 3000
  private readonly transitionTime = 500 // 动画过渡时间
  private isTransitioning = false

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // 使用全局变量设置 swiper 容器高度
    this.setSwiperContainerHeight()

    // 初始化滚动到第0个幻灯片的位置
    setTimeout(() => {
      this.scrollToSlide(this.slideIndex, false)
      this.startAutoScroll()
    }, 0)
  }

  private setSwiperContainerHeight() {
    // 使用全局变量设置 .s-swiper-container 的高度
    if (this.swiperContainer) {
      this.renderer.setStyle(
        this.swiperContainer.nativeElement,
        'height',
        `${this.containerHeight}px`,
      )
    }
  }

  private startAutoScroll() {
    if (this.shouldScroll()) {
      this.intervalId = setInterval(() => {
        this.scrollDown()
      }, this.intervalTime)
    }
  }

  private stopAutoScroll() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  private scrollUp() {
    if (this.slideIndex > 0) {
      this.slideIndex--
      this.scrollToSlide(this.slideIndex, true)
    }
  }

  private scrollDown() {
    if (!this.shouldScroll()) return

    const slides = this.swiperWrapper.nativeElement.children
    const totalSlides = slides.length

    if (this.slideIndex < totalSlides - 1) {
      this.slideIndex++
      this.scrollToSlide(this.slideIndex, true)
    } else {
      // 到达最后一个幻灯片时重置为第一个幻灯片
      this.isTransitioning = true
      this.scrollToSlide(this.slideIndex, true)
      setTimeout(() => {
        this.slideIndex = 0
        this.scrollToSlide(this.slideIndex, false) // 无动画过渡
      }, this.transitionTime)
    }
  }

  private scrollToSlide(index: number, withTransition: boolean) {
    if (!this.swiperWrapper) return

    const currentSlide = this.swiperWrapper.nativeElement.children[index]
    const currentSlideHeight = currentSlide.clientHeight

    if (withTransition) {
      this.renderer.setStyle(
        this.swiperWrapper.nativeElement,
        'transition',
        `transform ${this.transitionTime}ms ease`,
      )
    } else {
      this.renderer.setStyle(this.swiperWrapper.nativeElement, 'transition', 'none')
    }

    // 计算偏移量
    let offset = 0
    for (let i = 0; i < index; i++) {
      offset += this.swiperWrapper.nativeElement.children[i].clientHeight
    }

    this.renderer.setStyle(
      this.swiperWrapper.nativeElement,
      'transform',
      `translateY(-${offset}px)`,
    )
  }

  private shouldScroll(): boolean {
    if (!this.swiperWrapper || !this.swiperContainer) return

    const wrapperHeight = this.swiperWrapper.nativeElement.scrollHeight
    const containerHeight = this.swiperContainer.nativeElement.clientHeight
    return wrapperHeight > containerHeight
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.stopAutoScroll()
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.startAutoScroll()
  }

  ngOnDestroy() {
    this.stopAutoScroll()
  }
}
