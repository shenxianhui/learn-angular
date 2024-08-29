/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
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
export { FanSunburstComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFuLXN1bmJ1cnN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Zhbi1zdW5idXJzdC8iLCJzb3VyY2VzIjpbImxpYi9mYW4tc3VuYnVyc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUUvRCxDQUFDLEdBQVEsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLENBQUM7O0lBQzFCLE9BQU8sR0FBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsT0FBTztBQUU1QztJQWVFLDhCQUFvQixvQkFBMEMsRUFBRSxPQUFzQjtRQUFsRSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVELFVBQVU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFBO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUE7SUFDdkMsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUFBLGlCQVlDOztZQVhLLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWE7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRXJDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUVoQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUTs7O1FBQUM7WUFDL0IsSUFBRyxLQUFJLENBQUMsT0FBTyxFQUFDO2dC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STtZQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7U0FDaEM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ2xCLENBQUM7O2dCQWpPRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsMHBEQUE0Qzs7aUJBRTdDOzs7O2dCQVRRLG9CQUFvQjtnQkFBRSxhQUFhOzs7aUNBaUJ6QyxTQUFTLFNBQUMsYUFBYTs7SUFzTjFCLDJCQUFDO0NBQUEsQUFsT0QsSUFrT0M7U0E3Tlksb0JBQW9COzs7SUFFL0Isb0NBQVU7O0lBQ1YscUNBQVc7O0lBQ1gsdUNBQWE7O0lBQ2IsdUNBQWE7O0lBRWIsOENBQzBCOzs7OztJQUVkLG9EQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21wb25lbnREYXRhIH0gZnJvbSAncGx1Z2luLW1hbmFnZXInO1xuXG5jb25zdCAkOiBhbnkgPSAod2luZG93IGFzIGFueSkuJDtcbmNvbnN0IGVjaGFydHM6IGFueSA9ICh3aW5kb3cgYXMgYW55KS5lY2hhcnRzO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZmFuLXN1bmJ1cnN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zhbi1zdW5idXJzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Zhbi1zdW5idXJzdC5jb21wb25lbnQuc3R5bCddXG59KVxuZXhwb3J0IGNsYXNzIEZhblN1bmJ1cnN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBkYXRhOiBhbnk7XG4gIGNvbG9yOiBhbnk7XG4gIGN1cnJlbnQ6IGFueTtcbiAgbXlDaGFydDogYW55O1xuXG4gIEBWaWV3Q2hpbGQoJ2ZhbnN1bmJ1cnN0JylcbiAgZmFuc3VuYnVyc3REaXY6IEVsZW1lbnRSZWZcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsdWdpbk1hbmFnZXJTZXJ2aWNlOiBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tRGF0YTogY29tcG9uZW50RGF0YSkge1xuICAgIC8vIOaOpeaUtuS4remXtOS7tuS8oOWAvFxuICAgIGNvbnNvbGUubG9nKFwiY29tRGF0YVwiLCBjb21EYXRhKVxuICAgIHRoaXMuZGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YS5kYXRhXG4gICAgdGhpcy5jb2xvciA9IGNvbURhdGEuY29uZmlnRGF0YS5jb2xvclxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGNoYXJ0RG9tID0gdGhpcy5mYW5zdW5idXJzdERpdi5uYXRpdmVFbGVtZW50XG4gICAgdGhpcy5teUNoYXJ0ID0gZWNoYXJ0cy5pbml0KGNoYXJ0RG9tKVxuXG4gICAgdGhpcy5jdXJyZW50ID0gMFxuICAgIHRoaXMuc2V0T3B0aW9uKClcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XG4gICAgICBpZih0aGlzLm15Q2hhcnQpe1xuICAgICAgICB0aGlzLm15Q2hhcnQucmVzaXplKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2V0T3B0aW9uKCl7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmN1cnJlbnRcbiAgICBsZXQgbnVtID0gdGhpcy5kYXRhW2N1cnJlbnRdLm51bVxuICAgIGxldCB0b3RhbE51bSA9IHRoaXMuZGF0YVtjdXJyZW50XS50b3RhbE51bVxuICAgIFxuICAgIGxldCBvcHRpb24gPSB7XG4gICAgICB0aXRsZToge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICB0ZXh0OiBbXCJ7YnzmlbDph49cXG59XCIsIGB7YXwke251bX19IGBdLmpvaW4oXCJcIiksXG4gICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgIHJpY2g6IHtcbiAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzUyZDJmZlwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgICAgICAgIGhlaWdodDogNjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxNFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbGVmdDogXCJjZW50ZXJcIixcbiAgICAgICAgYm90dG9tOiAnMjMlJyxcbiAgICAgIH0sXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIHNob3c6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBzZXJpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICBtYXg6IHRvdGFsTnVtLFxuICAgICAgICAgIHJhZGl1czogJzEwMCUnLFxuICAgICAgICAgIHR5cGU6ICdnYXVnZScsXG4gICAgICAgICAgc3RhcnRBbmdsZTogMTgwLFxuICAgICAgICAgIGVuZEFuZ2xlOiAwLFxuICAgICAgICAgIGNlbnRlcjogWyc1MCUnLCAnNzUlJ10sXG4gICAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICBjb2xvcjogW1xuICAgICAgICAgICAgICAgIFtudW0gLyB0b3RhbE51bSwgbmV3IGVjaGFydHMuZ3JhcGhpYy5MaW5lYXJHcmFkaWVudChcbiAgICAgICAgICAgICAgICAgIDAsIDEsIDEsIDAsIFt7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDgyLDIxMCwyNTUsMC4zKScsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzUyZDJmZicsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICldLFxuICAgICAgICAgICAgICAgIFtudW0gLyB0b3RhbE51bSArIDAuMDEsICd0cmFuc3BhcmVudCddLFxuICAgICAgICAgICAgICAgIFsxLCBuZXcgZWNoYXJ0cy5ncmFwaGljLkxpbmVhckdyYWRpZW50KFxuICAgICAgICAgICAgICAgICAgMCwgMSwgMSwgMCwgW3tcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC44MCknLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC4zKScsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgd2lkdGg6IDIwLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXhpc1RpY2s6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzcGxpdExpbmU6IHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwb2ludGVyOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YTogW11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIOS6rue6v1xuICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgIHo6IDUsXG4gICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCcsXG4gICAgICAgICAgcmFkaXVzOiBbJzY3JScsICc2NyUnXSxcbiAgICAgICAgICBjZW50ZXI6IFsnNTAlJywgJzc1JSddLFxuICAgICAgICAgIGhvdmVyQW5pbWF0aW9uOiBmYWxzZSxcbiAgICAgICAgICBsZWdlbmRIb3Zlckxpbms6IGZhbHNlLFxuICAgICAgICAgIGxhYmVsTGluZToge1xuICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRhdGE6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDMsXG4gICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgeDI6IDAsXG4gICAgICAgICAgICAgICAgICAgIHkyOiAxLFxuICAgICAgICAgICAgICAgICAgICBjb2xvclN0b3BzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogMCwgY29sb3I6ICcjZmZmJ1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLjUsIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwKSdcbiAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbENvb3JkOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiAnZ2F1Z2UnLFxuICAgICAgICAgIHN0YXJ0QW5nbGU6IDE4MCxcbiAgICAgICAgICBlbmRBbmdsZTogMCxcbiAgICAgICAgICByYWRpdXM6ICc2NSUnLFxuICAgICAgICAgIGNlbnRlcjogWyc1MCUnLCAnNzUlJ10sXG4gICAgICAgICAgYXhpc0xpbmU6IHtcbiAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICBjb2xvcjogW1xuICAgICAgICAgICAgICAgIFswLCAncmdiKDM0LDQ2LDYxKSddLFxuICAgICAgICAgICAgICAgIFsxLCAncmdiKDM0LDQ2LDYxKSddXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHdpZHRoOiA1MFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3BsaXROdW1iZXI6IDYsXG4gICAgICAgICAgc3BsaXRMaW5lOiB7XG4gICAgICAgICAgICBkaXN0YW5jZTogLTUwLFxuICAgICAgICAgICAgbGVuZ3RoOiA1MSxcbiAgICAgICAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgICAgICAgIGNvbG9yOiAncmdiKDUsMjYsNDYpJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcG9pbnRlcjoge1xuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF4aXNUaWNrOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YTogW3sgdmFsdWU6IDAsIG5hbWU6ICcnIH1dXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfVxuICAgIFxuICAgIG9wdGlvbiAmJiB0aGlzLm15Q2hhcnQuc2V0T3B0aW9uKG9wdGlvbilcbiAgfVxuXG4gIHByZXZpb3VzKCl7XG4gICAgaWYodGhpcy5jdXJyZW50IDw9IDApe1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5kYXRhLmxlbmd0aCAtIDFcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudCAtIDFcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ+eCueWHu+S6huS4iuS4gOS4qicsdGhpcy5jdXJyZW50KVxuICAgIHRoaXMuc2V0T3B0aW9uKClcbiAgfVxuXG4gIG5leHQoKXtcbiAgICBpZih0aGlzLmRhdGEubGVuZ3RoIDw9IHRoaXMuY3VycmVudCArIDEpe1xuICAgICAgdGhpcy5jdXJyZW50ID0gMFxuICAgIH1lbHNle1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50ICsgMVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygn54K55Ye75LqG5LiL5LiA5LiqJyx0aGlzLmN1cnJlbnQpXG4gICAgdGhpcy5zZXRPcHRpb24oKVxuICB9XG59XG4iXX0=