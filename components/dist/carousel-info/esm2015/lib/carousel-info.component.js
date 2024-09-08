/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
export class CarouselInfoComponent {
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
     * @return {?}
     */
    ngOnInit() { }
}
CarouselInfoComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-carousel-info",
                template: "<div class=\"carousel-info\">\n  <nz-carousel\n    class=\"carousel-info-carousel\"\n    [nzAutoPlay]=\"true\"\n    [nzAutoPlaySpeed]=\"color.interval\"\n  >\n    <div\n      class=\"carousel-con\"\n      *ngFor=\"let item of data.list || []; let index = index\"\n      nz-carousel-content\n    >\n      <!-- \u4E0A\u9762\u90E8\u5206 -->\n      <div class=\"head\">\n        <img class=\"head-pic\" [src]=\"item?.header?.icon\" alt=\"\" />\n        <div class=\"head-cot\">\n          <div\n            *ngFor=\"let item1 of item?.header.data || []; let index1 = index\"\n            class=\"group\"\n          >\n            <div\n              class=\"label\"\n              [style.fontSize]=\"\n                color &&\n                color.header &&\n                color.header.data &&\n                color.header.data[index1]?.label?.fontSize + 'px'\n              \"\n              [style.color]=\"\n                color &&\n                color.header &&\n                color.header.data &&\n                color.header?.data[index1]?.label?.color\n              \"\n            >\n              {{ item1?.label }}\n            </div>\n            <div\n              class=\"value\"\n              [style.fontSize]=\"\n                color &&\n                color.header &&\n                color.header.data &&\n                color.header.data[index1]?.value?.fontSize + 'px'\n              \"\n              [style.color]=\"\n                color &&\n                color.header &&\n                color.header.data &&\n                color.header.data[index1]?.value?.color\n              \"\n            >\n              {{ item1?.value }}\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"content\">\n        <div\n          *ngFor=\"let row of item?.content || []; let rowIdx = index\"\n          class=\"row\"\n        >\n          <div *ngFor=\"let col of row || []; let colIdx = index\" class=\"col\">\n            <img class=\"icon\" [src]=\"col?.icon\" alt=\"\" />\n            <div\n              class=\"value\"\n              [style.fontSize]=\"\n                color &&\n                color.content &&\n                color.content[rowIdx] &&\n                color.content[rowIdx][colIdx]?.value?.fontSize + 'px'\n              \"\n              [style.color]=\"\n                color &&\n                color.content &&\n                color.content[rowIdx] &&\n                color.content[rowIdx][colIdx]?.value?.color\n              \"\n            >\n              {{ col?.value }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </nz-carousel>\n</div>\n",
                styles: [".carousel-info .carousel-con{display:flex;flex-direction:column;padding-bottom:30px}.carousel-info .carousel-con .head{display:flex;align-items:center;width:100%;flex-shrink:0;height:68px;background:url(assets/carousel-info/image/header_bg.png) center center/100% 100% no-repeat;display:flex;align-items:center;padding-left:16px}.carousel-info .carousel-con .head .head-pic{flex-shrink:0;width:41px;height:41px;margin-right:12px}.carousel-info .carousel-con .head .head-cot{display:flex;flex-grow:1}.carousel-info .carousel-con .head .head-cot .group{min-width:30%}.carousel-info .carousel-con .head .head-cot .group .label{font-size:14px;text-align:left;color:#fff;margin-bottom:4px}.carousel-info .carousel-con .head .head-cot .group .value{font-size:14px;text-align:left;color:#52d2ff}.carousel-info .carousel-con .content{width:100%;padding:20px;background:rgba(255,255,255,.08);border-radius:0 4px 4px 0}.carousel-info .carousel-con .content .row{display:flex}.carousel-info .carousel-con .content .row:not(:last-child){margin-bottom:14px}.carousel-info .carousel-con .content .row .col{display:flex;flex-grow:1}.carousel-info .carousel-con .content .row .col .icon{width:16px;height:16px;margin-right:6px;margin-top:3px}.carousel-info .carousel-con .content .row .col .value{font-size:14px;text-align:left;color:#fff;line-height:1.5}::ng-deep .carousel-info-carousel .slick-dots li{margin:0 5px}::ng-deep .carousel-info-carousel .slick-dots li button{width:8px;height:8px;background:rgba(255,255,255,.4);border-radius:50%!important}::ng-deep .carousel-info-carousel .slick-dots li.slick-active button{position:relative;width:8px;height:8px;background:#fff;border-radius:50%!important}::ng-deep .carousel-info-carousel .slick-dots li.slick-active button:before{position:absolute;content:'';top:50%;left:50%;transform:translate(-50%,-50%);width:16px;height:16px;border:2px solid rgba(255,255,255,.3);border-radius:50%!important}"]
            }] }
];
/** @nocollapse */
CarouselInfoComponent.ctorParameters = () => [
    { type: PluginManagerService },
    { type: componentData }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaW5mby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJvdXNlbC1pbmZvLyIsInNvdXJjZXMiOlsibGliL2Nhcm91c2VsLWluZm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9yRSxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUloQyxZQUNVLG9CQUEwQyxFQUNsRCxPQUFzQjtRQURkLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFHbEQsVUFBVTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsUUFBUSxLQUFJLENBQUM7OztZQW5CZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0Isd29GQUE2Qzs7YUFFOUM7Ozs7WUFOUSxvQkFBb0I7WUFBRSxhQUFhOzs7O0lBUTFDLHFDQUFVOztJQUNWLHNDQUFXOzs7OztJQUdULHFEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21wb25lbnREYXRhIH0gZnJvbSBcInBsdWdpbi1tYW5hZ2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItY2Fyb3VzZWwtaW5mb1wiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Nhcm91c2VsLWluZm8uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2Nhcm91c2VsLWluZm8uY29tcG9uZW50LnN0eWxcIl0sXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsSW5mb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsdWdpbk1hbmFnZXJTZXJ2aWNlOiBQbHVnaW5NYW5hZ2VyU2VydmljZSxcbiAgICBjb21EYXRhOiBjb21wb25lbnREYXRhXG4gICkge1xuICAgIC8vIOaOpeaUtuS4remXtOS7tuS8oOWAvFxuICAgIGNvbnNvbGUubG9nKFwiY29tRGF0YVwiLCBjb21EYXRhKTtcbiAgICB0aGlzLmRhdGEgPSBjb21EYXRhLmNvbmZpZ0RhdGEuZGF0YTtcbiAgICB0aGlzLmNvbG9yID0gY29tRGF0YS5jb25maWdEYXRhLmNvbG9yO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19