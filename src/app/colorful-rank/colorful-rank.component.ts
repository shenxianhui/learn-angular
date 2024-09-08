import { Component, OnInit } from '@angular/core'
import { json_data } from './data.json'

const { data_json = {}, color_json = {} } = json_data
const { data = {} } = data_json

@Component({
  selector: 'app-colorful-rank',
  templateUrl: './colorful-rank.component.html',
  styleUrls: ['./colorful-rank.component.less'],
})
export class ColorfulRankComponent implements OnInit {
  data: any = data
  color: any = color_json

  constructor() {}

  ngOnInit() {}
}
