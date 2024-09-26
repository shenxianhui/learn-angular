import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChildren,
  AfterViewInit,
  QueryList,
  HostListener,
} from '@angular/core'

@Component({
  selector: 'app-notice-bar',
  templateUrl: './notice-bar.component.html',
  styleUrls: ['./notice-bar.component.less'],
})
export class NoticeBarComponent implements OnInit, AfterViewInit {
  @Input() speed: number = 20 // 滚动速率 (px/s)
  @Input() scrollable: boolean = true // 开启自动滚动

  @ViewChildren('noticeBarContent') contentElements!: QueryList<ElementRef>

  constructor() {}

  ngOnInit(): void {}

  // 监听窗口大小变化事件
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkContentOverflow()
  }

  ngAfterViewInit(): void {
    this.checkContentOverflow()
  }

  checkContentOverflow(): void {
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

  updateAnimationDuration(contentElement: ElementRef): void {
    const contentWidth = contentElement.nativeElement.offsetWidth
    const animationDuration = contentWidth / this.speed
    contentElement.nativeElement.style.animationDuration = `${animationDuration}s`
  }
}
