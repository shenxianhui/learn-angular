/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
var DetailsProgressComponent = /** @class */ (function () {
    function DetailsProgressComponent(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    DetailsProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    DetailsProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-details-progress",
                    template: "<div class=\"details-progress\">\n  <div class=\"event-list\">\n    <div *ngFor=\"let item of data.list; let index = index\" class=\"group\">\n      <div\n        class=\"label\"\n        [class.active]=\"index <= data.activeIndex\"\n        [style.fontSize]=\"color?.label?.fontSize + 'px'\"\n      >\n        {{ item.label }}\n      </div>\n      <div class=\"content\">\n        <div\n          class=\"content-text\"\n          [innerHTML]=\"item.content\"\n          [style.fontSize]=\"color?.content?.fontSize + 'px'\"\n          [style.color]=\"color?.content?.color\"\n          [style.lineHeight]=\"color?.content?.lineHeight\"\n        ></div>\n      </div>\n      <div class=\"node\" [class.active]=\"index <= data.activeIndex\"></div>\n      <img\n        *ngIf=\"index === data.activeIndex\"\n        src=\"assets/details-progress/image/light_node.png\"\n        alt=\"\"\n        class=\"light-node\"\n      />\n    </div>\n  </div>\n  <div class=\"line\">\n    <div class=\"line-def\">\n      <div class=\"line-def-inner\"></div>\n    </div>\n    <div\n      class=\"line-act\"\n      [style.width]=\"data.activeIndex * (100 / (data.list.length - 1)) + '%'\"\n    ></div>\n  </div>\n</div>\n",
                    styles: [".details-progress{display:inline-block;position:relative;color:#fff;width:100%}.details-progress .event-list{display:flex;width:100%}.details-progress .event-list .group{position:relative;display:flex;flex-direction:column;align-items:center;margin:0 12px;width:100%;min-width:0}.details-progress .event-list .group .label{white-space:nowrap;margin-bottom:30px;font-size:18px;color:rgba(255,255,255,.51)}.details-progress .event-list .group .label.active{background:linear-gradient(180deg,#fff 26%,rgba(78,178,255,.4) 83%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.details-progress .event-list .group .content{position:relative;width:100%;height:76px;font-size:14px;color:#fff;line-height:20px;padding:0 5px}.details-progress .event-list .group .content:before{content:'';position:absolute;left:0;top:20px;width:2px;height:50%;background:linear-gradient(0deg,rgba(74,225,245,0),rgba(37,141,154,.6) 63%,#7bf0ff);filter:blur(1px)}.details-progress .event-list .group .content:after{content:'';position:absolute;right:0;bottom:20px;width:2px;height:30%;opacity:.5;background:linear-gradient(180deg,#4ae1f5,rgba(74,225,245,0) 98%);filter:blur(1.2px)}.details-progress .event-list .group .content .content-text{width:100%;height:100%;padding:6px 8px;background:linear-gradient(360deg,rgba(95,170,255,0) 55%,rgba(95,170,255,.5) 100%);border:1px solid;-o-border-image:linear-gradient(180deg,#5faaff,rgba(95,170,255,0)) 1 1;border-image:linear-gradient(180deg,#5faaff,rgba(95,170,255,0)) 1 1;border-bottom:0 solid #000}.details-progress .event-list .group .node{position:absolute;top:33px;width:16px;height:16px;border:1px solid rgba(75,162,255,.2);border-radius:50%;z-index:8}.details-progress .event-list .group .node:before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:10px;height:10px;border-radius:50%;background:rgba(75,162,255,.4)}.details-progress .event-list .group .node.active{border:1px solid rgba(75,162,255,.4)}.details-progress .event-list .group .node.active:before{background:rgba(75,162,255,.933)}.details-progress .event-list .group .light-node{position:absolute;width:130px;height:130px;top:-24px;z-index:9;pointer-events:none}.details-progress .line{position:absolute;top:40px;left:50%;width:80%;height:3px;transform:translate(-50%,0)}.details-progress .line .line-def{position:absolute;display:flex;align-items:center;width:100%;height:100%}.details-progress .line .line-def .line-def-inner{width:100%;height:1px;background-image:linear-gradient(270deg,rgba(28,138,255,0),#1c8aff 50%,rgba(28,138,255,0));background-size:100% 100%}.details-progress .line .line-act{position:absolute;width:50%;height:100%;background:linear-gradient(270deg,#2db841,rgba(46,165,63,0));filter:blur(1px)}"]
                }] }
    ];
    /** @nocollapse */
    DetailsProgressComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    return DetailsProgressComponent;
}());
export { DetailsProgressComponent };
if (false) {
    /** @type {?} */
    DetailsProgressComponent.prototype.data;
    /** @type {?} */
    DetailsProgressComponent.prototype.color;
    /**
     * @type {?}
     * @private
     */
    DetailsProgressComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlscy1wcm9ncmVzcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZXRhaWxzLXByb2dyZXNzLyIsInNvdXJjZXMiOlsibGliL2RldGFpbHMtcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRTtJQVNFLGtDQUNVLG9CQUEwQyxFQUNsRCxPQUFzQjtRQURkLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFHbEQsVUFBVTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBbkJkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxrc0NBQWdEOztpQkFFakQ7Ozs7Z0JBTlEsb0JBQW9CO2dCQUFFLGFBQWE7O0lBc0I1QywrQkFBQztDQUFBLEFBcEJELElBb0JDO1NBZlksd0JBQXdCOzs7SUFDbkMsd0NBQVU7O0lBQ1YseUNBQVc7Ozs7O0lBR1Qsd0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGx1Z2luTWFuYWdlclNlcnZpY2UsIGNvbXBvbmVudERhdGEgfSBmcm9tIFwicGx1Z2luLW1hbmFnZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1kZXRhaWxzLXByb2dyZXNzXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZGV0YWlscy1wcm9ncmVzcy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZGV0YWlscy1wcm9ncmVzcy5jb21wb25lbnQuc3R5bFwiXSxcbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsc1Byb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGF0YTogYW55O1xuICBjb2xvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLFxuICAgIGNvbURhdGE6IGNvbXBvbmVudERhdGFcbiAgKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YS5kYXRhO1xuICAgIHRoaXMuY29sb3IgPSBjb21EYXRhLmNvbmZpZ0RhdGEuY29sb3I7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=