import { Component, OnInit } from '@angular/core'
import { json_data } from './data.json'

const { data_json = {}, color_json = {} } = json_data
const { data = {} } = data_json

@Component({
  selector: 'app-carousel-info',
  templateUrl: './carousel-info.component.html',
  styleUrls: ['./carousel-info.component.less'],
})
export class CarouselInfoComponent implements OnInit {
  data: any = data
  color: any = color_json

  constructor() {}

  ngOnInit() {}
}
