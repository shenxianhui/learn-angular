import { Component, OnInit } from '@angular/core'
import schema from './schema.json'

const { sampleCode, data: data_json } = schema
const { format = {} } = data_json || {}
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
}
