import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';

const $: any = (window as any).$;
const echarts: any = (window as any).echarts;
const d3: any = (window as any).d3;

@Component({
  selector: 'lib-theme-area-line',
  templateUrl: './lib-theme-area-line.html',
  styleUrls: ['./lib-theme-area-line.styl']
})
export class ThemeAreaLineComponent implements OnInit {

  data: any;
  color: any;
  svgCur: any;
  resizeTimer: any;

  @ViewChild('themeline')
  themelineDiv: ElementRef

  constructor(private pluginManagerService: PluginManagerService, comData: componentData) {
    // 接收中间件传值
    console.log("comData测试", comData)
    this.data = comData.configData.data
    this.color = comData.configData.color
  }

  ngOnInit() {
    this.initChart()
    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        d3.select(this.themelineDiv.nativeElement).selectAll('svg').remove()
        this.initChart()
      }, 250);
    })
  }

  initChart() {
    const data = this.data.map((obj: any, index: number) => ({ ...obj, x: index + 1 }));

    // Dimensions
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = parseInt(this.themelineDiv.nativeElement.offsetWidth) - margin.left - margin.right;
    const height = parseInt(this.themelineDiv.nativeElement.offsetHeight) - margin.top - margin.bottom;

    // Scales
    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.x) * 1.1])
      .range([0, width]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.num) == 0 ? 220 : d3.max(data, d => d.num) * 1.1])
      .range([height, 0]);

    // Axis
    const xAxis = d3.axisBottom(x)
      .tickValues(d3.range(1, data.length + 1))
      .tickFormat(function (d) {
        return data[d - 1].hour || d
      });

    const yAxis = d3.axisLeft(y)
      .tickValues(y.ticks(4).filter(tick => {
        return tick !== 0
      }))
      .tickSize(-width + 90);


    // Line
    const line = d3.line()
      .x(d => x(d.x))
      .y(d => y(d.num));

    // Area
    const area = d3.area()
      .x(d => x(d.x))
      .y0(height)
      .y1(d => y(d.num));

    // SVG
    // themeline
    const svg = d3.select(this.themelineDiv.nativeElement)
      .append("svg")
      .attr("class", "svg-box")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);
    this.svgCur = svg
    
    let areaColor = this.color.areaColor || 'linear-gradient(rgba(51,165,255,0.20), rgba(51,194,255,0.60))'
    const regex = /rgba\((\d+),(\d+),(\d+),([\d\.]+)\)/g;
    const matches = areaColor.matchAll(regex);
    const colors = [];
    for (const match of matches) {
      colors.push(`rgba(${match[1]},${match[2]},${match[3]},${match[4]})`);
    }

    // 获取唯一ID
    let regexID = /(\d+)/g;
    let matchesID = areaColor.match(regexID).join('')


    // console.log("colors",colors)
    const gradient = svg.append("defs")
      .append("linearGradient")
      .attr("id", `area-gradient-${matchesID}`)
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", 0)
      .attr("y1", y(0))
      .attr("x2", 0)
      .attr("y2", y(d3.max(data, d => d.num) * 1.1));
    gradient.selectAll("stop")
      .data(colors)
      .enter().append("stop")
      .attr("offset", (d, i) => `${i * 100 / (colors.length - 1)}%`)
      .attr("stop-color", d => d);

    // Add X-axis
    svg.append("g")
      .attr("class", "axis")
      .attr("class", "axisx")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    // Add Y-axis
    svg.append("g")
      .attr("class", "axis")
      .call(yAxis)
      .selectAll(".tick line")
      .attr("transform", "translate(55,0)")
      .attr("stroke-dasharray", "10,15");
    // 添加面积
    svg.append("path")
      .datum(data)
      .attr("class", "area")
      .attr("d", area)
      .style("fill", ()=>{
        return `url(#area-gradient-${matchesID})`
      });

    // 添加折线
    svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);

    // Add bars
    svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => x(d.x) - (width / 12) / 2)
      .attr("y", 20)  // tiao
      .attr("width", width / 12)
      .attr("height", height - 20) // tiao
      .style("fill", 'rgba(255, 255, 255, 0.1)')
      .on("mouseover", (event, d) => {
        d3.select(this.themelineDiv.nativeElement).select(`#tooltip-${d.x}`)
          .style("display", "inline");
        d3.select(this.themelineDiv.nativeElement).select(`#dot-${d.x}`)
          .style("display", "inline");// 高亮dot
        d3.select(this.themelineDiv.nativeElement).select(`#vertical-line-${d.x}`)
          .style("display", "inline");
        d3.select(this.themelineDiv.nativeElement).select(`#triangle-${d.x}`)
          .style("display", "inline");
        d3.select(this.themelineDiv.nativeElement).select(`#bottom-bar-${d.x}`)
          .style("fill", () => {
            return this.color.scaleLineColor || "#46B9E6"
          });
        d3.select(event.currentTarget).style("fill", () => {
          return this.color.markLineBgColor || "rgba(255, 255, 255, 0.3)"
        });
      })
      .on("mouseout", (event, d) => {
        d3.select(this.themelineDiv.nativeElement).select(`#tooltip-${d.x}`)
          .style("display", "none");
        d3.select(this.themelineDiv.nativeElement).select(`#vertical-line-${d.x}`)
          .style("display", "none");
        d3.select(this.themelineDiv.nativeElement).select(`#triangle-${d.x}`)
          .style("display", "none");
        d3.select(this.themelineDiv.nativeElement).select(`#bottom-bar-${d.x}`)
          .style("fill", d.x % 2 == 0 ? "#A3A5A9" : "#62686F");
        d3.select(this.themelineDiv.nativeElement).select(`#dot-${d.x}`)
          .style("display", "none");
        d3.select(event.currentTarget).style("fill", "rgba(255, 255, 255, 0.1)");
      });

    // Add vertical lines
    svg.selectAll(".vertical-line")
      .data(data)
      .enter()
      .append("line")
      .style("stroke", () => {
        return this.color.markLineColor || "#46B9E6"
      })
      .attr("class", "vertical-line")
      .attr("id", d => `vertical-line-${d.x}`)
      .attr("x1", d => x(d.x))
      .attr("y1", 20)
      .attr("x2", d => x(d.x))
      .attr("y2", height);

    // Add triangles
    svg.selectAll(".triangle")
      .data(data)
      .enter()
      .append("polygon")
      .attr("class", "triangle")
      .attr("id", d => `triangle-${d.x}`)
      .attr("points", d => `${x(d.x)},30 ${x(d.x) - 5},20 ${x(d.x) + 5},20`);

    // Add data labels
    svg.selectAll(".tooltip")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "tooltip")
      .attr("id", d => `tooltip-${d.x}`)
      .attr("x", d => x(d.x))
      .attr("y", d => 10)
      .html(d => {
        let fill = this.color.scaleLineColor || '#46B9E6'
        return `<tspan style='fill:${fill};'>[ </tspan><tspan>${d.num}</tspan><tspan style='fill:${fill};'> ]</tspan>`
      });

    svg.selectAll(".axis .tick text")
      .style('font-size', '14px')
      .attr("transform", "translate(30,0)");


    // 添加圆点
    svg.selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .style("fill", () => {
        return this.color.dotColor || "#46B9E6"
      })
      .attr("id", d => `dot-${d.x}`)
      .attr("cx", d => x(d.x))
      .attr("cy", d => y(d.num))
      .attr("r", 7);

    svg.selectAll(".bottom-bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("id", d => `bottom-bar-${d.x}`)
      .attr("class", "bottom-bar")
      .attr("x", d => x(d.x) - (width / 10) / 2 + 9)
      .attr("y", height - 2)
      .attr("width", width / 10 - 18)
      .attr("height", 5);

    svg.append("text")
      .attr("class", "x label")
      .attr("text-anchor", "start")
      .attr("x", 0)
      .attr("y", height + margin.top)
      .style("fill", "#FFF")
      .style("font-size", "14px")
      .text("时刻");
  }

}
