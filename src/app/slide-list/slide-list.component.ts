import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  Renderer2,
  ViewChild,
  AfterViewInit,
  Input,
  ViewChildren,
  QueryList,
} from '@angular/core'
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
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.less'],
})
export class SlideListComponent implements OnDestroy, AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer: ElementRef
  @ViewChild('swiperWrapper') swiperWrapper: ElementRef
  @ViewChild('noticeBar') noticeBar: ElementRef

  @Input() speed: number = 20 // 滚动速率 (px/s)
  @Input() scrollable: boolean = true // 开启自动滚动

  @ViewChildren('noticeBarContent') contentElements!: QueryList<ElementRef>

  data: any = data
  color: any = color

  private slideIndex = 0 // 从第0个幻灯片开始
  private intervalId: any
  private readonly intervalTime = color.interval || 3000
  private readonly transitionTime = 500 // 动画过渡时间
  private isTransitioning = false
  private originalSlidesCount = 0 // 原始幻灯片的数量

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // 使用全局变量设置 swiper 容器高度
    this.setSwiperContainerHeight()
    this.checkContentOverflow()

    // 如果内容高度超出容器，复制数据进行拼接
    if (this.shouldScroll()) {
      this.duplicateSlides()
    }

    // 初始化滚动到第0个幻灯片的位置
    setTimeout(() => {
      this.scrollToSlide(this.slideIndex, false)
      this.startAutoScroll()
    }, 0)
  }

  private setSwiperContainerHeight() {
    if (this.swiperContainer) {
      this.renderer.setStyle(this.swiperContainer.nativeElement, 'height', `100%`)
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

    if (this.slideIndex < this.originalSlidesCount - 1) {
      // 滚动到原始的最后一个幻灯片之前
      this.slideIndex++
      this.scrollToSlide(this.slideIndex, true)
    } else if (this.slideIndex === this.originalSlidesCount - 1) {
      // 滚动到原始的最后一个幻灯片时重置
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
    if (!this.swiperWrapper || !this.swiperContainer) return false

    const wrapperHeight = this.swiperWrapper.nativeElement.scrollHeight
    const containerHeight = this.swiperContainer.nativeElement.clientHeight

    return wrapperHeight > containerHeight
  }

  private checkContentOverflow(): void {
    this.contentElements.forEach(contentElement => {
      const containerWidth = contentElement.nativeElement.parentElement.offsetWidth
      const contentWidth = contentElement.nativeElement.offsetWidth
      if (contentWidth > containerWidth) {
        contentElement.nativeElement.parentElement.classList.add('scrollable')
        this.updateAnimationDuration(contentElement)
      } else {
        contentElement.nativeElement.parentElement.classList.remove('scrollable')
        contentElement.nativeElement.style.transform = 'translateX(0%)'
      }
    })
  }

  private updateAnimationDuration(contentElement: ElementRef): void {
    const contentWidth = contentElement.nativeElement.offsetWidth
    const animationDuration = contentWidth / this.speed
    contentElement.nativeElement.style.animationDuration = `${animationDuration}s`
  }

  private duplicateSlides() {
    if (this.swiperWrapper) {
      const slides = this.swiperWrapper.nativeElement.children
      this.originalSlidesCount = slides.length // 记录原始幻灯片的数量

      // 将所有内容复制一份拼接到后面
      this.swiperWrapper.nativeElement.innerHTML += this.swiperWrapper.nativeElement.innerHTML
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
