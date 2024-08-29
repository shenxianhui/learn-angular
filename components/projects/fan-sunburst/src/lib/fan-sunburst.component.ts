import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';

const $: any = (window as any).$;
const echarts: any = (window as any).echarts;

@Component({
  selector: 'lib-fan-sunburst',
  templateUrl: './fan-sunburst.component.html',
  styleUrls: ['./fan-sunburst.component.styl']
})
export class FanSunburstComponent implements OnInit {

  data: any;
  color: any;
  current: any;
  myChart: any;

  @ViewChild('fansunburst')
  fansunburstDiv: ElementRef

  constructor(private pluginManagerService: PluginManagerService, comData: componentData) {
    // 接收中间件传值
    console.log("comData", comData)
    this.data = comData.configData.data
    this.color = comData.configData.color
  }

  ngOnInit() {
    let chartDom = this.fansunburstDiv.nativeElement
    this.myChart = echarts.init(chartDom)

    this.current = 0
    this.setOption()

    window.addEventListener('resize',()=>{
      if(this.myChart){
        this.myChart.resize()
      }
    })
  }

  setOption(){
    let current = this.current
    let num = this.data[current].num
    let totalNum = this.data[current].totalNum
    
    let option = {
      title: {
        show: true,
        text: ["{b|数量\n}", `{a|${num}} `].join(""),
        textStyle: {
          rich: {
            a: {
              color: "#52d2ff",
              fontSize: 24,
              height: 60
            },
            b: {
              color: "#fff",
              fontSize: 14,
              lineHeight: 14
            }
          }
        },
        left: "center",
        bottom: '23%',
      },
      tooltip: {
        show: false
      },

      series: [
        {
          min: 0,
          max: totalNum,
          radius: '100%',
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          center: ['50%', '75%'],
          axisLine: {
            lineStyle: {
              color: [
                [num / totalNum, new echarts.graphic.LinearGradient(
                  0, 1, 1, 0, [{
                    offset: 0,
                    color: 'rgba(82,210,255,0.3)',
                  },
                  {
                    offset: 1,
                    color: '#52d2ff',
                  }
                ]
                )],
                [num / totalNum + 0.01, 'transparent'],
                [1, new echarts.graphic.LinearGradient(
                  0, 1, 1, 0, [{
                    offset: 0,
                    color: 'rgba(255,255,255,0.80)',
                  },
                  {
                    offset: 1,
                    color: 'rgba(255,255,255,0.3)',
                  }
                ]
                )

                ]
              ],
              width: 20,
            }
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          pointer: {
            show: false
          },
          detail: {
            show: false
          },
          data: []
        },
        {
          // 亮线
          name: '',
          z: 5,
          type: 'pie',
          cursor: 'default',
          radius: ['67%', '67%'],
          center: ['50%', '75%'],
          hoverAnimation: false,
          legendHoverLink: false,
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 1,
              itemStyle: {
                normal: {
                  borderWidth: 3,
                  borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: '#fff'
                    }, {
                      offset: 0.5, color: 'rgba(255,255,255,0)'
                    }],
                    globalCoord: false
                  }
                },
              },
            },
          ],
        },
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          radius: '65%',
          center: ['50%', '75%'],
          axisLine: {
            lineStyle: {
              color: [
                [0, 'rgb(34,46,61)'],
                [1, 'rgb(34,46,61)']
              ],
              width: 50
            }
          },
          splitNumber: 6,
          splitLine: {
            distance: -50,
            length: 51,
            lineStyle: {
              width: 10,
              color: 'rgb(5,26,46)'
            }
          },
          pointer: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          detail: {
            show: false
          },
          data: [{ value: 0, name: '' }]
        },
      ]
    }
    
    option && this.myChart.setOption(option)
  }

  previous(){
    if(this.current <= 0){
      this.current = this.data.length - 1
    }else{
      this.current = this.current - 1
    }
    console.log('点击了上一个',this.current)
    this.setOption()
  }

  next(){
    if(this.data.length <= this.current + 1){
      this.current = 0
    }else{
      this.current = this.current + 1
    }
    console.log('点击了下一个',this.current)
    this.setOption()
  }
}
