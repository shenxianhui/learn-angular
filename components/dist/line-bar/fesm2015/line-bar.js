import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const echarts = ((/** @type {?} */ (window))).echarts;
class LineBarComponent {
    /**
     * @param {?} pluginManagerService
     * @param {?} comData
     */
    constructor(pluginManagerService, comData) {
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
    ngOnInit() {
        this.initChart();
        this.renderChart();
        window.addEventListener("resize", (/**
         * @return {?}
         */
        () => {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout((/**
             * @return {?}
             */
            () => {
                this.initChart();
                this.renderChart();
            }), 250);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Initialize the chart after the view is initialized
    }
    /**
     * @return {?}
     */
    initChart() {
        console.log("init");
        /** @type {?} */
        const chartDom = (/** @type {?} */ (document.getElementById("chartContainer")));
        this.chart = echarts.init(chartDom);
    }
    /**
     * @return {?}
     */
    renderChart() {
        const { legend = {}, seriesMap = {} } = this.color;
        const { xAxis = {}, series = [] } = this.data;
        const { data: xAxisData = [] } = xAxis;
        /** @type {?} */
        const seriesData = [];
        /** @type {?} */
        const legendData = [];
        /**
         * @param {?=} list
         * @return {?}
         */
        function getBorderHeight(list = []) {
            /** @type {?} */
            const sum = list.reduce((/**
             * @param {?} acc
             * @param {?} curr
             * @return {?}
             */
            (acc, curr) => acc + curr), 0);
            /** @type {?} */
            const average = sum / list.length / 40 * 1.5;
            /** @type {?} */
            const arr = Array(list.length).fill(average);
            return arr;
        }
        series.forEach((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => {
            /** @type {?} */
            const styleObj = seriesMap[item.key] || {};
            if (item.type === "line") {
                seriesData.push(Object.assign({}, item, { step: true, lineStyle: {
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
                    seriesData.push(Object.assign({}, item, { name: '', stack: 1, barGap: "0", borderWidth: 0, itemStyle: {
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
                    seriesData.unshift(Object.assign({}, item, { stack: 1, itemStyle: {
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
        const option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            legend: Object.assign({ icon: "rect", itemWidth: 10, itemGap: 18, textStyle: {
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
    }
}
LineBarComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-line-bar",
                template: "<div class=\"chart\" id=\"chartContainer\"></div>\n",
                styles: [".chart{width:100%;height:100%}"]
            }] }
];
/** @nocollapse */
LineBarComponent.ctorParameters = () => [
    { type: PluginManagerService },
    { type: componentData }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LineBarModule {
}
LineBarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LineBarComponent],
                entryComponents: [LineBarComponent],
                imports: [CommonModule, NgZorroAntdModule],
                exports: [LineBarComponent]
            },] }
];

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