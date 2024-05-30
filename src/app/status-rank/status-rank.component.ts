import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { json_data } from './data.json'

const { data_json = {}, color_json = {} } = json_data
const { data = {} } = data_json

@Component({
  selector: 'app-status-rank',
  templateUrl: './status-rank.component.html',
  styleUrls: ['./status-rank.component.less'],
})
export class StatusRankComponent implements OnInit {
  @ViewChild('tbody')
  tbodyDiv: ElementRef
  data: any = {}
  color: any = {}

  constructor() {
    this.data = data
    this.color = color_json
  }

  ngOnInit() {
    setInterval(() => {
      let trList = this.tbodyDiv.nativeElement.querySelectorAll('.wrap')
      trList.forEach(element => {
        element.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-72px)' }], {
          duration: 600,
          iterations: 1,
        })
      })

      setTimeout(() => {
        this.data.list.push(this.data.list.shift())
      }, 600)
    }, 3000)
  }

  getPercentage(value, list = []) {
    let total = 0

    list.forEach(item => {
      total += item.value
    })

    return (value / total) * 100 + '%'
  }
}
