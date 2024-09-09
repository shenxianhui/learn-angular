import { Component, ElementRef, HostListener, OnDestroy, Renderer2, ViewChild } from '@angular/core'

@Component({
  selector: 'app-s-swiper',
  templateUrl: './s-swiper.component.html',
  styleUrls: ['./s-swiper.component.less'],
})
export class SSwiperComponent implements OnDestroy {
  @ViewChild('swiperWrapper') swiperWrapper: ElementRef
  private slideIndex = 1 // 从第二个幻灯片开始，确保第一个被预留为“缓冲”
  private intervalId: any
  private readonly intervalTime = 3000 // 每隔 3 秒滚动一次
  private readonly transitionTime = 500 // 动画过渡时间，确保与 CSS 动画时间匹配
  private slideHeight: number

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // 获取第一个幻灯片的高度
    this.slideHeight = this.swiperWrapper.nativeElement.children[0].clientHeight
    // 初始化滚动到第一个幻灯片的位置
    setTimeout(() => {
      this.renderer.setStyle(
        this.swiperWrapper.nativeElement,
        'transform',
        `translateY(-${this.slideHeight}px)`,
      )
    }, 0)
    this.startAutoScroll()
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
    if (this.slideIndex > 1) {
      this.slideIndex--
      this.renderer.setStyle(
        this.swiperWrapper.nativeElement,
        'transition',
        `transform ${this.transitionTime}ms ease`,
      )
      this.renderer.setStyle(
        this.swiperWrapper.nativeElement,
        'transform',
        `translateY(-${(this.slideIndex - 1) * this.slideHeight}px)`,
      )
    }
  }

  private scrollDown() {
    const slides = this.swiperWrapper.nativeElement.children
    const totalSlides = slides.length

    if (this.slideIndex < totalSlides - 1) {
      this.slideIndex++
      this.renderer.setStyle(
        this.swiperWrapper.nativeElement,
        'transition',
        `transform ${this.transitionTime}ms ease`,
      )
      this.renderer.setStyle(
        this.swiperWrapper.nativeElement,
        'transform',
        `translateY(-${(this.slideIndex - 1) * this.slideHeight}px)`,
      )
    } else {
      // 当到达最后一个幻灯片时，将 wrapper 重置到第一个幻灯片位置
      setTimeout(() => {
        this.slideIndex = 1
        this.renderer.setStyle(this.swiperWrapper.nativeElement, 'transition', 'none')
        this.renderer.setStyle(
          this.swiperWrapper.nativeElement,
          'transform',
          `translateY(-${this.slideHeight}px)`,
        )
        // 再次启动过渡动画
        setTimeout(() => {
          this.renderer.setStyle(
            this.swiperWrapper.nativeElement,
            'transition',
            `transform ${this.transitionTime}ms ease`,
          )
          this.scrollDown()
        }, 0)
      }, this.transitionTime)
    }
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
