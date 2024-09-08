/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
/** @type {?} */
const echarts = ((/** @type {?} */ (window))).echarts;
export class LineBarComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGluZS1iYXIvIiwic291cmNlcyI6WyJsaWIvbGluZS1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFL0QsT0FBTyxHQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxPQUFPO0FBTzVDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBTzNCLFlBQ1Usb0JBQTBDLEVBQ2xELE9BQXNCO1FBRGQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUxwRCxpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQVFyQixVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUTs7O1FBQUUsR0FBRyxFQUFFO1lBQ3JDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUNW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QUNiLFFBQVEsRUFBRSxFQUFFO29CQUNaLEtBQUssRUFBRSxTQUFTO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7b0JBQ1osS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2dCQUNELFFBQVEsRUFBRTtvQkFDUixJQUFJLEVBQUUsS0FBSztpQkFDWjtnQkFDRCxRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLEtBQUs7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULFNBQVMsRUFBRTt3QkFDVCxJQUFJLEVBQUUsUUFBUTt3QkFDZCxLQUFLLEVBQUUsMkJBQTJCO3FCQUNuQztpQkFDRjthQUNGO1lBQ0QsTUFBTSxFQUFFLFVBQVU7U0FDbkI7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFoUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QiwrREFBd0M7O2FBRXpDOzs7O1lBUlEsb0JBQW9CO1lBQUUsYUFBYTs7OztJQVUxQyxnQ0FBVTs7SUFDVixpQ0FBVzs7SUFDWCx3Q0FBdUI7O0lBQ3ZCLGlDQUFXOztJQUNYLHVDQUFpQjs7Ozs7SUFHZixnREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tcG9uZW50RGF0YSB9IGZyb20gXCJwbHVnaW4tbWFuYWdlclwiO1xuXG5jb25zdCBlY2hhcnRzOiBhbnkgPSAod2luZG93IGFzIGFueSkuZWNoYXJ0cztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1saW5lLWJhclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xpbmUtYmFyLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9saW5lLWJhci5jb21wb25lbnQuc3R5bFwiXSxcbn0pXG5leHBvcnQgY2xhc3MgTGluZUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcbiAgY2hhcnRPcHRpb25zOiBhbnkgPSB7fTtcbiAgY2hhcnQ6IGFueTsgLy8g5Zu+6KGo5pys6LqrXG4gIHJlc2l6ZVRpbWVyOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbHVnaW5NYW5hZ2VyU2VydmljZTogUGx1Z2luTWFuYWdlclNlcnZpY2UsXG4gICAgY29tRGF0YTogY29tcG9uZW50RGF0YVxuICApIHtcbiAgICAvLyDmjqXmlLbkuK3pl7Tku7bkvKDlgLxcbiAgICBjb25zb2xlLmxvZyhcImNvbURhdGFcIiwgY29tRGF0YSk7XG4gICAgdGhpcy5kYXRhID0gY29tRGF0YS5jb25maWdEYXRhLmRhdGE7XG4gICAgdGhpcy5jb2xvciA9IGNvbURhdGEuY29uZmlnRGF0YS5jb2xvcjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5pdENoYXJ0KCk7XG4gICAgdGhpcy5yZW5kZXJDaGFydCgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZXIpO1xuICAgICAgdGhpcy5yZXNpemVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmluaXRDaGFydCgpO1xuICAgICAgICB0aGlzLnJlbmRlckNoYXJ0KCk7XG4gICAgICB9LCAyNTApO1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIEluaXRpYWxpemUgdGhlIGNoYXJ0IGFmdGVyIHRoZSB2aWV3IGlzIGluaXRpYWxpemVkXG4gIH1cblxuICBpbml0Q2hhcnQoKSB7XG4gICAgY29uc29sZS5sb2coXCJpbml0XCIpO1xuICAgIGNvbnN0IGNoYXJ0RG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFydENvbnRhaW5lclwiKSE7XG5cbiAgICB0aGlzLmNoYXJ0ID0gZWNoYXJ0cy5pbml0KGNoYXJ0RG9tKTtcbiAgfVxuXG4gIHJlbmRlckNoYXJ0KCkge1xuICAgIGNvbnN0IHsgbGVnZW5kID0ge30sIHNlcmllc01hcCA9IHt9IH0gPSB0aGlzLmNvbG9yO1xuICAgIGNvbnN0IHsgeEF4aXMgPSB7fSwgc2VyaWVzID0gW10gfSA9IHRoaXMuZGF0YTtcbiAgICBjb25zdCB7IGRhdGE6IHhBeGlzRGF0YSA9IFtdIH0gPSB4QXhpcztcbiAgICBjb25zdCBzZXJpZXNEYXRhID0gW107XG4gICAgY29uc3QgbGVnZW5kRGF0YSA9IFtdO1xuXG4gICAgZnVuY3Rpb24gZ2V0Qm9yZGVySGVpZ2h0KGxpc3QgPSBbXSkge1xuICAgICAgY29uc3Qgc3VtID0gbGlzdC5yZWR1Y2UoKGFjYywgY3VycikgPT4gYWNjICsgY3VyciwgMCk7XG4gICAgICBjb25zdCBhdmVyYWdlID0gc3VtIC8gbGlzdC5sZW5ndGggLyA0MCAqIDEuNTtcbiAgICAgIGNvbnN0IGFyciA9IEFycmF5KGxpc3QubGVuZ3RoKS5maWxsKGF2ZXJhZ2UpO1xuXG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHNlcmllcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGVPYmogPSBzZXJpZXNNYXBbaXRlbS5rZXldIHx8IHt9O1xuXG4gICAgICBpZiAoaXRlbS50eXBlID09PSBcImxpbmVcIikge1xuICAgICAgICBzZXJpZXNEYXRhLnB1c2goe1xuICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgc3RlcDogdHJ1ZSxcbiAgICAgICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBzdHlsZU9iai5pdGVtQ29sb3IgfHwgKGluZGV4ID09PSAyID8gXCIjNTBGRkNDXCIgOiBcIiM1MkQyRkZcIiksXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgIGNvbG9yOiBzdHlsZU9iai5pdGVtQ29sb3IgfHwgKGluZGV4ID09PSAyID8gXCIjNTBGRkNDXCIgOiBcIiM1MkQyRkZcIiksXG4gICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hvd0JhY2tncm91bmQ6IGluZGV4ID09PSAwLFxuICAgICAgICAgIGJhY2tncm91bmRTdHlsZToge1xuICAgICAgICAgICAgY29sb3I6IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxlZ2VuZERhdGEucHVzaCh7XG4gICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgIGljb246IFwicGF0aDovL00gMCAwIEggMTAgViAyIEggMCBaXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJiYXJcIikge1xuICAgICAgICBpZiAoc3R5bGVPYmouYm9yZGVyQ29sb3IgfHwgKGluZGV4ID09PSAwICYmICFzdHlsZU9iai5pdGVtQ29sb3IpKSB7XG4gICAgICAgICAgc2VyaWVzRGF0YS5wdXNoKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgc3RhY2s6IDEsXG4gICAgICAgICAgICAgIGJhckdhcDogXCIwXCIsXG4gICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAwLFxuICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgZWNoYXJ0cy5ncmFwaGljLkxpbmVhckdyYWRpZW50KFxuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIChzdHlsZU9iai5pdGVtQ29sb3IgJiYgc3R5bGVPYmouaXRlbUNvbG9yWzBdKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInJnYmEoODIsIDIxMCwgMjU1LCAwLjMpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAuMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoc3R5bGVPYmouaXRlbUNvbG9yICYmIHN0eWxlT2JqLml0ZW1Db2xvclsxXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZ2JhKDgyLCAyMTAsIDI1NSwgMClcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzaG93QmFja2dyb3VuZDogaW5kZXggPT09IDAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSlcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXG4gICAgICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgc3RhY2s6IDEsXG4gICAgICAgICAgICAgIGJhckdhcDogXCIwXCIsXG4gICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHN0eWxlT2JqLmJvcmRlckNvbG9yIHx8IFwicmdiYSg4MiwgMjEwLCAyNTUsIDEpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGE6IGdldEJvcmRlckhlaWdodChpdGVtLmRhdGEpLFxuICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXJpZXNEYXRhLnVuc2hpZnQoe1xuICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgIHN0YWNrOiAxLFxuICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBzdHlsZU9iai5pdGVtQ29sb3IgfHwgXCIjRkY0MzVCXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd0JhY2tncm91bmQ6IGluZGV4ID09PSAwLFxuICAgICAgICAgICAgYmFja2dyb3VuZFN0eWxlOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSlcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZWdlbmREYXRhLnB1c2goe1xuICAgICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICBpY29uOiBcInBhdGg6Ly9NIDAgMCBIIDggViA4IEggMCBaXCIsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgdG9vbHRpcDoge1xuICAgICAgICB0cmlnZ2VyOiBcImF4aXNcIixcbiAgICAgICAgYXhpc1BvaW50ZXI6IHtcbiAgICAgICAgICB0eXBlOiBcInNoYWRvd1wiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBpY29uOiBcInJlY3RcIixcbiAgICAgICAgaXRlbVdpZHRoOiAxMCxcbiAgICAgICAgLy8gaXRlbUhlaWdodDogMixcbiAgICAgICAgaXRlbUdhcDogMTgsXG4gICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgfSxcbiAgICAgICAgdG9wOiAyMCxcbiAgICAgICAgcmlnaHQ6IDIwLFxuICAgICAgICAuLi5sZWdlbmQsXG4gICAgICAgIGRhdGE6IGxlZ2VuZERhdGEsXG4gICAgICB9LFxuICAgICAgZ3JpZDoge1xuICAgICAgICBsZWZ0OiBcIjMlXCIsXG4gICAgICAgIHJpZ2h0OiBcIjQlXCIsXG4gICAgICAgIGJvdHRvbTogXCIzJVwiLFxuICAgICAgICBjb250YWluTGFiZWw6IHRydWUsXG4gICAgICB9LFxuICAgICAgeEF4aXM6IHtcbiAgICAgICAgdHlwZTogXCJjYXRlZ29yeVwiLFxuICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAgICAgICBjb2xvcjogXCIjQkFCQkNBXCIsXG4gICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICB9LFxuICAgICAgICBheGlzTGluZToge1xuICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBzcGxpdExpbmU6IHtcbiAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gYm91bmRhcnlHYXA6IGZhbHNlXG4gICAgICAgIGRhdGE6IHhBeGlzRGF0YSxcbiAgICAgIH0sXG4gICAgICB5QXhpczoge1xuICAgICAgICB0eXBlOiBcInZhbHVlXCIsXG4gICAgICAgIG5hbWVUZXh0U3R5bGU6IHtcbiAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgY29sb3I6IFwiI0JBQkJDQVwiLFxuICAgICAgICB9LFxuICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAgICAgICB3aWR0aDogMjAsXG4gICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgIGNvbG9yOiBcIiNCQUJCQ0FcIixcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3BsaXRMaW5lOiB7XG4gICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiBcImRhc2hlZFwiLFxuICAgICAgICAgICAgY29sb3I6IFwicmdiYSgxOTgsIDE5OCwgMTk4LCAwLjQwKVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgc2VyaWVzOiBzZXJpZXNEYXRhLFxuICAgIH07XG5cbiAgICB0aGlzLmNoYXJ0LmNsZWFyKCk7XG4gICAgdGhpcy5jaGFydC5zZXRPcHRpb24ob3B0aW9uLCBmYWxzZSk7XG4gIH1cbn1cbiJdfQ==