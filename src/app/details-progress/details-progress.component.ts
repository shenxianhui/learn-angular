import { Component, OnInit } from '@angular/core'
import { json_data } from './data.json'

const { data_json = {}, color_json = {} } = json_data
const { data = {} } = data_json

@Component({
  selector: 'app-details-progress',
  templateUrl: './details-progress.component.html',
  styleUrls: ['./details-progress.component.less'],
})
export class DetailsProgressComponent implements OnInit {
  data: any = data
  color: any = color_json

  constructor() {}

  ngOnInit() {}
}
