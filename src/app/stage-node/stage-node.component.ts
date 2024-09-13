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
  selector: 'app-stage-node',
  templateUrl: './stage-node.component.html',
  styleUrls: ['./stage-node.component.less'],
})
export class StageNodeComponent implements OnInit {
  data: any = data
  color: any = color

  constructor() {}

  ngOnInit() {}
}
