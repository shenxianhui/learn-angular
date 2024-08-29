/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
/** @type {?} */
const $ = ((/** @type {?} */ (window))).$;
export class DoughnutComponent {
    /**
     * @param {?} el
     * @param {?} pluginManagerService
     * @param {?} comData
     */
    constructor(el, pluginManagerService, comData) {
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
    backEmit(e) {
        if (!!e) {
            this.chart = e;
        }
    }
    /**
     * @return {?}
     */
    onResize() {
        this.chart && this.chart.resize();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.fetchData(false);
    }
    // pageInfo存在时的操作
    /**
     * @return {?}
     */
    pageOperation() {
        // 深拷贝一份分页数据
        /** @type {?} */
        let page = JSON.parse(JSON.stringify(this.doughnutData.pageInfo));
        this.pageLoading = false;
        this.leftText = page.leftText;
        this.rightText = page.rightText;
        if (this.doughnutData.data.length > page.onePageShowNum) {
            // 分页展示的数据区间
            /** @type {?} */
            let startNum = page.onePageShowNum * (this.btnShowIndex - 1);
            /** @type {?} */
            let endNum = startNum + page.onePageShowNum;
            this.currentShowData = this.doughnutData.data.slice(startNum, endNum);
        }
        else {
            this.currentShowData = this.doughnutData.data;
        }
    }
    // pageInfo不存在时，重置分页的配置
    /**
     * @return {?}
     */
    pageReset() {
        this.pageLoading = true;
        this.leftActive = true;
        this.rightActive = false;
        this.leftText = '';
        this.rightText = '';
        this.btnShowIndex = 1;
    }
    // 分页的两个按钮触发此方法，点击左右切换页数
    /**
     * @param {?} btnStatus
     * @return {?}
     */
    pageBtn(btnStatus) {
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
    }
    // switchInfo存在时的操作
    /**
     * @return {?}
     */
    switchOperation() {
        // 深拷贝一份切换数据
        this.switchInfo = JSON.parse(JSON.stringify(this.doughnutData.switchInfo));
        // 如果方块颜色没有被模拟数据赋值，或者给了个空数组，那么给方块颜色一个默认值
        if (this.switchColor === undefined || this.switchColor.length === 0) {
            this.switchColor = ["#55a722", "#ff7e75", "#0099ff", "#d284d9", "#ffbb29"];
        }
        // switchInfo里每一项添加switchColor属性，方便遍历
        this.switchInfo.forEach((/**
         * @param {?} switchData
         * @param {?} index
         * @return {?}
         */
        (switchData, index) => {
            switchData["switchColor"] = this.switchColor[index % this.switchColor.length];
        }));
        this.switchLoading = false;
        /** @type {?} */
        let curSwitchData = this.switchInfo[this.switchAcitveIndex];
        // 这里是考虑到当活跃状态的展示数据被删了后，当前下标没有数据了，那么重置当前下标，默认指向第一个
        if (!curSwitchData) {
            this.switchAcitveIndex = 0;
            curSwitchData = this.switchInfo[0];
        }
        // 根据模拟数据中配置的数据区间，取得当前展示的数据
        this.currentShowData = this.doughnutData.data.slice(curSwitchData.rangeData[0], curSwitchData.rangeData[1] + 1);
    }
    // switchInfo不存在时，重置切换的配置
    /**
     * @return {?}
     */
    switchReset() {
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
    }
    // 点击switchBox 触发此方法，按当前活跃的index获取switchInfo中下标对应的数据
    /**
     * @param {?} i
     * @return {?}
     */
    switchBtn(i) {
        this.switchAcitveIndex = i;
        this.fetchData(this.moduleData[2]);
    }
    /**
     * @param {?} loading
     * @return {?}
     */
    fetchData(loading) {
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
    }
}
DoughnutComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-doughnut',
                template: "<!-- \u5206\u9875\u548C\u5207\u6362\u914D\u7F6E\u9879\u5747\u5B58\u5728\u65F6\uFF0C\u9ED8\u8BA4\u5C55\u793A\u5207\u6362\u6A21\u5F0F -->\n<div class=\"switchArea\" *ngIf=\"!switchLoading\">\n    <div class=\"switchBox\" *ngFor=\"let switchData of switchInfo; let i = index\" (click)=\"switchBtn(i)\">\n        <div class=\"switchColor\" [ngStyle]=\"{background: i==switchAcitveIndex ? switchData.switchColor : '#C9C9C9'}\">\n        </div>\n        <p class=\"switchText\">{{switchData.switchText}}</p>\n    </div>\n</div> \n\n<div class=\"pageArea\" *ngIf=\"switchLoading && !pageLoading\">\n    <div class=\"pageBox\" (click)=\"pageBtn('leftActive')\">\n        <div class=\"pageColor\" [ngStyle]=\"{background: leftActive ? 'cornflowerblue' : '#C9C9C9'}\"></div>\n        <p class=\"pageText\">{{leftText}}</p>  \n    </div>\n    <div class=\"pageBox\" (click)=\"pageBtn('rightActive')\">\n        <div class=\"pageColor\" [ngStyle]=\"{background: rightActive ? 'coral' : '#C9C9C9'}\"></div>\n        <p class=\"pageText\">{{rightText }}</p>\n    </div>\n</div> \n\n<div [appEchartsFilterpieLegend]=\"donutChartData\" [that]=\"that\" [backEmit]=\"backEmit\"\n    style=\"height:90%\">\n</div>",
                styles: [".switchArea{width:50%;display:flex;flex-wrap:wrap;margin-left:54%;cursor:pointer}.switchArea .switchBox{margin-right:3%;display:flex}.switchArea .switchColor{width:14px;height:14px;color:#fff;margin:auto 0}.switchArea .switchText{margin:auto 0 auto 10px;color:#fff}.pageArea{width:42%;height:10%;display:flex;margin-left:54%;cursor:pointer}.pageArea .pageBox{width:50%;display:flex}.pageColor{width:14px;height:14px;color:#fff;margin:auto 0}.pageText{margin:auto 0 auto 10px;color:#fff}"]
            }] }
];
/** @nocollapse */
DoughnutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: PluginManagerService },
    { type: componentData }
];
if (false) {
    /** @type {?} */
    DoughnutComponent.prototype.moduleData;
    /** @type {?} */
    DoughnutComponent.prototype.$elem;
    /** @type {?} */
    DoughnutComponent.prototype.donutChartData;
    /** @type {?} */
    DoughnutComponent.prototype.doughnutData;
    /** @type {?} */
    DoughnutComponent.prototype.leftActive;
    /** @type {?} */
    DoughnutComponent.prototype.rightActive;
    /** @type {?} */
    DoughnutComponent.prototype.leftText;
    /** @type {?} */
    DoughnutComponent.prototype.rightText;
    /** @type {?} */
    DoughnutComponent.prototype.btnShowIndex;
    /** @type {?} */
    DoughnutComponent.prototype.switchAcitveIndex;
    /** @type {?} */
    DoughnutComponent.prototype.switchInfo;
    /** @type {?} */
    DoughnutComponent.prototype.switchColor;
    /** @type {?} */
    DoughnutComponent.prototype.currentShowData;
    /** @type {?} */
    DoughnutComponent.prototype.doughnutColor;
    /** @type {?} */
    DoughnutComponent.prototype.legendWidth;
    /** @type {?} */
    DoughnutComponent.prototype.legendTop;
    /** @type {?} */
    DoughnutComponent.prototype.pageLoading;
    /** @type {?} */
    DoughnutComponent.prototype.switchLoading;
    /** @type {?} */
    DoughnutComponent.prototype.configData;
    /** @type {?} */
    DoughnutComponent.prototype.that;
    /** @type {?} */
    DoughnutComponent.prototype.chart;
    /**
     * @type {?}
     * @private
     */
    DoughnutComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    DoughnutComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91Z2hudXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZG91Z2hudXQvIiwic291cmNlcyI6WyJsaWIvZG91Z2hudXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixVQUFVLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7TUFFL0QsQ0FBQyxHQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxDQUFDO0FBT2hDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQWdFMUIsWUFBb0IsRUFBYyxFQUN0QixvQkFBMEMsRUFDbEQsT0FBc0I7UUFGTixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ3RCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUEvRHRELGVBQVUsR0FBUSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFPbkMsaUJBQVksR0FBUSxFQUFFLENBQUE7O1FBR3RCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLENBQUMsQ0FBQzs7UUFHakIsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVUsR0FBRztZQUNUO2dCQUNJLFlBQVksRUFBRSxPQUFPO2dCQUNyQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3RCO1lBQ0Q7Z0JBQ0ksWUFBWSxFQUFFLE9BQU87Z0JBQ3JCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdEI7WUFDRDtnQkFDSSxZQUFZLEVBQUUsT0FBTztnQkFDckIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0QjtZQUNEO2dCQUNJLFlBQVksRUFBRSxPQUFPO2dCQUNyQixXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ3hCO1lBQ0Q7Z0JBQ0ksWUFBWSxFQUFFLE9BQU87Z0JBQ3JCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdEI7WUFDRDtnQkFDSSxZQUFZLEVBQUUsT0FBTztnQkFDckIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUN2QjtTQUNKLENBQUE7UUFDRCxnQkFBVyxHQUFRLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDOztRQUszRSxrQkFBYSxHQUFRLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7O1FBRzlILGdCQUFXLEdBQVEsU0FBUyxDQUFDO1FBQzdCLGNBQVMsR0FBUSxLQUFLLENBQUE7O1FBR3RCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsSUFBSSxDQUFDOztRQWNyQixTQUFJLEdBQUcsSUFBSSxDQUFBO1FBTlAsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN0QyxVQUFVO1FBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBS0QsUUFBUSxDQUFDLENBQUM7UUFDTixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNsQjtJQUNMLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ3JDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN6QixDQUFDOzs7OztJQUdELGFBQWE7OztZQUVMLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRWhDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7OztnQkFFakQsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzs7Z0JBQ3hELE1BQU0sR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWM7WUFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3pFO2FBQU07WUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQzs7Ozs7SUFHRCxTQUFTO1FBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBR0QsT0FBTyxDQUFDLFNBQVM7UUFDYixJQUFJLFNBQVMsS0FBSyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUE7YUFDeEI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQTthQUM1QztZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFBO1NBQzNCO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQzNHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUE7YUFDM0c7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO2FBQ3RCO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7WUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUE7U0FFMUI7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUdELGVBQWU7UUFDWCxZQUFZO1FBQ1osSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNFLHdDQUF3QztRQUN4QyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNqRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzlFO1FBQ0QscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMxQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUVqRixDQUFDLEVBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDOztZQUN2QixhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFFM0Qsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztZQUMzQixhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztRQUVELDJCQUEyQjtRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEgsQ0FBQzs7Ozs7SUFHRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2Q7Z0JBQ0ksWUFBWSxFQUFFLE9BQU87Z0JBQ3JCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdEI7WUFDRDtnQkFDSSxZQUFZLEVBQUUsT0FBTztnQkFDckIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0QjtZQUNEO2dCQUNJLFlBQVksRUFBRSxPQUFPO2dCQUNyQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3RCO1lBQ0Q7Z0JBQ0ksWUFBWSxFQUFFLE9BQU87Z0JBQ3JCLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDeEI7WUFDRDtnQkFDSSxZQUFZLEVBQUUsT0FBTztnQkFDckIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0QjtZQUNEO2dCQUNJLFlBQVksRUFBRSxPQUFPO2dCQUNyQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0osQ0FBQTtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUdELFNBQVMsQ0FBQyxDQUFDO1FBQ1AsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxPQUFPO1FBQ2IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksS0FBSyxFQUFFO1lBQ3BFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN4RTtRQUVELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDdkIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLFlBQVksS0FBSyxFQUFFO2dCQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDNUg7WUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGFBQWEsWUFBWSxLQUFLLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUNwSTtZQUNELElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFDO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQTthQUN2RDtZQUVELElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFDO2dCQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQTthQUNuRDtTQUVKO1FBRUQsd0JBQXdCO1FBQ3hCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVO2dCQUMvQixhQUFhO2dCQUNiLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDdkIsTUFBTTtZQUNWLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUTtnQkFDN0IseUJBQXlCO2dCQUN6QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsTUFBTTtZQUNWO2dCQUNJLDJCQUEyQjtnQkFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7U0FDckQ7UUFHRCxRQUFRO1FBQ1IsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNsQixLQUFLLEVBQUUsTUFBTTtZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYTs7WUFDekIsT0FBTyxFQUFFLE9BQU87WUFDaEIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXOztZQUM3QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7O1lBQ3pCLFdBQVcsRUFBRSxRQUFRO1lBQ3JCLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNoQyxLQUFLLEVBQUU7Z0JBQ0gsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO2FBQzlFO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7YUFDM0I7WUFDRCxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3RCLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDMUIsQ0FBQztJQUVOLENBQUM7OztZQWhSSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHNyQ0FBd0M7O2FBRTNDOzs7O1lBVGtDLFVBQVU7WUFDcEMsb0JBQW9CO1lBQUUsYUFBYTs7OztJQVd4Qyx1Q0FBbUM7O0lBRW5DLGtDQUFXOztJQUdYLDJDQUFvQjs7SUFFcEIseUNBQXNCOztJQUd0Qix1Q0FBa0I7O0lBQ2xCLHdDQUFvQjs7SUFDcEIscUNBQWM7O0lBQ2Qsc0NBQWU7O0lBQ2YseUNBQWlCOztJQUdqQiw4Q0FBc0I7O0lBQ3RCLHVDQXlCQzs7SUFDRCx3Q0FBMkU7O0lBRzNFLDRDQUFxQjs7SUFFckIsMENBQThIOztJQUc5SCx3Q0FBNkI7O0lBQzdCLHNDQUFzQjs7SUFHdEIsd0NBQW1COztJQUNuQiwwQ0FBcUI7O0lBR3JCLHVDQUFnQjs7SUFXaEIsaUNBQVc7O0lBQ1gsa0NBQVc7Ozs7O0lBVkMsK0JBQXNCOzs7OztJQUM5QixpREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEVsZW1lbnRSZWYsIFNpbXBsZUNoYW5nZSwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tcG9uZW50RGF0YSB9IGZyb20gJ3BsdWdpbi1tYW5hZ2VyJztcblxuY29uc3QgJDogYW55ID0gKHdpbmRvdyBhcyBhbnkpLiQ7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbGliLWRvdWdobnV0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZG91Z2hudXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RvdWdobnV0LmNvbXBvbmVudC5zdHlsJ11cbn0pXG5leHBvcnQgY2xhc3MgRG91Z2hudXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgbW9kdWxlRGF0YTogYW55ID0gWzAsIG51bGwsIGZhbHNlXTtcblxuICAgICRlbGVtOiBhbnk7XG5cbiAgICAvLyDnjq/lm77phY3nva7poblcbiAgICBkb251dENoYXJ0RGF0YTogYW55O1xuXG4gICAgZG91Z2hudXREYXRhOiBhbnkgPSB7fVxuXG4gICAgLy8g5YiG6aG155qE5Yid5aeL5pWw5o2uXG4gICAgbGVmdEFjdGl2ZSA9IHRydWU7XG4gICAgcmlnaHRBY3RpdmUgPSBmYWxzZTtcbiAgICBsZWZ0VGV4dCA9ICcnO1xuICAgIHJpZ2h0VGV4dCA9ICcnO1xuICAgIGJ0blNob3dJbmRleCA9IDE7XG5cbiAgICAvLyDliIfmjaLnmoTliJ3lp4vmlbDmja5cbiAgICBzd2l0Y2hBY2l0dmVJbmRleCA9IDA7XG4gICAgc3dpdGNoSW5mbyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJzd2l0Y2hUZXh0XCI6IFwi5Z+65pys546v5Zu+MVwiLFxuICAgICAgICAgICAgXCJyYW5nZURhdGFcIjogWzAsIDNdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwic3dpdGNoVGV4dFwiOiBcIuWfuuacrOeOr+WbvjJcIixcbiAgICAgICAgICAgIFwicmFuZ2VEYXRhXCI6IFs0LCA1XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInN3aXRjaFRleHRcIjogXCLln7rmnKznjq/lm74zXCIsXG4gICAgICAgICAgICBcInJhbmdlRGF0YVwiOiBbNiwgOV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJzd2l0Y2hUZXh0XCI6IFwi5Z+65pys546v5Zu+NFwiLFxuICAgICAgICAgICAgXCJyYW5nZURhdGFcIjogWzEwLCAxMl1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJzd2l0Y2hUZXh0XCI6IFwi5Z+65pys546v5Zu+NVwiLFxuICAgICAgICAgICAgXCJyYW5nZURhdGFcIjogWzMsIDldXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwic3dpdGNoVGV4dFwiOiBcIuWfuuacrOeOr+WbvjZcIixcbiAgICAgICAgICAgIFwicmFuZ2VEYXRhXCI6IFswLCAxMV1cbiAgICAgICAgfVxuICAgIF1cbiAgICBzd2l0Y2hDb2xvcjogYW55ID0gWycjNTVhNzIyJywgJyNmZjdlNzUnLCAnIzAwOTlmZicsICcjZDI4NGQ5JywgJyNmZmJiMjknXTtcblxuICAgIC8vIOW9k+WJjeeOr+W9ouWbvuWxleekuueahOaVsOaNrlxuICAgIGN1cnJlbnRTaG93RGF0YTogYW55O1xuICAgIC8vIOeOr+WbvueahOm7mOiupOminOiJsumFjee9rlxuICAgIGRvdWdobnV0Q29sb3I6IGFueSA9IFsncmdiKDI1Myw5Nyw1NSknLCAncmdiKDI0OCwxOTMsNzEpJywgJ3JnYig1MywxMDAsMjU1KScsICdyZ2IoMzUsMTcwLDI0MSknLCAncmdiKDIsMjA3LDE1MCknLCAnI2QyODRkOSddO1xuXG4gICAgLy8g5Zu+5L6L55qE5a695bqmXG4gICAgbGVnZW5kV2lkdGg6IGFueSA9IHVuZGVmaW5lZDtcbiAgICBsZWdlbmRUb3A6IGFueSA9IFwiMTAlXCJcblxuICAgIC8vIGxvYWRpbmfliKTmlq1cbiAgICBwYWdlTG9hZGluZyA9IHRydWU7XG4gICAgc3dpdGNoTG9hZGluZyA9IHRydWU7XG5cbiAgICAvLyDkuK3pl7Tku7bkvKDpgJLov4fmnaXnmoTmqKHmi5/mlbDmja5cbiAgICBjb25maWdEYXRhOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgICAgICBwcml2YXRlIHBsdWdpbk1hbmFnZXJTZXJ2aWNlOiBQbHVnaW5NYW5hZ2VyU2VydmljZSxcbiAgICAgICAgY29tRGF0YTogY29tcG9uZW50RGF0YSkge1xuICAgICAgICB0aGlzLiRlbGVtID0gJCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAvLyDmjqXmlLbkuK3pl7Tku7bkvKDlgLxcbiAgICAgICAgdGhpcy5jb25maWdEYXRhID0gY29tRGF0YS5jb25maWdEYXRhO1xuICAgIH1cblxuICAgIC8vIGFwcEVjaGFydHNGaWx0ZXJwaWVMZWdlbmTmjIfku6TmlbDmja7nm7jlhbNcbiAgICB0aGF0ID0gdGhpc1xuICAgIGNoYXJ0OiBhbnk7XG4gICAgYmFja0VtaXQoZSkge1xuICAgICAgICBpZiAoISFlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYXJ0ID0gZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblJlc2l6ZSgpIHtcbiAgICAgICAgdGhpcy5jaGFydCAmJiB0aGlzLmNoYXJ0LnJlc2l6ZSgpXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hEYXRhKGZhbHNlKVxuICAgIH1cblxuICAgIC8vIHBhZ2VJbmZv5a2Y5Zyo5pe255qE5pON5L2cXG4gICAgcGFnZU9wZXJhdGlvbigpIHtcbiAgICAgICAgLy8g5rex5ou36LSd5LiA5Lu95YiG6aG15pWw5o2uXG4gICAgICAgIGxldCBwYWdlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRvdWdobnV0RGF0YS5wYWdlSW5mbykpO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdFRleHQgPSBwYWdlLmxlZnRUZXh0O1xuICAgICAgICB0aGlzLnJpZ2h0VGV4dCA9IHBhZ2UucmlnaHRUZXh0O1xuXG4gICAgICAgIGlmICh0aGlzLmRvdWdobnV0RGF0YS5kYXRhLmxlbmd0aCA+IHBhZ2Uub25lUGFnZVNob3dOdW0pIHtcbiAgICAgICAgICAgIC8vIOWIhumhteWxleekuueahOaVsOaNruWMuumXtFxuICAgICAgICAgICAgbGV0IHN0YXJ0TnVtID0gcGFnZS5vbmVQYWdlU2hvd051bSAqICh0aGlzLmJ0blNob3dJbmRleCAtIDEpO1xuICAgICAgICAgICAgbGV0IGVuZE51bSA9IHN0YXJ0TnVtICsgcGFnZS5vbmVQYWdlU2hvd051bTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNob3dEYXRhID0gdGhpcy5kb3VnaG51dERhdGEuZGF0YS5zbGljZShzdGFydE51bSwgZW5kTnVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNob3dEYXRhID0gdGhpcy5kb3VnaG51dERhdGEuZGF0YTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHBhZ2VJbmZv5LiN5a2Y5Zyo5pe277yM6YeN572u5YiG6aG155qE6YWN572uXG4gICAgcGFnZVJlc2V0KCkge1xuICAgICAgICB0aGlzLnBhZ2VMb2FkaW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLmxlZnRBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJpZ2h0QWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdFRleHQgPSAnJztcbiAgICAgICAgdGhpcy5yaWdodFRleHQgPSAnJztcbiAgICAgICAgdGhpcy5idG5TaG93SW5kZXggPSAxO1xuICAgIH1cblxuICAgIC8vIOWIhumhteeahOS4pOS4quaMiemSruinpuWPkeatpOaWueazle+8jOeCueWHu+W3puWPs+WIh+aNoumhteaVsFxuICAgIHBhZ2VCdG4oYnRuU3RhdHVzKSB7XG4gICAgICAgIGlmIChidG5TdGF0dXMgPT09IFwibGVmdEFjdGl2ZVwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5idG5TaG93SW5kZXggPD0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuU2hvd0luZGV4ID0gMVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blNob3dJbmRleCA9IHRoaXMuYnRuU2hvd0luZGV4IC0gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sZWZ0QWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgdGhpcy5yaWdodEFjdGl2ZSA9IGZhbHNlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5idG5TaG93SW5kZXggPj0gTWF0aC5jZWlsKHRoaXMuZG91Z2hudXREYXRhLmRhdGEubGVuZ3RoIC8gdGhpcy5kb3VnaG51dERhdGEucGFnZUluZm8ub25lUGFnZVNob3dOdW0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5TaG93SW5kZXggPSBNYXRoLmNlaWwodGhpcy5kb3VnaG51dERhdGEuZGF0YS5sZW5ndGggLyB0aGlzLmRvdWdobnV0RGF0YS5wYWdlSW5mby5vbmVQYWdlU2hvd051bSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5TaG93SW5kZXgrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sZWZ0QWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMucmlnaHRBY3RpdmUgPSB0cnVlXG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZldGNoRGF0YSh0aGlzLm1vZHVsZURhdGFbMl0pO1xuICAgIH1cblxuICAgIC8vIHN3aXRjaEluZm/lrZjlnKjml7bnmoTmk43kvZxcbiAgICBzd2l0Y2hPcGVyYXRpb24oKSB7XG4gICAgICAgIC8vIOa3seaLt+i0neS4gOS7veWIh+aNouaVsOaNrlxuICAgICAgICB0aGlzLnN3aXRjaEluZm8gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZG91Z2hudXREYXRhLnN3aXRjaEluZm8pKTtcbiAgICAgICAgLy8g5aaC5p6c5pa55Z2X6aKc6Imy5rKh5pyJ6KKr5qih5ouf5pWw5o2u6LWL5YC877yM5oiW6ICF57uZ5LqG5Liq56m65pWw57uE77yM6YKj5LmI57uZ5pa55Z2X6aKc6Imy5LiA5Liq6buY6K6k5YC8XG4gICAgICAgIGlmICh0aGlzLnN3aXRjaENvbG9yID09PSB1bmRlZmluZWQgfHwgdGhpcy5zd2l0Y2hDb2xvci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoQ29sb3IgPSBbXCIjNTVhNzIyXCIsIFwiI2ZmN2U3NVwiLCBcIiMwMDk5ZmZcIiwgXCIjZDI4NGQ5XCIsIFwiI2ZmYmIyOVwiXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzd2l0Y2hJbmZv6YeM5q+P5LiA6aG55re75Yqgc3dpdGNoQ29sb3LlsZ7mgKfvvIzmlrnkvr/pgY3ljoZcbiAgICAgICAgdGhpcy5zd2l0Y2hJbmZvLmZvckVhY2goKHN3aXRjaERhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2hEYXRhW1wic3dpdGNoQ29sb3JcIl0gPSB0aGlzLnN3aXRjaENvbG9yW2luZGV4ICUgdGhpcy5zd2l0Y2hDb2xvci5sZW5ndGhdXG5cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnN3aXRjaExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgbGV0IGN1clN3aXRjaERhdGEgPSB0aGlzLnN3aXRjaEluZm9bdGhpcy5zd2l0Y2hBY2l0dmVJbmRleF07XG5cbiAgICAgICAgLy8g6L+Z6YeM5piv6ICD6JmR5Yiw5b2T5rS76LeD54q25oCB55qE5bGV56S65pWw5o2u6KKr5Yig5LqG5ZCO77yM5b2T5YmN5LiL5qCH5rKh5pyJ5pWw5o2u5LqG77yM6YKj5LmI6YeN572u5b2T5YmN5LiL5qCH77yM6buY6K6k5oyH5ZCR56ys5LiA5LiqXG4gICAgICAgIGlmICghY3VyU3dpdGNoRGF0YSkge1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hBY2l0dmVJbmRleCA9IDA7XG4gICAgICAgICAgICBjdXJTd2l0Y2hEYXRhID0gdGhpcy5zd2l0Y2hJbmZvWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qC55o2u5qih5ouf5pWw5o2u5Lit6YWN572u55qE5pWw5o2u5Yy66Ze077yM5Y+W5b6X5b2T5YmN5bGV56S655qE5pWw5o2uXG4gICAgICAgIHRoaXMuY3VycmVudFNob3dEYXRhID0gdGhpcy5kb3VnaG51dERhdGEuZGF0YS5zbGljZShjdXJTd2l0Y2hEYXRhLnJhbmdlRGF0YVswXSwgY3VyU3dpdGNoRGF0YS5yYW5nZURhdGFbMV0gKyAxKTtcbiAgICB9XG5cbiAgICAvLyBzd2l0Y2hJbmZv5LiN5a2Y5Zyo5pe277yM6YeN572u5YiH5o2i55qE6YWN572uXG4gICAgc3dpdGNoUmVzZXQoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3dpdGNoQWNpdHZlSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnN3aXRjaEluZm8gPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzd2l0Y2hUZXh0XCI6IFwi5Z+65pys546v5Zu+MVwiLFxuICAgICAgICAgICAgICAgIFwicmFuZ2VEYXRhXCI6IFswLCAzXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInN3aXRjaFRleHRcIjogXCLln7rmnKznjq/lm74yXCIsXG4gICAgICAgICAgICAgICAgXCJyYW5nZURhdGFcIjogWzQsIDVdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic3dpdGNoVGV4dFwiOiBcIuWfuuacrOeOr+WbvjNcIixcbiAgICAgICAgICAgICAgICBcInJhbmdlRGF0YVwiOiBbNiwgOV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzd2l0Y2hUZXh0XCI6IFwi5Z+65pys546v5Zu+NFwiLFxuICAgICAgICAgICAgICAgIFwicmFuZ2VEYXRhXCI6IFsxMCwgMTJdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic3dpdGNoVGV4dFwiOiBcIuWfuuacrOeOr+WbvjVcIixcbiAgICAgICAgICAgICAgICBcInJhbmdlRGF0YVwiOiBbMywgOV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzd2l0Y2hUZXh0XCI6IFwi5Z+65pys546v5Zu+NlwiLFxuICAgICAgICAgICAgICAgIFwicmFuZ2VEYXRhXCI6IFswLCAxMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgICB0aGlzLnN3aXRjaENvbG9yID0gW107XG4gICAgfVxuXG4gICAgLy8g54K55Ye7c3dpdGNoQm94IOinpuWPkeatpOaWueazle+8jOaMieW9k+WJjea0u+i3g+eahGluZGV46I635Y+Wc3dpdGNoSW5mb+S4reS4i+agh+WvueW6lOeahOaVsOaNrlxuICAgIHN3aXRjaEJ0bihpKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQWNpdHZlSW5kZXggPSBpO1xuICAgICAgICB0aGlzLmZldGNoRGF0YSh0aGlzLm1vZHVsZURhdGFbMl0pO1xuICAgIH1cblxuICAgIGZldGNoRGF0YShsb2FkaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuZGF0YSAmJiB0aGlzLmNvbmZpZ0RhdGEuZGF0YS5kYXRhIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIHRoaXMuZG91Z2hudXREYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNvbmZpZ0RhdGEuZGF0YSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlnRGF0YS5jb2xvcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnRGF0YS5jb2xvci5zd2l0Y2hDb2xvciBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hDb2xvciA9IHRoaXMuY29uZmlnRGF0YS5jb2xvci5zd2l0Y2hDb2xvci5sZW5ndGggIT09IDAgPyB0aGlzLmNvbmZpZ0RhdGEuY29sb3Iuc3dpdGNoQ29sb3IgOiB0aGlzLnN3aXRjaENvbG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jb25maWdEYXRhLmNvbG9yLmRvdWdobnV0Q29sb3IgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZG91Z2hudXRDb2xvciA9IHRoaXMuY29uZmlnRGF0YS5jb2xvci5kb3VnaG51dENvbG9yLmxlbmd0aCAhPT0gMCA/IHRoaXMuY29uZmlnRGF0YS5jb2xvci5kb3VnaG51dENvbG9yIDogdGhpcy5kb3VnaG51dENvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5jb25maWdEYXRhLmNvbG9yLmxlZ2VuZFdpZHRoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZ2VuZFdpZHRoID0gdGhpcy5jb25maWdEYXRhLmNvbG9yLmxlZ2VuZFdpZHRoXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuY29uZmlnRGF0YS5jb2xvci5sZWdlbmRUb3Ape1xuICAgICAgICAgICAgICAgIHRoaXMubGVnZW5kVG9wID0gdGhpcy5jb25maWdEYXRhLmNvbG9yLmxlZ2VuZFRvcFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICAvLyDliIbpobXlkozliIfmjaLphY3nva7pobnlnYflrZjlnKjml7bvvIzpu5jorqTlsZXnpLrliIfmjaLmqKHlvI9cbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICBjYXNlICEhdGhpcy5kb3VnaG51dERhdGEuc3dpdGNoSW5mbzpcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzliIfmjaLphY3nva7kv6Hmga/lrZjlnKhcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaE9wZXJhdGlvbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAhIXRoaXMuZG91Z2hudXREYXRhLnBhZ2VJbmZvOlxuICAgICAgICAgICAgICAgIC8vIOWmguaenOWIh+aNoumFjee9ruS/oeaBr+S4jeWtmOWcqO+8jOS9huaYr+WIhumhtemFjee9ruS/oeaBr+WtmOWcqFxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VPcGVyYXRpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8g5YiG6aG15LiO5YiH5o2i5pWw5o2u5Z2H5LiN5a2Y5Zyo5pe277yM6YeN572u6YWN572u77yM5bGV56S65YWo6YOo5pWw5o2uXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hSZXNldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZVJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2hvd0RhdGEgPSB0aGlzLmRvdWdobnV0RGF0YS5kYXRhO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyDnjq/lm77phY3nva7poblcbiAgICAgICAgdGhpcy5kb251dENoYXJ0RGF0YSA9IHtcbiAgICAgICAgICAgIHRoZW1lOiAnZGFyaycsXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5kb3VnaG51dENvbG9yLCAvLyDnjq/lm77nmoTpopzoibJcbiAgICAgICAgICAgIGxlZ2VuZFg6ICdyaWdodCcsXG4gICAgICAgICAgICBsZWdlbmRXaWR0aDogdGhpcy5sZWdlbmRXaWR0aCwgLy8g5Zu+5L6L55qE5a695bqmXG4gICAgICAgICAgICBsZWdlbmRUb3A6IHRoaXMubGVnZW5kVG9wLCAvLyDlm77kvovnmoTkuIrkuIvkvY3nva5cbiAgICAgICAgICAgIGZvcm1hdFZhbHVlOiAnZm9ybWF0JyxcbiAgICAgICAgICAgIHNlcmllc0RhdGE6IHRoaXMuY3VycmVudFNob3dEYXRhLFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZU51bTogdGhpcy5kb3VnaG51dERhdGEudGl0bGUgPyB0aGlzLmRvdWdobnV0RGF0YS50aXRsZS50aXRsZU51bSA6IFwiXCIsXG4gICAgICAgICAgICAgICAgdGl0bGVUZXh0OiB0aGlzLmRvdWdobnV0RGF0YS50aXRsZSA/IHRoaXMuZG91Z2hudXREYXRhLnRpdGxlLnRpdGxlVGV4dCA6IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbJzMwJScsICc1MCUnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhZGl1czogWyc2MCUnLCAnNzUlJ10sXG4gICAgICAgICAgICByYWRpdXMxOiBbJzUwJScsICc2MCUnXVxuICAgICAgICB9O1xuXG4gICAgfVxufVxuIl19