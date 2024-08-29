/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
export class StatusRankComponent {
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
     * @param {?} value
     * @param {?=} list
     * @return {?}
     */
    getPercentage(value, list = []) {
        /** @type {?} */
        let total = 0;
        list.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            total += item.value;
        }));
        return (value / total) * 100 + "%";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let rollingNum = this.data.rollingNum || 3;
        if (this.data.list.length <= rollingNum) {
            return;
        }
        /** @type {?} */
        const animateElements = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const trList = this.tbodyDiv.nativeElement.querySelectorAll(".wrap");
            trList.forEach((/**
             * @param {?} element
             * @param {?} index
             * @return {?}
             */
            (element, index) => {
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
            () => {
                this.data.list.push(this.data.list.shift());
                trList.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                (element) => {
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
    }
    /**
     * @return {?}
     */
    getBodyHeight() {
        /** @type {?} */
        const dataLength = this.data.list.length;
        /** @type {?} */
        const rollingNum = this.data.rollingNum;
        /** @type {?} */
        const num = dataLength > rollingNum ? rollingNum : dataLength;
        return num * 72 + (num - 1) * 20 + "px";
    }
}
StatusRankComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-status-rank",
                template: "<div class=\"status-rank\" #tbody [style.height]=\"getBodyHeight()\">\n  <div class=\"wrap\" *ngFor=\"let item of data.list\">\n    <div class=\"left\">\n      <div class=\"text-wrap\">\n        <div class=\"text text-ellipsis\">{{ item.title }}</div>\n      </div>\n      <div class=\"nub-wrap\">\n        <div class=\"nub\">{{ item.value }}</div>\n        <!-- <img [src]=\"item.icon\" alt=\"\" /> -->\n      </div>\n    </div>\n    <div class=\"right\">\n      <div class=\"line\"></div>\n      <div class=\"state-wrap\">\n        <div class=\"state\" *ngFor=\"let item1 of item.column; let index = index\">\n          <div\n            class=\"state-text\"\n            [style.fontSize]=\"(color.column || [])[index]?.LabelSize\"\n            [style.color]=\"(color.column || [])[index]?.LabelColor\"\n          >\n            {{ item1.label }}\n          </div>\n          <div class=\"state-nub-wrap\">\n            <div class=\"progressbar\">\n              <div\n                class=\"external\"\n                [style.backgroundColor]=\"\n                  (color.column || [])[index]?.progressColor &&\n                  (color.column || [])[index]?.progressColor.length\n                    ? (color.column || [])[index]?.progressColor[1]\n                    : null\n                \"\n              >\n                <div\n                  class=\"internal\"\n                  [style.backgroundColor]=\"\n                    (color.column || [])[index]?.progressColor &&\n                    (color.column || [])[index]?.progressColor.length\n                      ? (color.column || [])[index]?.progressColor[0]\n                      : null\n                  \"\n                  [style.width]=\"getPercentage(item1.value, item.column)\"\n                ></div>\n              </div>\n            </div>\n            <div\n              class=\"number-wrap\"\n              [style.backgroundColor]=\"\n                (color.column || [])[index]?.ValueBgColor\n              \"\n            >\n              <div\n                class=\"number\"\n                [style.fontSize]=\"(color.column || [])[index]?.ValueSize\"\n                [style.color]=\"(color.column || [])[index]?.ValueColor\"\n              >\n                {{ item1.value }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- \u9700\u8981\u7528\u5B9A\u4F4D\u7684 -->\n    <div class=\"background-wrap\">\n      <div class=\"pic-wrap\">\n        <img\n          class=\"pic-left\"\n          src=\"assets/status-rank/image/status_rank_draw1.png\"\n          alt=\"\"\n        />\n        <img\n          class=\"pic-mid\"\n          src=\"assets/status-rank/image/status_rank_draw2.png\"\n          alt=\"\"\n        />\n      </div>\n      <div class=\"middle-wrap\">\n        <div class=\"middle-line\"></div>\n      </div>\n      <div class=\"pic-wrap\">\n        <img\n          class=\"pic-mid rotate180\"\n          src=\"assets/status-rank/image/status_rank_draw2.png\"\n          alt=\"\"\n        />\n        <img\n          class=\"pic-left\"\n          src=\"assets/status-rank/image/status_rank_draw1.png\"\n          alt=\"\"\n        />\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".rotate180{transform:rotate(180deg)}.text-ellipsis{width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.status-rank{width:100%;height:100%;overflow:hidden}.status-rank .wrap{position:relative;display:flex;width:100%;transition:.5s}.status-rank .wrap:not(:last-child){margin-bottom:20px}.status-rank .wrap .left{width:25%}.status-rank .wrap .left .text-wrap{margin-bottom:9px;display:flex;justify-content:center;align-items:center;width:100%;height:23px;background-image:url(assets/status-rank/image/title_bg.png);background-size:100% 100%;background-repeat:no-repeat}.status-rank .wrap .left .text-wrap .text{text-align:center;font-size:14px;font-weight:Medium;color:#52d2ff;line-height:14px}.status-rank .wrap .left .nub-wrap{display:flex;align-items:center;justify-content:center;margin-top:11px;width:50%;height:34px;border-top:1px solid rgba(255,255,255,.4);border-bottom:1px solid rgba(255,255,255,.4)}.status-rank .wrap .left .nub-wrap .nub{font-size:20px;font-weight:Medium;text-align:left;color:#fafbff;line-height:20px;font-family:Roboto,Roboto-Medium}.status-rank .wrap .left .nub-wrap img{width:40px;height:40px}.status-rank .wrap .right{flex-grow:1}.status-rank .wrap .right .line{position:relative;margin-left:4px;margin-bottom:12px;height:1px;background-color:rgba(255,255,255,.4)}.status-rank .wrap .right .line::after{content:'';position:absolute;right:0;top:0;width:1px;height:8px;background-color:rgba(255,255,255,.4)}.status-rank .wrap .right .state-wrap{display:flex;flex-grow:1}.status-rank .wrap .right .state-wrap .state{flex-grow:1;margin-right:12px}.status-rank .wrap .right .state-wrap .state:nth-child(1) .state-nub-wrap .progressbar .external .internal{background:linear-gradient(90deg,rgba(82,210,255,.5),rgba(109,217,255,.9) 99%)}.status-rank .wrap .right .state-wrap .state:nth-child(1) .state-nub-wrap .number-wrap{background:rgba(82,210,255,.12)}.status-rank .wrap .right .state-wrap .state:nth-child(1) .state-nub-wrap .number-wrap .number{color:#52d2ff}.status-rank .wrap .right .state-wrap .state:nth-child(2) .state-nub-wrap .progressbar .external .internal{background:linear-gradient(90deg,rgba(255,191,89,.5),rgba(255,191,89,.9) 99%)}.status-rank .wrap .right .state-wrap .state:nth-child(2) .state-nub-wrap .number-wrap{background:rgba(255,191,89,.12)}.status-rank .wrap .right .state-wrap .state:nth-child(2) .state-nub-wrap .number-wrap .number{color:#ffbf59}.status-rank .wrap .right .state-wrap .state:nth-child(3) .state-nub-wrap .progressbar .external .internal{background:linear-gradient(90deg,rgba(255,67,91,.5),rgba(255,67,91,.9) 99%)}.status-rank .wrap .right .state-wrap .state:nth-child(3) .state-nub-wrap .number-wrap{background:rgba(255,67,91,.12)}.status-rank .wrap .right .state-wrap .state:nth-child(3) .state-nub-wrap .number-wrap .number{color:#ff435b}.status-rank .wrap .right .state-wrap .state .state-text{margin-bottom:6px;font-size:14px;font-weight:Regular;text-align:right;color:rgba(255,255,255,.8);line-height:14px}.status-rank .wrap .right .state-wrap .state .state-nub-wrap .progressbar .external{width:100%;height:4px;background:rgba(255,255,255,.2)}.status-rank .wrap .right .state-wrap .state .state-nub-wrap .progressbar .external .internal{height:4px}.status-rank .wrap .right .state-wrap .state .state-nub-wrap .number-wrap{height:35px;padding-top:6px}.status-rank .wrap .right .state-wrap .state .state-nub-wrap .number-wrap .number{font-size:18px;font-weight:Medium;text-align:right;line-height:18px;margin-right:6px;font-family:Roboto,Roboto-Medium}.status-rank .background-wrap{position:absolute;top:32px;left:calc(12.5% + 8px);right:0;display:flex}.status-rank .background-wrap .pic-wrap{display:flex;align-items:center}.status-rank .background-wrap .pic-wrap .pic-left{width:4px;height:34px}.status-rank .background-wrap .pic-wrap .pic-mid{width:4px;height:6px;margin:0 2px}.status-rank .background-wrap .middle-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:40px;background:rgba(255,255,255,.01)}.status-rank .background-wrap .middle-wrap .middle-line{width:100%;height:1px;background:rgba(250,251,255,.12)}"]
            }] }
];
/** @nocollapse */
StatusRankComponent.ctorParameters = () => [
    { type: PluginManagerService },
    { type: componentData }
];
StatusRankComponent.propDecorators = {
    tbodyDiv: [{ type: ViewChild, args: ["tbody",] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLXJhbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc3RhdHVzLXJhbmsvIiwic291cmNlcyI6WyJsaWIvc3RhdHVzLXJhbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3JFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBTTlCLFlBQ1Usb0JBQTBDLEVBQ2xELE9BQXNCO1FBRGQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUdsRCxVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxHQUFHLEVBQUU7O1lBQ3hCLEtBQUssR0FBRyxDQUFDO1FBRWIsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3BCLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFRCxRQUFROztZQUNGLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDO1FBQzFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFVBQVUsRUFBRTtZQUN2QyxPQUFNO1NBQ1A7O2NBRUssZUFBZTs7O1FBQUcsR0FBRyxFQUFFOztrQkFDckIsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztZQUdwRSxNQUFNLENBQUMsT0FBTzs7Ozs7WUFBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO29CQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGtDQUFrQyxDQUFDO29CQUM3RCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7b0JBQzlCLE9BQU07aUJBQ1A7Z0JBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7WUFDaEQsQ0FBQyxFQUFDLENBQUM7WUFFSCxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Z0JBRTVDLE1BQU0sQ0FBQyxPQUFPOzs7O2dCQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7b0JBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztvQkFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7b0JBQzNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO29CQUM1QixPQUFPLENBQUMsWUFBWSxDQUFDO29CQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7Z0JBQzdDLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFBO1FBQ0QsV0FBVyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUlyQyxDQUFDOzs7O0lBRUQsYUFBYTs7Y0FDTCxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTs7Y0FDbEMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTs7Y0FDakMsR0FBRyxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUU3RCxPQUFPLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztJQUMxQyxDQUFDOzs7WUEzRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHFzR0FBMkM7O2FBRTVDOzs7O1lBTlEsb0JBQW9CO1lBQUUsYUFBYTs7O3VCQVF6QyxTQUFTLFNBQUMsT0FBTzs7OztJQUFsQix1Q0FDcUI7O0lBQ3JCLG1DQUFVOztJQUNWLG9DQUFXOzs7OztJQUdULG1EQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGx1Z2luTWFuYWdlclNlcnZpY2UsIGNvbXBvbmVudERhdGEgfSBmcm9tIFwicGx1Z2luLW1hbmFnZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1zdGF0dXMtcmFua1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3N0YXR1cy1yYW5rLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9zdGF0dXMtcmFuay5jb21wb25lbnQuc3R5bFwiXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdHVzUmFua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJ0Ym9keVwiKVxuICB0Ym9keURpdjogRWxlbWVudFJlZjtcbiAgZGF0YTogYW55O1xuICBjb2xvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLFxuICAgIGNvbURhdGE6IGNvbXBvbmVudERhdGFcbiAgKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YS5kYXRhO1xuICAgIHRoaXMuY29sb3IgPSBjb21EYXRhLmNvbmZpZ0RhdGEuY29sb3I7XG4gIH1cblxuICBnZXRQZXJjZW50YWdlKHZhbHVlLCBsaXN0ID0gW10pIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuXG4gICAgbGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0b3RhbCArPSBpdGVtLnZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICh2YWx1ZSAvIHRvdGFsKSAqIDEwMCArIFwiJVwiO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IHJvbGxpbmdOdW0gPSB0aGlzLmRhdGEucm9sbGluZ051bSB8fCAzXG4gICAgaWYgKHRoaXMuZGF0YS5saXN0Lmxlbmd0aCA8PSByb2xsaW5nTnVtKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhbmltYXRlRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0ckxpc3QgPSB0aGlzLnRib2R5RGl2Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53cmFwXCIpO1xuXG5cbiAgICAgIHRyTGlzdC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGVYKDkwZGVnKVwiO1xuICAgICAgICAgIHRyTGlzdFswXS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLTkycHgpXCI7XG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YS5saXN0LnB1c2godGhpcy5kYXRhLmxpc3Quc2hpZnQoKSk7XG5cbiAgICAgICAgdHJMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKDAsMClcIjtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjVzIGVhc2VcIjtcbiAgICAgICAgfSk7XG4gICAgICB9LCA1MDApO1xuICAgIH07XG4gICAgc2V0SW50ZXJ2YWwoYW5pbWF0ZUVsZW1lbnRzLCAzMDAwKTtcblxuXG5cbiAgfVxuXG4gIGdldEJvZHlIZWlnaHQoKSB7XG4gICAgY29uc3QgZGF0YUxlbmd0aCA9IHRoaXMuZGF0YS5saXN0Lmxlbmd0aDtcbiAgICBjb25zdCByb2xsaW5nTnVtID0gdGhpcy5kYXRhLnJvbGxpbmdOdW07XG4gICAgY29uc3QgbnVtID0gZGF0YUxlbmd0aCA+IHJvbGxpbmdOdW0gPyByb2xsaW5nTnVtIDogZGF0YUxlbmd0aDtcblxuICAgIHJldHVybiBudW0gKiA3MiArIChudW0gLSAxKSAqIDIwICsgXCJweFwiO1xuICB9XG59XG4iXX0=