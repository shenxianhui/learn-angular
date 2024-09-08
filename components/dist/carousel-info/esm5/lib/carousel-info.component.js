/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
var CarouselInfoComponent = /** @class */ (function () {
    function CarouselInfoComponent(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    CarouselInfoComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    CarouselInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-carousel-info",
                    template: "<div class=\"carousel-info\">\n  <nz-carousel\n    class=\"carousel-info-carousel\"\n    [nzAutoPlay]=\"true\"\n    [nzAutoPlaySpeed]=\"color.interval\"\n  >\n    <div\n      class=\"carousel-con\"\n      *ngFor=\"let item of data.list || []; let index = index\"\n      nz-carousel-content\n    >\n      <!-- \u4E0A\u9762\u90E8\u5206 -->\n      <div class=\"head\">\n        <img class=\"head-pic\" [src]=\"item?.header?.icon\" alt=\"\" />\n        <div class=\"head-cot\">\n          <div\n            *ngFor=\"let item1 of item?.header.data || []; let index1 = index\"\n            class=\"group\"\n          >\n            <div\n              class=\"label\"\n              [style.fontSize]=\"\n                color &&\n                color.header &&\n                color.header.data &&\n                color.header.data[index1]?.label?.fontSize + 'px'\n              \"\n              [style.color]=\"\n                color &&\n                color.header &&\n                color.header.data &&\n                color.header?.data[index1]?.label?.color\n              \"\n            >\n              {{ item1?.label }}\n            </div>\n            <div\n              class=\"value\"\n              [style.fontSize]=\"\n                color &&\n                color.header &&\n                color.header.data &&\n                color.header.data[index1]?.value?.fontSize + 'px'\n              \"\n              [style.color]=\"\n                color &&\n                color.header &&\n                color.header.data &&\n                color.header.data[index1]?.value?.color\n              \"\n            >\n              {{ item1?.value }}\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"content\">\n        <div\n          *ngFor=\"let row of item?.content || []; let rowIdx = index\"\n          class=\"row\"\n        >\n          <div *ngFor=\"let col of row || []; let colIdx = index\" class=\"col\">\n            <img class=\"icon\" [src]=\"col?.icon\" alt=\"\" />\n            <div\n              class=\"value\"\n              [style.fontSize]=\"\n                color &&\n                color.content &&\n                color.content[rowIdx] &&\n                color.content[rowIdx][colIdx]?.value?.fontSize + 'px'\n              \"\n              [style.color]=\"\n                color &&\n                color.content &&\n                color.content[rowIdx] &&\n                color.content[rowIdx][colIdx]?.value?.color\n              \"\n            >\n              {{ col?.value }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nz-carousel>\n</div>\n",
                    styles: [".carousel-info .carousel-con{display:flex;flex-direction:column;padding-bottom:30px}.carousel-info .carousel-con .head{display:flex;align-items:center;width:100%;flex-shrink:0;height:68px;background:url(assets/carousel-info/image/header_bg.png) center center/100% 100% no-repeat;display:flex;align-items:center;padding-left:16px}.carousel-info .carousel-con .head .head-pic{flex-shrink:0;width:41px;height:41px;margin-right:12px}.carousel-info .carousel-con .head .head-cot{display:flex;flex-grow:1}.carousel-info .carousel-con .head .head-cot .group{min-width:30%}.carousel-info .carousel-con .head .head-cot .group .label{font-size:14px;text-align:left;color:#fff;margin-bottom:4px}.carousel-info .carousel-con .head .head-cot .group .value{font-size:14px;text-align:left;color:#52d2ff}.carousel-info .carousel-con .content{width:100%;padding:20px;background:rgba(255,255,255,.08);border-radius:0 4px 4px 0}.carousel-info .carousel-con .content .row{display:flex}.carousel-info .carousel-con .content .row:not(:last-child){margin-bottom:14px}.carousel-info .carousel-con .content .row .col{display:flex;flex-grow:1}.carousel-info .carousel-con .content .row .col .icon{width:16px;height:16px;margin-right:6px;margin-top:3px}.carousel-info .carousel-con .content .row .col .value{font-size:14px;text-align:left;color:#fff;line-height:1.5}::ng-deep .carousel-info-carousel .slick-dots li{margin:0 5px}::ng-deep .carousel-info-carousel .slick-dots li button{width:8px;height:8px;background:rgba(255,255,255,.4);border-radius:50%!important}::ng-deep .carousel-info-carousel .slick-dots li.slick-active button{position:relative;width:8px;height:8px;background:#fff;border-radius:50%!important}::ng-deep .carousel-info-carousel .slick-dots li.slick-active button:before{position:absolute;content:'';top:50%;left:50%;transform:translate(-50%,-50%);width:16px;height:16px;border:2px solid rgba(255,255,255,.3);border-radius:50%!important}"]
                }] }
    ];
    /** @nocollapse */
    CarouselInfoComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    return CarouselInfoComponent;
}());
export { CarouselInfoComponent };
if (false) {
    /** @type {?} */
    CarouselInfoComponent.prototype.data;
    /** @type {?} */
    CarouselInfoComponent.prototype.color;
    /**
     * @type {?}
     * @private
     */
    CarouselInfoComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJvdXNlbC1pbmZvLyIsInNvdXJjZXMiOlsibGliL2Nhcm91c2VsLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRTtJQVNFLCtCQUNVLG9CQUEwQyxFQUNsRCxPQUFzQjtRQURkLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFHbEQsVUFBVTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBbkJkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3Qix3b0ZBQTZDOztpQkFFOUM7Ozs7Z0JBTlEsb0JBQW9CO2dCQUFFLGFBQWE7O0lBc0I1Qyw0QkFBQztDQUFBLEFBcEJELElBb0JDO1NBZlkscUJBQXFCOzs7SUFDaEMscUNBQVU7O0lBQ1Ysc0NBQVc7Ozs7O0lBR1QscURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGx1Z2luTWFuYWdlclNlcnZpY2UsIGNvbXBvbmVudERhdGEgfSBmcm9tIFwicGx1Z2luLW1hbmFnZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1jYXJvdXNlbC1pbmZvXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2Fyb3VzZWwtaW5mby5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY2Fyb3VzZWwtaW5mby5jb21wb25lbnQuc3R5bFwiXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxJbmZvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGF0YTogYW55O1xuICBjb2xvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLFxuICAgIGNvbURhdGE6IGNvbXBvbmVudERhdGFcbiAgKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YS5kYXRhO1xuICAgIHRoaXMuY29sb3IgPSBjb21EYXRhLmNvbmZpZ0RhdGEuY29sb3I7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=