/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
/** @type {?} */
var $ = ((/** @type {?} */ (window))).$;
/** @type {?} */
var echarts = ((/** @type {?} */ (window))).echarts;
/** @type {?} */
var d3 = ((/** @type {?} */ (window))).d3;
var ThemeAreaLineComponent = /** @class */ (function () {
    function ThemeAreaLineComponent(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // 接收中间件传值
        console.log("comData测试", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    ThemeAreaLineComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initChart();
        window.addEventListener('resize', (/**
         * @return {?}
         */
        function () {
            clearTimeout(_this.resizeTimer);
            _this.resizeTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                d3.select(_this.themelineDiv.nativeElement).selectAll('svg').remove();
                _this.initChart();
            }), 250);
        }));
    };
    /**
     * @return {?}
     */
    ThemeAreaLineComponent.prototype.initChart = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var e_1, _a;
        /** @type {?} */
        var data = this.data.map((/**
         * @param {?} obj
         * @param {?} index
         * @return {?}
         */
        function (obj, index) { return (tslib_1.__assign({}, obj, { x: index + 1 })); }));
        // Dimensions
        /** @type {?} */
        var margin = { top: 20, right: 20, bottom: 30, left: 50 };
        /** @type {?} */
        var width = parseInt(this.themelineDiv.nativeElement.offsetWidth) - margin.left - margin.right;
        /** @type {?} */
        var height = parseInt(this.themelineDiv.nativeElement.offsetHeight) - margin.top - margin.bottom;
        // Scales
        /** @type {?} */
        var x = d3.scaleLinear()
            .domain([0, d3.max(data, (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.x; })) * 1.1])
            .range([0, width]);
        /** @type {?} */
        var y = d3.scaleLinear()
            .domain([0, d3.max(data, (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.num; })) == 0 ? 220 : d3.max(data, (/**
             * @param {?} d
             * @return {?}
             */
            function (d) { return d.num; })) * 1.1])
            .range([height, 0]);
        // Axis
        /** @type {?} */
        var xAxis = d3.axisBottom(x)
            .tickValues(d3.range(1, data.length + 1))
            .tickFormat((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            return data[d - 1].hour || d;
        }));
        /** @type {?} */
        var yAxis = d3.axisLeft(y)
            .tickValues(y.ticks(4).filter((/**
         * @param {?} tick
         * @return {?}
         */
        function (tick) {
            return tick !== 0;
        })))
            .tickSize(-width + 90);
        // Line
        /** @type {?} */
        var line = d3.line()
            .x((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return x(d.x); }))
            .y((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return y(d.num); }));
        // Area
        /** @type {?} */
        var area = d3.area()
            .x((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return x(d.x); }))
            .y0(height)
            .y1((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return y(d.num); }));
        // SVG
        // themeline
        /** @type {?} */
        var svg = d3.select(this.themelineDiv.nativeElement)
            .append("svg")
            .attr("class", "svg-box")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");
        this.svgCur = svg;
        /** @type {?} */
        var areaColor = this.color.areaColor || 'linear-gradient(rgba(51,165,255,0.20), rgba(51,194,255,0.60))';
        /** @type {?} */
        var regex = /rgba\((\d+),(\d+),(\d+),([\d\.]+)\)/g;
        /** @type {?} */
        var matches = areaColor.matchAll(regex);
        /** @type {?} */
        var colors = [];
        try {
            for (var matches_1 = tslib_1.__values(matches), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()) {
                var match = matches_1_1.value;
                colors.push("rgba(" + match[1] + "," + match[2] + "," + match[3] + "," + match[4] + ")");
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (matches_1_1 && !matches_1_1.done && (_a = matches_1.return)) _a.call(matches_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // 获取唯一ID
        /** @type {?} */
        var regexID = /(\d+)/g;
        /** @type {?} */
        var matchesID = areaColor.match(regexID).join('')
        // console.log("colors",colors)
        ;
        // console.log("colors",colors)
        /** @type {?} */
        var gradient = svg.append("defs")
            .append("linearGradient")
            .attr("id", "area-gradient-" + matchesID)
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("x1", 0)
            .attr("y1", y(0))
            .attr("x2", 0)
            .attr("y2", y(d3.max(data, (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.num; })) * 1.1));
        gradient.selectAll("stop")
            .data(colors)
            .enter().append("stop")
            .attr("offset", (/**
         * @param {?} d
         * @param {?} i
         * @return {?}
         */
        function (d, i) { return i * 100 / (colors.length - 1) + "%"; }))
            .attr("stop-color", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d; }));
        // Add X-axis
        svg.append("g")
            .attr("class", "axis")
            .attr("class", "axisx")
            .attr("transform", "translate(0, " + height + ")")
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
        function () {
            return "url(#area-gradient-" + matchesID + ")";
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
        function (d) { return x(d.x) - (width / 12) / 2; }))
            .attr("y", 20) // tiao
            .attr("width", width / 12)
            .attr("height", height - 20) // tiao
            .style("fill", 'rgba(255, 255, 255, 0.1)')
            .on("mouseover", (/**
         * @param {?} event
         * @param {?} d
         * @return {?}
         */
        function (event, d) {
            d3.select(_this.themelineDiv.nativeElement).select("#tooltip-" + d.x)
                .style("display", "inline");
            d3.select(_this.themelineDiv.nativeElement).select("#dot-" + d.x)
                .style("display", "inline"); // 高亮dot
            d3.select(_this.themelineDiv.nativeElement).select("#vertical-line-" + d.x)
                .style("display", "inline");
            d3.select(_this.themelineDiv.nativeElement).select("#triangle-" + d.x)
                .style("display", "inline");
            d3.select(_this.themelineDiv.nativeElement).select("#bottom-bar-" + d.x)
                .style("fill", (/**
             * @return {?}
             */
            function () {
                return _this.color.scaleLineColor || "#46B9E6";
            }));
            d3.select(event.currentTarget).style("fill", (/**
             * @return {?}
             */
            function () {
                return _this.color.markLineBgColor || "rgba(255, 255, 255, 0.3)";
            }));
        }))
            .on("mouseout", (/**
         * @param {?} event
         * @param {?} d
         * @return {?}
         */
        function (event, d) {
            d3.select(_this.themelineDiv.nativeElement).select("#tooltip-" + d.x)
                .style("display", "none");
            d3.select(_this.themelineDiv.nativeElement).select("#vertical-line-" + d.x)
                .style("display", "none");
            d3.select(_this.themelineDiv.nativeElement).select("#triangle-" + d.x)
                .style("display", "none");
            d3.select(_this.themelineDiv.nativeElement).select("#bottom-bar-" + d.x)
                .style("fill", d.x % 2 == 0 ? "#A3A5A9" : "#62686F");
            d3.select(_this.themelineDiv.nativeElement).select("#dot-" + d.x)
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
        function () {
            return _this.color.markLineColor || "#46B9E6";
        }))
            .attr("class", "vertical-line")
            .attr("id", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return "vertical-line-" + d.x; }))
            .attr("x1", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return x(d.x); }))
            .attr("y1", 20)
            .attr("x2", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return x(d.x); }))
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
        function (d) { return "triangle-" + d.x; }))
            .attr("points", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return x(d.x) + ",30 " + (x(d.x) - 5) + ",20 " + (x(d.x) + 5) + ",20"; }));
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
        function (d) { return "tooltip-" + d.x; }))
            .attr("x", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return x(d.x); }))
            .attr("y", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return 10; }))
            .html((/**
         * @param {?} d
         * @return {?}
         */
        function (d) {
            /** @type {?} */
            var fill = _this.color.scaleLineColor || '#46B9E6';
            return "<tspan style='fill:" + fill + ";'>[ </tspan><tspan>" + d.num + "</tspan><tspan style='fill:" + fill + ";'> ]</tspan>";
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
        function () {
            return _this.color.dotColor || "#46B9E6";
        }))
            .attr("id", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return "dot-" + d.x; }))
            .attr("cx", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return x(d.x); }))
            .attr("cy", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return y(d.num); }))
            .attr("r", 7);
        svg.selectAll(".bottom-bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("id", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return "bottom-bar-" + d.x; }))
            .attr("class", "bottom-bar")
            .attr("x", (/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return x(d.x) - (width / 10) / 2 + 9; }))
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
    };
    ThemeAreaLineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-theme-area-line',
                    template: "<div class=\"theme-line-box\" #themeline></div>",
                    styles: [".theme-line-box{width:100%;height:100%;color:#fff}/deep/ .line{fill:none;stroke:#4682b4;stroke-width:2px}/deep/ .axisx{font-size:14px}/deep/ .axisx line{display:none}/deep/ .dot{display:none}/deep/ .tooltip{display:none;font-family:sans-serif;font-size:14px;fill:#fff;text-anchor:middle}/deep/ .axis path{display:none}/deep/ .data-label{font-family:sans-serif;font-size:11px;text-anchor:middle;display:none}/deep/ .vertical-line{display:none;stroke-width:1px}/deep/ .triangle{display:none;fill:#46b9e6}/deep/ .bottom-bar{fill:#a3a5a9}/deep/ .bottom-bar:nth-child(odd){fill:#62686f}/deep/ .axisx path{stroke:none}"]
                }] }
    ];
    /** @nocollapse */
    ThemeAreaLineComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    ThemeAreaLineComponent.propDecorators = {
        themelineDiv: [{ type: ViewChild, args: ['themeline',] }]
    };
    return ThemeAreaLineComponent;
}());
export { ThemeAreaLineComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYXJlYS1saW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RoZW1lLWFyZWEtbGluZS8iLCJzb3VyY2VzIjpbImxpYi90aGVtZS1hcmVhLWxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFL0QsQ0FBQyxHQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxDQUFDOztJQUMxQixPQUFPLEdBQVEsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLE9BQU87O0lBQ3RDLEVBQUUsR0FBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsRUFBRTtBQUVsQztJQWVFLGdDQUFvQixvQkFBMEMsRUFBRSxPQUFzQjtRQUFsRSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVELFVBQVU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFBO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUE7SUFDdkMsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ2hCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFROzs7UUFBRTtZQUNoQyxZQUFZLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQzlCLEtBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVTs7O1lBQUM7Z0JBQzVCLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBQ3BFLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUNsQixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLEVBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7SUFFRCwwQ0FBUzs7O0lBQVQ7UUFBQSxpQkFvT0M7OztZQW5PTyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsR0FBUSxFQUFFLEtBQWEsSUFBSyxPQUFBLHNCQUFNLEdBQUcsSUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsSUFBRyxFQUExQixDQUEwQixFQUFDOzs7WUFHN0UsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRTs7WUFDckQsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLOztZQUMxRixNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU07OztZQUc1RixDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRTthQUN2QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJOzs7O1lBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsRUFBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ3pDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7WUFFZCxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRTthQUN2QixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJOzs7O1lBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxFQUFMLENBQUssRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUk7Ozs7WUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBSyxFQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDakYsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDOzs7WUFHZixLQUFLLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDM0IsVUFBVSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEMsVUFBVTs7OztRQUFDLFVBQVUsQ0FBQztZQUNyQixPQUFPLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQTtRQUM5QixDQUFDLEVBQUM7O1lBRUUsS0FBSyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3pCLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLElBQUk7WUFDaEMsT0FBTyxJQUFJLEtBQUssQ0FBQyxDQUFBO1FBQ25CLENBQUMsRUFBQyxDQUFDO2FBQ0YsUUFBUSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs7O1lBSWxCLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFO2FBQ25CLENBQUM7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQU4sQ0FBTSxFQUFDO2FBQ2QsQ0FBQzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBUixDQUFRLEVBQUM7OztZQUdiLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFO2FBQ25CLENBQUM7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQU4sQ0FBTSxFQUFDO2FBQ2QsRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUNWLEVBQUU7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQVIsQ0FBUSxFQUFDOzs7O1lBSWQsR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7YUFDbkQsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNiLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO2FBQ3hCLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNqRCxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNYLElBQUksQ0FBQyxXQUFXLEVBQUUsZUFBYSxNQUFNLENBQUMsSUFBSSxVQUFLLE1BQU0sQ0FBQyxHQUFHLE1BQUcsQ0FBQztRQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTs7WUFFYixTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksK0RBQStEOztZQUNqRyxLQUFLLEdBQUcsc0NBQXNDOztZQUM5QyxPQUFPLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7O1lBQ25DLE1BQU0sR0FBRyxFQUFFOztZQUNqQixLQUFvQixJQUFBLFlBQUEsaUJBQUEsT0FBTyxDQUFBLGdDQUFBLHFEQUFFO2dCQUF4QixJQUFNLEtBQUssb0JBQUE7Z0JBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBRyxDQUFDLENBQUM7YUFDdEU7Ozs7Ozs7Ozs7O1lBR0csT0FBTyxHQUFHLFFBQVE7O1lBQ2xCLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFHakQsK0JBQStCOzs7O1lBQ3pCLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNoQyxNQUFNLENBQUMsZ0JBQWdCLENBQUM7YUFDeEIsSUFBSSxDQUFDLElBQUksRUFBRSxtQkFBaUIsU0FBVyxDQUFDO2FBQ3hDLElBQUksQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLENBQUM7YUFDdkMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7YUFDYixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNoQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSTs7OztRQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsRUFBTCxDQUFLLEVBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNoRCxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ1osS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUN0QixJQUFJLENBQUMsUUFBUTs7Ozs7UUFBRSxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBRyxFQUFuQyxDQUFtQyxFQUFDO2FBQzdELElBQUksQ0FBQyxZQUFZOzs7O1FBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEVBQUQsQ0FBQyxFQUFDLENBQUM7UUFFOUIsYUFBYTtRQUNiLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7YUFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7YUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxrQkFBZ0IsTUFBTSxNQUFHLENBQUM7YUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWYsYUFBYTtRQUNiLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO2FBQ1osSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7YUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNYLFNBQVMsQ0FBQyxZQUFZLENBQUM7YUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQzthQUNwQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckMsT0FBTztRQUNQLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQzthQUNYLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO2FBQ3JCLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO2FBQ2YsS0FBSyxDQUFDLE1BQU07OztRQUFFO1lBQ2IsT0FBTyx3QkFBc0IsU0FBUyxNQUFHLENBQUE7UUFDM0MsQ0FBQyxFQUFDLENBQUM7UUFFTCxPQUFPO1FBQ1AsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZixLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ1gsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7YUFDckIsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVuQixXQUFXO1FBQ1gsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7YUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNWLEtBQUssRUFBRTthQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZCxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQzthQUNwQixJQUFJLENBQUMsR0FBRzs7OztRQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQXpCLENBQXlCLEVBQUM7YUFDekMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBRSxPQUFPO2FBQ3RCLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUN6QixJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxPQUFPO2FBQ25DLEtBQUssQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLENBQUM7YUFDekMsRUFBRSxDQUFDLFdBQVc7Ozs7O1FBQUUsVUFBQyxLQUFLLEVBQUUsQ0FBQztZQUN4QixFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQVksQ0FBQyxDQUFDLENBQUcsQ0FBQztpQkFDakUsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM5QixFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVEsQ0FBQyxDQUFDLENBQUcsQ0FBQztpQkFDN0QsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFBLFFBQVE7WUFDdEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQkFBa0IsQ0FBQyxDQUFDLENBQUcsQ0FBQztpQkFDdkUsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM5QixFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWEsQ0FBQyxDQUFDLENBQUcsQ0FBQztpQkFDbEUsS0FBSyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM5QixFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFlLENBQUMsQ0FBQyxDQUFHLENBQUM7aUJBQ3BFLEtBQUssQ0FBQyxNQUFNOzs7WUFBRTtnQkFDYixPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxJQUFJLFNBQVMsQ0FBQTtZQUMvQyxDQUFDLEVBQUMsQ0FBQztZQUNMLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7WUFBRTtnQkFDM0MsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsSUFBSSwwQkFBMEIsQ0FBQTtZQUNqRSxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQzthQUNELEVBQUUsQ0FBQyxVQUFVOzs7OztRQUFFLFVBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFZLENBQUMsQ0FBQyxDQUFHLENBQUM7aUJBQ2pFLEtBQUssQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDNUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQkFBa0IsQ0FBQyxDQUFDLENBQUcsQ0FBQztpQkFDdkUsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1QixFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWEsQ0FBQyxDQUFDLENBQUcsQ0FBQztpQkFDbEUsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1QixFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFlLENBQUMsQ0FBQyxDQUFHLENBQUM7aUJBQ3BFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZELEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBUSxDQUFDLENBQUMsQ0FBRyxDQUFDO2lCQUM3RCxLQUFLLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUMzRSxDQUFDLEVBQUMsQ0FBQztRQUVMLHFCQUFxQjtRQUNyQixHQUFHLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDO2FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDVixLQUFLLEVBQUU7YUFDUCxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2QsS0FBSyxDQUFDLFFBQVE7OztRQUFFO1lBQ2YsT0FBTyxLQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUE7UUFDOUMsQ0FBQyxFQUFDO2FBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUM7YUFDOUIsSUFBSSxDQUFDLElBQUk7Ozs7UUFBRSxVQUFBLENBQUMsSUFBSSxPQUFBLG1CQUFpQixDQUFDLENBQUMsQ0FBRyxFQUF0QixDQUFzQixFQUFDO2FBQ3ZDLElBQUksQ0FBQyxJQUFJOzs7O1FBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFOLENBQU0sRUFBQzthQUN2QixJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQzthQUNkLElBQUksQ0FBQyxJQUFJOzs7O1FBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFOLENBQU0sRUFBQzthQUN2QixJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXRCLGdCQUFnQjtRQUNoQixHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQzthQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ1YsS0FBSyxFQUFFO2FBQ1AsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQzthQUN6QixJQUFJLENBQUMsSUFBSTs7OztRQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsY0FBWSxDQUFDLENBQUMsQ0FBRyxFQUFqQixDQUFpQixFQUFDO2FBQ2xDLElBQUksQ0FBQyxRQUFROzs7O1FBQUUsVUFBQSxDQUFDLElBQUksT0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFLLEVBQWhELENBQWdELEVBQUMsQ0FBQztRQUV6RSxrQkFBa0I7UUFDbEIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7YUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNWLEtBQUssRUFBRTthQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZCxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQzthQUN4QixJQUFJLENBQUMsSUFBSTs7OztRQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsYUFBVyxDQUFDLENBQUMsQ0FBRyxFQUFoQixDQUFnQixFQUFDO2FBQ2pDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFOLENBQU0sRUFBQzthQUN0QixJQUFJLENBQUMsR0FBRzs7OztRQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsRUFBRSxFQUFGLENBQUUsRUFBQzthQUNsQixJQUFJOzs7O1FBQUMsVUFBQSxDQUFDOztnQkFDRCxJQUFJLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLElBQUksU0FBUztZQUNqRCxPQUFPLHdCQUFzQixJQUFJLDRCQUF1QixDQUFDLENBQUMsR0FBRyxtQ0FBOEIsSUFBSSxrQkFBZSxDQUFBO1FBQ2hILENBQUMsRUFBQyxDQUFDO1FBRUwsR0FBRyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQzthQUM5QixLQUFLLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQzthQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFHeEMsT0FBTztRQUNQLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDVixLQUFLLEVBQUU7YUFDUCxNQUFNLENBQUMsUUFBUSxDQUFDO2FBQ2hCLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO2FBQ3BCLEtBQUssQ0FBQyxNQUFNOzs7UUFBRTtZQUNiLE9BQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFBO1FBQ3pDLENBQUMsRUFBQzthQUNELElBQUksQ0FBQyxJQUFJOzs7O1FBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxTQUFPLENBQUMsQ0FBQyxDQUFHLEVBQVosQ0FBWSxFQUFDO2FBQzdCLElBQUksQ0FBQyxJQUFJOzs7O1FBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFOLENBQU0sRUFBQzthQUN2QixJQUFJLENBQUMsSUFBSTs7OztRQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBUixDQUFRLEVBQUM7YUFDekIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVoQixHQUFHLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQzthQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ1YsS0FBSyxFQUFFO2FBQ1AsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNkLElBQUksQ0FBQyxJQUFJOzs7O1FBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxnQkFBYyxDQUFDLENBQUMsQ0FBRyxFQUFuQixDQUFtQixFQUFDO2FBQ3BDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO2FBQzNCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQTdCLENBQTZCLEVBQUM7YUFDN0MsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ3JCLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7YUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVyQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDO2FBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDO2FBQzVCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2FBQ1osSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUM5QixLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzthQUNyQixLQUFLLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQzthQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQzs7Z0JBclFGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiwyREFBeUM7O2lCQUUxQzs7OztnQkFWUSxvQkFBb0I7Z0JBQUUsYUFBYTs7OytCQWtCekMsU0FBUyxTQUFDLFdBQVc7O0lBMlB4Qiw2QkFBQztDQUFBLEFBdlFELElBdVFDO1NBbFFZLHNCQUFzQjs7O0lBRWpDLHNDQUFVOztJQUNWLHVDQUFXOztJQUNYLHdDQUFZOztJQUNaLDZDQUFpQjs7SUFFakIsOENBQ3dCOzs7OztJQUVaLHNEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21wb25lbnREYXRhIH0gZnJvbSAncGx1Z2luLW1hbmFnZXInO1xuXG5jb25zdCAkOiBhbnkgPSAod2luZG93IGFzIGFueSkuJDtcbmNvbnN0IGVjaGFydHM6IGFueSA9ICh3aW5kb3cgYXMgYW55KS5lY2hhcnRzO1xuY29uc3QgZDM6IGFueSA9ICh3aW5kb3cgYXMgYW55KS5kMztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRoZW1lLWFyZWEtbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saWItdGhlbWUtYXJlYS1saW5lLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saWItdGhlbWUtYXJlYS1saW5lLnN0eWwnXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZUFyZWFMaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBkYXRhOiBhbnk7XG4gIGNvbG9yOiBhbnk7XG4gIHN2Z0N1cjogYW55O1xuICByZXNpemVUaW1lcjogYW55O1xuXG4gIEBWaWV3Q2hpbGQoJ3RoZW1lbGluZScpXG4gIHRoZW1lbGluZURpdjogRWxlbWVudFJlZlxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21EYXRhOiBjb21wb25lbnREYXRhKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRh5rWL6K+VXCIsIGNvbURhdGEpXG4gICAgdGhpcy5kYXRhID0gY29tRGF0YS5jb25maWdEYXRhLmRhdGFcbiAgICB0aGlzLmNvbG9yID0gY29tRGF0YS5jb25maWdEYXRhLmNvbG9yXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVyKVxuICAgICAgdGhpcy5yZXNpemVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkMy5zZWxlY3QodGhpcy50aGVtZWxpbmVEaXYubmF0aXZlRWxlbWVudCkuc2VsZWN0QWxsKCdzdmcnKS5yZW1vdmUoKVxuICAgICAgICB0aGlzLmluaXRDaGFydCgpXG4gICAgICB9LCAyNTApO1xuICAgIH0pXG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YS5tYXAoKG9iajogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoeyAuLi5vYmosIHg6IGluZGV4ICsgMSB9KSk7XG5cbiAgICAvLyBEaW1lbnNpb25zXG4gICAgY29uc3QgbWFyZ2luID0geyB0b3A6IDIwLCByaWdodDogMjAsIGJvdHRvbTogMzAsIGxlZnQ6IDUwIH07XG4gICAgY29uc3Qgd2lkdGggPSBwYXJzZUludCh0aGlzLnRoZW1lbGluZURpdi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoKSAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICAgIGNvbnN0IGhlaWdodCA9IHBhcnNlSW50KHRoaXMudGhlbWVsaW5lRGl2Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0KSAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gICAgLy8gU2NhbGVzXG4gICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhLCBkID0+IGQueCkgKiAxLjFdKVxuICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG4gICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhLCBkID0+IGQubnVtKSA9PSAwID8gMjIwIDogZDMubWF4KGRhdGEsIGQgPT4gZC5udW0pICogMS4xXSlcbiAgICAgIC5yYW5nZShbaGVpZ2h0LCAwXSk7XG5cbiAgICAvLyBBeGlzXG4gICAgY29uc3QgeEF4aXMgPSBkMy5heGlzQm90dG9tKHgpXG4gICAgICAudGlja1ZhbHVlcyhkMy5yYW5nZSgxLCBkYXRhLmxlbmd0aCArIDEpKVxuICAgICAgLnRpY2tGb3JtYXQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbZCAtIDFdLmhvdXIgfHwgZFxuICAgICAgfSk7XG5cbiAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KHkpXG4gICAgICAudGlja1ZhbHVlcyh5LnRpY2tzKDQpLmZpbHRlcih0aWNrID0+IHtcbiAgICAgICAgcmV0dXJuIHRpY2sgIT09IDBcbiAgICAgIH0pKVxuICAgICAgLnRpY2tTaXplKC13aWR0aCArIDkwKTtcblxuXG4gICAgLy8gTGluZVxuICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgIC54KGQgPT4geChkLngpKVxuICAgICAgLnkoZCA9PiB5KGQubnVtKSk7XG5cbiAgICAvLyBBcmVhXG4gICAgY29uc3QgYXJlYSA9IGQzLmFyZWEoKVxuICAgICAgLngoZCA9PiB4KGQueCkpXG4gICAgICAueTAoaGVpZ2h0KVxuICAgICAgLnkxKGQgPT4geShkLm51bSkpO1xuXG4gICAgLy8gU1ZHXG4gICAgLy8gdGhlbWVsaW5lXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHRoaXMudGhlbWVsaW5lRGl2Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwic3ZnLWJveFwiKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgKTtcbiAgICB0aGlzLnN2Z0N1ciA9IHN2Z1xuICAgIFxuICAgIGxldCBhcmVhQ29sb3IgPSB0aGlzLmNvbG9yLmFyZWFDb2xvciB8fCAnbGluZWFyLWdyYWRpZW50KHJnYmEoNTEsMTY1LDI1NSwwLjIwKSwgcmdiYSg1MSwxOTQsMjU1LDAuNjApKSdcbiAgICBjb25zdCByZWdleCA9IC9yZ2JhXFwoKFxcZCspLChcXGQrKSwoXFxkKyksKFtcXGRcXC5dKylcXCkvZztcbiAgICBjb25zdCBtYXRjaGVzID0gYXJlYUNvbG9yLm1hdGNoQWxsKHJlZ2V4KTtcbiAgICBjb25zdCBjb2xvcnMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IG1hdGNoIG9mIG1hdGNoZXMpIHtcbiAgICAgIGNvbG9ycy5wdXNoKGByZ2JhKCR7bWF0Y2hbMV19LCR7bWF0Y2hbMl19LCR7bWF0Y2hbM119LCR7bWF0Y2hbNF19KWApO1xuICAgIH1cblxuICAgIC8vIOiOt+WPluWUr+S4gElEXG4gICAgbGV0IHJlZ2V4SUQgPSAvKFxcZCspL2c7XG4gICAgbGV0IG1hdGNoZXNJRCA9IGFyZWFDb2xvci5tYXRjaChyZWdleElEKS5qb2luKCcnKVxuXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImNvbG9yc1wiLGNvbG9ycylcbiAgICBjb25zdCBncmFkaWVudCA9IHN2Zy5hcHBlbmQoXCJkZWZzXCIpXG4gICAgICAuYXBwZW5kKFwibGluZWFyR3JhZGllbnRcIilcbiAgICAgIC5hdHRyKFwiaWRcIiwgYGFyZWEtZ3JhZGllbnQtJHttYXRjaGVzSUR9YClcbiAgICAgIC5hdHRyKFwiZ3JhZGllbnRVbml0c1wiLCBcInVzZXJTcGFjZU9uVXNlXCIpXG4gICAgICAuYXR0cihcIngxXCIsIDApXG4gICAgICAuYXR0cihcInkxXCIsIHkoMCkpXG4gICAgICAuYXR0cihcIngyXCIsIDApXG4gICAgICAuYXR0cihcInkyXCIsIHkoZDMubWF4KGRhdGEsIGQgPT4gZC5udW0pICogMS4xKSk7XG4gICAgZ3JhZGllbnQuc2VsZWN0QWxsKFwic3RvcFwiKVxuICAgICAgLmRhdGEoY29sb3JzKVxuICAgICAgLmVudGVyKCkuYXBwZW5kKFwic3RvcFwiKVxuICAgICAgLmF0dHIoXCJvZmZzZXRcIiwgKGQsIGkpID0+IGAke2kgKiAxMDAgLyAoY29sb3JzLmxlbmd0aCAtIDEpfSVgKVxuICAgICAgLmF0dHIoXCJzdG9wLWNvbG9yXCIsIGQgPT4gZCk7XG5cbiAgICAvLyBBZGQgWC1heGlzXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc3hcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtoZWlnaHR9KWApXG4gICAgICAuY2FsbCh4QXhpcyk7XG5cbiAgICAvLyBBZGQgWS1heGlzXG4gICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAuY2FsbCh5QXhpcylcbiAgICAgIC5zZWxlY3RBbGwoXCIudGljayBsaW5lXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSg1NSwwKVwiKVxuICAgICAgLmF0dHIoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiMTAsMTVcIik7XG4gICAgLy8g5re75Yqg6Z2i56evXG4gICAgc3ZnLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5kYXR1bShkYXRhKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFyZWFcIilcbiAgICAgIC5hdHRyKFwiZFwiLCBhcmVhKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCAoKT0+e1xuICAgICAgICByZXR1cm4gYHVybCgjYXJlYS1ncmFkaWVudC0ke21hdGNoZXNJRH0pYFxuICAgICAgfSk7XG5cbiAgICAvLyDmt7vliqDmipjnur9cbiAgICBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmRhdHVtKGRhdGEpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwibGluZVwiKVxuICAgICAgLmF0dHIoXCJkXCIsIGxpbmUpO1xuXG4gICAgLy8gQWRkIGJhcnNcbiAgICBzdmcuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgICAgLmRhdGEoZGF0YSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImJhclwiKVxuICAgICAgLmF0dHIoXCJ4XCIsIGQgPT4geChkLngpIC0gKHdpZHRoIC8gMTIpIC8gMilcbiAgICAgIC5hdHRyKFwieVwiLCAyMCkgIC8vIHRpYW9cbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggLyAxMilcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCAtIDIwKSAvLyB0aWFvXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChldmVudCwgZCkgPT4ge1xuICAgICAgICBkMy5zZWxlY3QodGhpcy50aGVtZWxpbmVEaXYubmF0aXZlRWxlbWVudCkuc2VsZWN0KGAjdG9vbHRpcC0ke2QueH1gKVxuICAgICAgICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJpbmxpbmVcIik7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzLnRoZW1lbGluZURpdi5uYXRpdmVFbGVtZW50KS5zZWxlY3QoYCNkb3QtJHtkLnh9YClcbiAgICAgICAgICAuc3R5bGUoXCJkaXNwbGF5XCIsIFwiaW5saW5lXCIpOy8vIOmrmOS6rmRvdFxuICAgICAgICBkMy5zZWxlY3QodGhpcy50aGVtZWxpbmVEaXYubmF0aXZlRWxlbWVudCkuc2VsZWN0KGAjdmVydGljYWwtbGluZS0ke2QueH1gKVxuICAgICAgICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJpbmxpbmVcIik7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzLnRoZW1lbGluZURpdi5uYXRpdmVFbGVtZW50KS5zZWxlY3QoYCN0cmlhbmdsZS0ke2QueH1gKVxuICAgICAgICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJpbmxpbmVcIik7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzLnRoZW1lbGluZURpdi5uYXRpdmVFbGVtZW50KS5zZWxlY3QoYCNib3R0b20tYmFyLSR7ZC54fWApXG4gICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2xvci5zY2FsZUxpbmVDb2xvciB8fCBcIiM0NkI5RTZcIlxuICAgICAgICAgIH0pO1xuICAgICAgICBkMy5zZWxlY3QoZXZlbnQuY3VycmVudFRhcmdldCkuc3R5bGUoXCJmaWxsXCIsICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb2xvci5tYXJrTGluZUJnQ29sb3IgfHwgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMylcIlxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoZXZlbnQsIGQpID0+IHtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMudGhlbWVsaW5lRGl2Lm5hdGl2ZUVsZW1lbnQpLnNlbGVjdChgI3Rvb2x0aXAtJHtkLnh9YClcbiAgICAgICAgICAuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMudGhlbWVsaW5lRGl2Lm5hdGl2ZUVsZW1lbnQpLnNlbGVjdChgI3ZlcnRpY2FsLWxpbmUtJHtkLnh9YClcbiAgICAgICAgICAuc3R5bGUoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMudGhlbWVsaW5lRGl2Lm5hdGl2ZUVsZW1lbnQpLnNlbGVjdChgI3RyaWFuZ2xlLSR7ZC54fWApXG4gICAgICAgICAgLnN0eWxlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgIGQzLnNlbGVjdCh0aGlzLnRoZW1lbGluZURpdi5uYXRpdmVFbGVtZW50KS5zZWxlY3QoYCNib3R0b20tYmFyLSR7ZC54fWApXG4gICAgICAgICAgLnN0eWxlKFwiZmlsbFwiLCBkLnggJSAyID09IDAgPyBcIiNBM0E1QTlcIiA6IFwiIzYyNjg2RlwiKTtcbiAgICAgICAgZDMuc2VsZWN0KHRoaXMudGhlbWVsaW5lRGl2Lm5hdGl2ZUVsZW1lbnQpLnNlbGVjdChgI2RvdC0ke2QueH1gKVxuICAgICAgICAgIC5zdHlsZShcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICBkMy5zZWxlY3QoZXZlbnQuY3VycmVudFRhcmdldCkuc3R5bGUoXCJmaWxsXCIsIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpXCIpO1xuICAgICAgfSk7XG5cbiAgICAvLyBBZGQgdmVydGljYWwgbGluZXNcbiAgICBzdmcuc2VsZWN0QWxsKFwiLnZlcnRpY2FsLWxpbmVcIilcbiAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcImxpbmVcIilcbiAgICAgIC5zdHlsZShcInN0cm9rZVwiLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yLm1hcmtMaW5lQ29sb3IgfHwgXCIjNDZCOUU2XCJcbiAgICAgIH0pXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidmVydGljYWwtbGluZVwiKVxuICAgICAgLmF0dHIoXCJpZFwiLCBkID0+IGB2ZXJ0aWNhbC1saW5lLSR7ZC54fWApXG4gICAgICAuYXR0cihcIngxXCIsIGQgPT4geChkLngpKVxuICAgICAgLmF0dHIoXCJ5MVwiLCAyMClcbiAgICAgIC5hdHRyKFwieDJcIiwgZCA9PiB4KGQueCkpXG4gICAgICAuYXR0cihcInkyXCIsIGhlaWdodCk7XG5cbiAgICAvLyBBZGQgdHJpYW5nbGVzXG4gICAgc3ZnLnNlbGVjdEFsbChcIi50cmlhbmdsZVwiKVxuICAgICAgLmRhdGEoZGF0YSlcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicG9seWdvblwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRyaWFuZ2xlXCIpXG4gICAgICAuYXR0cihcImlkXCIsIGQgPT4gYHRyaWFuZ2xlLSR7ZC54fWApXG4gICAgICAuYXR0cihcInBvaW50c1wiLCBkID0+IGAke3goZC54KX0sMzAgJHt4KGQueCkgLSA1fSwyMCAke3goZC54KSArIDV9LDIwYCk7XG5cbiAgICAvLyBBZGQgZGF0YSBsYWJlbHNcbiAgICBzdmcuc2VsZWN0QWxsKFwiLnRvb2x0aXBcIilcbiAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0b29sdGlwXCIpXG4gICAgICAuYXR0cihcImlkXCIsIGQgPT4gYHRvb2x0aXAtJHtkLnh9YClcbiAgICAgIC5hdHRyKFwieFwiLCBkID0+IHgoZC54KSlcbiAgICAgIC5hdHRyKFwieVwiLCBkID0+IDEwKVxuICAgICAgLmh0bWwoZCA9PiB7XG4gICAgICAgIGxldCBmaWxsID0gdGhpcy5jb2xvci5zY2FsZUxpbmVDb2xvciB8fCAnIzQ2QjlFNidcbiAgICAgICAgcmV0dXJuIGA8dHNwYW4gc3R5bGU9J2ZpbGw6JHtmaWxsfTsnPlsgPC90c3Bhbj48dHNwYW4+JHtkLm51bX08L3RzcGFuPjx0c3BhbiBzdHlsZT0nZmlsbDoke2ZpbGx9Oyc+IF08L3RzcGFuPmBcbiAgICAgIH0pO1xuXG4gICAgc3ZnLnNlbGVjdEFsbChcIi5heGlzIC50aWNrIHRleHRcIilcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzE0cHgnKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMzAsMClcIik7XG5cblxuICAgIC8vIOa3u+WKoOWchueCuVxuICAgIHN2Zy5zZWxlY3RBbGwoXCIuZG90XCIpXG4gICAgICAuZGF0YShkYXRhKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJkb3RcIilcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvci5kb3RDb2xvciB8fCBcIiM0NkI5RTZcIlxuICAgICAgfSlcbiAgICAgIC5hdHRyKFwiaWRcIiwgZCA9PiBgZG90LSR7ZC54fWApXG4gICAgICAuYXR0cihcImN4XCIsIGQgPT4geChkLngpKVxuICAgICAgLmF0dHIoXCJjeVwiLCBkID0+IHkoZC5udW0pKVxuICAgICAgLmF0dHIoXCJyXCIsIDcpO1xuXG4gICAgc3ZnLnNlbGVjdEFsbChcIi5ib3R0b20tYmFyXCIpXG4gICAgICAuZGF0YShkYXRhKVxuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAuYXR0cihcImlkXCIsIGQgPT4gYGJvdHRvbS1iYXItJHtkLnh9YClcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJib3R0b20tYmFyXCIpXG4gICAgICAuYXR0cihcInhcIiwgZCA9PiB4KGQueCkgLSAod2lkdGggLyAxMCkgLyAyICsgOSlcbiAgICAgIC5hdHRyKFwieVwiLCBoZWlnaHQgLSAyKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCAvIDEwIC0gMTgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCA1KTtcblxuICAgIHN2Zy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwieCBsYWJlbFwiKVxuICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBcInN0YXJ0XCIpXG4gICAgICAuYXR0cihcInhcIiwgMClcbiAgICAgIC5hdHRyKFwieVwiLCBoZWlnaHQgKyBtYXJnaW4udG9wKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIiNGRkZcIilcbiAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjE0cHhcIilcbiAgICAgIC50ZXh0KFwi5pe25Yi7XCIpO1xuICB9XG5cbn1cbiJdfQ==