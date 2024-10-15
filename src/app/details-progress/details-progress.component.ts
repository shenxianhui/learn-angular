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
  selector: 'app-details-progress',
  templateUrl: './details-progress.component.html',
  styleUrls: ['./details-progress.component.less'],
})
export class DetailsProgressComponent implements OnInit {
  data: any = data
  color: any = color

  constructor() {}

  ngOnInit() {}

  getLeft() {
    const { list } = this.data
    const num = list.length * 2
    const left = 100 / num

    return `${left}%`
  }

  getWidth() {
    const { list } = this.data
    const num = list.length * 2
    const left = (100 / num) * (list.length * 2 - 2)

    return `${left}%`
  }

  getActWidth() {
    const { list, activeIndex } = this.data

    return activeIndex * (100 / (list.length - 1)) + '%'
  }
}
