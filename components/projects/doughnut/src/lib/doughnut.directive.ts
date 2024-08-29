import { Directive, ElementRef, Input, OnInit, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { debounce } from './common-ui';

const $: any = (window as any).$;
const echarts: any = (window as any).echarts;

@Directive({
    selector: '[appEchartsFilterpieLegend]'
})
export class appEchartsFilterpieLegend implements OnInit, OnChanges, OnDestroy {
    @Input() appEchartsFilterpieLegend: any; // 图表配置参数
    chart: any; // 图表本身
    resizeNamespace: string = 'resize.' + Date.now(); // 图表绑定到resize事件，需要一个命名空间
    $elem: any;
    @Input() backEmit: any;
    @Input() that: any;
    constructor(private el: ElementRef) {
        this.$elem = $(el.nativeElement);
    }

    renderChart() {
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
                icon: 'rect',  // 图例的形状
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
                minAngle: 2, // 设置最小角度，避免数量级相差太大时，小数量级的数据在饼图上不能显示出来
                avoidLabelOverlap: true, // 默认关闭防止标签重叠策略,在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠
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

        const optionSeriesData = [];
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
        op.legend.formatter = (name) => {
            const countObj = {};
            for (const i in this.appEchartsFilterpieLegend.seriesData) {
                if (this.appEchartsFilterpieLegend.seriesData.hasOwnProperty(i)) {
                    countObj[this.appEchartsFilterpieLegend.seriesData[i].name] = this.appEchartsFilterpieLegend.seriesData[i].code;
                }
            }
            const target = countObj[name];
            const arr = ['{a|' + name + '}', '{b|' + target + '}'];
            // console.log(name,name.length,'name~~');

            return arr.join('  ' + '|');
        };


        if (this.appEchartsFilterpieLegend.formatter) {
            op.tooltip['formatter'] = this.appEchartsFilterpieLegend.formatter;
        } else {
            if (this.appEchartsFilterpieLegend.formatValue === 'format') {
                op.tooltip['formatter'] = (val) => {
                    const value: any = val.value;
                    const html = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${val.color}"></span>${val.name}: ${value} (${val.percent}%)`;
                    return html;
                };
            }
            if (this.appEchartsFilterpieLegend.formatValue === 'flow') {
                op.tooltip['formatter'] = (val) => {
                    const value: any = val.value;
                    const html = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:${val.color}"></span>${val.name}: ${value} (${val.percent}%)`;
                    return html;
                };
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
    initChart() {
        this.chart = echarts.init(this.el.nativeElement);
        this.backEmit.call(this.that, this.chart)
        const resize = this.chart.resize;
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
    relieve() {
        const resizeNamespace = this.resizeNamespace;
        $(window).off(resizeNamespace);
        if (this.chart) {
            this.chart.dispose();
        }
    }

    ngOnInit() { }

    ngOnChanges(changes: {
        [propKey: string]: SimpleChange
    }) {
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

    ngOnDestroy() {
        this.relieve();
    }

    resize(height, width) {
        if (this.chart) {
            this.chart.resize({ width: width, height: height });
        }
    }
}
