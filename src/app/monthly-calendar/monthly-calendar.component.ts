import { Component, OnInit } from '@angular/core'
import { json_data } from './data.json'

const { data_json = {}, color_json = {} } = json_data
const { data = {} } = data_json
const { endDay: _endDay = {} } = color_json

@Component({
  selector: 'app-monthly-calendar',
  templateUrl: './monthly-calendar.component.html',
  styleUrls: ['./monthly-calendar.component.less'],
})
export class MonthlyCalendarComponent implements OnInit {
  currentYear: number = new Date().getFullYear()
  currentMonth: number = new Date().getMonth() + 1 // 月份从0开始，需要+1
  timeScale: string[] = Array.from({ length: 25 }, (_, i) => `${String(i).padStart(2, '0')}:00`) // 00:00 到 24:00
  startDay: number = new Date().getDate() // 开始变灰的起始日期
  endDay: number = _endDay // 结束变灰的终止日期
  data: any = data
  color: any = color_json

  constructor() {}

  ngOnInit() {}

  handleBtn(day, idx) {
    if (day < this.startDay) return

    alert(day)
  }

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

  getCurrentDate() {
    // 创建一个包含星期几的英文和中文名称的数组
    const daysOfWeekEN = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    const daysOfWeekCN = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

    // 获取当前日期
    const today = new Date()

    // 获取年、月、日
    const year = today.getFullYear()
    const month = today.getMonth() + 1 // 月份从0开始，所以加1
    const day = today.getDate()

    // 获取星期几
    const dayOfWeek = today.getDay()

    return {
      cn: `${month}月${day}日 - ${daysOfWeekCN[dayOfWeek]}`,
      en: `May ${day} - ${daysOfWeekEN[dayOfWeek]}`,
    }
  }

  getList(list) {
    function traverse(node) {
      let shouldAlarm = false

      // 如果当前节点有 children，递归处理每个子节点
      if (node.children && node.children.length > 0) {
        node.children.forEach(child => {
          // 递归处理子节点
          if (traverse(child)) {
            shouldAlarm = true // 如果子节点需要标记 alarm，父节点也需要
          }
        })
      }

      // 如果当前节点是最里面的节点，并且没有 content 或 content 为空，则标记 alarm
      if (!node.children || node.children.length === 0) {
        if (!node.content || node.content.length === 0) {
          node.alarm = true
          return true // 返回 true 表示当前节点需要标记 alarm
        }
      }

      // 如果子节点有 alarm，当前节点也需要标记
      if (shouldAlarm) {
        node.alarm = true
      }

      return node.alarm || false
    }

    // 遍历 list 中的每个根节点
    list.forEach(node => traverse(node))

    return list
  }

  getPer(sunriseTime = '', sunsetTime = '') {
    const totalMinutes = 24 * 60

    function timeToMinutes(time) {
      const [hours, minutes] = time.split(':').map(Number)
      return hours * 60 + minutes
    }

    const sunriseMinutes = timeToMinutes(sunriseTime)
    const sunsetMinutes = timeToMinutes(sunsetTime)

    const segment1Length = sunriseMinutes - 0
    const segment2Length = sunsetMinutes - sunriseMinutes
    const segment3Length = totalMinutes - sunsetMinutes

    return [
      (segment1Length / totalMinutes) * 100,
      (segment2Length / totalMinutes) * 100,
      (segment3Length / totalMinutes) * 100,
    ]
  }

  getTheme(index) {
    const list = this.color.colors || [
      '#24FFBF',
      '#29C7FF',
      '#5277FF',
      '#FFCB77',
      '#FFFFFF',
      '#C68EFF',
    ]
    return list[index % list.length]
  }
}
