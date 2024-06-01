import { Component, OnInit } from '@angular/core'
import { json_data } from './data.json'

const { data_json = {}, color_json = {} } = json_data
const { data = {} } = data_json

interface ThemeData {
  color?: string,
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
  data: any = data
  color: any = color_json

  constructor() {}

  ngOnInit() {}

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
}
