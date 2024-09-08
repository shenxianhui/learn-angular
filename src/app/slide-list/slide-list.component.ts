import { Component, OnInit } from '@angular/core'
import { json_data } from './data.json'

const { data_json = {}, color_json = {} } = json_data
const { data = {} } = data_json

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.less'],
})
export class SlideListComponent implements OnInit {
  data: any = {}
  color: any = {}

  constructor() {
    this.data = data
    this.color = color_json
  }

  ngOnInit() {}
}
