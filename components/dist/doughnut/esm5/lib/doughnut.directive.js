/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { debounce } from './common-ui';
/** @type {?} */
var $ = ((/** @type {?} */ (window))).$;
/** @type {?} */
var echarts = ((/** @type {?} */ (window))).echarts;
var appEchartsFilterpieLegend = /** @class */ (function () {
    function appEchartsFilterpieLegend(el) {
        this.el = el;
        // 图表本身
        this.resizeNamespace = 'resize.' + Date.now(); // 图表绑定到resize事件，需要一个命名空间
        this.$elem = $(el.nativeElement);
    }
    /**
     * @return {?}
     */
    appEchartsFilterpieLegend.prototype.renderChart = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var op = {
            tooltip: {
                trigger: 'item',
                formatter: this.appEchartsFilterpieLegend.formatter || '{a} <br/>{b}: {c} ({d}%)',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                padding: [15, 20, 15, 20],
                textStyle: {
                    fontSize: '14'
                }
            },
            title: {
                zlevel: 0,
                show: true,
                text: this.appEchartsFilterpieLegend.title.titleNum,
                subtext: this.appEchartsFilterpieLegend.title.titleText,
                left: "25%",
                top: "38%",
                textAlign: "center",
                textStyle: {
                    color: "#fff",
                    fontSize: 20,
                    lineHeight: 12,
                    fontWeight: 40,
                    fontFamily: "PingFangHK, PingFangHK-Semibold",
                },
                subtextStyle: {
                    color: "#fff",
                    fontSize: 12,
                    lineHeight: 12,
                },
            },
            color: this.appEchartsFilterpieLegend.color,
            legend: {
                show: true,
                orient: 'vertical',
                x: 'right',
                y: 'bottom',
                align: 'left',
                itemGap: 12,
                icon: 'rect',
                // 图例的形状
                type: 'scroll',
                top: this.appEchartsFilterpieLegend.legendTop ? this.appEchartsFilterpieLegend.legendTop : "top",
                left: '55%',
                itemHeight: 8,
                itemWidth: 8,
                formatter: null,
                textStyle: {
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: 14,
                    rich: {
                        a: {
                            fontSize: 14,
                            width: this.appEchartsFilterpieLegend.legendWidth ? this.appEchartsFilterpieLegend.legendWidth : undefined,
                        },
                        b: {
                            fontSize: 14,
                            padding: [0, 0, 0, 10]
                        }
                    }
                },
                tooltip: '' || null,
                data: []
            },
            grid: { top: 20, right: 30, bottom: 20, left: 'auto' },
            series: [{
                    name: 'v',
                    type: 'pie',
                    selectedMode: 'single',
                    selectedOffset: 0,
                    // roseType: 'radius',
                    radius: ['30%', '60%'],
                    center: ['26%', '50%'],
                    minAngle: 2,
                    // 设置最小角度，避免数量级相差太大时，小数量级的数据在饼图上不能显示出来
                    avoidLabelOverlap: true,
                    // 默认关闭防止标签重叠策略,在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '18',
                                fontWeight: 'bold',
                                color: '',
                            },
                            formatter: ''
                        }
                    },
                    itemStyle: {
                        normal: {
                        // shadowBlur: 40,
                        // shadowColor: 'rgba(0, 0, 0, 0.2)',
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: []
                },
                {
                    radius: ['40%', '50%'],
                    center: ['26%', '50%'],
                    type: 'pie',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    data: [{
                            value: 0,
                            name: '',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(255,255,255,0.09)',
                                }
                            }
                        }],
                    animation: false
                },
                {
                    radius: ['75%', '85%'],
                    center: ['26%', '50%'],
                    type: 'pie',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    tooltip: {
                        show: false
                    },
                    data: [{
                            value: 0,
                            name: '',
                            itemStyle: {
                                normal: {
                                    color: 'rgba(255,255,255,0.09)',
                                }
                            }
                        }],
                    animation: false
                }]
        };
        /** @type {?} */
        var optionSeriesData = [];
        /** @type {?} */
        var seriesData = [];
        for (var v in this.appEchartsFilterpieLegend.seriesData) {
            if (this.appEchartsFilterpieLegend.seriesData.hasOwnProperty(v)) {
                seriesData.push({
                    name: this.appEchartsFilterpieLegend.seriesData[v].name,
                    value: this.appEchartsFilterpieLegend.seriesData[v].count,
                });
                optionSeriesData.push(this.appEchartsFilterpieLegend.seriesData[v].name);
            }
        }
        op.series[0].data = seriesData;
        op.series[0].name = this.appEchartsFilterpieLegend.name;
        op.legend.data = optionSeriesData;
        // op.legend.textStyle.rich.a.width = this.appEchartsFilterpieLegend.richWidth ? this.appEchartsFilterpieLegend.richWidth : 100;
        op.legend.formatter = (/**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            /** @type {?} */
            var countObj = {};
            for (var i in _this.appEchartsFilterpieLegend.seriesData) {
                if (_this.appEchartsFilterpieLegend.seriesData.hasOwnProperty(i)) {
                    countObj[_this.appEchartsFilterpieLegend.seriesData[i].name] = _this.appEchartsFilterpieLegend.seriesData[i].code;
                }
            }
            /** @type {?} */
            var target = countObj[name];
            /** @type {?} */
            var arr = ['{a|' + name + '}', '{b|' + target + '}'];
            // console.log(name,name.length,'name~~');
            return arr.join('  ' + '|');
        });
        if (this.appEchartsFilterpieLegend.formatter) {
            op.tooltip['formatter'] = this.appEchartsFilterpieLegend.formatter;
        }
        else {
            if (this.appEchartsFilterpieLegend.formatValue === 'format') {
                op.tooltip['formatter'] = (/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    /** @type {?} */
                    var value = val.value;
                    /** @type {?} */
                    var html = "<span style=\"display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:" + val.color + "\"></span>" + val.name + ": " + value + " (" + val.percent + "%)";
                    return html;
                });
            }
            if (this.appEchartsFilterpieLegend.formatValue === 'flow') {
                op.tooltip['formatter'] = (/**
                 * @param {?} val
                 * @return {?}
                 */
                function (val) {
                    /** @type {?} */
                    var value = val.value;
                    /** @type {?} */
                    var html = "<span style=\"display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:" + val.color + "\"></span>" + val.name + ": " + value + " (" + val.percent + "%)";
                    return html;
                });
            }
        }
        if (this.appEchartsFilterpieLegend.color) {
            op.color = this.appEchartsFilterpieLegend.color;
        }
        if (this.appEchartsFilterpieLegend.radius) {
            op.series[0].radius = this.appEchartsFilterpieLegend.radius;
        }
        if (this.appEchartsFilterpieLegend.radius1) {
            op.series[1].radius = this.appEchartsFilterpieLegend.radius1;
        }
        if (this.appEchartsFilterpieLegend.radius2) {
            op.series[2].radius = this.appEchartsFilterpieLegend.radius2;
        }
        if (this.appEchartsFilterpieLegend.center) {
            op.series[0].center = this.appEchartsFilterpieLegend.center;
        }
        if (this.appEchartsFilterpieLegend.legendX) {
            op.legend.x = this.appEchartsFilterpieLegend.legendX;
        }
        if (this.appEchartsFilterpieLegend.tooltip === false) {
            delete op.tooltip;
        }
        if (this.appEchartsFilterpieLegend.type) {
            op.legend.type = this.appEchartsFilterpieLegend.type;
        }
        if (this.appEchartsFilterpieLegend.tooltip && this.appEchartsFilterpieLegend.tooltip.position) {
            op.tooltip['position'] = this.appEchartsFilterpieLegend.tooltip.position;
        }
        this.chart.clear();
        this.chart.setOption(op, false);
    };
    // 初始化画布，绑定resize事件
    // 初始化画布，绑定resize事件
    /**
     * @return {?}
     */
    appEchartsFilterpieLegend.prototype.initChart = 
    // 初始化画布，绑定resize事件
    /**
     * @return {?}
     */
    function () {
        this.chart = echarts.init(this.el.nativeElement);
        this.backEmit.call(this.that, this.chart);
        /** @type {?} */
        var resize = this.chart.resize;
        /** @type {?} */
        var resizeNamespace = this.resizeNamespace;
        $(window).off(resizeNamespace);
        this.chart.off('click');
        $(window).on(resizeNamespace, debounce(resize, 200, false));
        // if (this.appEchartsFilterpieLegend.clickFn) {
        //     this.chart.on('click', (param) => {
        //         window.location.href = this.appEchartsFilterpieLegend.clickFn[param.data.name];
        //     });
        // }
        // this.chart.on('click',function(params){
        //     //   window.open(`${this.}`)
        // })
    };
    // 解除resize
    // 解除resize
    /**
     * @return {?}
     */
    appEchartsFilterpieLegend.prototype.relieve = 
    // 解除resize
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var resizeNamespace = this.resizeNamespace;
        $(window).off(resizeNamespace);
        if (this.chart) {
            this.chart.dispose();
        }
    };
    /**
     * @return {?}
     */
    appEchartsFilterpieLegend.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    appEchartsFilterpieLegend.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var options = changes['appEchartsFilterpieLegend'];
        if (options && options.previousValue !== options.currentValue && options.currentValue) {
            this.relieve();
            this.initChart();
            this.renderChart();
        }
        // if(this.appEchartsFilterpieLegend.isShow){
        //     this.renderChart();
        // }
    };
    /**
     * @return {?}
     */
    appEchartsFilterpieLegend.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.relieve();
    };
    /**
     * @param {?} height
     * @param {?} width
     * @return {?}
     */
    appEchartsFilterpieLegend.prototype.resize = /**
     * @param {?} height
     * @param {?} width
     * @return {?}
     */
    function (height, width) {
        if (this.chart) {
            this.chart.resize({ width: width, height: height });
        }
    };
    appEchartsFilterpieLegend.decorators = [
        { type: Directive, args: [{
                    selector: '[appEchartsFilterpieLegend]'
                },] }
    ];
    /** @nocollapse */
    appEchartsFilterpieLegend.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    appEchartsFilterpieLegend.propDecorators = {
        appEchartsFilterpieLegend: [{ type: Input }],
        backEmit: [{ type: Input }],
        that: [{ type: Input }]
    };
    return appEchartsFilterpieLegend;
}());
export { appEchartsFilterpieLegend };
if (false) {
    /** @type {?} */
    appEchartsFilterpieLegend.prototype.appEchartsFilterpieLegend;
    /** @type {?} */
    appEchartsFilterpieLegend.prototype.chart;
    /** @type {?} */
    appEchartsFilterpieLegend.prototype.resizeNamespace;
    /** @type {?} */
    appEchartsFilterpieLegend.prototype.$elem;
    /** @type {?} */
    appEchartsFilterpieLegend.prototype.backEmit;
    /** @type {?} */
    appEchartsFilterpieLegend.prototype.that;
    /**
     * @type {?}
     * @private
     */
    appEchartsFilterpieLegend.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91Z2hudXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZG91Z2hudXQvIiwic291cmNlcyI6WyJsaWIvZG91Z2hudXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQThDLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O0lBRWpDLENBQUMsR0FBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsQ0FBQzs7SUFDMUIsT0FBTyxHQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxPQUFPO0FBRTVDO0lBVUksbUNBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZOztRQUpsQyxvQkFBZSxHQUFXLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyx5QkFBeUI7UUFLdkUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCwrQ0FBVzs7O0lBQVg7UUFBQSxpQkErUEM7O1lBOVBTLEVBQUUsR0FBRztZQUNQLE9BQU8sRUFBRTtnQkFDTCxPQUFPLEVBQUUsTUFBTTtnQkFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsSUFBSSwwQkFBMEI7Z0JBQ2pGLGVBQWUsRUFBRSxvQkFBb0I7Z0JBQ3JDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDekIsU0FBUyxFQUFFO29CQUNQLFFBQVEsRUFBRSxJQUFJO2lCQUNqQjthQUNKO1lBQ0QsS0FBSyxFQUFFO2dCQUNILE1BQU0sRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxJQUFJLENBQUMseUJBQXlC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QztZQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7UUFDRCw2Q0FBNkM7UUFDN0MsMEJBQTBCO1FBQzFCLElBQUk7SUFDUixDQUFDOzs7O0lBRUQsK0NBQVc7OztJQUFYO1FBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVELDBDQUFNOzs7OztJQUFOLFVBQU8sTUFBTSxFQUFFLEtBQUs7UUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0wsQ0FBQzs7Z0JBdFVKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsNkJBQTZCO2lCQUMxQzs7OztnQkFSbUIsVUFBVTs7OzRDQVV6QixLQUFLOzJCQUlMLEtBQUs7dUJBQ0wsS0FBSzs7SUE4VFYsZ0NBQUM7Q0FBQSxBQXZVRCxJQXVVQztTQXBVWSx5QkFBeUI7OztJQUNsQyw4REFBd0M7O0lBQ3hDLDBDQUFXOztJQUNYLG9EQUFpRDs7SUFDakQsMENBQVc7O0lBQ1gsNkNBQXVCOztJQUN2Qix5Q0FBbUI7Ozs7O0lBQ1AsdUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4vY29tbW9uLXVpJztcblxuY29uc3QgJDogYW55ID0gKHdpbmRvdyBhcyBhbnkpLiQ7XG5jb25zdCBlY2hhcnRzOiBhbnkgPSAod2luZG93IGFzIGFueSkuZWNoYXJ0cztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZF0nXG59KVxuZXhwb3J0IGNsYXNzIGFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBhcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kOiBhbnk7IC8vIOWbvuihqOmFjee9ruWPguaVsFxuICAgIGNoYXJ0OiBhbnk7IC8vIOWbvuihqOacrOi6q1xuICAgIHJlc2l6ZU5hbWVzcGFjZTogc3RyaW5nID0gJ3Jlc2l6ZS4nICsgRGF0ZS5ub3coKTsgLy8g5Zu+6KGo57uR5a6a5YiwcmVzaXpl5LqL5Lu277yM6ZyA6KaB5LiA5Liq5ZG95ZCN56m66Ze0XG4gICAgJGVsZW06IGFueTtcbiAgICBASW5wdXQoKSBiYWNrRW1pdDogYW55O1xuICAgIEBJbnB1dCgpIHRoYXQ6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuJGVsZW0gPSAkKGVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJlbmRlckNoYXJ0KCkge1xuICAgICAgICBjb25zdCBvcCA9IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuZm9ybWF0dGVyIHx8ICd7YX0gPGJyLz57Yn06IHtjfSAoe2R9JSknLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC43KScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogWzE1LCAyMCwgMTUsIDIwXSxcbiAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB6bGV2ZWw6IDAsXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQudGl0bGUudGl0bGVOdW0sXG4gICAgICAgICAgICAgICAgc3VidGV4dDogdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnRpdGxlLnRpdGxlVGV4dCxcbiAgICAgICAgICAgICAgICBsZWZ0OiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgIHRvcDogXCIzOCVcIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxMixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUGluZ0ZhbmdISywgUGluZ0ZhbmdISy1TZW1pYm9sZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VidGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxMixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuY29sb3IsXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9yaWVudDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgICAgICB4OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIHk6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgaXRlbUdhcDogMTIsXG4gICAgICAgICAgICAgICAgaWNvbjogJ3JlY3QnLCAgLy8g5Zu+5L6L55qE5b2i54q2XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Njcm9sbCcsXG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQubGVnZW5kVG9wID8gdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLmxlZ2VuZFRvcCA6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgbGVmdDogJzU1JScsXG4gICAgICAgICAgICAgICAgaXRlbUhlaWdodDogOCxcbiAgICAgICAgICAgICAgICBpdGVtV2lkdGg6IDgsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC44NSknLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgICAgICAgICAgIHJpY2g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5sZWdlbmRXaWR0aCA/IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5sZWdlbmRXaWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFswLCAwLCAwLCAxMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJycgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyaWQ6IHsgdG9wOiAyMCwgcmlnaHQ6IDMwLCBib3R0b206IDIwLCBsZWZ0OiAnYXV0bycgfSxcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAndicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRNb2RlOiAnc2luZ2xlJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZE9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAvLyByb3NlVHlwZTogJ3JhZGl1cycsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBbJzMwJScsICc2MCUnXSxcbiAgICAgICAgICAgICAgICBjZW50ZXI6IFsnMjYlJywgJzUwJSddLFxuICAgICAgICAgICAgICAgIG1pbkFuZ2xlOiAyLCAvLyDorr7nva7mnIDlsI/op5LluqbvvIzpgb/lhY3mlbDph4/nuqfnm7jlt67lpKrlpKfml7bvvIzlsI/mlbDph4/nuqfnmoTmlbDmja7lnKjppbzlm77kuIrkuI3og73mmL7npLrlh7rmnaVcbiAgICAgICAgICAgICAgICBhdm9pZExhYmVsT3ZlcmxhcDogdHJ1ZSwgLy8g6buY6K6k5YWz6Zet6Ziy5q2i5qCH562+6YeN5Y+g562W55WlLOWcqOagh+etvuaLpeaMpOmHjeWPoOeahOaDheWGteS4i+S8muaMquWKqOWQhOS4quagh+etvueahOS9jee9ru+8jOmYsuatouagh+etvumXtOeahOmHjeWPoFxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW1waGFzaXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hhZG93Qmx1cjogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxhYmVsTGluZToge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJhZGl1czogWyc0MCUnLCAnNTAlJ10sXG4gICAgICAgICAgICAgICAgY2VudGVyOiBbJzI2JScsICc1MCUnXSxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVtcGhhc2lzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbExpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjA5KScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJhZGl1czogWyc3NSUnLCAnODUlJ10sXG4gICAgICAgICAgICAgICAgY2VudGVyOiBbJzI2JScsICc1MCUnXSxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVtcGhhc2lzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbExpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjA5KScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhbHNlXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvblNlcmllc0RhdGEgPSBbXTtcbiAgICAgICAgY29uc3Qgc2VyaWVzRGF0YSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgdiBpbiB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuc2VyaWVzRGF0YSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5zZXJpZXNEYXRhLmhhc093blByb3BlcnR5KHYpKSB7XG4gICAgICAgICAgICAgICAgc2VyaWVzRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnNlcmllc0RhdGFbdl0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5zZXJpZXNEYXRhW3ZdLmNvdW50LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG9wdGlvblNlcmllc0RhdGEucHVzaCh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuc2VyaWVzRGF0YVt2XS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9wLnNlcmllc1swXS5kYXRhID0gc2VyaWVzRGF0YTtcbiAgICAgICAgb3Auc2VyaWVzWzBdLm5hbWUgPSB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQubmFtZTtcbiAgICAgICAgb3AubGVnZW5kLmRhdGEgPSBvcHRpb25TZXJpZXNEYXRhO1xuICAgICAgICAvLyBvcC5sZWdlbmQudGV4dFN0eWxlLnJpY2guYS53aWR0aCA9IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5yaWNoV2lkdGggPyB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQucmljaFdpZHRoIDogMTAwO1xuICAgICAgICBvcC5sZWdlbmQuZm9ybWF0dGVyID0gKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50T2JqID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnNlcmllc0RhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnNlcmllc0RhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRPYmpbdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnNlcmllc0RhdGFbaV0ubmFtZV0gPSB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuc2VyaWVzRGF0YVtpXS5jb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGNvdW50T2JqW25hbWVdO1xuICAgICAgICAgICAgY29uc3QgYXJyID0gWyd7YXwnICsgbmFtZSArICd9JywgJ3tifCcgKyB0YXJnZXQgKyAnfSddO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmFtZSxuYW1lLmxlbmd0aCwnbmFtZX5+Jyk7XG5cbiAgICAgICAgICAgIHJldHVybiBhcnIuam9pbignICAnICsgJ3wnKTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGlmICh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICBvcC50b29sdGlwWydmb3JtYXR0ZXInXSA9IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5mb3JtYXR0ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLmZvcm1hdFZhbHVlID09PSAnZm9ybWF0Jykge1xuICAgICAgICAgICAgICAgIG9wLnRvb2x0aXBbJ2Zvcm1hdHRlciddID0gKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZTogYW55ID0gdmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBodG1sID0gYDxzcGFuIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OjVweDtib3JkZXItcmFkaXVzOjEwcHg7d2lkdGg6OXB4O2hlaWdodDo5cHg7YmFja2dyb3VuZC1jb2xvcjoke3ZhbC5jb2xvcn1cIj48L3NwYW4+JHt2YWwubmFtZX06ICR7dmFsdWV9ICgke3ZhbC5wZXJjZW50fSUpYDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuZm9ybWF0VmFsdWUgPT09ICdmbG93Jykge1xuICAgICAgICAgICAgICAgIG9wLnRvb2x0aXBbJ2Zvcm1hdHRlciddID0gKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZTogYW55ID0gdmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBodG1sID0gYDxzcGFuIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OjVweDtib3JkZXItcmFkaXVzOjEwcHg7d2lkdGg6OXB4O2hlaWdodDo5cHg7YmFja2dyb3VuZC1jb2xvcjoke3ZhbC5jb2xvcn1cIj48L3NwYW4+JHt2YWwubmFtZX06ICR7dmFsdWV9ICgke3ZhbC5wZXJjZW50fSUpYDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuY29sb3IpIHtcbiAgICAgICAgICAgIG9wLmNvbG9yID0gdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLmNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQucmFkaXVzKSB7XG4gICAgICAgICAgICBvcC5zZXJpZXNbMF0ucmFkaXVzID0gdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnJhZGl1cztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnJhZGl1czEpIHtcbiAgICAgICAgICAgIG9wLnNlcmllc1sxXS5yYWRpdXMgPSB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQucmFkaXVzMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnJhZGl1czIpIHtcbiAgICAgICAgICAgIG9wLnNlcmllc1syXS5yYWRpdXMgPSB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQucmFkaXVzMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLmNlbnRlcikge1xuICAgICAgICAgICAgb3Auc2VyaWVzWzBdLmNlbnRlciA9IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5jZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5sZWdlbmRYKSB7XG4gICAgICAgICAgICBvcC5sZWdlbmQueCA9IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5sZWdlbmRYO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQudG9vbHRpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvcC50b29sdGlwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQudHlwZSkge1xuICAgICAgICAgICAgb3AubGVnZW5kLnR5cGUgPSB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQudHlwZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC50b29sdGlwICYmIHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC50b29sdGlwLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICBvcC50b29sdGlwWydwb3NpdGlvbiddID0gdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnRvb2x0aXAucG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFydC5jbGVhcigpO1xuICAgICAgICB0aGlzLmNoYXJ0LnNldE9wdGlvbihvcCwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8vIOWIneWni+WMlueUu+W4g++8jOe7keWumnJlc2l6ZeS6i+S7tlxuICAgIGluaXRDaGFydCgpIHtcbiAgICAgICAgdGhpcy5jaGFydCA9IGVjaGFydHMuaW5pdCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmJhY2tFbWl0LmNhbGwodGhpcy50aGF0LCB0aGlzLmNoYXJ0KVxuICAgICAgICBjb25zdCByZXNpemUgPSB0aGlzLmNoYXJ0LnJlc2l6ZTtcbiAgICAgICAgY29uc3QgcmVzaXplTmFtZXNwYWNlID0gdGhpcy5yZXNpemVOYW1lc3BhY2U7XG4gICAgICAgICQod2luZG93KS5vZmYocmVzaXplTmFtZXNwYWNlKTtcbiAgICAgICAgdGhpcy5jaGFydC5vZmYoJ2NsaWNrJyk7XG4gICAgICAgICQod2luZG93KS5vbihyZXNpemVOYW1lc3BhY2UsIGRlYm91bmNlKHJlc2l6ZSwgMjAwLCBmYWxzZSkpO1xuICAgICAgICAvLyBpZiAodGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLmNsaWNrRm4pIHtcbiAgICAgICAgLy8gICAgIHRoaXMuY2hhcnQub24oJ2NsaWNrJywgKHBhcmFtKSA9PiB7XG5cbiAgICAgICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5jbGlja0ZuW3BhcmFtLmRhdGEubmFtZV07XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLmNoYXJ0Lm9uKCdjbGljaycsZnVuY3Rpb24ocGFyYW1zKXtcbiAgICAgICAgLy8gICAgIC8vICAgd2luZG93Lm9wZW4oYCR7dGhpcy59YClcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cblxuICAgIC8vIOino+mZpHJlc2l6ZVxuICAgIHJlbGlldmUoKSB7XG4gICAgICAgIGNvbnN0IHJlc2l6ZU5hbWVzcGFjZSA9IHRoaXMucmVzaXplTmFtZXNwYWNlO1xuICAgICAgICAkKHdpbmRvdykub2ZmKHJlc2l6ZU5hbWVzcGFjZSk7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7XG4gICAgICAgIFtwcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2VcbiAgICB9KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjaGFuZ2VzWydhcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kJ107XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucHJldmlvdXNWYWx1ZSAhPT0gb3B0aW9ucy5jdXJyZW50VmFsdWUgJiYgb3B0aW9ucy5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucmVsaWV2ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRDaGFydCgpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmKHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5pc1Nob3cpe1xuICAgICAgICAvLyAgICAgdGhpcy5yZW5kZXJDaGFydCgpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucmVsaWV2ZSgpO1xuICAgIH1cblxuICAgIHJlc2l6ZShoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LnJlc2l6ZSh7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=