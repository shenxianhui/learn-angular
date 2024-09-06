import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-monthly-calendar',
  templateUrl: './monthly-calendar.component.html',
  styleUrls: ['./monthly-calendar.component.less'],
})
export class MonthlyCalendarComponent implements OnInit {
  currentYear: number = new Date().getFullYear()
  currentMonth: number = new Date().getMonth() + 1 // 月份从0开始，需要+1
  timeScale: number[] = Array.from({ length: 25 }, (_, i) => i) // 00:00 到 24:00
  startDay: number = 5 // 开始变灰的起始日期
  endDay: number = 10 // 结束变灰的终止日期

  constructor() {}

  ngOnInit() {}

  // 获取当月的天数
  get daysInMonth(): number {
    return new Date(this.currentYear, this.currentMonth, 0).getDate()
  }

  // 根据日期范围返回数组
  daysInRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  // 根据日期返回样式类
  getDayClass(day: number): string {
    if (day < this.startDay) {
      return 'disabled-day-before' // startDay之前的日期按钮置灰且文字白色
    } else if (day > this.endDay) {
      return 'disabled-day-after' // endDay之后的日期按钮置灰
    }
    return 'active-day' // startDay到endDay之间的日期正常显示
  }
}
