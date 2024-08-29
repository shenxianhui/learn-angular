/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
/** @type {?} */
var $ = ((/** @type {?} */ (window))).$;
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
        this.switchInfo.forEach((/**
         * @param {?} switchData
         * @param {?} index
         * @return {?}
         */
        function (switchData, index) {
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
        { type: Component, args: [{
                    selector: 'lib-doughnut',
                    template: "<!-- \u5206\u9875\u548C\u5207\u6362\u914D\u7F6E\u9879\u5747\u5B58\u5728\u65F6\uFF0C\u9ED8\u8BA4\u5C55\u793A\u5207\u6362\u6A21\u5F0F -->\n<div class=\"switchArea\" *ngIf=\"!switchLoading\">\n    <div class=\"switchBox\" *ngFor=\"let switchData of switchInfo; let i = index\" (click)=\"switchBtn(i)\">\n        <div class=\"switchColor\" [ngStyle]=\"{background: i==switchAcitveIndex ? switchData.switchColor : '#C9C9C9'}\">\n        </div>\n        <p class=\"switchText\">{{switchData.switchText}}</p>\n    </div>\n</div> \n\n<div class=\"pageArea\" *ngIf=\"switchLoading && !pageLoading\">\n    <div class=\"pageBox\" (click)=\"pageBtn('leftActive')\">\n        <div class=\"pageColor\" [ngStyle]=\"{background: leftActive ? 'cornflowerblue' : '#C9C9C9'}\"></div>\n        <p class=\"pageText\">{{leftText}}</p>  \n    </div>\n    <div class=\"pageBox\" (click)=\"pageBtn('rightActive')\">\n        <div class=\"pageColor\" [ngStyle]=\"{background: rightActive ? 'coral' : '#C9C9C9'}\"></div>\n        <p class=\"pageText\">{{rightText }}</p>\n    </div>\n</div> \n\n<div [appEchartsFilterpieLegend]=\"donutChartData\" [that]=\"that\" [backEmit]=\"backEmit\"\n    style=\"height:90%\">\n</div>",
                    styles: [".switchArea{width:50%;display:flex;flex-wrap:wrap;margin-left:54%;cursor:pointer}.switchArea .switchBox{margin-right:3%;display:flex}.switchArea .switchColor{width:14px;height:14px;color:#fff;margin:auto 0}.switchArea .switchText{margin:auto 0 auto 10px;color:#fff}.pageArea{width:42%;height:10%;display:flex;margin-left:54%;cursor:pointer}.pageArea .pageBox{width:50%;display:flex}.pageColor{width:14px;height:14px;color:#fff;margin:auto 0}.pageText{margin:auto 0 auto 10px;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    DoughnutComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    return DoughnutComponent;
}());
export { DoughnutComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91Z2hudXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZG91Z2hudXQvIiwic291cmNlcyI6WyJsaWIvZG91Z2hudXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFpQixVQUFVLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7SUFFL0QsQ0FBQyxHQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxDQUFDO0FBRWhDO0lBcUVJLDJCQUFvQixFQUFjLEVBQ3RCLG9CQUEwQyxFQUNsRCxPQUFzQjtRQUZOLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQS9EdEQsZUFBVSxHQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQU9uQyxpQkFBWSxHQUFRLEVBQUUsQ0FBQTs7UUFHdEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGlCQUFZLEdBQUcsQ0FBQyxDQUFDOztRQUdqQixzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDdEIsZUFBVSxHQUFHO1lBQ1Q7Z0JBQ0ksWUFBWSxFQUFFLE9BQU87Z0JBQ3JCLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDdEI7WUFDRDtnQkFDSSxZQUFZLEVBQUUsT0FBTztnQkFDckIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0QjtZQUNEO2dCQUNJLFlBQVksRUFBRSxPQUFPO2dCQUNyQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3RCO1lBQ0Q7Z0JBQ0ks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RSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUMxQixDQUFDO0lBRU4sQ0FBQzs7Z0JBaFJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsc3JDQUF3Qzs7aUJBRTNDOzs7O2dCQVRrQyxVQUFVO2dCQUNwQyxvQkFBb0I7Z0JBQUUsYUFBYTs7SUFxUjVDLHdCQUFDO0NBQUEsQUFqUkQsSUFpUkM7U0E1UVksaUJBQWlCOzs7SUFFMUIsdUNBQW1DOztJQUVuQyxrQ0FBVzs7SUFHWCwyQ0FBb0I7O0lBRXBCLHlDQUFzQjs7SUFHdEIsdUNBQWtCOztJQUNsQix3Q0FBb0I7O0lBQ3BCLHFDQUFjOztJQUNkLHNDQUFlOztJQUNmLHlDQUFpQjs7SUFHakIsOENBQXNCOztJQUN0Qix1Q0F5QkM7O0lBQ0Qsd0NBQTJFOztJQUczRSw0Q0FBcUI7O0lBRXJCLDBDQUE4SDs7SUFHOUgsd0NBQTZCOztJQUM3QixzQ0FBc0I7O0lBR3RCLHdDQUFtQjs7SUFDbkIsMENBQXFCOztJQUdyQix1Q0FBZ0I7O0lBV2hCLGlDQUFXOztJQUNYLGtDQUFXOzs7OztJQVZDLCtCQUFzQjs7Ozs7SUFDOUIsaURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBFbGVtZW50UmVmLCBTaW1wbGVDaGFuZ2UsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luTWFuYWdlclNlcnZpY2UsIGNvbXBvbmVudERhdGEgfSBmcm9tICdwbHVnaW4tbWFuYWdlcic7XG5cbmNvbnN0ICQ6IGFueSA9ICh3aW5kb3cgYXMgYW55KS4kO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xpYi1kb3VnaG51dCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RvdWdobnV0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9kb3VnaG51dC5jb21wb25lbnQuc3R5bCddXG59KVxuZXhwb3J0IGNsYXNzIERvdWdobnV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIG1vZHVsZURhdGE6IGFueSA9IFswLCBudWxsLCBmYWxzZV07XG5cbiAgICAkZWxlbTogYW55O1xuXG4gICAgLy8g546v5Zu+6YWN572u6aG5XG4gICAgZG9udXRDaGFydERhdGE6IGFueTtcblxuICAgIGRvdWdobnV0RGF0YTogYW55ID0ge31cblxuICAgIC8vIOWIhumhteeahOWIneWni+aVsOaNrlxuICAgIGxlZnRBY3RpdmUgPSB0cnVlO1xuICAgIHJpZ2h0QWN0aXZlID0gZmFsc2U7XG4gICAgbGVmdFRleHQgPSAnJztcbiAgICByaWdodFRleHQgPSAnJztcbiAgICBidG5TaG93SW5kZXggPSAxO1xuXG4gICAgLy8g5YiH5o2i55qE5Yid5aeL5pWw5o2uXG4gICAgc3dpdGNoQWNpdHZlSW5kZXggPSAwO1xuICAgIHN3aXRjaEluZm8gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwic3dpdGNoVGV4dFwiOiBcIuWfuuacrOeOr+WbvjFcIixcbiAgICAgICAgICAgIFwicmFuZ2VEYXRhXCI6IFswLCAzXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInN3aXRjaFRleHRcIjogXCLln7rmnKznjq/lm74yXCIsXG4gICAgICAgICAgICBcInJhbmdlRGF0YVwiOiBbNCwgNV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJzd2l0Y2hUZXh0XCI6IFwi5Z+65pys546v5Zu+M1wiLFxuICAgICAgICAgICAgXCJyYW5nZURhdGFcIjogWzYsIDldXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwic3dpdGNoVGV4dFwiOiBcIuWfuuacrOeOr+WbvjRcIixcbiAgICAgICAgICAgIFwicmFuZ2VEYXRhXCI6IFsxMCwgMTJdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwic3dpdGNoVGV4dFwiOiBcIuWfuuacrOeOr+WbvjVcIixcbiAgICAgICAgICAgIFwicmFuZ2VEYXRhXCI6IFszLCA5XVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcInN3aXRjaFRleHRcIjogXCLln7rmnKznjq/lm742XCIsXG4gICAgICAgICAgICBcInJhbmdlRGF0YVwiOiBbMCwgMTFdXG4gICAgICAgIH1cbiAgICBdXG4gICAgc3dpdGNoQ29sb3I6IGFueSA9IFsnIzU1YTcyMicsICcjZmY3ZTc1JywgJyMwMDk5ZmYnLCAnI2QyODRkOScsICcjZmZiYjI5J107XG5cbiAgICAvLyDlvZPliY3njq/lvaLlm77lsZXnpLrnmoTmlbDmja5cbiAgICBjdXJyZW50U2hvd0RhdGE6IGFueTtcbiAgICAvLyDnjq/lm77nmoTpu5jorqTpopzoibLphY3nva5cbiAgICBkb3VnaG51dENvbG9yOiBhbnkgPSBbJ3JnYigyNTMsOTcsNTUpJywgJ3JnYigyNDgsMTkzLDcxKScsICdyZ2IoNTMsMTAwLDI1NSknLCAncmdiKDM1LDE3MCwyNDEpJywgJ3JnYigyLDIwNywxNTApJywgJyNkMjg0ZDknXTtcblxuICAgIC8vIOWbvuS+i+eahOWuveW6plxuICAgIGxlZ2VuZFdpZHRoOiBhbnkgPSB1bmRlZmluZWQ7XG4gICAgbGVnZW5kVG9wOiBhbnkgPSBcIjEwJVwiXG5cbiAgICAvLyBsb2FkaW5n5Yik5patXG4gICAgcGFnZUxvYWRpbmcgPSB0cnVlO1xuICAgIHN3aXRjaExvYWRpbmcgPSB0cnVlO1xuXG4gICAgLy8g5Lit6Ze05Lu25Lyg6YCS6L+H5p2l55qE5qih5ouf5pWw5o2uXG4gICAgY29uZmlnRGF0YTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBwbHVnaW5NYW5hZ2VyU2VydmljZTogUGx1Z2luTWFuYWdlclNlcnZpY2UsXG4gICAgICAgIGNvbURhdGE6IGNvbXBvbmVudERhdGEpIHtcbiAgICAgICAgdGhpcy4kZWxlbSA9ICQodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgICAgIHRoaXMuY29uZmlnRGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YTtcbiAgICB9XG5cbiAgICAvLyBhcHBFY2hhcnRzRmlsdGVycGllTGVnZW5k5oyH5Luk5pWw5o2u55u45YWzXG4gICAgdGhhdCA9IHRoaXNcbiAgICBjaGFydDogYW55O1xuICAgIGJhY2tFbWl0KGUpIHtcbiAgICAgICAgaWYgKCEhZSkge1xuICAgICAgICAgICAgdGhpcy5jaGFydCA9IGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25SZXNpemUoKSB7XG4gICAgICAgIHRoaXMuY2hhcnQgJiYgdGhpcy5jaGFydC5yZXNpemUoKVxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmZldGNoRGF0YShmYWxzZSlcbiAgICB9XG5cbiAgICAvLyBwYWdlSW5mb+WtmOWcqOaXtueahOaTjeS9nFxuICAgIHBhZ2VPcGVyYXRpb24oKSB7XG4gICAgICAgIC8vIOa3seaLt+i0neS4gOS7veWIhumhteaVsOaNrlxuICAgICAgICBsZXQgcGFnZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5kb3VnaG51dERhdGEucGFnZUluZm8pKTtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnRUZXh0ID0gcGFnZS5sZWZ0VGV4dDtcbiAgICAgICAgdGhpcy5yaWdodFRleHQgPSBwYWdlLnJpZ2h0VGV4dDtcblxuICAgICAgICBpZiAodGhpcy5kb3VnaG51dERhdGEuZGF0YS5sZW5ndGggPiBwYWdlLm9uZVBhZ2VTaG93TnVtKSB7XG4gICAgICAgICAgICAvLyDliIbpobXlsZXnpLrnmoTmlbDmja7ljLrpl7RcbiAgICAgICAgICAgIGxldCBzdGFydE51bSA9IHBhZ2Uub25lUGFnZVNob3dOdW0gKiAodGhpcy5idG5TaG93SW5kZXggLSAxKTtcbiAgICAgICAgICAgIGxldCBlbmROdW0gPSBzdGFydE51bSArIHBhZ2Uub25lUGFnZVNob3dOdW07XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaG93RGF0YSA9IHRoaXMuZG91Z2hudXREYXRhLmRhdGEuc2xpY2Uoc3RhcnROdW0sIGVuZE51bSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaG93RGF0YSA9IHRoaXMuZG91Z2hudXREYXRhLmRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwYWdlSW5mb+S4jeWtmOWcqOaXtu+8jOmHjee9ruWIhumhteeahOmFjee9rlxuICAgIHBhZ2VSZXNldCgpIHtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGluZyA9IHRydWVcbiAgICAgICAgdGhpcy5sZWZ0QWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yaWdodEFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnRUZXh0ID0gJyc7XG4gICAgICAgIHRoaXMucmlnaHRUZXh0ID0gJyc7XG4gICAgICAgIHRoaXMuYnRuU2hvd0luZGV4ID0gMTtcbiAgICB9XG5cbiAgICAvLyDliIbpobXnmoTkuKTkuKrmjInpkq7op6blj5HmraTmlrnms5XvvIzngrnlh7vlt6blj7PliIfmjaLpobXmlbBcbiAgICBwYWdlQnRuKGJ0blN0YXR1cykge1xuICAgICAgICBpZiAoYnRuU3RhdHVzID09PSBcImxlZnRBY3RpdmVcIikge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnRuU2hvd0luZGV4IDw9IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blNob3dJbmRleCA9IDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idG5TaG93SW5kZXggPSB0aGlzLmJ0blNob3dJbmRleCAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGVmdEFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIHRoaXMucmlnaHRBY3RpdmUgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnRuU2hvd0luZGV4ID49IE1hdGguY2VpbCh0aGlzLmRvdWdobnV0RGF0YS5kYXRhLmxlbmd0aCAvIHRoaXMuZG91Z2hudXREYXRhLnBhZ2VJbmZvLm9uZVBhZ2VTaG93TnVtKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuU2hvd0luZGV4ID0gTWF0aC5jZWlsKHRoaXMuZG91Z2hudXREYXRhLmRhdGEubGVuZ3RoIC8gdGhpcy5kb3VnaG51dERhdGEucGFnZUluZm8ub25lUGFnZVNob3dOdW0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYnRuU2hvd0luZGV4KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGVmdEFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLnJpZ2h0QWN0aXZlID0gdHJ1ZVxuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mZXRjaERhdGEodGhpcy5tb2R1bGVEYXRhWzJdKTtcbiAgICB9XG5cbiAgICAvLyBzd2l0Y2hJbmZv5a2Y5Zyo5pe255qE5pON5L2cXG4gICAgc3dpdGNoT3BlcmF0aW9uKCkge1xuICAgICAgICAvLyDmt7Hmi7fotJ3kuIDku73liIfmjaLmlbDmja5cbiAgICAgICAgdGhpcy5zd2l0Y2hJbmZvID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRvdWdobnV0RGF0YS5zd2l0Y2hJbmZvKSk7XG4gICAgICAgIC8vIOWmguaenOaWueWdl+minOiJsuayoeacieiiq+aooeaLn+aVsOaNrui1i+WAvO+8jOaIluiAhee7meS6huS4quepuuaVsOe7hO+8jOmCo+S5iOe7meaWueWdl+minOiJsuS4gOS4qum7mOiupOWAvFxuICAgICAgICBpZiAodGhpcy5zd2l0Y2hDb2xvciA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuc3dpdGNoQ29sb3IubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN3aXRjaENvbG9yID0gW1wiIzU1YTcyMlwiLCBcIiNmZjdlNzVcIiwgXCIjMDA5OWZmXCIsIFwiI2QyODRkOVwiLCBcIiNmZmJiMjlcIl07XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3dpdGNoSW5mb+mHjOavj+S4gOmhuea3u+WKoHN3aXRjaENvbG9y5bGe5oCn77yM5pa55L6/6YGN5Y6GXG4gICAgICAgIHRoaXMuc3dpdGNoSW5mby5mb3JFYWNoKChzd2l0Y2hEYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoRGF0YVtcInN3aXRjaENvbG9yXCJdID0gdGhpcy5zd2l0Y2hDb2xvcltpbmRleCAlIHRoaXMuc3dpdGNoQ29sb3IubGVuZ3RoXVxuXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zd2l0Y2hMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGxldCBjdXJTd2l0Y2hEYXRhID0gdGhpcy5zd2l0Y2hJbmZvW3RoaXMuc3dpdGNoQWNpdHZlSW5kZXhdO1xuXG4gICAgICAgIC8vIOi/memHjOaYr+iAg+iZkeWIsOW9k+a0u+i3g+eKtuaAgeeahOWxleekuuaVsOaNruiiq+WIoOS6huWQju+8jOW9k+WJjeS4i+agh+ayoeacieaVsOaNruS6hu+8jOmCo+S5iOmHjee9ruW9k+WJjeS4i+agh++8jOm7mOiupOaMh+WQkeesrOS4gOS4qlxuICAgICAgICBpZiAoIWN1clN3aXRjaERhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoQWNpdHZlSW5kZXggPSAwO1xuICAgICAgICAgICAgY3VyU3dpdGNoRGF0YSA9IHRoaXMuc3dpdGNoSW5mb1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOagueaNruaooeaLn+aVsOaNruS4remFjee9rueahOaVsOaNruWMuumXtO+8jOWPluW+l+W9k+WJjeWxleekuueahOaVsOaNrlxuICAgICAgICB0aGlzLmN1cnJlbnRTaG93RGF0YSA9IHRoaXMuZG91Z2hudXREYXRhLmRhdGEuc2xpY2UoY3VyU3dpdGNoRGF0YS5yYW5nZURhdGFbMF0sIGN1clN3aXRjaERhdGEucmFuZ2VEYXRhWzFdICsgMSk7XG4gICAgfVxuXG4gICAgLy8gc3dpdGNoSW5mb+S4jeWtmOWcqOaXtu+8jOmHjee9ruWIh+aNoueahOmFjee9rlxuICAgIHN3aXRjaFJlc2V0KCkge1xuICAgICAgICB0aGlzLnN3aXRjaExvYWRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnN3aXRjaEFjaXR2ZUluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5zd2l0Y2hJbmZvID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic3dpdGNoVGV4dFwiOiBcIuWfuuacrOeOr+WbvjFcIixcbiAgICAgICAgICAgICAgICBcInJhbmdlRGF0YVwiOiBbMCwgM11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzd2l0Y2hUZXh0XCI6IFwi5Z+65pys546v5Zu+MlwiLFxuICAgICAgICAgICAgICAgIFwicmFuZ2VEYXRhXCI6IFs0LCA1XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInN3aXRjaFRleHRcIjogXCLln7rmnKznjq/lm74zXCIsXG4gICAgICAgICAgICAgICAgXCJyYW5nZURhdGFcIjogWzYsIDldXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic3dpdGNoVGV4dFwiOiBcIuWfuuacrOeOr+WbvjRcIixcbiAgICAgICAgICAgICAgICBcInJhbmdlRGF0YVwiOiBbMTAsIDEyXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInN3aXRjaFRleHRcIjogXCLln7rmnKznjq/lm741XCIsXG4gICAgICAgICAgICAgICAgXCJyYW5nZURhdGFcIjogWzMsIDldXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic3dpdGNoVGV4dFwiOiBcIuWfuuacrOeOr+WbvjZcIixcbiAgICAgICAgICAgICAgICBcInJhbmdlRGF0YVwiOiBbMCwgMTFdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgICAgdGhpcy5zd2l0Y2hDb2xvciA9IFtdO1xuICAgIH1cblxuICAgIC8vIOeCueWHu3N3aXRjaEJveCDop6blj5HmraTmlrnms5XvvIzmjInlvZPliY3mtLvot4PnmoRpbmRleOiOt+WPlnN3aXRjaEluZm/kuK3kuIvmoIflr7nlupTnmoTmlbDmja5cbiAgICBzd2l0Y2hCdG4oaSkge1xuICAgICAgICB0aGlzLnN3aXRjaEFjaXR2ZUluZGV4ID0gaTtcbiAgICAgICAgdGhpcy5mZXRjaERhdGEodGhpcy5tb2R1bGVEYXRhWzJdKTtcbiAgICB9XG5cbiAgICBmZXRjaERhdGEobG9hZGluZykge1xuICAgICAgICBpZiAodGhpcy5jb25maWdEYXRhLmRhdGEgJiYgdGhpcy5jb25maWdEYXRhLmRhdGEuZGF0YSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICB0aGlzLmRvdWdobnV0RGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5jb25maWdEYXRhLmRhdGEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuY29sb3IpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEuY29sb3Iuc3dpdGNoQ29sb3IgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoQ29sb3IgPSB0aGlzLmNvbmZpZ0RhdGEuY29sb3Iuc3dpdGNoQ29sb3IubGVuZ3RoICE9PSAwID8gdGhpcy5jb25maWdEYXRhLmNvbG9yLnN3aXRjaENvbG9yIDogdGhpcy5zd2l0Y2hDb2xvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY29uZmlnRGF0YS5jb2xvci5kb3VnaG51dENvbG9yIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRvdWdobnV0Q29sb3IgPSB0aGlzLmNvbmZpZ0RhdGEuY29sb3IuZG91Z2hudXRDb2xvci5sZW5ndGggIT09IDAgPyB0aGlzLmNvbmZpZ0RhdGEuY29sb3IuZG91Z2hudXRDb2xvciA6IHRoaXMuZG91Z2hudXRDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMuY29uZmlnRGF0YS5jb2xvci5sZWdlbmRXaWR0aCl7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWdlbmRXaWR0aCA9IHRoaXMuY29uZmlnRGF0YS5jb2xvci5sZWdlbmRXaWR0aFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLmNvbmZpZ0RhdGEuY29sb3IubGVnZW5kVG9wKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxlZ2VuZFRvcCA9IHRoaXMuY29uZmlnRGF0YS5jb2xvci5sZWdlbmRUb3BcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5YiG6aG15ZKM5YiH5o2i6YWN572u6aG55Z2H5a2Y5Zyo5pe277yM6buY6K6k5bGV56S65YiH5o2i5qih5byPXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSAhIXRoaXMuZG91Z2hudXREYXRhLnN3aXRjaEluZm86XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5YiH5o2i6YWN572u5L+h5oGv5a2Y5ZyoXG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hPcGVyYXRpb24oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgISF0aGlzLmRvdWdobnV0RGF0YS5wYWdlSW5mbzpcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzliIfmjaLphY3nva7kv6Hmga/kuI3lrZjlnKjvvIzkvYbmmK/liIbpobXphY3nva7kv6Hmga/lrZjlnKhcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaFJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlT3BlcmF0aW9uKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIC8vIOWIhumhteS4juWIh+aNouaVsOaNruWdh+S4jeWtmOWcqOaXtu+8jOmHjee9rumFjee9ru+8jOWxleekuuWFqOmDqOaVsOaNrlxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoUmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VSZXNldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNob3dEYXRhID0gdGhpcy5kb3VnaG51dERhdGEuZGF0YTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8g546v5Zu+6YWN572u6aG5XG4gICAgICAgIHRoaXMuZG9udXRDaGFydERhdGEgPSB7XG4gICAgICAgICAgICB0aGVtZTogJ2RhcmsnLFxuICAgICAgICAgICAgY29sb3I6IHRoaXMuZG91Z2hudXRDb2xvciwgLy8g546v5Zu+55qE6aKc6ImyXG4gICAgICAgICAgICBsZWdlbmRYOiAncmlnaHQnLFxuICAgICAgICAgICAgbGVnZW5kV2lkdGg6IHRoaXMubGVnZW5kV2lkdGgsIC8vIOWbvuS+i+eahOWuveW6plxuICAgICAgICAgICAgbGVnZW5kVG9wOiB0aGlzLmxlZ2VuZFRvcCwgLy8g5Zu+5L6L55qE5LiK5LiL5L2N572uXG4gICAgICAgICAgICBmb3JtYXRWYWx1ZTogJ2Zvcm1hdCcsXG4gICAgICAgICAgICBzZXJpZXNEYXRhOiB0aGlzLmN1cnJlbnRTaG93RGF0YSxcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgdGl0bGVOdW06IHRoaXMuZG91Z2hudXREYXRhLnRpdGxlID8gdGhpcy5kb3VnaG51dERhdGEudGl0bGUudGl0bGVOdW0gOiBcIlwiLFxuICAgICAgICAgICAgICAgIHRpdGxlVGV4dDogdGhpcy5kb3VnaG51dERhdGEudGl0bGUgPyB0aGlzLmRvdWdobnV0RGF0YS50aXRsZS50aXRsZVRleHQgOiBcIlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogWyczMCUnLCAnNTAlJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByYWRpdXM6IFsnNjAlJywgJzc1JSddLFxuICAgICAgICAgICAgcmFkaXVzMTogWyc1MCUnLCAnNjAlJ11cbiAgICAgICAgfTtcblxuICAgIH1cbn1cbiJdfQ==