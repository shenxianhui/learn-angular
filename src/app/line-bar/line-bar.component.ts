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
const seriesData = []
const legendData = []

function getBorderHeight(list = []) {
  const sum = list.reduce((acc, curr) => acc + curr, 0)
  const average = (sum / list.length / 40) * 1.5
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
          name: '',
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
                      (styleObj.itemColor && styleObj.itemColor[0]) || 'rgba(82, 210, 255, 0.3)',
                  },
                  {
                    offset: 0.3,
                    color: (styleObj.itemColor && styleObj.itemColor[1]) || 'rgba(82, 210, 255, 0)',
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
  data: any = data
  color: any = color
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
