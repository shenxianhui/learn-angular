import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import * as echarts from 'echarts'
import schema from './schema.json'

interface Format {
  data: any
}

const { sampleCode, data: data_json } = schema
const { format = {} as Format } = data_json || {}
const { data = {} } = format
const color_json = sampleCode.replace(/'/g, '"') || '{}'
const color = JSON.parse(color_json)

const { legend = {}, seriesMap = {} } = color
const { xAxis = {}, series = [], yAxis = [] } = data
const { data: xAxisData = [] } = xAxis
const seriesData = []

function getBorderHeight(list1 = [], list2 = []) {
  const max = Math.max(Math.max.apply(null, list1), Math.max.apply(null, list2))
  let min = Math.min(Math.min.apply(null, list1), Math.min.apply(null, list2))
  const cmax = Math.max.apply(null, list1)
  let scale = 1

  if (cmax < max) {
    scale = max / cmax
  }

  // 防止除零错误
  if (min === 0) {
    min = 1
  }

  // 计算高度比例的系数
  const heightRatio = 0.08

  // 计算边框高度
  let borderHeight = (max - min) * heightRatio

  if (cmax < max) {
    borderHeight = ((max - min) * heightRatio) / scale
  }

  return Array(list1.length).fill(borderHeight)
}

series.forEach((item, index) => {
  const styleObj = seriesMap[item.key] || {}

  seriesData.push(
    {
      ...item,
      name: '',
      barGap: '0',
      borderWidth: 0,
      itemStyle: {
        normal: {
          color: styleObj.borderColor || 'rgba(82, 210, 255, 1)',
          opacity: 0.2,
        },
      },
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(255, 255, 255, 0.03)',
      },
    },
    {
      type: 'bar',
      name: item.name,
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
      data:
        index === 0
          ? getBorderHeight(series[0].data, series[1].data)
          : getBorderHeight(series[1].data, series[0].data),
      tooltip: {
        show: false,
      },
    },
  )
})

@Component({
  selector: 'app-double-bar',
  templateUrl: './double-bar.component.html',
  styleUrls: ['./double-bar.component.less'],
})
export class DoubleBarComponent implements OnInit {
  @ViewChild('chart')
  chartDom: ElementRef
  data: any = data
  color: any = color
  chartOptions: any = {}

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      const containerHeight = this.chartDom.nativeElement.offsetHeight
      const gridHeight = (containerHeight - 108) / 2

      this.chartOptions = {
        legend: {
          icon: 'rect',
          itemWidth: 10,
          itemHeight: 2,
          itemGap: 18,
          textStyle: {
            color: '#fff',
          },
          top: 20,
          right: 20,
          ...legend,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: [
          {
            left: 50,
            top: 40,
            right: 20,
            bottom: null,
            containLabel: false,
            height: gridHeight,
          },
          {
            left: 50,
            top: null,
            right: 20,
            bottom: 40,
            containLabel: false,
            height: gridHeight,
          },
        ],
        xAxis: [
          {
            name: '日期',
            type: 'category',
            nameLocation: 'start',
            nameTextStyle: {
              fontSize: 14,
              color: '#fff',
              padding: [30, 0, 0, 0],
            },
            axisLabel: {
              color: '#fff',
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
            data: xAxisData,
            boundaryGap: true,
            gridIndex: 0,
          },
          {
            name: '',
            type: 'category',
            axisTick: {
              show: false,
            },
            axisLine: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            data: xAxisData,
            boundaryGap: true,
            gridIndex: 1,
          },
        ],
        yAxis: [
          {
            name: (yAxis[0] && yAxis[0].name) || (series[0] && series[0].name),
            type: 'value',
            nameTextStyle: {
              fontSize: 14,
              color: '#fff',
              padding: [0, 20, 2, 0],
            },
            axisLabel: {
              width: 20,
              fontSize: 14,
              color: '#fff',
              formatter: function (value) {
                return value === 0 ? '' : value
              },
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
            gridIndex: 0,
          },
          {
            name: (yAxis[1] && yAxis[1].name) || (series[1] && series[1].name),
            type: 'value',
            nameTextStyle: {
              fontSize: 14,
              color: '#fff',
              padding: [2, 20, 0, 0],
            },
            axisLabel: {
              width: 20,
              fontSize: 14,
              color: '#fff',
              formatter: function (value) {
                return value === 0 ? '' : value
              },
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
            gridIndex: 1,
            inverse: true,
          },
        ],
        series: [
          {
            smooth: true,
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            stack: 'up',
            ...(seriesData[0] || {}),
          },
          {
            smooth: true,
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            stack: 'up',
            ...(seriesData[1] || {}),
          },
          {
            smooth: true,
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            stack: 'down',
            ...(seriesData[2] || {}),
          },
          {
            smooth: true,
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            stack: 'down',
            ...(seriesData[3] || {}),
          },
        ],
      }
    }, 200)
  }
}
