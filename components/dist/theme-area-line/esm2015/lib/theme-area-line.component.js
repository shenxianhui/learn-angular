/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
/** @type {?} */
const $ = ((/** @type {?} */ (window))).$;
/** @type {?} */
const echarts = ((/** @type {?} */ (window))).echarts;
/** @type {?} */
const d3 = ((/** @type {?} */ (window))).d3;
export class ThemeAreaLineComponent {
    /**
     * @param {?} pluginManagerService
     * @param {?} comData
     */
    constructor(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // 接收中间件传值
        console.log("comData测试", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initChart();
        window.addEventListener('resize', (/**
         * @return {?}
         */
        () => {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout((/**
             * @return {?}
             */
            () => {
                d3.select(this.themelineDiv.nativeElement).selectAll('svg').remove();
                this.initChart();
            }), 250);
        }));
    }
    /**
     * @return {?}
     */
    initChart() {
        /** @type {?} */
        const data = this.data.map((/**
         * @param {?} obj
         * @param {?} index
         * @return {?}
         */
        (obj, index) => (Object.assign({}, obj, { x: index + 1 }))));
        // Dimensions
        /** @type {?} */
        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        /** @type {?} */
        const width = parseInt(this.themelineDiv.nativeElement.offsetWidth) - margin.left - margin.right;
        /** @type {?} */
        const height = parseInt(this.themelineDiv.nativeElement.offsetHeight) - margin.top - margin.bottom;
        // Scales
        /** @type {?} */
        const x = d3.scaleLinear()
            .domain([0, d3.max(data, (/**
             * @param {?} d
             * @return {?}
             */
            d => d.x)) * 1.1])
            .range([0, width]);
        /** @type {?} */
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, (/**
             * @param {?} d
             * @return {?}
             */
            d => d.num)) == 0 ? 220 : d3.max(data, (/**
             * @param {?} d
             * @return {?}
             */
            d => d.num)) * 1.1])
            .range([height, 0]);
        // Axis
        /** @type {?} */
        const xAxis = d3.axisBottom(x)
            .tickValues(d3.range(1, data.length + 1))
            .tickFormat((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            return data[d - 1].hour || d;
        }));
        /** @type {?} */
        const yAxis = d3.axisLeft(y)
            .tickValues(y.ticks(4).filter((/**
         * @param {?} tick
         * @return {?}
         */
        tick => {
            return tick !== 0;
        })))
            .tickSize(-width + 90);
        // Line
        /** @type {?} */
        const line = d3.line()
            .x((/**
         * @param {?} d
         * @return {?}
         */
        d => x(d.x)))
            .y((/**
         * @param {?} d
         * @return {?}
         */
        d => y(d.num)));
        // Area
        /** @type {?} */
        const area = d3.area()
            .x((/**
         * @param {?} d
         * @return {?}
         */
        d => x(d.x)))
            .y0(height)
            .y1((/**
         * @param {?} d
         * @return {?}
         */
        d => y(d.num)));
        // SVG
        // themeline
        /** @type {?} */
        const svg = d3.select(this.themelineDiv.nativeElement)
            .append("svg")
            .attr("class", "svg-box")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`);
        this.svgCur = svg;
        /** @type {?} */
        let areaColor = this.color.areaColor || 'linear-gradient(rgba(51,165,255,0.20), rgba(51,194,255,0.60))';
        /** @type {?} */
        const regex = /rgba\((\d+),(\d+),(\d+),([\d\.]+)\)/g;
        /** @type {?} */
        const matches = areaColor.matchAll(regex);
        /** @type {?} */
        const colors = [];
        for (const match of matches) {
            colors.push(`rgba(${match[1]},${match[2]},${match[3]},${match[4]})`);
        }
        // 获取唯一ID
        /** @type {?} */
        let regexID = /(\d+)/g;
        /** @type {?} */
        let matchesID = areaColor.match(regexID).join('')
        // console.log("colors",colors)
        ;
        // console.log("colors",colors)
        /** @type {?} */
        const gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", `area-gradient-${matchesID}`)
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0)
            .attr("y1", y(0))
            .attr("x2", 0)
            .attr("y2", y(d3.max(data, (/**
         * @param {?} d
         * @return {?}
         */
        d => d.num)) * 1.1));
        gradient.selectAll("stop")
            .data(colors)
            .enter().append("stop")
            .attr("offset", (/**
         * @param {?} d
         * @param {?} i
         * @return {?}
         */
        (d, i) => `${i * 100 / (colors.length - 1)}%`))
            .attr("stop-color", (/**
         * @param {?} d
         * @return {?}
         */
        d => d));
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
            .style("fill", (/**
         * @return {?}
         */
        () => {
            return `url(#area-gradient-${matchesID})`;
        }));
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
            .attr("x", (/**
         * @param {?} d
         * @return {?}
         */
        d => x(d.x) - (width / 12) / 2))
            .attr("y", 20) // tiao
            .attr("width", width / 12)
            .attr("height", height - 20) // tiao
            .style("fill", 'rgba(255, 255, 255, 0.1)')
            .on("mouseover", (/**
         * @param {?} event
         * @param {?} d
         * @return {?}
         */
        (event, d) => {
            d3.select(this.themelineDiv.nativeElement).select(`#tooltip-${d.x}`)
                .style("display", "inline");
            d3.select(this.themelineDiv.nativeElement).select(`#dot-${d.x}`)
                .style("display", "inline"); // 高亮dot
            d3.select(this.themelineDiv.nativeElement).select(`#vertical-line-${d.x}`)
                .style("display", "inline");
            d3.select(this.themelineDiv.nativeElement).select(`#triangle-${d.x}`)
                .style("display", "inline");
            d3.select(this.themelineDiv.nativeElement).select(`#bottom-bar-${d.x}`)
                .style("fill", (/**
             * @return {?}
             */
            () => {
                return this.color.scaleLineColor || "#46B9E6";
            }));
            d3.select(event.currentTarget).style("fill", (/**
             * @return {?}
             */
            () => {
                return this.color.markLineBgColor || "rgba(255, 255, 255, 0.3)";
            }));
        }))
            .on("mouseout", (/**
         * @param {?} event
         * @param {?} d
         * @return {?}
         */
        (event, d) => {
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
        }));
        // Add vertical lines
        svg.selectAll(".vertical-line")
            .data(data)
            .enter()
            .append("line")
            .style("stroke", (/**
         * @return {?}
         */
        () => {
            return this.color.markLineColor || "#46B9E6";
        }))
            .attr("class", "vertical-line")
            .attr("id", (/**
         * @param {?} d
         * @return {?}
         */
        d => `vertical-line-${d.x}`))
            .attr("x1", (/**
         * @param {?} d
         * @return {?}
         */
        d => x(d.x)))
            .attr("y1", 20)
            .attr("x2", (/**
         * @param {?} d
         * @return {?}
         */
        d => x(d.x)))
            .attr("y2", height);
        // Add triangles
        svg.selectAll(".triangle")
            .data(data)
            .enter()
            .append("polygon")
            .attr("class", "triangle")
            .attr("id", (/**
         * @param {?} d
         * @return {?}
         */
        d => `triangle-${d.x}`))
            .attr("points", (/**
         * @param {?} d
         * @return {?}
         */
        d => `${x(d.x)},30 ${x(d.x) - 5},20 ${x(d.x) + 5},20`));
        // Add data labels
        svg.selectAll(".tooltip")
            .data(data)
            .enter()
            .append("text")
            .attr("class", "tooltip")
            .attr("id", (/**
         * @param {?} d
         * @return {?}
         */
        d => `tooltip-${d.x}`))
            .attr("x", (/**
         * @param {?} d
         * @return {?}
         */
        d => x(d.x)))
            .attr("y", (/**
         * @param {?} d
         * @return {?}
         */
        d => 10))
            .html((/**
         * @param {?} d
         * @return {?}
         */
        d => {
            /** @type {?} */
            let fill = this.color.scaleLineColor || '#46B9E6';
            return `<tspan style='fill:${fill};'>[ </tspan><tspan>${d.num}</tspan><tspan style='fill:${fill};'> ]</tspan>`;
        }));
        svg.selectAll(".axis .tick text")
            .style('font-size', '14px')
            .attr("transform", "translate(30,0)");
        // 添加圆点
        svg.selectAll(".dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "dot")
            .style("fill", (/**
         * @return {?}
         */
        () => {
            return this.color.dotColor || "#46B9E6";
        }))
            .attr("id", (/**
         * @param {?} d
         * @return {?}
         */
        d => `dot-${d.x}`))
            .attr("cx", (/**
         * @param {?} d
         * @return {?}
         */
        d => x(d.x)))
            .attr("cy", (/**
         * @param {?} d
         * @return {?}
         */
        d => y(d.num)))
            .attr("r", 7);
        svg.selectAll(".bottom-bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("id", (/**
         * @param {?} d
         * @return {?}
         */
        d => `bottom-bar-${d.x}`))
            .attr("class", "bottom-bar")
            .attr("x", (/**
         * @param {?} d
         * @return {?}
         */
        d => x(d.x) - (width / 10) / 2 + 9))
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
ThemeAreaLineComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-theme-area-line',
                template: "<div class=\"theme-line-box\" #themeline></div>",
                styles: [".theme-line-box{width:100%;height:100%;color:#fff}/deep/ .line{fill:none;stroke:#4682b4;stroke-width:2px}/deep/ .axisx{font-size:14px}/deep/ .axisx line{display:none}/deep/ .dot{display:none}/deep/ .tooltip{display:none;font-family:sans-serif;font-size:14px;fill:#fff;text-anchor:middle}/deep/ .axis path{display:none}/deep/ .data-label{font-family:sans-serif;font-size:11px;text-anchor:middle;display:none}/deep/ .vertical-line{display:none;stroke-width:1px}/deep/ .triangle{display:none;fill:#46b9e6}/deep/ .bottom-bar{fill:#a3a5a9}/deep/ .bottom-bar:nth-child(odd){fill:#62686f}/deep/ .axisx path{stroke:none}"]
            }] }
];
/** @nocollapse */
ThemeAreaLineComponent.ctorParameters = () => [
    { type: PluginManagerService },
    { type: componentData }
];
ThemeAreaLineComponent.propDecorators = {
    themelineDiv: [{ type: ViewChild, args: ['themeline',] }]
};
if (false) {
    /** @type {?} */
    ThemeAreaLineComponent.prototype.data;
    /** @type {?} */
    ThemeAreaLineComponent.prototype.color;
    /** @type {?} */
    ThemeAreaLineComponent.prototype.svgCur;
    /** @type {?} */
    ThemeAreaLineComponent.prototype.resizeTimer;
    /** @type {?} */
    ThemeAreaLineComponent.prototype.themelineDiv;
    /**
     * @type {?}
     * @private
     */
    ThemeAreaLineComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYXJlYS1saW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RoZW1lLWFyZWEtbGluZS8iLCJzb3VyY2VzIjpbImxpYi90aGVtZS1hcmVhLWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUUvRCxDQUFDLEdBQVEsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLENBQUM7O01BQzFCLE9BQU8sR0FBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsT0FBTzs7TUFDdEMsRUFBRSxHQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxFQUFFO0FBT2xDLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBVWpDLFlBQW9CLG9CQUEwQyxFQUFFLE9BQXNCO1FBQWxFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDNUQsVUFBVTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUE7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQTtJQUN2QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNoQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUTs7O1FBQUUsR0FBRyxFQUFFO1lBQ3JDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2pDLEVB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O1lBVlEsb0JBQW9CO1lBQUUsYUFBYTs7OzJCQWtCekMsU0FBUyxTQUFDLFdBQVc7Ozs7SUFMdEIsc0NBQVU7O0lBQ1YsdUNBQVc7O0lBQ1gsd0NBQVk7O0lBQ1osNkNBQWlCOztJQUVqQiw4Q0FDd0I7Ozs7O0lBRVosc0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luTWFuYWdlclNlcnZpY2UsIGNvbXBvbmVudERhdGEgfSBmcm9tICdwbHVnaW4tbWFuYWdlcic7XG5cbmNvbnN0ICQ6IGFueSA9ICh3aW5kb3cgYXMgYW55KS4kO1xuY29uc3QgZWNoYXJ0czogYW55ID0gKHdpbmRvdyBhcyBhbnkpLmVjaGFydHM7XG5jb25zdCBkMzogYW55ID0gKHdpbmRvdyBhcyBhbnkpLmQzO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItdGhlbWUtYXJlYS1saW5lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpYi10aGVtZS1hcmVhLWxpbmUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpYi10aGVtZS1hcmVhLWxpbmUuc3R5bCddXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lQXJlYUxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcbiAgc3ZnQ3VyOiBhbnk7XG4gIHJlc2l6ZVRpbWVyOiBhbnk7XG5cbiAgQFZpZXdDaGlsZCgndGhlbWVsaW5lJylcbiAgdGhlbWVsaW5lRGl2OiBFbGVtZW50UmVmXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbHVnaW5NYW5hZ2VyU2VydmljZTogUGx1Z2luTWFuYWdlclNlcnZpY2UsIGNvbURhdGE6IGNvbXBvbmVudERhdGEpIHtcbiAgICAvLyDmjqXmlLbkuK3pl7Tku7bkvKDlgLxcbiAgICBjb25zb2xlLmxvZyhcImNvbURhdGHmtYvor5VcIiwgY29tRGF0YSlcbiAgICB0aGlzLmRhdGEgPSBjb21EYXRhLmNvbmZpZ0RhdGEuZGF0YVxuICAgIHRoaXMuY29sb3IgPSBjb21EYXRhLmNvbmZpZ0RhdGEuY29sb3JcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdENoYXJ0KClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpXG4gICAgICB0aGlzLnJlc2l6ZVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzLnRoZW1lbGluZURpdi5uYXRpdmVFbGVtZW50KS5zZWxlY3RBbGwoJ3N2ZycpLnJlbW92ZSgpXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KClcbiAgICAgIH0sIDI1MCk7XG4gICAgfSlcbiAgfVxuXG4gIGluaXRDaGFydCgpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhLm1hcCgob2JqOiBhbnksIGluZGV4OiBudW1iZXIpID0+ICh7IC4uLm9iaiwgeDogaW5kZXggKyAxIH0pKTtcblxuICAgIC8vIERpbWVuc2lvbnNcbiAgICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiAzMCwgbGVmdDogNTAgfTtcbiAgICBjb25zdCB3aWR0aCA9IHBhcnNlSW50KHRoaXMudGhlbWVsaW5lRGl2Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgpIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VJbnQodGhpcy50aGVtZWxpbmVEaXYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQpIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgICAvLyBTY2FsZXNcbiAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGQgPT4gZC54KSAqIDEuMV0pXG4gICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEsIGQgPT4gZC5udW0pID09IDAgPyAyMjAgOiBkMy5tYXgoZGF0YSwgZCA9PiBkLm51bSkgKiAxLjFdKVxuICAgICAgLnJhbmdlKFtoZWlnaHQsIDBdKTtcblxuICAgIC8vIEF4aXNcbiAgICBjb25zdCB4QXhpcyA9IGQzLmF4aXNCb3R0b20oeClcbiAgICAgIC50aWNrVmFsdWVzKGQzLnJhbmdlKDEsIGRhdGEubGVuZ3RoICsgMSkpXG4gICAgICAudGlja0Zvcm1hdChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZGF0YVtkIC0gMV0uaG91ciB8fCBkXG4gICAgICB9KTtcblxuICAgIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoeSlcbiAgICAgIC50aWNrVmFsdWVzKHkudGlja3MoNCkuZmlsdGVyKHRpY2sgPT4ge1xuICAgICAgICByZXR1cm4gdGljayAhPT0gMFxuICAgICAgfSkpXG4gICAgICAudGlja1NpemUoLXdpZHRoICsgOTApO1xuXG5cbiAgICAvLyBMaW5lXG4gICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgICAgLngoZCA9PiB4KGQueCkpXG4gICAgICAueShkID0+IHkoZC5udW0pKTtcblxuICAgIC8vIEFyZWFcbiAgICBjb25zdCBhcmVhID0gZDMuYXJlYSgpXG4gICAgICAueChkID0+IHgoZC54KSlcbiAgICAgIC55MChoZWlnaHQpXG4gICAgICAueTEoZCA9PiB5KGQubnVtKSk7XG5cbiAgICAvLyBTVkdcbiAgICAvLyB0aGVtZWxpbmVcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QodGhpcy50aGVtZWxpbmVEaXYubmF0aXZlRWxlbWVudClcbiAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJzdmctYm94XCIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbSlcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWApO1xuICAgIHRoaXMuc3ZnQ3VyID0gc3ZnXG4gICAgXG4gICAgbGV0IGFyZWFDb2xvciA9IHRoaXMuY29sb3IuYXJlYUNvbG9yIHx8ICdsaW5lYXItZ3JhZGllbnQocmdiYSg1MSwxNjUsMjU1LDAuMjApLCByZ2JhKDUxLDE5NCwyNTUsMC42MCkpJ1xuICAgIGNvbnN0IHJlZ2V4ID0gL3JnYmFcXCgoXFxkKyksKFxcZCspLChcXGQrKSwoW1xcZFxcLl0rKVxcKS9nO1xuICAgIGNvbnN0IG1hdGNoZXMgPSBhcmVhQ29sb3IubWF0Y2hBbGwocmVnZXgpO1xuICAgIGNvbnN0IGNvbG9ycyA9IFtdO1xuICAgIGZvciAoY29uc3QgbWF0Y2ggb2YgbWF0Y2hlcykge1xuICAgICAgY29sb3JzLnB1c2goYHJnYmEoJHttYXRjaFsxXX0sJHttYXRjaFsyXX0sJHttYXRjaFszXX0sJHttYXRjaFs0XX0pYCk7XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5ZSv5LiASURcbiAgICBsZXQgcmVnZXhJRCA9IC8oXFxkKykvZztcbiAgICBsZXQgbWF0Y2hlc0lEID0gYXJlYUNvbG9yLm1hdGNoKHJlZ2V4SUQpLmpvaW4oJycpXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKFwiY29sb3JzXCIsY29sb3JzKVxuICAgIGNvbnN0IGdyYWRpZW50ID0gc3ZnLmFwcGVuZChcImRlZnNcIilcbiAgICAgIC5hcHBlbmQoXCJsaW5lYXJHcmFkaWVudFwiKVxuICAgICAgLmF0dHIoXCJpZFwiLCBgYXJlYS1ncmFkaWVudC0ke21hdGNoZXNJRH1gKVxuICAgICAgLmF0dHIoXCJncmFkaWVudFVuaXRzXCIsIFwidXNlclNwYWNlT25Vc2VcIilcbiAgICAgIC5hdHRyKFwieDFcIiwgMClcbiAgICAgIC5hdHRyKFwieTFcIiwgeSgwKSlcbiAgICAgIC5hdHRyKFwieDJcIiwgMClcbiAgICAgIC5hdHRyKFwieTJcIiwgeShkMy5tYXgoZGF0YSwgZCA9PiBkLm51bSkgKiAxLjEpKTtcbiAgICBncmFkaWVudC5zZWxlY3RBbGwoXCJzdG9wXCIpXG4gICAgICAuZGF0YShjb2xvcnMpXG4gICAgICAuZW50ZXIoKS5hcHBlbmQoXCJzdG9wXCIpXG4gICAgICAuYXR0cihcIm9mZnNldFwiLCAoZCwgaSkgPT4gYCR7aSAqIDEwMCAvIChjb2xvcnMubGVuZ3RoIC0gMSl9JWApXG4gICAgICAuYXR0cihcInN0b3AtY29sb3JcIiwgZCA9PiBkKTtcblxuICAgIC8vIEFkZCBYLWF4aXNcbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzeFwiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke2hlaWdodH0pYClcbiAgICAgIC5jYWxsKHhBeGlzKTtcblxuICAgIC8vIEFkZCBZLWF4aXNcbiAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgIC5jYWxsKHlBeGlzKVxuICAgICAgLnNlbGVjdEFsbChcIi50aWNrIGxpbmVcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDU1LDApXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS1kYXNoYXJyYXlcIiwgXCIxMCwxNVwiKTtcbiAgICAvLyDmt7vliqDpnaLnp69cbiAgICBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmRhdHVtKGRhdGEpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJlYVwiKVxuICAgICAgLmF0dHIoXCJkXCIsIGFyZWEpXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsICgpPT57XG4gICAgICAgIHJldHVybiBgdXJsKCNhcmVhLWdyYWRpZW50LSR7bWF0Y2hlc0lEfSlgXG4gICAgICB9KTtcblxuICAgIC8vIOa3u+WKoOaKmOe6v1xuICAgIHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuZGF0dW0oZGF0YSlcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsaW5lXCIpXG4gICAgICAuYXR0cihcImRcIiwgbGluZSk7XG5cbiAgICAvLyBBZGQgYmFyc1xuICAgIHN2Zy5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgICAuZGF0YShkYXRhKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYmFyXCIpXG4gICAgICAuYXR0cihcInhcIiwgZCA9PiB4KGQueCkgLSAod2lkdGggLyAxMikgLyAyKVxuICAgICAgLmF0dHIoXCJ5XCIsIDIwKSAgLy8gdGlhb1xuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCAvIDEyKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0IC0gMjApIC8vIHRpYW9cbiAgICAgIC5zdHlsZShcImZpbGxcIiwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKScpXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGV2ZW50LCBkKSA9PiB7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzLnRoZW1lbGluZURpdi5uYXRpdmVFbGVtZW50KS5zZWxlY3QoYCN0b29sdGlwLSR7ZC54fWApXG4gICAgICAgICAgLnN0eWxlKFwiZGlzcGxheVwiLCBcImlubGluZVwiKTtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMudGhlbWVsaW5lRGl2Lm5hdGl2ZUVsZW1lbnQpLnNlbGVjdChgI2RvdC0ke2QueH1gKVxuICAgICAgICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJpbmxpbmVcIik7Ly8g6auY5LquZG90XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzLnRoZW1lbGluZURpdi5uYXRpdmVFbGVtZW50KS5zZWxlY3QoYCN2ZXJ0aWNhbC1saW5lLSR7ZC54fWApXG4gICAgICAgICAgLnN0eWxlKFwiZGlzcGxheVwiLCBcImlubGluZVwiKTtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMudGhlbWVsaW5lRGl2Lm5hdGl2ZUVsZW1lbnQpLnNlbGVjdChgI3RyaWFuZ2xlLSR7ZC54fWApXG4gICAgICAgICAgLnN0eWxlKFwiZGlzcGxheVwiLCBcImlubGluZVwiKTtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMudGhlbWVsaW5lRGl2Lm5hdGl2ZUVsZW1lbnQpLnNlbGVjdChgI2JvdHRvbS1iYXItJHtkLnh9YClcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yLnNjYWxlTGluZUNvbG9yIHx8IFwiIzQ2QjlFNlwiXG4gICAgICAgICAgfSk7XG4gICAgICAgIGQzLnNlbGVjdChldmVudC5jdXJyZW50VGFyZ2V0KS5zdHlsZShcImZpbGxcIiwgKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvbG9yLm1hcmtMaW5lQmdDb2xvciB8fCBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKVwiXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsIChldmVudCwgZCkgPT4ge1xuICAgICAgICBkMy5zZWxlY3QodGhpcy50aGVtZWxpbmVEaXYubmF0aXZlRWxlbWVudCkuc2VsZWN0KGAjdG9vbHRpcC0ke2QueH1gKVxuICAgICAgICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBkMy5zZWxlY3QodGhpcy50aGVtZWxpbmVEaXYubmF0aXZlRWxlbWVudCkuc2VsZWN0KGAjdmVydGljYWwtbGluZS0ke2QueH1gKVxuICAgICAgICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBkMy5zZWxlY3QodGhpcy50aGVtZWxpbmVEaXYubmF0aXZlRWxlbWVudCkuc2VsZWN0KGAjdHJpYW5nbGUtJHtkLnh9YClcbiAgICAgICAgICAuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMudGhlbWVsaW5lRGl2Lm5hdGl2ZUVsZW1lbnQpLnNlbGVjdChgI2JvdHRvbS1iYXItJHtkLnh9YClcbiAgICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIGQueCAlIDIgPT0gMCA/IFwiI0EzQTVBOVwiIDogXCIjNjI2ODZGXCIpO1xuICAgICAgICBkMy5zZWxlY3QodGhpcy50aGVtZWxpbmVEaXYubmF0aXZlRWxlbWVudCkuc2VsZWN0KGAjZG90LSR7ZC54fWApXG4gICAgICAgICAgLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIGQzLnNlbGVjdChldmVudC5jdXJyZW50VGFyZ2V0KS5zdHlsZShcImZpbGxcIiwgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSlcIik7XG4gICAgICB9KTtcblxuICAgIC8vIEFkZCB2ZXJ0aWNhbCBsaW5lc1xuICAgIHN2Zy5zZWxlY3RBbGwoXCIudmVydGljYWwtbGluZVwiKVxuICAgICAgLmRhdGEoZGF0YSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwibGluZVwiKVxuICAgICAgLnN0eWxlKFwic3Ryb2tlXCIsICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3IubWFya0xpbmVDb2xvciB8fCBcIiM0NkI5RTZcIlxuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ2ZXJ0aWNhbC1saW5lXCIpXG4gICAgICAuYXR0cihcImlkXCIsIGQgPT4gYHZlcnRpY2FsLWxpbmUtJHtkLnh9YClcbiAgICAgIC5hdHRyKFwieDFcIiwgZCA9PiB4KGQueCkpXG4gICAgICAuYXR0cihcInkxXCIsIDIwKVxuICAgICAgLmF0dHIoXCJ4MlwiLCBkID0+IHgoZC54KSlcbiAgICAgIC5hdHRyKFwieTJcIiwgaGVpZ2h0KTtcblxuICAgIC8vIEFkZCB0cmlhbmdsZXNcbiAgICBzdmcuc2VsZWN0QWxsKFwiLnRyaWFuZ2xlXCIpXG4gICAgICAuZGF0YShkYXRhKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwb2x5Z29uXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidHJpYW5nbGVcIilcbiAgICAgIC5hdHRyKFwiaWRcIiwgZCA9PiBgdHJpYW5nbGUtJHtkLnh9YClcbiAgICAgIC5hdHRyKFwicG9pbnRzXCIsIGQgPT4gYCR7eChkLngpfSwzMCAke3goZC54KSAtIDV9LDIwICR7eChkLngpICsgNX0sMjBgKTtcblxuICAgIC8vIEFkZCBkYXRhIGxhYmVsc1xuICAgIHN2Zy5zZWxlY3RBbGwoXCIudG9vbHRpcFwiKVxuICAgICAgLmRhdGEoZGF0YSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRvb2x0aXBcIilcbiAgICAgIC5hdHRyKFwiaWRcIiwgZCA9PiBgdG9vbHRpcC0ke2QueH1gKVxuICAgICAgLmF0dHIoXCJ4XCIsIGQgPT4geChkLngpKVxuICAgICAgLmF0dHIoXCJ5XCIsIGQgPT4gMTApXG4gICAgICAuaHRtbChkID0+IHtcbiAgICAgICAgbGV0IGZpbGwgPSB0aGlzLmNvbG9yLnNjYWxlTGluZUNvbG9yIHx8ICcjNDZCOUU2J1xuICAgICAgICByZXR1cm4gYDx0c3BhbiBzdHlsZT0nZmlsbDoke2ZpbGx9Oyc+WyA8L3RzcGFuPjx0c3Bhbj4ke2QubnVtfTwvdHNwYW4+PHRzcGFuIHN0eWxlPSdmaWxsOiR7ZmlsbH07Jz4gXTwvdHNwYW4+YFxuICAgICAgfSk7XG5cbiAgICBzdmcuc2VsZWN0QWxsKFwiLmF4aXMgLnRpY2sgdGV4dFwiKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTRweCcpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgzMCwwKVwiKTtcblxuXG4gICAgLy8g5re75Yqg5ZyG54K5XG4gICAgc3ZnLnNlbGVjdEFsbChcIi5kb3RcIilcbiAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImRvdFwiKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yLmRvdENvbG9yIHx8IFwiIzQ2QjlFNlwiXG4gICAgICB9KVxuICAgICAgLmF0dHIoXCJpZFwiLCBkID0+IGBkb3QtJHtkLnh9YClcbiAgICAgIC5hdHRyKFwiY3hcIiwgZCA9PiB4KGQueCkpXG4gICAgICAuYXR0cihcImN5XCIsIGQgPT4geShkLm51bSkpXG4gICAgICAuYXR0cihcInJcIiwgNyk7XG5cbiAgICBzdmcuc2VsZWN0QWxsKFwiLmJvdHRvbS1iYXJcIilcbiAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgIC5hdHRyKFwiaWRcIiwgZCA9PiBgYm90dG9tLWJhci0ke2QueH1gKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJvdHRvbS1iYXJcIilcbiAgICAgIC5hdHRyKFwieFwiLCBkID0+IHgoZC54KSAtICh3aWR0aCAvIDEwKSAvIDIgKyA5KVxuICAgICAgLmF0dHIoXCJ5XCIsIGhlaWdodCAtIDIpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoIC8gMTAgLSAxOClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDUpO1xuXG4gICAgc3ZnLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4IGxhYmVsXCIpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwic3RhcnRcIilcbiAgICAgIC5hdHRyKFwieFwiLCAwKVxuICAgICAgLmF0dHIoXCJ5XCIsIGhlaWdodCArIG1hcmdpbi50b3ApXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiI0ZGRlwiKVxuICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMTRweFwiKVxuICAgICAgLnRleHQoXCLml7bliLtcIik7XG4gIH1cblxufVxuIl19