import { Component, OnInit } from '@angular/core'
import * as echarts from 'echarts'
import { json_data } from './data.json'
import { fn } from '@angular/compiler/src/output/output_ast'

const { data_json = {}, color_json = {} } = json_data
const { data = {} } = data_json
const { legend = {}, seriesMap = {} } = color_json
const { xAxis = {}, series = [] } = data
const { data: xAxisData = [] } = xAxis
const seriesData = []
const legendData = []

function getBorderHeight(list = []) {
  const sum = list.reduce((acc, curr) => acc + curr, 0)
  const average = sum / list.length / 40
  const arr = Array(list.length).fill(average)

  return arr
}

series.forEach((item, index) => {
  const styleObj = seriesMap[item.key] || {}

  if (item.type === 'line') {
    seriesData.push({
      ...item,
      step: true,
      lineStyle: {
        color: styleObj.itemColor || (index === 2 ? '#50FFCC' : '#52D2FF'),
      },
      itemStyle: {
        color: styleObj.itemColor || (index === 2 ? '#50FFCC' : '#52D2FF'),
        opacity: 0,
      },
      showBackground: index === 0,
      backgroundStyle: {
        color: 'rgba(255, 255, 255, 0.05)',
      },
    })

    legendData.push({
      name: item.name,
      icon: 'path://M 0 0 H 10 V 2 H 0 Z',
    })
  }
  if (item.type === 'bar') {
    if (styleObj.borderColor || (index === 0 && !styleObj.itemColor)) {
      seriesData.push(
        {
          ...item,
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
                    color:
                      (styleObj.itemColor && styleObj.itemColor[0]) || 'rgba(81, 203, 216, 0.5)',
                  },
                  {
                    offset: 1,
                    color: (styleObj.itemColor && styleObj.itemColor[1]) || 'rgba(81, 203, 216, 0)',
                  },
                ],
                false,
              ),
            },
          },
          showBackground: index === 0,
          backgroundStyle: {
            color: 'rgba(255, 255, 255, 0.05)',
          },
        },
        {
          type: 'bar',
          name: '',
          stack: 1,
          barGap: '0',
          itemStyle: {
            normal: {
              color: styleObj.borderColor || 'rgba(81, 203, 216, 1)',
            },
          },
          label: {
            normal: {
              show: false,
            },
          },
          data: getBorderHeight(item.data),
          tooltip: {
            show: false,
          },
        },
      )
    } else {
      seriesData.unshift({
        ...item,
        stack: 1,
        itemStyle: {
          color: styleObj.itemColor || '#FF435B',
        },
        showBackground: index === 0,
        backgroundStyle: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
      })
    }

    legendData.push({
      name: item.name,
      icon: 'path://M 0 0 H 8 V 8 H 0 Z',
    })
  }
})

@Component({
  selector: 'app-line-bar',
  templateUrl: './line-bar.component.html',
  styleUrls: ['./line-bar.component.less'],
})
export class LineBarComponent implements OnInit {
  data: any = {}
  color: any = {}
  chartOptions: any = {}

  constructor() {
    this.data = data
    this.color = color_json
    this.chartOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        icon: 'rect',
        itemWidth: 10,
        // itemHeight: 2,
        itemGap: 18,
        textStyle: {
          color: '#fff',
        },
        top: 20,
        right: 20,
        ...legend,
        data: legendData,
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
        data: xAxisData,
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
            type: 'dashed',
            color: 'rgba(198, 198, 198, 0.40)',
          },
        },
      },
      series: seriesData,
    }
  }

  ngOnInit() {}
}
