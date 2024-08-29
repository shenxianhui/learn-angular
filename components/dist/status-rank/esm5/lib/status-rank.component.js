/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
var StatusRankComponent = /** @class */ (function () {
    function StatusRankComponent(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @param {?} value
     * @param {?=} list
     * @return {?}
     */
    StatusRankComponent.prototype.getPercentage = /**
     * @param {?} value
     * @param {?=} list
     * @return {?}
     */
    function (value, list) {
        if (list === void 0) { list = []; }
        /** @type {?} */
        var total = 0;
        list.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            total += item.value;
        }));
        return (value / total) * 100 + "%";
    };
    /**
     * @return {?}
     */
    StatusRankComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var rollingNum = this.data.rollingNum || 3;
        if (this.data.list.length <= rollingNum) {
            return;
        }
        /** @type {?} */
        var animateElements = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var trList = _this.tbodyDiv.nativeElement.querySelectorAll(".wrap");
            trList.forEach((/**
             * @param {?} element
             * @param {?} index
             * @return {?}
             */
            function (element, index) {
                if (index == 0) {
                    element.style.transform = "translateY(-10px) rotateX(90deg)";
                    trList[0].style.opacity = "0";
                    return;
                }
                element.style.transform = "translateY(-92px)";
            }));
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.data.list.push(_this.data.list.shift());
                trList.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
                    element.style.transition = "none";
                    element.style.transform = "translate(0,0)";
                    element.style.opacity = "none";
                    element.style.opacity = "1";
                    element.offsetHeight;
                    element.style.transition = "all 0.5s ease";
                }));
            }), 500);
        });
        setInterval(animateElements, 3000);
    };
    /**
     * @return {?}
     */
    StatusRankComponent.prototype.getBodyHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dataLength = this.data.list.length;
        /** @type {?} */
        var rollingNum = this.data.rollingNum;
        /** @type {?} */
        var num = dataLength > rollingNum ? rollingNum : dataLength;
        return num * 72 + (num - 1) * 20 + "px";
    };
    StatusRankComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-status-rank",
                    template: "<div class=\"status-rank\" #tbody [style.height]=\"getBodyHeight()\">\n  <div class=\"wrap\" *ngFor=\"let item of data.list\">\n    <div class=\"left\">\n      <div class=\"text-wrap\">\n        <div class=\"text text-ellipsis\">{{ item.title }}</div>\n      </div>\n      <div class=\"nub-wrap\">\n        <div class=\"nub\">{{ item.value }}</div>\n        <!-- <img [src]=\"item.icon\" alt=\"\" /> -->\n      </div>\n    </div>\n    <div class=\"right\">\n      <div class=\"line\"></div>\n      <div class=\"state-wrap\">\n        <div class=\"state\" *ngFor=\"let item1 of item.column; let index = index\">\n          <div\n            class=\"state-text\"\n            [style.fontSize]=\"(color.column || [])[index]?.LabelSize\"\n            [style.color]=\"(color.column || [])[index]?.LabelColor\"\n          >\n            {{ item1.label }}\n          </div>\n          <div class=\"state-nub-wrap\">\n            <div class=\"progressbar\">\n              <div\n                class=\"external\"\n                [style.backgroundColor]=\"\n                  (color.column || [])[index]?.progressColor &&\n                  (color.column || [])[index]?.progressColor.length\n                    ? (color.column || [])[index]?.progressColor[1]\n                    : null\n                \"\n              >\n                <div\n                  class=\"internal\"\n                  [style.backgroundColor]=\"\n                    (color.column || [])[index]?.progressColor &&\n                    (color.column || [])[index]?.progressColor.length\n                      ? (color.column || [])[index]?.progressColor[0]\n                      : null\n                  \"\n                  [style.width]=\"getPercentage(item1.value, item.column)\"\n                ></div>\n              </div>\n            </div>\n            <div\n              class=\"number-wrap\"\n              [style.backgroundColor]=\"\n                (color.column || [])[index]?.ValueBgColor\n              \"\n            >\n              <div\n                class=\"number\"\n                [style.fontSize]=\"(color.column || [])[index]?.ValueSize\"\n                [style.color]=\"(color.column || [])[index]?.ValueColor\"\n              >\n                {{ item1.value }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- \u9700\u8981\u7528\u5B9A\u4F4D\u7684 -->\n    <div class=\"background-wrap\">\n      <div class=\"pic-wrap\">\n        <img\n          class=\"pic-left\"\n          src=\"assets/status-rank/image/status_rank_draw1.png\"\n          alt=\"\"\n        />\n        <img\n          class=\"pic-mid\"\n          src=\"assets/status-rank/image/status_rank_draw2.png\"\n          alt=\"\"\n        />\n      </div>\n      <div class=\"middle-wrap\">\n        <div class=\"middle-line\"></div>\n      </div>\n      <div class=\"pic-wrap\">\n        <img\n          class=\"pic-mid rotate180\"\n          src=\"assets/status-rank/image/status_rank_draw2.png\"\n          alt=\"\"\n        />\n        <img\n          class=\"pic-left\"\n          src=\"assets/status-rank/image/status_rank_draw1.png\"\n          alt=\"\"\n        />\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".rotate180{transform:rotate(180deg)}.text-ellipsis{width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.status-rank{width:100%;height:100%;overflow:hidden}.status-rank .wrap{position:relative;display:flex;width:100%;transition:.5s}.status-rank .wrap:not(:last-child){margin-bottom:20px}.status-rank .wrap .left{width:25%}.status-rank .wrap .left .text-wrap{margin-bottom:9px;display:flex;justify-content:center;align-items:center;width:100%;height:23px;background-image:url(assets/status-rank/image/title_bg.png);background-size:100% 100%;background-repeat:no-repeat}.status-rank .wrap .left .text-wrap .text{text-align:center;font-size:14px;font-weight:Medium;color:#52d2ff;line-height:14px}.status-rank .wrap .left .nub-wrap{display:flex;align-items:center;justify-content:center;margin-top:11px;width:50%;height:34px;border-top:1px solid rgba(255,255,255,.4);border-bottom:1px solid rgba(255,255,255,.4)}.status-rank .wrap .left .nub-wrap .nub{font-size:20px;font-weight:Medium;text-align:left;color:#fafbff;line-height:20px;font-family:Roboto,Roboto-Medium}.status-rank .wrap .left .nub-wrap img{width:40px;height:40px}.status-rank .wrap .right{flex-grow:1}.status-rank .wrap .right .line{position:relative;margin-left:4px;margin-bottom:12px;height:1px;background-color:rgba(255,255,255,.4)}.status-rank .wrap .right .line::after{content:'';position:absolute;right:0;top:0;width:1px;height:8px;background-color:rgba(255,255,255,.4)}.status-rank .wrap .right .state-wrap{display:flex;flex-grow:1}.status-rank .wrap .right .state-wrap .state{flex-grow:1;margin-right:12px}.status-rank .wrap .right .state-wrap .state:nth-child(1) .state-nub-wrap .progressbar .external .internal{background:linear-gradient(90deg,rgba(82,210,255,.5),rgba(109,217,255,.9) 99%)}.status-rank .wrap .right .state-wrap .state:nth-child(1) .state-nub-wrap .number-wrap{background:rgba(82,210,255,.12)}.status-rank .wrap .right .state-wrap .state:nth-child(1) .state-nub-wrap .number-wrap .number{color:#52d2ff}.status-rank .wrap .right .state-wrap .state:nth-child(2) .state-nub-wrap .progressbar .external .internal{background:linear-gradient(90deg,rgba(255,191,89,.5),rgba(255,191,89,.9) 99%)}.status-rank .wrap .right .state-wrap .state:nth-child(2) .state-nub-wrap .number-wrap{background:rgba(255,191,89,.12)}.status-rank .wrap .right .state-wrap .state:nth-child(2) .state-nub-wrap .number-wrap .number{color:#ffbf59}.status-rank .wrap .right .state-wrap .state:nth-child(3) .state-nub-wrap .progressbar .external .internal{background:linear-gradient(90deg,rgba(255,67,91,.5),rgba(255,67,91,.9) 99%)}.status-rank .wrap .right .state-wrap .state:nth-child(3) .state-nub-wrap .number-wrap{background:rgba(255,67,91,.12)}.status-rank .wrap .right .state-wrap .state:nth-child(3) .state-nub-wrap .number-wrap .number{color:#ff435b}.status-rank .wrap .right .state-wrap .state .state-text{margin-bottom:6px;font-size:14px;font-weight:Regular;text-align:right;color:rgba(255,255,255,.8);line-height:14px}.status-rank .wrap .right .state-wrap .state .state-nub-wrap .progressbar .external{width:100%;height:4px;background:rgba(255,255,255,.2)}.status-rank .wrap .right .state-wrap .state .state-nub-wrap .progressbar .external .internal{height:4px}.status-rank .wrap .right .state-wrap .state .state-nub-wrap .number-wrap{height:35px;padding-top:6px}.status-rank .wrap .right .state-wrap .state .state-nub-wrap .number-wrap .number{font-size:18px;font-weight:Medium;text-align:right;line-height:18px;margin-right:6px;font-family:Roboto,Roboto-Medium}.status-rank .background-wrap{position:absolute;top:32px;left:calc(12.5% + 8px);right:0;display:flex}.status-rank .background-wrap .pic-wrap{display:flex;align-items:center}.status-rank .background-wrap .pic-wrap .pic-left{width:4px;height:34px}.status-rank .background-wrap .pic-wrap .pic-mid{width:4px;height:6px;margin:0 2px}.status-rank .background-wrap .middle-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:40px;background:rgba(255,255,255,.01)}.status-rank .background-wrap .middle-wrap .middle-line{width:100%;height:1px;background:rgba(250,251,255,.12)}"]
                }] }
    ];
    /** @nocollapse */
    StatusRankComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    StatusRankComponent.propDecorators = {
        tbodyDiv: [{ type: ViewChild, args: ["tbody",] }]
    };
    return StatusRankComponent;
}());
export { StatusRankComponent };
if (false) {
    /** @type {?} */
    StatusRankComponent.prototype.tbodyDiv;
    /** @type {?} */
    StatusRankComponent.prototype.data;
    /** @type {?} */
    StatusRankComponent.prototype.color;
    /**
     * @type {?}
     * @private
     */
    StatusRankComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLXJhbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3RhdHVzLXJhbmsvIiwic291cmNlcyI6WyJsaWIvc3RhdHVzLXJhbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJFO0lBV0UsNkJBQ1Usb0JBQTBDLEVBQ2xELE9BQXNCO1FBRGQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUdsRCxVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVELDJDQUFhOzs7OztJQUFiLFVBQWMsS0FBSyxFQUFFLElBQVM7UUFBVCxxQkFBQSxFQUFBLFNBQVM7O1lBQ3hCLEtBQUssR0FBRyxDQUFDO1FBRWIsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLElBQUk7WUFDaEIsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQW9DQzs7WUFuQ0ssVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksVUFBVSxFQUFFO1lBQ3ZDLE9BQU07U0FDUDs7WUFFSyxlQUFlOzs7UUFBRzs7Z0JBQ2hCLE1BQU0sR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7WUFHcEUsTUFBTSxDQUFDLE9BQU87Ozs7O1lBQUMsVUFBQyxPQUFPLEVBQUUsS0FBSztnQkFDNUIsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO29CQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGtDQUFrQyxDQUFDO29CQUM3RCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7b0JBQzlCLE9BQU07aUJBQ1A7Z0JBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7WUFDaEQsQ0FBQyxFQUFDLENBQUM7WUFFSCxVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFFNUMsTUFBTSxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQyxPQUFPO29CQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7b0JBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO29CQUMzQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLFlBQVksQ0FBQztvQkFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO2dCQUM3QyxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQTtRQUNELFdBQVcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFJckMsQ0FBQzs7OztJQUVELDJDQUFhOzs7SUFBYjs7WUFDUSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTs7WUFDbEMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTs7WUFDakMsR0FBRyxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUU3RCxPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUMxQyxDQUFDOztnQkEzRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHFzR0FBMkM7O2lCQUU1Qzs7OztnQkFOUSxvQkFBb0I7Z0JBQUUsYUFBYTs7OzJCQVF6QyxTQUFTLFNBQUMsT0FBTzs7SUFzRXBCLDBCQUFDO0NBQUEsQUE1RUQsSUE0RUM7U0F2RVksbUJBQW1COzs7SUFDOUIsdUNBQ3FCOztJQUNyQixtQ0FBVTs7SUFDVixvQ0FBVzs7Ozs7SUFHVCxtREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21wb25lbnREYXRhIH0gZnJvbSBcInBsdWdpbi1tYW5hZ2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItc3RhdHVzLXJhbmtcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9zdGF0dXMtcmFuay5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vc3RhdHVzLXJhbmsuY29tcG9uZW50LnN0eWxcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFN0YXR1c1JhbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFwidGJvZHlcIilcbiAgdGJvZHlEaXY6IEVsZW1lbnRSZWY7XG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsdWdpbk1hbmFnZXJTZXJ2aWNlOiBQbHVnaW5NYW5hZ2VyU2VydmljZSxcbiAgICBjb21EYXRhOiBjb21wb25lbnREYXRhXG4gICkge1xuICAgIC8vIOaOpeaUtuS4remXtOS7tuS8oOWAvFxuICAgIGNvbnNvbGUubG9nKFwiY29tRGF0YVwiLCBjb21EYXRhKTtcbiAgICB0aGlzLmRhdGEgPSBjb21EYXRhLmNvbmZpZ0RhdGEuZGF0YTtcbiAgICB0aGlzLmNvbG9yID0gY29tRGF0YS5jb25maWdEYXRhLmNvbG9yO1xuICB9XG5cbiAgZ2V0UGVyY2VudGFnZSh2YWx1ZSwgbGlzdCA9IFtdKSB7XG4gICAgbGV0IHRvdGFsID0gMDtcblxuICAgIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdG90YWwgKz0gaXRlbS52YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiAodmFsdWUgLyB0b3RhbCkgKiAxMDAgKyBcIiVcIjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCByb2xsaW5nTnVtID0gdGhpcy5kYXRhLnJvbGxpbmdOdW0gfHwgM1xuICAgIGlmICh0aGlzLmRhdGEubGlzdC5sZW5ndGggPD0gcm9sbGluZ051bSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYW5pbWF0ZUVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdHJMaXN0ID0gdGhpcy50Ym9keURpdi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIud3JhcFwiKTtcblxuXG4gICAgICB0ckxpc3QuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtMTBweCkgcm90YXRlWCg5MGRlZylcIjtcbiAgICAgICAgICB0ckxpc3RbMF0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC05MnB4KVwiO1xuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEubGlzdC5wdXNoKHRoaXMuZGF0YS5saXN0LnNoaWZ0KCkpO1xuXG4gICAgICAgIHRyTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCI7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgwLDApXCI7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCJub25lXCI7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC41cyBlYXNlXCI7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTAwKTtcbiAgICB9O1xuICAgIHNldEludGVydmFsKGFuaW1hdGVFbGVtZW50cywgMzAwMCk7XG5cblxuXG4gIH1cblxuICBnZXRCb2R5SGVpZ2h0KCkge1xuICAgIGNvbnN0IGRhdGFMZW5ndGggPSB0aGlzLmRhdGEubGlzdC5sZW5ndGg7XG4gICAgY29uc3Qgcm9sbGluZ051bSA9IHRoaXMuZGF0YS5yb2xsaW5nTnVtO1xuICAgIGNvbnN0IG51bSA9IGRhdGFMZW5ndGggPiByb2xsaW5nTnVtID8gcm9sbGluZ051bSA6IGRhdGFMZW5ndGg7XG5cbiAgICByZXR1cm4gbnVtICogNzIgKyAobnVtIC0gMSkgKiAyMCArIFwicHhcIjtcbiAgfVxufVxuIl19