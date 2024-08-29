import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, ViewChild, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $ = ((/** @type {?} */ (window))).$;
/** @type {?} */
var echarts = ((/** @type {?} */ (window))).echarts;
var FanSunburstComponent = /** @class */ (function () {
    function FanSunburstComponent(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    FanSunburstComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var chartDom = this.fansunburstDiv.nativeElement;
        this.myChart = echarts.init(chartDom);
        this.current = 0;
        this.setOption();
        window.addEventListener('resize', (/**
         * @return {?}
         */
        function () {
            if (_this.myChart) {
                _this.myChart.resize();
            }
        }));
    };
    /**
     * @return {?}
     */
    FanSunburstComponent.prototype.setOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var current = this.current;
        /** @type {?} */
        var num = this.data[current].num;
        /** @type {?} */
        var totalNum = this.data[current].totalNum;
        /** @type {?} */
        var option = {
            title: {
                show: true,
                text: ["{b|数量\n}", "{a|" + num + "} "].join(""),
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
    };
    /**
     * @return {?}
     */
    FanSunburstComponent.prototype.previous = /**
     * @return {?}
     */
    function () {
        if (this.current <= 0) {
            this.current = this.data.length - 1;
        }
        else {
            this.current = this.current - 1;
        }
        console.log('点击了上一个', this.current);
        this.setOption();
    };
    /**
     * @return {?}
     */
    FanSunburstComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        if (this.data.length <= this.current + 1) {
            this.current = 0;
        }
        else {
            this.current = this.current + 1;
        }
        console.log('点击了下一个', this.current);
        this.setOption();
    };
    FanSunburstComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-fan-sunburst',
                    template: "<div class=\"fan-sunburst wh-100\">\n  <div class=\"wh-100\" #fansunburst></div>\n  <div class=\"top-title\">{{data[current]?.title || \"\"}}</div>\n  <div class=\"bottom-box\">\n    <img class=\"boimg\" (click)=\"previous()\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAAAXNSR0IArs4c6QAAAZRJREFUOE+llDFPFFEUhb8TN0YhMZGKaEVho8xa24GGRLDCdWJj6GnUP6F/QTpiKJcBLYTGBGkMlrCuDSSa0NGpoMawc8yQN2QMs0MYpnnFvPPlnnPfvaLis90EhoCfwH7h3JeUZlL109seBm4BHyT1+t0rBdhuAFPAhqS9qir7Ae4AlrRRJS61YPsaMAYsSvp7JkAo/Unw/e008YkKbN8DLkl6VxQ/3HIbeISYWYq00PriGz5k3OLrcQa2rwOPgVeSfueA1me3nLIoWE2amoo/+vLhFeLsf+MH7SOA7QvAU+C9pE4ujrse6qV0DQMpjL6NtDvd8YTMiBqsJTe1nQMmgWFJ8/+V3vFrzIzEbBJpLt70SE9MpLD7pqnVowxC6s+Al5K+54Dpru8rZUWwnoxyd3KHiwN/iG0ag6a9cFsHRcBz4EUZwGZ9OaoAhAzqWzg1xF4IURUhBkjexjlJv060UawkkR6UtjG/fK6HFKrIprD+Uw6Q+sNUsFJ/nAtWstZ+qrVQAqT+SitYyZbq1bBQS5fqP1qQ9y0WC+oXAAAAAElFTkSuQmCC\">\n    <div class=\"botext\">{{current + 1}}</div>\n    <img class=\"boimg\" (click)=\"next()\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAWCAYAAADJqhx8AAAAAXNSR0IArs4c6QAAAZxJREFUOE+tlD1PFGEUhZ8zQ4wE0Eo7EkywYV0s/WjABAo+EsRlS0Ls9C/on1Abe2JjhgUaWRLCRyU1O2hjQaWh0sTExcDqMZBl87pZFliYZDKTOzfP3HPvPa+oXrYjoLN6dwXvPySVjvPqnzrpw2HcdgwMAp8k7TbKbQqoQm4C94BlSQfnqiCQdx+QpM1WAVeAKWBD0rcQcqqEoIqeaj/eSaocxzWZeljmltpYL/Tpy5PU05hZYG6+X/nwb7bHgT1JqzVA/qPbK9c4Smz7SZI81F6u5CXDiCKmCndUCKpoB54D7yV9PYwfSch99m1XeGSxs5DVykTq7shsS5TjiEyS0fcAkgWGgDeS/tR68LjkkQi6Y7OS3NVOLvUzm7eI2fmsZuqkPAV2JRVrgOktd/wSeYlK+SpJsZf93DZrhgFHjC5ktBxUcR14CbxqCphMWZMY+GvGFvtVrAO8AF5fjoQTmwjlOD6liQ3HmPqDzeiZxnjORRoDfv+3SM3sXDe6xqt8FoDti5nJdut2tn0DeAAshS6smenSjrRWD9V/YY7xRSyxeT4AAAAASUVORK5CYII=\">\n  </div>\n</div>",
                    styles: [".fan-sunburst{display:inline-block;position:relative;box-sizing:border-box;overflow:hidden}.fan-sunburst .top-title{position:absolute;top:25px;color:#fff;font-size:18px;width:100%;text-align:center}.fan-sunburst .bottom-box{position:absolute;bottom:25px;width:100%;display:flex;justify-content:center;align-content:center}.fan-sunburst .botext{color:#fff;font-size:16px;margin:0 15px;line-height:22px}.fan-sunburst .boimg{height:22px;width:16px;cursor:pointer}.wh-100{width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    FanSunburstComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    FanSunburstComponent.propDecorators = {
        fansunburstDiv: [{ type: ViewChild, args: ['fansunburst',] }]
    };
    return FanSunburstComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FanSunburstModule = /** @class */ (function () {
    function FanSunburstModule() {
    }
    FanSunburstModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FanSunburstComponent],
                    entryComponents: [FanSunburstComponent],
                    imports: [CommonModule, NgZorroAntdModule],
                    exports: [FanSunburstComponent]
                },] }
    ];
    return FanSunburstModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var publicApi = createPlugin({
    name: 'fan-sunburst',
    module: FanSunburstModule,
    component: FanSunburstComponent
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export default publicApi;

//# sourceMappingURL=fan-sunburst.js.map