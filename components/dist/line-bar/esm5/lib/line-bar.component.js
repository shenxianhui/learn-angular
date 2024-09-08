/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
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
                seriesData.push(tslib_1.__assign({}, item, { step: true, lineStyle: {
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
                    seriesData.push(tslib_1.__assign({}, item, { name: '', stack: 1, barGap: "0", borderWidth: 0, itemStyle: {
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
                    seriesData.unshift(tslib_1.__assign({}, item, { stack: 1, itemStyle: {
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
            legend: tslib_1.__assign({ icon: "rect", itemWidth: 10, itemGap: 18, textStyle: {
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
export { LineBarComponent };
if (false) {
    /** @type {?} */
    LineBarComponent.prototype.data;
    /** @type {?} */
    LineBarComponent.prototype.color;
    /** @type {?} */
    LineBarComponent.prototype.chartOptions;
    /** @type {?} */
    LineBarComponent.prototype.chart;
    /** @type {?} */
    LineBarComponent.prototype.resizeTimer;
    /**
     * @type {?}
     * @private
     */
    LineBarComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGluZS1iYXIvIiwic291cmNlcyI6WyJsaWIvbGluZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBRS9ELE9BQU8sR0FBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsT0FBTztBQUU1QztJQVlFLDBCQUNVLG9CQUEwQyxFQUNsRCxPQUFzQjtRQURkLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFMcEQsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFRckIsVUFBVTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRW5CLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFROzs7UUFBRTtZQUNoQyxZQUFZLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVTs7O1lBQUM7Z0JBQzVCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsRUFBQyxDQUFDO0lBQ0ws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QUFFLFNBQVM7aUJBQ2pCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxLQUFLLEVBQUUsRUFBRTtvQkFDVCxRQUFRLEVBQUUsRUFBRTtvQkFDWixLQUFLLEVBQUUsU0FBUztpQkFDakI7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLElBQUksRUFBRSxLQUFLO2lCQUNaO2dCQUNELFFBQVEsRUFBRTtvQkFDUixJQUFJLEVBQUUsS0FBSztpQkFDWjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsU0FBUyxFQUFFO3dCQUNULElBQUksRUFBRSxRQUFRO3dCQUNkLEtBQUssRUFBRSwyQkFBMkI7cUJBQ25DO2lCQUNGO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsVUFBVTtTQUNuQjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQWhQRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLCtEQUF3Qzs7aUJBRXpDOzs7O2dCQVJRLG9CQUFvQjtnQkFBRSxhQUFhOztJQXFQNUMsdUJBQUM7Q0FBQSxBQWpQRCxJQWlQQztTQTVPWSxnQkFBZ0I7OztJQUMzQixnQ0FBVTs7SUFDVixpQ0FBVzs7SUFDWCx3Q0FBdUI7O0lBQ3ZCLGlDQUFXOztJQUNYLHVDQUFpQjs7Ozs7SUFHZixnREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tcG9uZW50RGF0YSB9IGZyb20gXCJwbHVnaW4tbWFuYWdlclwiO1xuXG5jb25zdCBlY2hhcnRzOiBhbnkgPSAod2luZG93IGFzIGFueSkuZWNoYXJ0cztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1saW5lLWJhclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xpbmUtYmFyLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9saW5lLWJhci5jb21wb25lbnQuc3R5bFwiXSxcbn0pXG5leHBvcnQgY2xhc3MgTGluZUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcbiAgY2hhcnRPcHRpb25zOiBhbnkgPSB7fTtcbiAgY2hhcnQ6IGFueTsgLy8g5Zu+6KGo5pys6LqrXG4gIHJlc2l6ZVRpbWVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbHVnaW5NYW5hZ2VyU2VydmljZTogUGx1Z2luTWFuYWdlclNlcnZpY2UsXG4gICAgY29tRGF0YTogY29tcG9uZW50RGF0YVxuICApIHtcbiAgICAvLyDmjqXmlLbkuK3pl7Tku7bkvKDlgLxcbiAgICBjb25zb2xlLmxvZyhcImNvbURhdGFcIiwgY29tRGF0YSk7XG4gICAgdGhpcy5kYXRhID0gY29tRGF0YS5jb25maWdEYXRhLmRhdGE7XG4gICAgdGhpcy5jb2xvciA9IGNvbURhdGEuY29uZmlnRGF0YS5jb2xvcjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdENoYXJ0KCk7XG4gICAgdGhpcy5yZW5kZXJDaGFydCgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpO1xuICAgICAgdGhpcy5yZXNpemVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmluaXRDaGFydCgpO1xuICAgICAgICB0aGlzLnJlbmRlckNoYXJ0KCk7XG4gICAgICB9LCAyNTApO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIEluaXRpYWxpemUgdGhlIGNoYXJ0IGFmdGVyIHRoZSB2aWV3IGlzIGluaXRpYWxpemVkXG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJpbml0XCIpO1xuICAgIGNvbnN0IGNoYXJ0RG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydENvbnRhaW5lclwiKSE7XG5cbiAgICB0aGlzLmNoYXJ0ID0gZWNoYXJ0cy5pbml0KGNoYXJ0RG9tKTtcbiAgfVxuXG4gIHJlbmRlckNoYXJ0KCkge1xuICAgIGNvbnN0IHsgbGVnZW5kID0ge30sIHNlcmllc01hcCA9IHt9IH0gPSB0aGlzLmNvbG9yO1xuICAgIGNvbnN0IHsgeEF4aXMgPSB7fSwgc2VyaWVzID0gW10gfSA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCB7IGRhdGE6IHhBeGlzRGF0YSA9IFtdIH0gPSB4QXhpcztcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gW107XG4gICAgY29uc3QgbGVnZW5kRGF0YSA9IFtdO1xuXG4gICAgZnVuY3Rpb24gZ2V0Qm9yZGVySGVpZ2h0KGxpc3QgPSBbXSkge1xuICAgICAgY29uc3Qgc3VtID0gbGlzdC5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3VyciwgMCk7XG4gICAgICBjb25zdCBhdmVyYWdlID0gc3VtIC8gbGlzdC5sZW5ndGggLyA0MCAqIDEuNTtcbiAgICAgIGNvbnN0IGFyciA9IEFycmF5KGxpc3QubGVuZ3RoKS5maWxsKGF2ZXJhZ2UpO1xuXG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHNlcmllcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVPYmogPSBzZXJpZXNNYXBbaXRlbS5rZXldIHx8IHt9O1xuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSBcImxpbmVcIikge1xuICAgICAgICBzZXJpZXNEYXRhLnB1c2goe1xuICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgc3RlcDogdHJ1ZSxcbiAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBzdHlsZU9iai5pdGVtQ29sb3IgfHwgKGluZGV4ID09PSAyID8gXCIjNTBGRkNDXCIgOiBcIiM1MkQyRkZcIiksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBzdHlsZU9iai5pdGVtQ29sb3IgfHwgKGluZGV4ID09PSAyID8gXCIjNTBGRkNDXCIgOiBcIiM1MkQyRkZcIiksXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvd0JhY2tncm91bmQ6IGluZGV4ID09PSAwLFxuICAgICAgICAgIGJhY2tncm91bmRTdHlsZToge1xuICAgICAgICAgICAgY29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxlZ2VuZERhdGEucHVzaCh7XG4gICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgIGljb246IFwicGF0aDovL00gMCAwIEggMTAgViAyIEggMCBaXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJiYXJcIikge1xuICAgICAgICBpZiAoc3R5bGVPYmouYm9yZGVyQ29sb3IgfHwgKGluZGV4ID09PSAwICYmICFzdHlsZU9iai5pdGVtQ29sb3IpKSB7XG4gICAgICAgICAgc2VyaWVzRGF0YS5wdXNoKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgc3RhY2s6IDEsXG4gICAgICAgICAgICAgIGJhckdhcDogXCIwXCIsXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgZWNoYXJ0cy5ncmFwaGljLkxpbmVhckdyYWRpZW50KFxuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIChzdHlsZU9iai5pdGVtQ29sb3IgJiYgc3R5bGVPYmouaXRlbUNvbG9yWzBdKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJnYmEoODIsIDIxMCwgMjU1LCAwLjMpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAuMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoc3R5bGVPYmouaXRlbUNvbG9yICYmIHN0eWxlT2JqLml0ZW1Db2xvclsxXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZ2JhKDgyLCAyMTAsIDI1NSwgMClcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzaG93QmFja2dyb3VuZDogaW5kZXggPT09IDAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSlcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgc3RhY2s6IDEsXG4gICAgICAgICAgICAgIGJhckdhcDogXCIwXCIsXG4gICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHN0eWxlT2JqLmJvcmRlckNvbG9yIHx8IFwicmdiYSg4MiwgMjEwLCAyNTUsIDEpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGE6IGdldEJvcmRlckhlaWdodChpdGVtLmRhdGEpLFxuICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXJpZXNEYXRhLnVuc2hpZnQoe1xuICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgIHN0YWNrOiAxLFxuICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBzdHlsZU9iai5pdGVtQ29sb3IgfHwgXCIjRkY0MzVCXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0JhY2tncm91bmQ6IGluZGV4ID09PSAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZFN0eWxlOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSlcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZWdlbmREYXRhLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICBpY29uOiBcInBhdGg6Ly9NIDAgMCBIIDggViA4IEggMCBaXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgdG9vbHRpcDoge1xuICAgICAgICB0cmlnZ2VyOiBcImF4aXNcIixcbiAgICAgICAgYXhpc1BvaW50ZXI6IHtcbiAgICAgICAgICB0eXBlOiBcInNoYWRvd1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBpY29uOiBcInJlY3RcIixcbiAgICAgICAgaXRlbVdpZHRoOiAxMCxcbiAgICAgICAgLy8gaXRlbUhlaWdodDogMixcbiAgICAgICAgaXRlbUdhcDogMTgsXG4gICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgfSxcbiAgICAgICAgdG9wOiAyMCxcbiAgICAgICAgcmlnaHQ6IDIwLFxuICAgICAgICAuLi5sZWdlbmQsXG4gICAgICAgIGRhdGE6IGxlZ2VuZERhdGEsXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBsZWZ0OiBcIjMlXCIsXG4gICAgICAgIHJpZ2h0OiBcIjQlXCIsXG4gICAgICAgIGJvdHRvbTogXCIzJVwiLFxuICAgICAgICBjb250YWluTGFiZWw6IHRydWUsXG4gICAgICB9LFxuICAgICAgeEF4aXM6IHtcbiAgICAgICAgdHlwZTogXCJjYXRlZ29yeVwiLFxuICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAgICAgICBjb2xvcjogXCIjQkFCQkNBXCIsXG4gICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICB9LFxuICAgICAgICBheGlzTGluZToge1xuICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBzcGxpdExpbmU6IHtcbiAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYm91bmRhcnlHYXA6IGZhbHNlXG4gICAgICAgIGRhdGE6IHhBeGlzRGF0YSxcbiAgICAgIH0sXG4gICAgICB5QXhpczoge1xuICAgICAgICB0eXBlOiBcInZhbHVlXCIsXG4gICAgICAgIG5hbWVUZXh0U3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgY29sb3I6IFwiI0JBQkJDQVwiLFxuICAgICAgICB9LFxuICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAgICAgICB3aWR0aDogMjAsXG4gICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgIGNvbG9yOiBcIiNCQUJCQ0FcIixcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3BsaXRMaW5lOiB7XG4gICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiBcImRhc2hlZFwiLFxuICAgICAgICAgICAgY29sb3I6IFwicmdiYSgxOTgsIDE5OCwgMTk4LCAwLjQwKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgc2VyaWVzOiBzZXJpZXNEYXRhLFxuICAgIH07XG5cbiAgICB0aGlzLmNoYXJ0LmNsZWFyKCk7XG4gICAgdGhpcy5jaGFydC5zZXRPcHRpb24ob3B0aW9uLCBmYWxzZSk7XG4gIH1cbn1cbiJdfQ==