import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'app-top-rank',
  templateUrl: './top-rank.component.html',
  styleUrls: ['./top-rank.component.less'],
})
export class TopRankComponent implements OnInit {
  @ViewChild('tbody')
  tbodyDiv: ElementRef
  data = {
    titleImg: 'assets/top-rank/image/top_rank_header_bg.png',
    title: 'TOP 01',
    titleLabel: '字段名称超出滚动',
    titleValue: 3780,
    title1: 'TOP 02',
    title1Label: '字段名称超出滚动',
    title1Value: 800,
    title2: 'TOP 03',
    title2Label: '字段名称超出滚动',
    title2Value: 800,
    list: [
      {
        title: '字段名称',
        num: 800,
        progress: 20,
      },
      {
        title: '字段名称',
        num: 800,
        progress: 50,
      },
      {
        title: '字段名称',
        num: 800,
        progress: 100,
      },
    ],
  }
  color = {
    color: '#f00',
  }

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      let trList = this.tbodyDiv.nativeElement.querySelectorAll('.fourth-wrap')
      trList.forEach(element => {
        element.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-40px)' }], {
          duration: 600,
          iterations: 1,
        })
      })

      setTimeout(() => {
        this.data.list.push(this.data.list.shift())
      }, 600)
    }, 3000)
  }
}
