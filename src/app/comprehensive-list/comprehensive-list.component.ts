import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { json_data } from './data.json'

const { data_json = {}, color_json = {} } = json_data
const { data = {} } = data_json

interface ThemeData {
  color?: string
  backgroundColor?: string
}
interface ColorData {
  colType?: Array<string>
  themeMap?: string
}

@Component({
  selector: 'app-comprehensive-list',
  templateUrl: './comprehensive-list.component.html',
  styleUrls: ['./comprehensive-list.component.less'],
})
export class ComprehensiveListComponent implements OnInit {
  @ViewChild('tbody')
  tbodyDiv: ElementRef
  data: any = data
  color: any = color_json

  constructor() {}

  ngOnInit() {
    let viewNum = this.color.viewNum || 5
    if (this.data.td.length <= viewNum) {
      return
    }
    setInterval(() => {
      let trList = this.tbodyDiv.nativeElement.querySelectorAll('.second-wrap')

      let firstElement = trList[0]
      if (firstElement) {
        firstElement.animate(
          [
            { transform: 'translate(0,0)', opacity: 1 },
            { transform: 'translate(-50%,-43px)', opacity: 0.2 },
          ],
          {
            duration: 500,
            iterations: 1,
          },
        )
      }

      trList.forEach((element, index) => {
        if (index == 0) {
          return
        }
        element.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-43px)' }], {
          duration: 500,
          iterations: 1,
        })
      })

      setTimeout(() => {
        this.data.td.push(this.data.td.shift())
      }, 500)
    }, 3000)
  }

  getTheme(name: string): ThemeData {
    const colorData: ColorData = this.color
    const themes = Object.entries(colorData.themeMap || {}).map(item => {
      const key = item[0]
      const val = item[1] || {}

      return {
        name: key,
        data: val,
      }
    })
    const data = themes.find(item => item.name === name)

    return data ? data.data : {}
  }
  getCountryIcon(iconName) {
    return `assets/comprehensive-list/image/${iconName}.png`
  }

  getBodyHeight() {
    const dataLength = this.data.td.length
    const viewNum = this.color.viewNum
    const num = dataLength > viewNum ? viewNum : dataLength

    return num * 31 + (num - 1) * 10 + 'px'
  }
}
