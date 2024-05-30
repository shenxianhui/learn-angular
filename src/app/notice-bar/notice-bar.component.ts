import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core'

@Component({
  selector: 'app-notice-bar',
  templateUrl: './notice-bar.component.html',
  styleUrls: ['./notice-bar.component.less'],
})
export class NoticeBarComponent implements OnInit, AfterViewInit {
  @Input() contentText: string = '默认滚动内容'
  @Input() speed: number = 20 // 滚动速率 (px/s)
  @Input() scrollable: boolean = true // 开启自动滚动

  @ViewChild('noticeBarContent') contentElement!: ElementRef

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.startScrolling()
  }

  startScrolling(): void {
    if (this.scrollable) {
      const contentWidth = this.contentElement.nativeElement.offsetWidth
      const animationDuration = contentWidth / this.speed
      this.contentElement.nativeElement.style.animationDuration = `${animationDuration}s`
    }
  }
}
