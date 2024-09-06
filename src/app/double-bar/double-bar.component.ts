import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import * as echarts from 'echarts'
import { json_data } from './data.json'
import { fn } from '@angular/compiler/src/output/output_ast'

const { data_json = {}, color_json = {} } = json_data
const { data = {} } = data_json
const { legend = {}, seriesMap = {} } = color_json
const { xAxis = {}, series = [] } = data
const { data: xAxisData = [] } = xAxis
const seriesData = []

function getBorderHeight(list = []) {
  const sum = list.reduce((acc, curr) => acc + curr, 0)
  const average = (sum / list.length / 40) * 1.5
  const arr = Array(list.length).fill(average)

  return arr
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
          opacity: 0.5,
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
      data: getBorderHeight(item.data),
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
  data: any = {}
  color: any = {}
  chartOptions: any = {}

  constructor() {
    this.data = data
    this.color = color_json
  }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      console.log(seriesData)
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
            name: '',
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
            name: series[0] && series[0].name,
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
            gridIndex: 0,
          },
          {
            name: series[1] && series[1].name,
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
