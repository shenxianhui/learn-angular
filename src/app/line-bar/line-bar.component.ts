import { Component, OnInit } from '@angular/core'
import * as echarts from 'echarts'
import schema from './schema.json'

interface Format {
  data: any
}

interface DataJson {
  data?: {
    xAxis?: {
      data?: any[]
    }
    series?: any[]
  }
}

interface ColorJson {
  legend?: object
  grid?: object
  seriesMap?: object
}

const { sampleCode, data: data_json } = schema
const { format = {} as Format } = data_json || {}
const { data = {} } = format
const color_json = sampleCode.replace(/'/g, '"') || '{}'
const color = JSON.parse(color_json)
const { legend = {}, grid = {}, seriesMap = {} } = color
const { xAxis = {}, series = [] } = data
const { data: xAxisData = [] } = xAxis
const _series = JSON.parse(JSON.stringify(series))
const seriesData = []
const legendData = []

const _xAxisData = ['Start', ...xAxisData, 'End']
const lineColors = ['#50FFCC', '#52D2FF', '#FFFFFFCC']
let lineNum = 0

function getBorderHeight(list = []) {
  const sum = list.reduce((acc, curr) => acc + curr, 0)
  const average = (sum / list.length / 40) * 1.5
  const arr = Array(list.length).fill(average)

  return arr
}

_series.forEach((item, index) => {
  const styleObj = seriesMap[item.key] || {}

  item.data = [item.data[0], ...item.data, item.data[item.data.length - 1]]
  if (item.type === 'line') {
    seriesData.push({
      ...item,
      step: 'middle',
      lineStyle: {
        color: styleObj.itemColor || lineColors[lineNum % lineColors.length],
      },
      itemStyle: {
        color: styleObj.itemColor || lineColors[lineNum % lineColors.length],
        opacity: 0,
      },
      // showBackground: index === 0,
      // backgroundStyle: {
      //   color: 'rgba(255, 255, 255, 0.05)',
      // },
    })

    legendData.push({
      name: item.name,
      icon: 'path://M 0 0 H 10 V 2 H 0 Z',
    })

    lineNum++
  }
  if (item.type === 'bar') {
    if (styleObj.borderColor || (index === 0 && !styleObj.itemColor)) {
      seriesData.push(
        {
          ...item,
          name: '',
          stack: 1,
          barGap: '0',
          barCategoryGap: 5,
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
                      (styleObj.itemColor && styleObj.itemColor[0]) || 'rgba(82, 210, 255, 0.3)',
                  },
                  {
                    offset: 0.5,
                    color: (styleObj.itemColor && styleObj.itemColor[1]) || 'rgba(82, 210, 255, 0)',
                  },
                ],
                false,
              ),
            },
          },
          // showBackground: index === 0,
          // backgroundStyle: {
          //   color: 'rgba(255, 255, 255, 0.05)',
          // },
        },
        {
          type: 'bar',
          name: item.name,
          stack: 1,
          barGap: '0',
          itemStyle: {
            normal: {
              color: styleObj.borderColor || 'rgba(82, 210, 255, 1)',
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
        // showBackground: index === 0,
        // backgroundStyle: {
        //   color: 'rgba(255, 255, 255, 0.05)',
        // },
      })
    }

    legendData.push({
      name: item.name,
      icon: 'path://M 0 0 H 8 V 8 H 0 Z',
    })
  }
})

seriesData.unshift({
  stack: 1,
  type: 'bar',
  name: '',
  // key: 'bar',
  data: [10, 10, 10, 10, 10, 10, 10, 10],
  // itemStyle: { normal: { color: '#0f0' } },
  itemStyle: {
    normal: {
      color: {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        type: 'linear',
        global: false,
        colorStops: [
          { offset: 1, color: 'rgba(255,255,255, 0.5)' },
          { offset: 0.61, color: 'rgba(255,255,255, 0.5)' },
          { offset: 0.6, color: 'rgba(255,255,255, 0)' },
          { offset: 0, color: 'rgba(255,255,255, 0)' },
        ],
      },
    },
  },
  tooltip: { show: false },
})

@Component({
  selector: 'app-line-bar',
  templateUrl: './line-bar.component.html',
  styleUrls: ['./line-bar.component.less'],
})
export class LineBarComponent implements OnInit {
  data: any = data
  color: any = color
  chartOptions: any = {}

  constructor() {
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
        top: 60,
        left: 60,
        right: 60,
        bottom: 40,
        // containLabel: true,
        ...grid,
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          color: '#BABBCA',
          fontSize: 14,
        },
        axisLine: {
          show: false,
          // color: 'rgba(255,255,255,0.5)',
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        // boundaryGap: false,
        data: _xAxisData,
        min: xAxisData[0],
        max: xAxisData[xAxisData.length - 1],
      },
      yAxis: {
        type: 'value',
        splitNumber: 5,
        max: value => {
          return Math.ceil(value.max / 100) * 100
        },
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
            color: 'rgba(198, 198, 198, 0.2)',
          },
        },
      },
      series: seriesData,
    }
  }

  ngOnInit() {}

  getPadding() {
    const { top = 60, right = 60, bottom = 40, left = 60 } = grid || {}
    const padding = [top + 'px', right + 'px', bottom + 'px', left + 'px'].join(' ')

    return padding
  }
}
