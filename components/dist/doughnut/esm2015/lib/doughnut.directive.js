/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
import { debounce } from './common-ui';
/** @type {?} */
const $ = ((/** @type {?} */ (window))).$;
/** @type {?} */
const echarts = ((/** @type {?} */ (window))).echarts;
export class appEchartsFilterpieLegend {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        // 图表本身
        this.resizeNamespace = 'resize.' + Date.now(); // 图表绑定到resize事件，需要一个命名空间
        this.$elem = $(el.nativeElement);
    }
    /**
     * @return {?}
     */
    renderChart() {
        /** @type {?} */
        const op = {
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
        const optionSeriesData = [];
        /** @type {?} */
        const seriesData = [];
        for (const v in this.appEchartsFilterpieLegend.seriesData) {
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
        (name) => {
            /** @type {?} */
            const countObj = {};
            for (const i in this.appEchartsFilterpieLegend.seriesData) {
                if (this.appEchartsFilterpieLegend.seriesData.hasOwnProperty(i)) {
                    countObj[this.appEchartsFilterpieLegend.seriesData[i].name] = this.appEchartsFilterpieLegend.seriesData[i].code;
                }
            }
            /** @type {?} */
            const target = countObj[name];
            /** @type {?} */
            const arr = ['{a|' + name + '}', '{b|' + target + '}'];
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
                (val) => {
                    /** @type {?} */
                    const value = val.value;
                    /** @type {?} */
                    const html = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${val.color}"></span>${val.name}: ${value} (${val.percent}%)`;
                    return html;
                });
            }
            if (this.appEchartsFilterpieLegend.formatValue === 'flow') {
                op.tooltip['formatter'] = (/**
                 * @param {?} val
                 * @return {?}
                 */
                (val) => {
                    /** @type {?} */
                    const value = val.value;
                    /** @type {?} */
                    const html = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${val.color}"></span>${val.name}: ${value} (${val.percent}%)`;
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
    }
    // 初始化画布，绑定resize事件
    /**
     * @return {?}
     */
    initChart() {
        this.chart = echarts.init(this.el.nativeElement);
        this.backEmit.call(this.that, this.chart);
        /** @type {?} */
        const resize = this.chart.resize;
        /** @type {?} */
        const resizeNamespace = this.resizeNamespace;
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
    }
    // 解除resize
    /**
     * @return {?}
     */
    relieve() {
        /** @type {?} */
        const resizeNamespace = this.resizeNamespace;
        $(window).off(resizeNamespace);
        if (this.chart) {
            this.chart.dispose();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const options = changes['appEchartsFilterpieLegend'];
        if (options && options.previousValue !== options.currentValue && options.currentValue) {
            this.relieve();
            this.initChart();
            this.renderChart();
        }
        // if(this.appEchartsFilterpieLegend.isShow){
        //     this.renderChart();
        // }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.relieve();
    }
    /**
     * @param {?} height
     * @param {?} width
     * @return {?}
     */
    resize(height, width) {
        if (this.chart) {
            this.chart.resize({ width: width, height: height });
        }
    }
}
appEchartsFilterpieLegend.decorators = [
    { type: Directive, args: [{
                selector: '[appEchartsFilterpieLegend]'
            },] }
];
/** @nocollapse */
appEchartsFilterpieLegend.ctorParameters = () => [
    { type: ElementRef }
];
appEchartsFilterpieLegend.propDecorators = {
    appEchartsFilterpieLegend: [{ type: Input }],
    backEmit: [{ type: Input }],
    that: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91Z2hudXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZG91Z2hudXQvIiwic291cmNlcyI6WyJsaWIvZG91Z2hudXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQThDLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7O01BRWpDLENBQUMsR0FBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsQ0FBQzs7TUFDMUIsT0FBTyxHQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxPQUFPO0FBSzVDLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFPbEMsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7O1FBSmxDLG9CQUFlLEdBQVcsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlCQUF5QjtRQUt2RSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELFdBQVc7O2NBQ0QsRUFBRSxHQUFHO1lBQ1AsT0FBTyxFQUFFO2dCQUNMLE9BQU8sRUFBRSxNQUFNO2dCQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxJQUFJLDBCQUEwQjtnQkFDakYsZUFBZSxFQUFFLG9CQUFvQjtnQkFDckMsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUN6QixTQUFTLEVBQUU7b0JBQ1AsUUFBUSxFQUFFLElBQUk7aUJBQ2pCO2FBQ0o7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsUUFBUTtnQkFDbkQsT0FBTyxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsU0FBUztnQkFDdkQsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsR0FBRyxFQUFFLEtBQUs7Z0JBQ1YsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CLFNBQVMsRUFBRTtvQkFDUCxLQUFLLEVBQUUsTUFBTTtvQkFDYixRQUFRLEVBQUUsRUFBRTtvQkFDWixVQUFVLEVBQUUsRUFBRTtvQkFDZCxVQUFVLEVBQUUsRUFBRTtvQkFDZCxVQUFVLEVBQUUsaUNBQWlDO2lCQUNoRDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLE1BQU07b0JBQ2IsUUFBUSxFQUFFLEVBQUU7b0JBQ1osVUFBVSxFQUFFLEVBQUU7aUJBQ2pCO2FBQ0o7WUFDRCxLQUFLLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUs7WUFDM0MsTUFBTSxFQUFFO2dCQUNKLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixDQUFDLEVBQUUsT0FBTztnQkFDVixDQUFDLEVBQUUsUUFBUTtnQkFDWCxLQUFLLEVBQUUsTUFBTTtnQkFDYixPQUFPLEVBQUUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsTUFBTTs7Z0JBQ1osSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsR0FBRyxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUs7Z0JBQ2hHLElBQUksRUFBRSxLQUFLO2dCQUNYLFVBQVUsRUFBRSxDQUFDO2dCQUNiLFNBQVMsRUFBRSxDQUFDO2dCQUNaLFNBQVMsRUFBRSxJQUFJO2dCQUNmLFNBQVMsRUFBRTtvQkFDUCxLQUFLLEVBQUUsd0JBQXdCO29CQUMvQixRQUFRLEVBQUUsRUFBRTtvQkFDWixJQUFJLEVBQUU7d0JBQ0YsQ0FBQyxFQUFFOzRCQUNDLFFBQVEsRUFBRSxFQUFFOzRCQUNaLEtBQUssRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTO3lCQUM3Rzt3QkFDRCxDQUFDLEVBQUU7NEJBQ0MsUUFBUSxFQUFFLEVBQUU7NEJBQ1osT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3lCQUN6QjtxQkFDSjtpQkFDSjtnQkFDRCxPQUFPLEVBQUUsRUFBRSxJQUFJLElBQUk7Z0JBQ25CLElBQUksRUFBRSxFQUFFO2FBQ1g7WUFDRCxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQ3RELE1BQU0sRUFBRSxDQUFDO29CQUNMLElBQUksRUFBRSxHQUFHO29CQUNULElBQUksRUFBRSxLQUFLO29CQUNYLFlBQVksRUFBRSxRQUFRO29CQUN0QixjQUFjLEVBQUUsQ0FBQzs7b0JBRWpCLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7b0JBQ3RCLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7b0JBQ3RCLFFBQVEsRUFBRSxDQUFDOztvQkFDWCxpQkFBaUIsRUFBRSxJQUFJOztvQkFDdkIsS0FBSyxFQUFFO3dCQUNILE1BQU0sRUFBRTs0QkFDSixJQUFJLEVBQUUsS0FBSzs0QkFDWCxRQUFRLEVBQUUsUUFBUTt5QkFDckI7d0JBQ0QsUUFBUSxFQUFFOzRCQUNOLElBQUksRUFBRSxJQUFJOzRCQUNWLFNBQVMsRUFBRTtnQ0FDUCxRQUFRLEVBQUUsSUFBSTtnQ0FDZCxVQUFVLEVBQUUsTUFBTTtnQ0FDbEIsS0FBSyxFQUFFLEVBQUU7NkJBQ1o7NEJBQ0QsU0FBUyxFQUFFLEVBQUU7eUJBQ2hCO3FCQUNKO29CQUNELFNBQVMsRUFBRTt3QkFDUCxNQUFNLEVBQUU7d0JBQ0osa0JBQWtCO3dCQUNsQixxQ0FBcUM7eUJBQ3hDO3FCQUNKO29CQUNELFNBQVMsRUFBRTt3QkFDUCxNQUFNLEVBQUU7NEJBQ0osSUFBSSxFQUFFLEtBQUs7eUJBQ2Q7cUJBQ0o7b0JBQ0QsSUFBSSxFQUFFLEVBQUU7aUJBQ1g7Z0JBQ0Q7b0JBQ0ksTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztvQkFDdEIsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztvQkFDdEIsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFO3dCQUNILE1BQU0sRUFBRTs0QkFDSixJQUFJLEVBQUUsS0FBSzt5QkFDZDt3QkFDRCxRQUFRLEVBQUU7NEJBQ04sSUFBSSxFQUFFLEtBQUs7eUJBQ2Q7cUJBQ0o7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLE1BQU0sRUFBRTs0QkFDSixJQUFJLEVBQUUsS0FBSzt5QkFDZDt3QkFDRCxRQUFRLEVBQUU7NEJBQ04sSUFBSSxFQUFFLEtBQUs7eUJBQ2Q7cUJBQ0o7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLElBQUksRUFBRSxLQUFLO3FCQUNkO29CQUNELElBQUksRUFBRSxDQUFDOzRCQUNILEtBQUssRUFBRSxDQUFDOzRCQUNSLElBQUksRUFBRSxFQUFFOzRCQUNSLFNBQVMsRUFBRTtnQ0FDUCxNQUFNLEVBQUU7b0NBQ0osS0FBSyxFQUFFLHdCQUF3QjtpQ0FDbEM7NkJBQ0o7eUJBQ0osQ0FBQztvQkFDRixTQUFTLEVBQUUsS0FBSztpQkFDbkI7Z0JBQ0Q7b0JBQ0ksTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztvQkFDdEIsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztvQkFDdEIsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFO3dCQUNILE1BQU0sRUFBRTs0QkFDSixJQUFJLEVBQUUsS0FBSzt5QkFDZDt3QkFDRCxRQUFRLEVBQUU7NEJBQ04sSUFBSSxFQUFFLEtBQUs7eUJBQ2Q7cUJBQ0o7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLE1BQU0sRUFBRTs0QkFDSixJQUFJLEVBQUUsS0FBSzt5QkFDZDt3QkFDRCxRQUFRLEVBQUU7NEJBQ04sSUFBSSxFQUFFLEtBQUs7eUJBQ2Q7cUJBQ0o7b0JBQ0QsT0FBTyxFQUFFO3dCQUNMLElBQUksRUFBRSxLQUFLO3FCQUNkO29CQUNELElBQUksRUFBRSxDQUFDOzRCQUNILEtBQUssRUFBRSxDQUFDOzRCQUNSLElBQUksRUFBRSxFQUFFOzRCQUNSLFNBQVMsRUFBRTtnQ0FDUCxNQUFNLEVBQUU7b0NBQ0osS0FBSyxFQUFFLHdCQUF3QjtpQ0FDbEM7NkJBQ0o7eUJBQ0osQ0FBQztvQkFDRixTQUFTLEVBQUUsS0FBSztpQkFDbkIsQ0FBQztTQUNMOztjQUVLLGdCQUFnQixHQUFHLEVBQUU7O2NBQ3JCLFVBQVUsR0FBRyxFQUFFO1FBRXJCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsRUFBRTtZQUN2RCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM3RCxVQUFVLENBQUMsSUFBSSxDQUFDO29CQUNaLElBQUksRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ3ZELEtBQUssRUFBRSxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7aUJBQzVELENBQUMsQ0FBQztnQkFDSCxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1RTtTQUNKO1FBRUQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUM7UUFDeEQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7UUFDbEMsZ0lBQWdJO1FBQ2hJLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUzs7OztRQUFHLENBQUMsSUFBSSxFQUFFLEVBQUU7O2tCQUNyQixRQUFRLEdBQUcsRUFBRTtZQUNuQixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3ZELElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQzdELFFBQVEsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2lCQUNuSDthQUNKOztrQkFDSyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQzs7a0JBQ3ZCLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLEtBQUssR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ3RELDBDQUEwQztZQUUxQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQSxDQUFDO1FBR0YsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxFQUFFO1lBQzFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQztTQUN0RTthQUFNO1lBQ0gsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxLQUFLLFFBQVEsRUFBRTtnQkFDekQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7Ozs7Z0JBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTs7MEJBQ3hCLEtBQUssR0FBUSxHQUFHLENBQUMsS0FBSzs7MEJBQ3RCLElBQUksR0FBRywrR0FBK0csR0FBRyxDQUFDLEtBQUssWUFBWSxHQUFHLENBQUMsSUFBSSxLQUFLLEtBQUssS0FBSyxHQUFHLENBQUMsT0FBTyxJQUFJO29CQUN2TCxPQUFPLElBQUksQ0FBQztnQkFDaEIsQ0FBQyxDQUFBLENBQUM7YUFDTDtZQUNELElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLFdBQVcsS0FBSyxNQUFNLEVBQUU7Z0JBQ3ZELEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOzs7O2dCQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7OzBCQUN4QixLQUFLLEdBQVEsR0FBRyxDQUFDLEtBQUs7OzBCQUN0QixJQUFJLEdBQUcsK0dBQStHLEdBQUcsQ0FBQyxLQUFLLFlBQVksR0FBRyxDQUFDLElBQUksS0FBSyxLQUFLLEtBQUssR0FBRyxDQUFDLE9BQU8sSUFBSTtvQkFDdkwsT0FBTyxJQUFJLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQSxDQUFDO2FBQ0w7U0FDSjtRQUVELElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssRUFBRTtZQUN0QyxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUM7U0FDbkQ7UUFDRCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUU7WUFDdkMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQztTQUMvRDtRQUNELElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sRUFBRTtZQUN4QyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxFQUFFO1lBQ3hDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUM7U0FDaEU7UUFDRCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUU7WUFDdkMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQztTQUMvRDtRQUNELElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sRUFBRTtZQUN4QyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtZQUNsRCxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUM7U0FDckI7UUFDRCxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLEVBQUU7WUFDckMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQztTQUN4RDtRQUdELElBQUksSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUMzRixFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQzVFO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFHRCxTQUFTO1FBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7O2NBQ25DLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07O2NBQzFCLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZTtRQUM1QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDNUQsZ0RBQWdEO1FBQ2hELDBDQUEwQztRQUUxQywwRkFBMEY7UUFDMUYsVUFBVTtRQUNWLElBQUk7UUFDSiwwQ0FBMEM7UUFDMUMsbUNBQW1DO1FBQ25DLEtBQUs7SUFDVCxDQUFDOzs7OztJQUlELE9BQU87O2NBQ0csZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlO1FBQzVDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN4QjtJQUNMLENBQUM7Ozs7SUFFRCxRQUFRLEtBQUssQ0FBQzs7Ozs7SUFFZCxXQUFXLENBQUMsT0FFWDs7Y0FDUyxPQUFPLEdBQUcsT0FBTyxDQUFDLDJCQUEyQixDQUFDO1FBQ3BELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxhQUFhLEtBQUssT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ25GLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUVmLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7UUFDRCw2Q0FBNkM7UUFDN0MsMEJBQTBCO1FBQzFCLElBQUk7SUFDUixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUs7UUFDaEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO0lBQ0wsQ0FBQzs7O1lBdFVKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsNkJBQTZCO2FBQzFDOzs7O1lBUm1CLFVBQVU7Ozt3Q0FVekIsS0FBSzt1QkFJTCxLQUFLO21CQUNMLEtBQUs7Ozs7SUFMTiw4REFBd0M7O0lBQ3hDLDBDQUFXOztJQUNYLG9EQUFpRDs7SUFDakQsMENBQVc7O0lBQ1gsNkNBQXVCOztJQUN2Qix5Q0FBbUI7Ozs7O0lBQ1AsdUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4vY29tbW9uLXVpJztcblxuY29uc3QgJDogYW55ID0gKHdpbmRvdyBhcyBhbnkpLiQ7XG5jb25zdCBlY2hhcnRzOiBhbnkgPSAod2luZG93IGFzIGFueSkuZWNoYXJ0cztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZF0nXG59KVxuZXhwb3J0IGNsYXNzIGFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBhcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kOiBhbnk7IC8vIOWbvuihqOmFjee9ruWPguaVsFxuICAgIGNoYXJ0OiBhbnk7IC8vIOWbvuihqOacrOi6q1xuICAgIHJlc2l6ZU5hbWVzcGFjZTogc3RyaW5nID0gJ3Jlc2l6ZS4nICsgRGF0ZS5ub3coKTsgLy8g5Zu+6KGo57uR5a6a5YiwcmVzaXpl5LqL5Lu277yM6ZyA6KaB5LiA5Liq5ZG95ZCN56m66Ze0XG4gICAgJGVsZW06IGFueTtcbiAgICBASW5wdXQoKSBiYWNrRW1pdDogYW55O1xuICAgIEBJbnB1dCgpIHRoYXQ6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgICAgIHRoaXMuJGVsZW0gPSAkKGVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJlbmRlckNoYXJ0KCkge1xuICAgICAgICBjb25zdCBvcCA9IHtcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiAnaXRlbScsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuZm9ybWF0dGVyIHx8ICd7YX0gPGJyLz57Yn06IHtjfSAoe2R9JSknLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC43KScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogWzE1LCAyMCwgMTUsIDIwXSxcbiAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB6bGV2ZWw6IDAsXG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQudGl0bGUudGl0bGVOdW0sXG4gICAgICAgICAgICAgICAgc3VidGV4dDogdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnRpdGxlLnRpdGxlVGV4dCxcbiAgICAgICAgICAgICAgICBsZWZ0OiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgIHRvcDogXCIzOCVcIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxMixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNDAsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiUGluZ0ZhbmdISywgUGluZ0ZhbmdISy1TZW1pYm9sZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VidGV4dFN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxMixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuY29sb3IsXG4gICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIG9yaWVudDogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgICAgICB4OiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIHk6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgaXRlbUdhcDogMTIsXG4gICAgICAgICAgICAgICAgaWNvbjogJ3JlY3QnLCAgLy8g5Zu+5L6L55qE5b2i54q2XG4gICAgICAgICAgICAgICAgdHlwZTogJ3Njcm9sbCcsXG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQubGVnZW5kVG9wID8gdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLmxlZ2VuZFRvcCA6IFwidG9wXCIsXG4gICAgICAgICAgICAgICAgbGVmdDogJzU1JScsXG4gICAgICAgICAgICAgICAgaXRlbUhlaWdodDogOCxcbiAgICAgICAgICAgICAgICBpdGVtV2lkdGg6IDgsXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgICAgIHRleHRTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC44NSknLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgICAgICAgICAgIHJpY2g6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5sZWdlbmRXaWR0aCA/IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5sZWdlbmRXaWR0aCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFswLCAwLCAwLCAxMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDogJycgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyaWQ6IHsgdG9wOiAyMCwgcmlnaHQ6IDMwLCBib3R0b206IDIwLCBsZWZ0OiAnYXV0bycgfSxcbiAgICAgICAgICAgIHNlcmllczogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAndicsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BpZScsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRNb2RlOiAnc2luZ2xlJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZE9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAvLyByb3NlVHlwZTogJ3JhZGl1cycsXG4gICAgICAgICAgICAgICAgcmFkaXVzOiBbJzMwJScsICc2MCUnXSxcbiAgICAgICAgICAgICAgICBjZW50ZXI6IFsnMjYlJywgJzUwJSddLFxuICAgICAgICAgICAgICAgIG1pbkFuZ2xlOiAyLCAvLyDorr7nva7mnIDlsI/op5LluqbvvIzpgb/lhY3mlbDph4/nuqfnm7jlt67lpKrlpKfml7bvvIzlsI/mlbDph4/nuqfnmoTmlbDmja7lnKjppbzlm77kuIrkuI3og73mmL7npLrlh7rmnaVcbiAgICAgICAgICAgICAgICBhdm9pZExhYmVsT3ZlcmxhcDogdHJ1ZSwgLy8g6buY6K6k5YWz6Zet6Ziy5q2i5qCH562+6YeN5Y+g562W55WlLOWcqOagh+etvuaLpeaMpOmHjeWPoOeahOaDheWGteS4i+S8muaMquWKqOWQhOS4quagh+etvueahOS9jee9ru+8jOmYsuatouagh+etvumXtOeahOmHjeWPoFxuICAgICAgICAgICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZW1waGFzaXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hhZG93Qmx1cjogNDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzaGFkb3dDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC4yKScsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxhYmVsTGluZToge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJhZGl1czogWyc0MCUnLCAnNTAlJ10sXG4gICAgICAgICAgICAgICAgY2VudGVyOiBbJzI2JScsICc1MCUnXSxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVtcGhhc2lzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbExpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjA5KScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJhZGl1czogWyc3NSUnLCAnODUlJ10sXG4gICAgICAgICAgICAgICAgY2VudGVyOiBbJzI2JScsICc1MCUnXSxcbiAgICAgICAgICAgICAgICB0eXBlOiAncGllJyxcbiAgICAgICAgICAgICAgICBsYWJlbDoge1xuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVtcGhhc2lzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsYWJlbExpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbXBoYXNpczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vcm1hbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjA5KScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhbHNlXG4gICAgICAgICAgICB9XVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9wdGlvblNlcmllc0RhdGEgPSBbXTtcbiAgICAgICAgY29uc3Qgc2VyaWVzRGF0YSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgdiBpbiB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuc2VyaWVzRGF0YSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5zZXJpZXNEYXRhLmhhc093blByb3BlcnR5KHYpKSB7XG4gICAgICAgICAgICAgICAgc2VyaWVzRGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnNlcmllc0RhdGFbdl0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5zZXJpZXNEYXRhW3ZdLmNvdW50LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG9wdGlvblNlcmllc0RhdGEucHVzaCh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuc2VyaWVzRGF0YVt2XS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9wLnNlcmllc1swXS5kYXRhID0gc2VyaWVzRGF0YTtcbiAgICAgICAgb3Auc2VyaWVzWzBdLm5hbWUgPSB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQubmFtZTtcbiAgICAgICAgb3AubGVnZW5kLmRhdGEgPSBvcHRpb25TZXJpZXNEYXRhO1xuICAgICAgICAvLyBvcC5sZWdlbmQudGV4dFN0eWxlLnJpY2guYS53aWR0aCA9IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5yaWNoV2lkdGggPyB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQucmljaFdpZHRoIDogMTAwO1xuICAgICAgICBvcC5sZWdlbmQuZm9ybWF0dGVyID0gKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50T2JqID0ge307XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnNlcmllc0RhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnNlcmllc0RhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnRPYmpbdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnNlcmllc0RhdGFbaV0ubmFtZV0gPSB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuc2VyaWVzRGF0YVtpXS5jb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGNvdW50T2JqW25hbWVdO1xuICAgICAgICAgICAgY29uc3QgYXJyID0gWyd7YXwnICsgbmFtZSArICd9JywgJ3tifCcgKyB0YXJnZXQgKyAnfSddO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobmFtZSxuYW1lLmxlbmd0aCwnbmFtZX5+Jyk7XG5cbiAgICAgICAgICAgIHJldHVybiBhcnIuam9pbignICAnICsgJ3wnKTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGlmICh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICBvcC50b29sdGlwWydmb3JtYXR0ZXInXSA9IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5mb3JtYXR0ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLmZvcm1hdFZhbHVlID09PSAnZm9ybWF0Jykge1xuICAgICAgICAgICAgICAgIG9wLnRvb2x0aXBbJ2Zvcm1hdHRlciddID0gKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZTogYW55ID0gdmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBodG1sID0gYDxzcGFuIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OjVweDtib3JkZXItcmFkaXVzOjEwcHg7d2lkdGg6OXB4O2hlaWdodDo5cHg7YmFja2dyb3VuZC1jb2xvcjoke3ZhbC5jb2xvcn1cIj48L3NwYW4+JHt2YWwubmFtZX06ICR7dmFsdWV9ICgke3ZhbC5wZXJjZW50fSUpYDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuZm9ybWF0VmFsdWUgPT09ICdmbG93Jykge1xuICAgICAgICAgICAgICAgIG9wLnRvb2x0aXBbJ2Zvcm1hdHRlciddID0gKHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZTogYW55ID0gdmFsLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBodG1sID0gYDxzcGFuIHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLXJpZ2h0OjVweDtib3JkZXItcmFkaXVzOjEwcHg7d2lkdGg6OXB4O2hlaWdodDo5cHg7YmFja2dyb3VuZC1jb2xvcjoke3ZhbC5jb2xvcn1cIj48L3NwYW4+JHt2YWwubmFtZX06ICR7dmFsdWV9ICgke3ZhbC5wZXJjZW50fSUpYDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQuY29sb3IpIHtcbiAgICAgICAgICAgIG9wLmNvbG9yID0gdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLmNvbG9yO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQucmFkaXVzKSB7XG4gICAgICAgICAgICBvcC5zZXJpZXNbMF0ucmFkaXVzID0gdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnJhZGl1cztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnJhZGl1czEpIHtcbiAgICAgICAgICAgIG9wLnNlcmllc1sxXS5yYWRpdXMgPSB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQucmFkaXVzMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnJhZGl1czIpIHtcbiAgICAgICAgICAgIG9wLnNlcmllc1syXS5yYWRpdXMgPSB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQucmFkaXVzMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLmNlbnRlcikge1xuICAgICAgICAgICAgb3Auc2VyaWVzWzBdLmNlbnRlciA9IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5jZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5sZWdlbmRYKSB7XG4gICAgICAgICAgICBvcC5sZWdlbmQueCA9IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5sZWdlbmRYO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQudG9vbHRpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBvcC50b29sdGlwO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQudHlwZSkge1xuICAgICAgICAgICAgb3AubGVnZW5kLnR5cGUgPSB0aGlzLmFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmQudHlwZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC50b29sdGlwICYmIHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC50b29sdGlwLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICBvcC50b29sdGlwWydwb3NpdGlvbiddID0gdGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLnRvb2x0aXAucG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jaGFydC5jbGVhcigpO1xuICAgICAgICB0aGlzLmNoYXJ0LnNldE9wdGlvbihvcCwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8vIOWIneWni+WMlueUu+W4g++8jOe7keWumnJlc2l6ZeS6i+S7tlxuICAgIGluaXRDaGFydCgpIHtcbiAgICAgICAgdGhpcy5jaGFydCA9IGVjaGFydHMuaW5pdCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB0aGlzLmJhY2tFbWl0LmNhbGwodGhpcy50aGF0LCB0aGlzLmNoYXJ0KVxuICAgICAgICBjb25zdCByZXNpemUgPSB0aGlzLmNoYXJ0LnJlc2l6ZTtcbiAgICAgICAgY29uc3QgcmVzaXplTmFtZXNwYWNlID0gdGhpcy5yZXNpemVOYW1lc3BhY2U7XG4gICAgICAgICQod2luZG93KS5vZmYocmVzaXplTmFtZXNwYWNlKTtcbiAgICAgICAgdGhpcy5jaGFydC5vZmYoJ2NsaWNrJyk7XG4gICAgICAgICQod2luZG93KS5vbihyZXNpemVOYW1lc3BhY2UsIGRlYm91bmNlKHJlc2l6ZSwgMjAwLCBmYWxzZSkpO1xuICAgICAgICAvLyBpZiAodGhpcy5hcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kLmNsaWNrRm4pIHtcbiAgICAgICAgLy8gICAgIHRoaXMuY2hhcnQub24oJ2NsaWNrJywgKHBhcmFtKSA9PiB7XG5cbiAgICAgICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5jbGlja0ZuW3BhcmFtLmRhdGEubmFtZV07XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLmNoYXJ0Lm9uKCdjbGljaycsZnVuY3Rpb24ocGFyYW1zKXtcbiAgICAgICAgLy8gICAgIC8vICAgd2luZG93Lm9wZW4oYCR7dGhpcy59YClcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cblxuICAgIC8vIOino+mZpHJlc2l6ZVxuICAgIHJlbGlldmUoKSB7XG4gICAgICAgIGNvbnN0IHJlc2l6ZU5hbWVzcGFjZSA9IHRoaXMucmVzaXplTmFtZXNwYWNlO1xuICAgICAgICAkKHdpbmRvdykub2ZmKHJlc2l6ZU5hbWVzcGFjZSk7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LmRpc3Bvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7XG4gICAgICAgIFtwcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2VcbiAgICB9KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjaGFuZ2VzWydhcHBFY2hhcnRzRmlsdGVycGllTGVnZW5kJ107XG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMucHJldmlvdXNWYWx1ZSAhPT0gb3B0aW9ucy5jdXJyZW50VmFsdWUgJiYgb3B0aW9ucy5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucmVsaWV2ZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRDaGFydCgpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJDaGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmKHRoaXMuYXBwRWNoYXJ0c0ZpbHRlcnBpZUxlZ2VuZC5pc1Nob3cpe1xuICAgICAgICAvLyAgICAgdGhpcy5yZW5kZXJDaGFydCgpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucmVsaWV2ZSgpO1xuICAgIH1cblxuICAgIHJlc2l6ZShoZWlnaHQsIHdpZHRoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0LnJlc2l6ZSh7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=