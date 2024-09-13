import { Component, OnInit } from '@angular/core'
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
  selector: 'app-colorful-rank',
  templateUrl: './colorful-rank.component.html',
  styleUrls: ['./colorful-rank.component.less'],
})
export class ColorfulRankComponent implements OnInit {
  data: any = data
  color: any = color

  constructor() {}

  ngOnInit() {}

  getWidth(val) {
    const max = Math.max(...this.data.list.map(item => item.value))
    const per = (val / max) * 100

    return per
  }

  getColor(idx: number, a = 'FF') {
    const { colors = ['#75B2FF', '#52D2FF', '#33FEFF', '#50FFCC', '#FFFFFF'] } = this.color || {}

    const index = idx % colors.length
    return colors[index] + a
  }
}
