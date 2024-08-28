import { Component, OnInit } from '@angular/core'
import * as echarts from 'echarts'

@Component({
  selector: 'app-line-bar',
  templateUrl: './line-bar.component.html',
  styleUrls: ['./line-bar.component.less'],
})
export class LineBarComponent implements OnInit {
  chartOptions = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      icon: 'rect',
      itemWidth: 10,
      itemHeight: 2,
      itemGap: 18,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        color: '#BABBCA',
        fontSize: 14,
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      // boundaryGap: false
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
      nameTextStyle: {
        fontSize: 14,
        color: '#BABBCA',
      },
      axisLabel: {
        width: 20,
        fontSize: 14,
        color: '#BABBCA',
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          // type: 'dashed',
          color: 'rgba(198, 198, 198, 0.40)',
        },
      },
    },
    series: [
      {
        name: 'Line1',
        type: 'line',
        step: 'start',
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: 'Line2',
        type: 'line',
        step: 'middle',
        data: [220, 282, 201, 234, 290, 430, 410],
      },
      {
        name: 'Line3',
        type: 'line',
        step: 'end',
        data: [450, 432, 401, 454, 590, 530, 510],
      },
      {
        type: 'bar',
        name: 'Bar1',
        stack: 1,
        barGap: '0',
        borderWidth: 0,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgb(81, 203, 216, 0.5)',
                },
                {
                  offset: 1,
                  color: 'rgb(81, 203, 216, 0)',
                },
              ],
              false,
            ),
          },
        },
        label: {
          normal: {
            show: false,
          },
        },
        data: [100, 200, 300, 400, 300, 200, 100],
      },
      {
        type: 'bar',
        name: '',
        stack: 1,
        barGap: '0',
        itemStyle: {
          normal: {
            color: 'rgb(121, 238, 255)',
          },
        },
        label: {
          normal: {
            show: false,
          },
        },
        data: [10, 10, 10, 10, 10, 10, 10],
        tooltip: {
          show: false,
        },
      },
      {
        type: 'bar',
        name: 'Bar2',
        data: [120, 200, 150, 80, 70, 110, 130],
      },
    ],
  }

  constructor() {}

  ngOnInit() {}
}
