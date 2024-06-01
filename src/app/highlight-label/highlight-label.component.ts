import { Component, OnInit } from '@angular/core'
import { json_data } from './data.json'

const { data_json = {}, color_json = {} } = json_data
const { data = {} } = data_json

@Component({
  selector: 'app-highlight-label',
  templateUrl: './highlight-label.component.html',
  styleUrls: ['./highlight-label.component.less'],
})
export class HighlightLabelComponent implements OnInit {
  data: any = data
  color: any = color_json
  isActive = false

  constructor() {}

  ngOnInit() {}

  onMouseEnter() {
    this.isActive = true
  }

  onMouseLeave() {
    this.isActive = false
  }
}
