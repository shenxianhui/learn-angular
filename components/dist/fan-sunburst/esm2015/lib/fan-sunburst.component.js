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
export class FanSunburstComponent {
    /**
     * @param {?} pluginManagerService
     * @param {?} comData
     */
    constructor(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let chartDom = this.fansunburstDiv.nativeElement;
        this.myChart = echarts.init(chartDom);
        this.current = 0;
        this.setOption();
        window.addEventListener('resize', (/**
         * @return {?}
         */
        () => {
            if (this.myChart) {
                this.myChart.resize();
            }
        }));
    }
    /**
     * @return {?}
     */
    setOption() {
        /** @type {?} */
        let current = this.current;
        /** @type {?} */
        let num = this.data[current].num;
        /** @type {?} */
        let totalNum = this.data[current].totalNum;
        /** @type {?} */
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
                                [num / totalNum, new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                                            offset: 0,
                                            color: 'rgba(82,210,255,0.3)',
                                        },
                                        {
                                            offset: 1,
                                            color: '#52d2ff',
                                        }
                                    ])],
                                [num / totalNum + 0.01, 'transparent'],
                                [1, new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                                            offset: 0,
                                            color: 'rgba(255,255,255,0.80)',
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(255,255,255,0.3)',
                                        }
                                    ])
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
        };
        option && this.myChart.setOption(option);
    }
    /**
     * @return {?}
     */
    previous() {
        if (this.current <= 0) {
            this.current = this.data.length - 1;
        }
        else {
            this.current = this.current - 1;
        }
        console.log('点击了上一个', this.current);
        this.setOption();
    }
    /**
     * @return {?}
     */
    next() {
        if (this.data.length <= this.current + 1) {
            this.current = 0;
        }
        else {
            this.current = this.current + 1;
        }
        console.log('点击了下一个', this.current);
        this.setOption();
    }
}
FanSunburstComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-fan-sunburst',
                template: "<div class=\"fan-sunburst wh-100\">\n  <div class=\"wh-100\" #fansunburst></div>\n  <div class=\"top-title\">{{data[current]?.title || \"\"}}</div>\n  <div class=\"bottom-box\">\n    <img class=\"boimg\" (click)=\"previous()\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAAAXNSR0IArs4c6QAAAZRJREFUOE+llDFPFFEUhb8TN0YhMZGKaEVho8xa24GGRLDCdWJj6GnUP6F/QTpiKJcBLYTGBGkMlrCuDSSa0NGpoMawc8yQN2QMs0MYpnnFvPPlnnPfvaLis90EhoCfwH7h3JeUZlL109seBm4BHyT1+t0rBdhuAFPAhqS9qir7Ae4AlrRRJS61YPsaMAYsSvp7JkAo/Unw/e008YkKbN8DLkl6VxQ/3HIbeISYWYq00PriGz5k3OLrcQa2rwOPgVeSfueA1me3nLIoWE2amoo/+vLhFeLsf+MH7SOA7QvAU+C9pE4ujrse6qV0DQMpjL6NtDvd8YTMiBqsJTe1nQMmgWFJ8/+V3vFrzIzEbBJpLt70SE9MpLD7pqnVowxC6s+Al5K+54Dpru8rZUWwnoxyd3KHiwN/iG0ag6a9cFsHRcBz4EUZwGZ9OaoAhAzqWzg1xF4IURUhBkjexjlJv060UawkkR6UtjG/fK6HFKrIprD+Uw6Q+sNUsFJ/nAtWstZ+qrVQAqT+SitYyZbq1bBQS5fqP1qQ9y0WC+oXAAAAAElFTkSuQmCC\">\n    <div class=\"botext\">{{current + 1}}</div>\n    <img class=\"boimg\" (click)=\"next()\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAAAXNSR0IArs4c6QAAAZxJREFUOE+tlD1PFGEUhZ8zQ4wE0Eo7EkywYV0s/WjABAo+EsRlS0Ls9C/on1Abe2JjhgUaWRLCRyU1O2hjQaWh0sTExcDqMZBl87pZFliYZDKTOzfP3HPvPa+oXrYjoLN6dwXvPySVjvPqnzrpw2HcdgwMAp8k7TbKbQqoQm4C94BlSQfnqiCQdx+QpM1WAVeAKWBD0rcQcqqEoIqeaj/eSaocxzWZeljmltpYL/Tpy5PU05hZYG6+X/nwb7bHgT1JqzVA/qPbK9c4Smz7SZI81F6u5CXDiCKmCndUCKpoB54D7yV9PYwfSch99m1XeGSxs5DVykTq7shsS5TjiEyS0fcAkgWGgDeS/tR68LjkkQi6Y7OS3NVOLvUzm7eI2fmsZuqkPAV2JRVrgOktd/wSeYlK+SpJsZf93DZrhgFHjC5ktBxUcR14CbxqCphMWZMY+GvGFvtVrAO8AF5fjoQTmwjlOD6liQ3HmPqDzeiZxnjORRoDfv+3SM3sXDe6xqt8FoDti5nJdut2tn0DeAAshS6smenSjrRWD9V/YY7xRSyxeT4AAAAASUVORK5CYII=\">\n  </div>\n</div>",
                styles: [".fan-sunburst{display:inline-block;position:relative;box-sizing:border-box;overflow:hidden}.fan-sunburst .top-title{position:absolute;top:25px;color:#fff;font-size:18px;width:100%;text-align:center}.fan-sunburst .bottom-box{position:absolute;bottom:25px;width:100%;display:flex;justify-content:center;align-content:center}.fan-sunburst .botext{color:#fff;font-size:16px;margin:0 15px;line-height:22px}.fan-sunburst .boimg{height:22px;width:16px;cursor:pointer}.wh-100{width:100%;height:100%}"]
            }] }
];
/** @nocollapse */
FanSunburstComponent.ctorParameters = () => [
    { type: PluginManagerService },
    { type: componentData }
];
FanSunburstComponent.propDecorators = {
    fansunburstDiv: [{ type: ViewChild, args: ['fansunburst',] }]
};
if (false) {
    /** @type {?} */
    FanSunburstComponent.prototype.data;
    /** @type {?} */
    FanSunburstComponent.prototype.color;
    /** @type {?} */
    FanSunburstComponent.prototype.current;
    /** @type {?} */
    FanSunburstComponent.prototype.myChart;
    /** @type {?} */
    FanSunburstComponent.prototype.fansunburstDiv;
    /**
     * @type {?}
     * @private
     */
    FanSunburstComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFuLXN1bmJ1cnN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zhbi1zdW5idXJzdC8iLCJzb3VyY2VzIjpbImxpYi9mYW4tc3VuYnVyc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQUUvRCxDQUFDLEdBQVEsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLENBQUM7O01BQzFCLE9BQU8sR0FBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsT0FBTztBQU81QyxNQUFNLE9BQU8sb0JBQW9COzs7OztJQVUvQixZQUFvQixvQkFBMEMsRUFBRSxPQUFzQjtRQUFsRSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVELFVBQVU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFBO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUE7SUFDdkMsQ0FBQzs7OztJQUVELFFBQVE7O1lBQ0YsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYTtRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7UUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBRWhCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFROzs7UUFBQyxHQUFFLEVBQUU7WUFDbkMsSUFBRyxJQUFJLENBQUMs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Q0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7U0FDaEM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ2xCLENBQUM7OztZQWpPRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsMHBEQUE0Qzs7YUFFN0M7Ozs7WUFUUSxvQkFBb0I7WUFBRSxhQUFhOzs7NkJBaUJ6QyxTQUFTLFNBQUMsYUFBYTs7OztJQUx4QixvQ0FBVTs7SUFDVixxQ0FBVzs7SUFDWCx1Q0FBYTs7SUFDYix1Q0FBYTs7SUFFYiw4Q0FDMEI7Ozs7O0lBRWQsb0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luTWFuYWdlclNlcnZpY2UsIGNvbXBvbmVudERhdGEgfSBmcm9tICdwbHVnaW4tbWFuYWdlcic7XG5cbmNvbnN0ICQ6IGFueSA9ICh3aW5kb3cgYXMgYW55KS4kO1xuY29uc3QgZWNoYXJ0czogYW55ID0gKHdpbmRvdyBhcyBhbnkpLmVjaGFydHM7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1mYW4tc3VuYnVyc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFuLXN1bmJ1cnN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmFuLXN1bmJ1cnN0LmNvbXBvbmVudC5zdHlsJ11cbn0pXG5leHBvcnQgY2xhc3MgRmFuU3VuYnVyc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcbiAgY3VycmVudDogYW55O1xuICBteUNoYXJ0OiBhbnk7XG5cbiAgQFZpZXdDaGlsZCgnZmFuc3VuYnVyc3QnKVxuICBmYW5zdW5idXJzdERpdjogRWxlbWVudFJlZlxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21EYXRhOiBjb21wb25lbnREYXRhKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpXG4gICAgdGhpcy5kYXRhID0gY29tRGF0YS5jb25maWdEYXRhLmRhdGFcbiAgICB0aGlzLmNvbG9yID0gY29tRGF0YS5jb25maWdEYXRhLmNvbG9yXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgY2hhcnREb20gPSB0aGlzLmZhbnN1bmJ1cnN0RGl2Lm5hdGl2ZUVsZW1lbnRcbiAgICB0aGlzLm15Q2hhcnQgPSBlY2hhcnRzLmluaXQoY2hhcnREb20pXG5cbiAgICB0aGlzLmN1cnJlbnQgPSAwXG4gICAgdGhpcy5zZXRPcHRpb24oKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcbiAgICAgIGlmKHRoaXMubXlDaGFydCl7XG4gICAgICAgIHRoaXMubXlDaGFydC5yZXNpemUoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBzZXRPcHRpb24oKXtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudFxuICAgIGxldCBudW0gPSB0aGlzLmRhdGFbY3VycmVudF0ubnVtXG4gICAgbGV0IHRvdGFsTnVtID0gdGhpcy5kYXRhW2N1cnJlbnRdLnRvdGFsTnVtXG4gICAgXG4gICAgbGV0IG9wdGlvbiA9IHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgIHRleHQ6IFtcIntifOaVsOmHj1xcbn1cIiwgYHthfCR7bnVtfX0gYF0uam9pbihcIlwiKSxcbiAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgcmljaDoge1xuICAgICAgICAgICAgYToge1xuICAgICAgICAgICAgICBjb2xvcjogXCIjNTJkMmZmXCIsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiA2MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGI6IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDE0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsZWZ0OiBcImNlbnRlclwiLFxuICAgICAgICBib3R0b206ICcyMyUnLFxuICAgICAgfSxcbiAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIHNlcmllczogW1xuICAgICAgICB7XG4gICAgICAgICAgbWluOiAwLFxuICAgICAgICAgIG1heDogdG90YWxOdW0sXG4gICAgICAgICAgcmFkaXVzOiAnMTAwJScsXG4gICAgICAgICAgdHlwZTogJ2dhdWdlJyxcbiAgICAgICAgICBzdGFydEFuZ2xlOiAxODAsXG4gICAgICAgICAgZW5kQW5nbGU6IDAsXG4gICAgICAgICAgY2VudGVyOiBbJzUwJScsICc3NSUnXSxcbiAgICAgICAgICBheGlzTGluZToge1xuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBbXG4gICAgICAgICAgICAgICAgW251bSAvIHRvdGFsTnVtLCBuZXcgZWNoYXJ0cy5ncmFwaGljLkxpbmVhckdyYWRpZW50KFxuICAgICAgICAgICAgICAgICAgMCwgMSwgMSwgMCwgW3tcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoODIsMjEwLDI1NSwwLjMpJyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogMSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjNTJkMmZmJyxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKV0sXG4gICAgICAgICAgICAgICAgW251bSAvIHRvdGFsTnVtICsgMC4wMSwgJ3RyYW5zcGFyZW50J10sXG4gICAgICAgICAgICAgICAgWzEsIG5ldyBlY2hhcnRzLmdyYXBoaWMuTGluZWFyR3JhZGllbnQoXG4gICAgICAgICAgICAgICAgICAwLCAxLCAxLCAwLCBbe1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjgwKScsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjMpJyxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB3aWR0aDogMjAsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBheGlzVGljazoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNwbGl0TGluZToge1xuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBvaW50ZXI6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8g5Lqu57q/XG4gICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgejogNSxcbiAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgICByYWRpdXM6IFsnNjclJywgJzY3JSddLFxuICAgICAgICAgIGNlbnRlcjogWyc1MCUnLCAnNzUlJ10sXG4gICAgICAgICAgaG92ZXJBbmltYXRpb246IGZhbHNlLFxuICAgICAgICAgIGxlZ2VuZEhvdmVyTGluazogZmFsc2UsXG4gICAgICAgICAgbGFiZWxMaW5lOiB7XG4gICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWx1ZTogMSxcbiAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMyxcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICB4MjogMCxcbiAgICAgICAgICAgICAgICAgICAgeTI6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU3RvcHM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLCBjb2xvcjogJyNmZmYnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAuNSwgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDApJ1xuICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQ29vcmQ6IGZhbHNlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdnYXVnZScsXG4gICAgICAgICAgc3RhcnRBbmdsZTogMTgwLFxuICAgICAgICAgIGVuZEFuZ2xlOiAwLFxuICAgICAgICAgIHJhZGl1czogJzY1JScsXG4gICAgICAgICAgY2VudGVyOiBbJzUwJScsICc3NSUnXSxcbiAgICAgICAgICBheGlzTGluZToge1xuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBbXG4gICAgICAgICAgICAgICAgWzAsICdyZ2IoMzQsNDYsNjEpJ10sXG4gICAgICAgICAgICAgICAgWzEsICdyZ2IoMzQsNDYsNjEpJ11cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgd2lkdGg6IDUwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzcGxpdE51bWJlcjogNixcbiAgICAgICAgICBzcGxpdExpbmU6IHtcbiAgICAgICAgICAgIGRpc3RhbmNlOiAtNTAsXG4gICAgICAgICAgICBsZW5ndGg6IDUxLFxuICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgICAgICAgY29sb3I6ICdyZ2IoNSwyNiw0NiknXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwb2ludGVyOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBheGlzTGFiZWw6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhOiBbeyB2YWx1ZTogMCwgbmFtZTogJycgfV1cbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9XG4gICAgXG4gICAgb3B0aW9uICYmIHRoaXMubXlDaGFydC5zZXRPcHRpb24ob3B0aW9uKVxuICB9XG5cbiAgcHJldmlvdXMoKXtcbiAgICBpZih0aGlzLmN1cnJlbnQgPD0gMCl7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmRhdGEubGVuZ3RoIC0gMVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50IC0gMVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygn54K55Ye75LqG5LiK5LiA5LiqJyx0aGlzLmN1cnJlbnQpXG4gICAgdGhpcy5zZXRPcHRpb24oKVxuICB9XG5cbiAgbmV4dCgpe1xuICAgIGlmKHRoaXMuZGF0YS5sZW5ndGggPD0gdGhpcy5jdXJyZW50ICsgMSl7XG4gICAgICB0aGlzLmN1cnJlbnQgPSAwXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgKyAxXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCfngrnlh7vkuobkuIvkuIDkuKonLHRoaXMuY3VycmVudClcbiAgICB0aGlzLnNldE9wdGlvbigpXG4gIH1cbn1cbiJdfQ==