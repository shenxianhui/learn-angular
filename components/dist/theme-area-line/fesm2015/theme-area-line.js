import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, ViewChild, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const $ = ((/** @type {?} */ (window))).$;
/** @type {?} */
const echarts = ((/** @type {?} */ (window))).echarts;
/** @type {?} */
const d3 = ((/** @type {?} */ (window))).d3;
class ThemeAreaLineComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ThemeAreaLineModule {
}
ThemeAreaLineModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ThemeAreaLineComponent],
                entryComponents: [ThemeAreaLineComponent],
                imports: [CommonModule, NgZorroAntdModule],
                exports: [ThemeAreaLineComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var publicApi = createPlugin({
    name: 'theme-area-line',
    module: ThemeAreaLineModule,
    component: ThemeAreaLineComponent
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export default publicApi;

//# sourceMappingURL=theme-area-line.js.map