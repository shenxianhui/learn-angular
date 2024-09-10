import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core'

@Component({
  selector: 'app-s-swiper',
  templateUrl: './s-swiper.component.html',
  styleUrls: ['./s-swiper.component.less'],
})
export class SSwiperComponent implements OnDestroy, AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer: ElementRef
  @ViewChild('swiperWrapper') swiperWrapper: ElementRef

  private slideIndex = 0 // 从第0个幻灯片开始
  private containerHeight = 500
  private intervalId: any
  private readonly intervalTime = 3000 // 每隔 3 秒滚动一次
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
    this.renderer.setStyle(
      this.swiperContainer.nativeElement,
      'height',
      `${this.containerHeight}px`,
    )
  }

  private startAutoScroll() {
    this.intervalId = setInterval(() => {
      this.scrollDown()
    }, this.intervalTime)
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
