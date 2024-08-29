import { Component, OnInit } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
import * as echarts from 'echarts'

@Component({
  selector: "lib-line-bar",
  templateUrl: "./line-bar.component.html",
  styleUrls: ["./line-bar.component.styl"],
})
export class DemoComponent implements OnInit {
  data: any;
  color: any;
  chartOptions: any = {};

  constructor(
    private pluginManagerService: PluginManagerService,
    comData: componentData
  ) {
    // 接收中间件传值
    console.log("comData", comData);
    this.data = comData.configData.data;
    this.color = comData.configData.color;

    const { legend = {}, seriesMap = {} } = this.color;
    const { xAxis = {}, series = [] } = this.data;
    const { data: xAxisData = [] } = xAxis;
    const seriesData = [];

    function getBorderHeight(list = []) {
      const sum = list.reduce((acc, curr) => acc + curr, 0);
      const average = sum / list.length / 40;
      const arr = Array(list.length).fill(average);

      return arr;
    }

    series.forEach((item) => {
      if (item.type === "line") {
        seriesData.push({
          ...item,
          step: true,
        });
      }
      if (item.type === "bar") {
        const styleObj = seriesMap[item.key] || {};

        if (styleObj.borderColor) {
          seriesData.push(
            {
              ...item,
              stack: 1,
              barGap: "0",
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
                        color: styleObj.itemColor[0],
                      },
                      {
                        offset: 1,
                        color: styleObj.itemColor[1],
                      },
                    ],
                    false
                  ),
                },
              },
            },
            {
              type: "bar",
              name: "",
              stack: 1,
              barGap: "0",
              itemStyle: {
                normal: {
                  color: styleObj.borderColor,
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
            }
          );
        } else {
          seriesData.unshift({
            ...item,
            stack: 1,
          });
        }
      }
    });

    this.chartOptions = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        icon: "rect",
        itemWidth: 10,
        itemHeight: 2,
        itemGap: 18,
        ...legend,
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        axisLabel: {
          color: "#BABBCA",
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
        type: "value",
        nameTextStyle: {
          fontSize: 14,
          color: "#BABBCA",
        },
        axisLabel: {
          width: 20,
          fontSize: 14,
          color: "#BABBCA",
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "rgba(198, 198, 198, 0.40)",
          },
        },
      },
      series: seriesData,
    };
  }

  ngOnInit() {}
}