import { Component, OnInit } from '@angular/core'
import schema from './schema.json'

const { sampleCode, data: data_json } = schema
const { format = {} } = data_json || {}
const { data = {} } = format
const color_json = sampleCode.replace(/'/g, '"') || '{}'
const color = JSON.parse(color_json)

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.less'],
})
export class SlideListComponent implements OnInit {
  data: any = data
  color: any = color

  constructor() {}

  ngOnInit() {}
}
