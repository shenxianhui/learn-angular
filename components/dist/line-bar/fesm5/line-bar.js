import { __assign } from 'tslib';
import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var echarts = ((/** @type {?} */ (window))).echarts;
var LineBarComponent = /** @class */ (function () {
    function LineBarComponent(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        this.chartOptions = {};
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    LineBarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.initChart();
        this.renderChart();
        window.addEventListener("resize", (/**
         * @return {?}
         */
        function () {
            clearTimeout(_this.resizeTimer);
            _this.resizeTimer = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.initChart();
                _this.renderChart();
            }), 250);
        }));
    };
    /**
     * @return {?}
     */
    LineBarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // Initialize the chart after the view is initialized
    };
    /**
     * @return {?}
     */
    LineBarComponent.prototype.initChart = /**
     * @return {?}
     */
    function () {
        console.log("init");
        /** @type {?} */
        var chartDom = (/** @type {?} */ (document.getElementById("chartContainer")));
        this.chart = echarts.init(chartDom);
    };
    /**
     * @return {?}
     */
    LineBarComponent.prototype.renderChart = /**
     * @return {?}
     */
    function () {
        var _a = this.color, _b = _a.legend, legend = _b === void 0 ? {} : _b, _c = _a.seriesMap, seriesMap = _c === void 0 ? {} : _c;
        var _d = this.data, _e = _d.xAxis, xAxis = _e === void 0 ? {} : _e, _f = _d.series, series = _f === void 0 ? [] : _f;
        var _g = xAxis.data, xAxisData = _g === void 0 ? [] : _g;
        /** @type {?} */
        var seriesData = [];
        /** @type {?} */
        var legendData = [];
        /**
         * @param {?=} list
         * @return {?}
         */
        function getBorderHeight(list) {
            if (list === void 0) { list = []; }
            /** @type {?} */
            var sum = list.reduce((/**
             * @param {?} acc
             * @param {?} curr
             * @return {?}
             */
            function (acc, curr) { return acc + curr; }), 0);
            /** @type {?} */
            var average = sum / list.length / 40 * 1.5;
            /** @type {?} */
            var arr = Array(list.length).fill(average);
            return arr;
        }
        series.forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        function (item, index) {
            /** @type {?} */
            var styleObj = seriesMap[item.key] || {};
            if (item.type === "line") {
                seriesData.push(__assign({}, item, { step: true, lineStyle: {
                        color: styleObj.itemColor || (index === 2 ? "#50FFCC" : "#52D2FF"),
                    }, itemStyle: {
                        color: styleObj.itemColor || (index === 2 ? "#50FFCC" : "#52D2FF"),
                        opacity: 0,
                    }, showBackground: index === 0, backgroundStyle: {
                        color: "rgba(255, 255, 255, 0.05)",
                    } }));
                legendData.push({
                    name: item.name,
                    icon: "path://M 0 0 H 10 V 2 H 0 Z",
                });
            }
            if (item.type === "bar") {
                if (styleObj.borderColor || (index === 0 && !styleObj.itemColor)) {
                    seriesData.push(__assign({}, item, { name: '', stack: 1, barGap: "0", borderWidth: 0, itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: (styleObj.itemColor && styleObj.itemColor[0]) ||
                                            "rgba(82, 210, 255, 0.3)",
                                    },
                                    {
                                        offset: 0.3,
                                        color: (styleObj.itemColor && styleObj.itemColor[1]) ||
                                            "rgba(82, 210, 255, 0)",
                                    },
                                ], false),
                            },
                        }, showBackground: index === 0, backgroundStyle: {
                            color: "rgba(255, 255, 255, 0.05)",
                        } }), {
                        type: "bar",
                        name: item.name,
                        stack: 1,
                        barGap: "0",
                        itemStyle: {
                            normal: {
                                color: styleObj.borderColor || "rgba(82, 210, 255, 1)",
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
                    });
                }
                else {
                    seriesData.unshift(__assign({}, item, { stack: 1, itemStyle: {
                            color: styleObj.itemColor || "#FF435B",
                        }, showBackground: index === 0, backgroundStyle: {
                            color: "rgba(255, 255, 255, 0.05)",
                        } }));
                }
                legendData.push({
                    name: item.name,
                    icon: "path://M 0 0 H 8 V 8 H 0 Z",
                });
            }
        }));
        /** @type {?} */
        var option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            legend: __assign({ icon: "rect", itemWidth: 10, itemGap: 18, textStyle: {
                    color: "#fff",
                }, top: 20, right: 20 }, legend, { data: legendData }),
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
        this.chart.clear();
        this.chart.setOption(option, false);
    };
    LineBarComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-line-bar",
                    template: "<div class=\"chart\" id=\"chartContainer\"></div>\n",
                    styles: [".chart{width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    LineBarComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    return LineBarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LineBarModule = /** @class */ (function () {
    function LineBarModule() {
    }
    LineBarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [LineBarComponent],
                    entryComponents: [LineBarComponent],
                    imports: [CommonModule, NgZorroAntdModule],
                    exports: [LineBarComponent]
                },] }
    ];
    return LineBarModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var publicApi = createPlugin({
    name: "line-bar",
    module: LineBarModule,
    component: LineBarComponent,
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export default publicApi;

//# sourceMappingURL=line-bar.js.map