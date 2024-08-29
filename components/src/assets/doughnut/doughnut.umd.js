(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('plugin-manager'), require('ng-zorro-antd'), require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('doughnut', ['plugin-manager', 'ng-zorro-antd', '@angular/common', '@angular/core'], factory) :
    (global.doughnut = factory(global.pluginManager,global.ngZorroAntd,global.ng.common,global.ng.core));
}(this, (function (pluginManager,ngZorroAntd,common,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $ = (( /** @type {?} */(window))).$;
    var DoughnutComponent = /** @class */ (function () {
        function DoughnutComponent(el, pluginManagerService, comData) {
            this.el = el;
            this.pluginManagerService = pluginManagerService;
            this.moduleData = [0, null, false];
            this.doughnutData = {};
            // 分页的初始数据
            this.leftActive = true;
            this.rightActive = false;
            this.leftText = '';
            this.rightText = '';
            this.btnShowIndex = 1;
            // 切换的初始数据
            this.switchAcitveIndex = 0;
            this.switchInfo = [
                {
                    "switchText": "基本环图1",
                    "rangeData": [0, 3]
                },
                {
                    "switchText": "基本环图2",
                    "rangeData": [4, 5]
                },
                {
                    "switchText": "基本环图3",
                    "rangeData": [6, 9]
                },
                {
                    "switchText": "基本环图4",
                    "rangeData": [10, 12]
                },
                {
                    "switchText": "基本环图5",
                    "rangeData": [3, 9]
                },
                {
                    "switchText": "基本环图6",
                    "rangeData": [0, 11]
                }
            ];
            this.switchColor = ['#55a722', '#ff7e75', '#0099ff', '#d284d9', '#ffbb29'];
            // 环图的默认颜色配置
            this.doughnutColor = ['rgb(253,97,55)', 'rgb(248,193,71)', 'rgb(53,100,255)', 'rgb(35,170,241)', 'rgb(2,207,150)', '#d284d9'];
            // 图例的宽度
            this.legendWidth = undefined;
            this.legendTop = "10%";
            // loading判断
            this.pageLoading = true;
            this.switchLoading = true;
            // appEchartsFilterpieLegend指令数据相关
            this.that = this;
            this.$elem = $(this.el.nativeElement);
            // 接收中间件传值
            this.configData = comData.configData;
        }
        /**
         * @param {?} e
         * @return {?}
         */
        DoughnutComponent.prototype.backEmit = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                if (!!e) {
                    this.chart = e;
                }
            };
        /**
         * @return {?}
         */
        DoughnutComponent.prototype.onResize = /**
         * @return {?}
         */
            function () {
                this.chart && this.chart.resize();
            };
        /**
         * @return {?}
         */
        DoughnutComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.fetchData(false);
            };
        // pageInfo存在时的操作
        // pageInfo存在时的操作
        /**
         * @return {?}
         */
        DoughnutComponent.prototype.pageOperation =
            // pageInfo存在时的操作
            /**
             * @return {?}
             */
            function () {
                // 深拷贝一份分页数据
                /** @type {?} */
                var page = JSON.parse(JSON.stringify(this.doughnutData.pageInfo));
                this.pageLoading = false;
                this.leftText = page.leftText;
                this.rightText = page.rightText;
                if (this.doughnutData.data.length > page.onePageShowNum) {
                    // 分页展示的数据区间
                    /** @type {?} */
                    var startNum = page.onePageShowNum * (this.btnShowIndex - 1);
                    /** @type {?} */
                    var endNum = startNum + page.onePageShowNum;
                    this.currentShowData = this.doughnutData.data.slice(startNum, endNum);
                }
                else {
                    this.currentShowData = this.doughnutData.data;
                }
            };
        // pageInfo不存在时，重置分页的配置
        // pageInfo不存在时，重置分页的配置
        /**
         * @return {?}
         */
        DoughnutComponent.prototype.pageReset =
            // pageInfo不存在时，重置分页的配置
            /**
             * @return {?}
             */
            function () {
                this.pageLoading = true;
                this.leftActive = true;
                this.rightActive = false;
                this.leftText = '';
                this.rightText = '';
                this.btnShowIndex = 1;
            };
        // 分页的两个按钮触发此方法，点击左右切换页数
        // 分页的两个按钮触发此方法，点击左右切换页数
        /**
         * @param {?} btnStatus
         * @return {?}
         */
        DoughnutComponent.prototype.pageBtn =
            // 分页的两个按钮触发此方法，点击左右切换页数
            /**
             * @param {?} btnStatus
             * @return {?}
             */
            function (btnStatus) {
                if (btnStatus === "leftActive") {
                    if (this.btnShowIndex <= 1) {
                        this.btnShowIndex = 1;
                    }
                    else {
                        this.btnShowIndex = this.btnShowIndex - 1;
                    }
                    this.leftActive = true;
                    this.rightActive = false;
                }
                else {
                    if (this.btnShowIndex >= Math.ceil(this.doughnutData.data.length / this.doughnutData.pageInfo.onePageShowNum)) {
                        this.btnShowIndex = Math.ceil(this.doughnutData.data.length / this.doughnutData.pageInfo.onePageShowNum);
                    }
                    else {
                        this.btnShowIndex++;
                    }
                    this.leftActive = false;
                    this.rightActive = true;
                }
                this.fetchData(this.moduleData[2]);
            };
        // switchInfo存在时的操作
        // switchInfo存在时的操作
        /**
         * @return {?}
         */
        DoughnutComponent.prototype.switchOperation =
            // switchInfo存在时的操作
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                // 深拷贝一份切换数据
                this.switchInfo = JSON.parse(JSON.stringify(this.doughnutData.switchInfo));
                // 如果方块颜色没有被模拟数据赋值，或者给了个空数组，那么给方块颜色一个默认值
                if (this.switchColor === undefined || this.switchColor.length === 0) {
                    this.switchColor = ["#55a722", "#ff7e75", "#0099ff", "#d284d9", "#ffbb29"];
                }
                // switchInfo里每一项添加switchColor属性，方便遍历
                this.switchInfo.forEach(( /**
                 * @param {?} switchData
                 * @param {?} index
                 * @return {?}
                 */function (switchData, index) {
                    switchData["switchColor"] = _this.switchColor[index % _this.switchColor.length];
                }));
                this.switchLoading = false;
                /** @type {?} */
                var curSwitchData = this.switchInfo[this.switchAcitveIndex];
                // 这里是考虑到当活跃状态的展示数据被删了后，当前下标没有数据了，那么重置当前下标，默认指向第一个
                if (!curSwitchData) {
                    this.switchAcitveIndex = 0;
                    curSwitchData = this.switchInfo[0];
                }
                // 根据模拟数据中配置的数据区间，取得当前展示的数据
                this.currentShowData = this.doughnutData.data.slice(curSwitchData.rangeData[0], curSwitchData.rangeData[1] + 1);
            };
        // switchInfo不存在时，重置切换的配置
        // switchInfo不存在时，重置切换的配置
        /**
         * @return {?}
         */
        DoughnutComponent.prototype.switchReset =
            // switchInfo不存在时，重置切换的配置
            /**
             * @return {?}
             */
            function () {
                this.switchLoading = true;
                this.switchAcitveIndex = 0;
                this.switchInfo = [
                    {
                        "switchText": "基本环图1",
                        "rangeData": [0, 3]
                    },
                    {
                        "switchText": "基本环图2",
                        "rangeData": [4, 5]
                    },
                    {
                        "switchText": "基本环图3",
                        "rangeData": [6, 9]
                    },
                    {
                        "switchText": "基本环图4",
                        "rangeData": [10, 12]
                    },
                    {
                        "switchText": "基本环图5",
                        "rangeData": [3, 9]
                    },
                    {
                        "switchText": "基本环图6",
                        "rangeData": [0, 11]
                    }
                ];
                this.switchColor = [];
            };
        // 点击switchBox 触发此方法，按当前活跃的index获取switchInfo中下标对应的数据
        // 点击switchBox 触发此方法，按当前活跃的index获取switchInfo中下标对应的数据
        /**
         * @param {?} i
         * @return {?}
         */
        DoughnutComponent.prototype.switchBtn =
            // 点击switchBox 触发此方法，按当前活跃的index获取switchInfo中下标对应的数据
            /**
             * @param {?} i
             * @return {?}
             */
            function (i) {
                this.switchAcitveIndex = i;
                this.fetchData(this.moduleData[2]);
            };
        /**
         * @param {?} loading
         * @return {?}
         */
        DoughnutComponent.prototype.fetchData = /**
         * @param {?} loading
         * @return {?}
         */
            function (loading) {
                if (this.configData.data && this.configData.data.data instanceof Array) {
                    this.doughnutData = JSON.parse(JSON.stringify(this.configData.data));
                }
                if (this.configData.color) {
                    if (this.configData.color.switchColor instanceof Array) {
                        this.switchColor = this.configData.color.switchColor.length !== 0 ? this.configData.color.switchColor : this.switchColor;
                    }
                    if (this.configData.color.doughnutColor instanceof Array) {
                        this.doughnutColor = this.configData.color.doughnutColor.length !== 0 ? this.configData.color.doughnutColor : this.doughnutColor;
                    }
                    if (this.configData.color.legendWidth) {
                        this.legendWidth = this.configData.color.legendWidth;
                    }
                    if (this.configData.color.legendTop) {
                        this.legendTop = this.configData.color.legendTop;
                    }
                }
                // 分页和切换配置项均存在时，默认展示切换模式
                switch (true) {
                    case !!this.doughnutData.switchInfo:
                        // 如果切换配置信息存在
                        this.switchOperation();
                        break;
                    case !!this.doughnutData.pageInfo:
                        // 如果切换配置信息不存在，但是分页配置信息存在
                        this.switchReset();
                        this.pageOperation();
                        break;
                    default:
                        // 分页与切换数据均不存在时，重置配置，展示全部数据
                        this.switchReset();
                        this.pageReset();
                        this.currentShowData = this.doughnutData.data;
                }
                // 环图配置项
                this.donutChartData = {
                    theme: 'dark',
                    color: this.doughnutColor,
                    // 环图的颜色
                    legendX: 'right',
                    legendWidth: this.legendWidth,
                    // 图例的宽度
                    legendTop: this.legendTop,
                    // 图例的上下位置
                    formatValue: 'format',
                    seriesData: this.currentShowData,
                    title: {
                        titleNum: this.doughnutData.title ? this.doughnutData.title.titleNum : "",
                        titleText: this.doughnutData.title ? this.doughnutData.title.titleText : "",
                    },
                    tooltip: {
                        position: ['30%', '50%']
                    },
                    radius: ['60%', '75%'],
                    radius1: ['50%', '60%']
                };
            };
        DoughnutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-doughnut',
                        template: "<!-- \u5206\u9875\u548C\u5207\u6362\u914D\u7F6E\u9879\u5747\u5B58\u5728\u65F6\uFF0C\u9ED8\u8BA4\u5C55\u793A\u5207\u6362\u6A21\u5F0F -->\n<div class=\"switchArea\" *ngIf=\"!switchLoading\">\n    <div class=\"switchBox\" *ngFor=\"let switchData of switchInfo; let i = index\" (click)=\"switchBtn(i)\">\n        <div class=\"switchColor\" [ngStyle]=\"{background: i==switchAcitveIndex ? switchData.switchColor : '#C9C9C9'}\">\n        </div>\n        <p class=\"switchText\">{{switchData.switchText}}</p>\n    </div>\n</div> \n\n<div class=\"pageArea\" *ngIf=\"switchLoading && !pageLoading\">\n    <div class=\"pageBox\" (click)=\"pageBtn('leftActive')\">\n        <div class=\"pageColor\" [ngStyle]=\"{background: leftActive ? 'cornflowerblue' : '#C9C9C9'}\"></div>\n        <p class=\"pageText\">{{leftText}}</p>  \n    </div>\n    <div class=\"pageBox\" (click)=\"pageBtn('rightActive')\">\n        <div class=\"pageColor\" [ngStyle]=\"{background: rightActive ? 'coral' : '#C9C9C9'}\"></div>\n        <p class=\"pageText\">{{rightText }}</p>\n    </div>\n</div> \n\n<div [appEchartsFilterpieLegend]=\"donutChartData\" [that]=\"that\" [backEmit]=\"backEmit\"\n    style=\"height:90%\">\n</div>",
                        styles: [".switchArea{width:50%;display:flex;flex-wrap:wrap;margin-left:54%;cursor:pointer}.switchArea .switchBox{margin-right:3%;display:flex}.switchArea .switchColor{width:14px;height:14px;color:#fff;margin:auto 0}.switchArea .switchText{margin:auto 0 auto 10px;color:#fff}.pageArea{width:42%;height:10%;display:flex;margin-left:54%;cursor:pointer}.pageArea .pageBox{width:50%;display:flex}.pageColor{width:14px;height:14px;color:#fff;margin:auto 0}.pageText{margin:auto 0 auto 10px;color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        DoughnutComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: pluginManager.PluginManagerService },
                { type: pluginManager.componentData }
            ];
        };
        return DoughnutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * 函数节流函数在给定的时间间隔内只允许你提供的回调函数执行一次，
     * 以此降低它的执行频率,当遇到高频触发的事件时，这样的限制显得尤为重要。
     * 示例：
     * var myEfficientFn = debounce(function() {
     *       // All the taxing stuff you do
     * }, 250);
     * window.addEventListener('resize', myEfficientFn);
     *
     * \@param func      [函数]
     * \@param wait        [毫秒]
     * \@param immediate     [立即执行一次]
     * \@return [返回一个降频后的函数]
     * @type {?}
     */
    var debounce = ( /**
     * @param {?} func
     * @param {?=} wait
     * @param {?=} immediate
     * @return {?}
     */function (func, wait, immediate) {
        if (wait === void 0) {
            wait = 200;
        }
        if (immediate === void 0) {
            immediate = true;
        }
        /** @type {?} */
        var timeout;
        return ( /**
         * @param {...?} args
         * @return {?}
         */function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            /** @type {?} */
            var context = this;
            /** @type {?} */
            var later = ( /**
             * @return {?}
             */function () {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            });
            /** @type {?} */
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        });
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var $$1 = (( /** @type {?} */(window))).$;
    /** @type {?} */
    var echarts = (( /** @type {?} */(window))).echarts;
    var appEchartsFilterpieLegend = /** @class */ (function () {
        function appEchartsFilterpieLegend(el) {
            this.el = el;
            // 图表本身
            this.resizeNamespace = 'resize.' + Date.now(); // 图表绑定到resize事件，需要一个命名空间
            this.$elem = $$1(el.nativeElement);
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
                        tooltip: null,
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
                op.legend.formatter = ( /**
                 * @param {?} name
                 * @return {?}
                 */function (name) {
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
                        op.tooltip['formatter'] = ( /**
                         * @param {?} val
                         * @return {?}
                         */function (val) {
                            /** @type {?} */
                            var value = val.value;
                            /** @type {?} */
                            var html = "<span style=\"display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:" + val.color + "\"></span>" + val.name + ": " + value + " (" + val.percent + "%)";
                            return html;
                        });
                    }
                    if (this.appEchartsFilterpieLegend.formatValue === 'flow') {
                        op.tooltip['formatter'] = ( /**
                         * @param {?} val
                         * @return {?}
                         */function (val) {
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
                $$1(window).off(resizeNamespace);
                this.chart.off('click');
                $$1(window).on(resizeNamespace, debounce(resize, 200, false));
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
                $$1(window).off(resizeNamespace);
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
            { type: core.Directive, args: [{
                        selector: '[appEchartsFilterpieLegend]'
                    },] }
        ];
        /** @nocollapse */
        appEchartsFilterpieLegend.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        appEchartsFilterpieLegend.propDecorators = {
            appEchartsFilterpieLegend: [{ type: core.Input }],
            backEmit: [{ type: core.Input }],
            that: [{ type: core.Input }]
        };
        return appEchartsFilterpieLegend;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DoughnutModule = /** @class */ (function () {
        function DoughnutModule() {
        }
        DoughnutModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [ngZorroAntd.NgZorroAntdModule, common.CommonModule],
                        declarations: [DoughnutComponent, appEchartsFilterpieLegend],
                        entryComponents: [DoughnutComponent],
                        exports: [DoughnutComponent, appEchartsFilterpieLegend]
                    },] }
        ];
        return DoughnutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var publicApi = pluginManager.createPlugin({
        name: 'doughnut',
        component: DoughnutComponent,
        module: DoughnutModule,
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    return publicApi;

})));

//# sourceMappingURL=doughnut.umd.js.map