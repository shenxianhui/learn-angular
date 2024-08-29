/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
var BaseFilterComponent = /** @class */ (function () {
    function BaseFilterComponent(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // @Output() outbound = new EventEmitter();
        this.selectData = [];
        this.timeIndex = '';
        // 接收中间件传值
        this.data = comData.configData;
        console.log(this.data, 'this.data');
    }
    /**
     * @return {?}
     */
    BaseFilterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.data.data) {
            console.log('进来了');
        }
        if (this.data && this.data.data) {
            this.selectData = this.data.data;
            this.timeIndex = this.data.data.check[0];
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    BaseFilterComponent.prototype.getFilterInfo = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.timeIndex = e;
        this.pluginManagerService.compToMid([{ key: this.data.data.key[0], data: e }]);
    };
    BaseFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-base-filter',
                    template: "<div class=\"base-filter pattern\" *ngIf=\"data?.color?.pattern\"> \r\n  <ng-container *ngFor=\"let range of selectData.data\">\r\n    <section (click)=\"getFilterInfo(range.value)\" >\r\n      <div class=\"switch-btn pattern-bgc\" [ngClass]=\"{'pattern-active': range.value === timeIndex}\">{{range.name}}</div>\r\n    </section>\r\n  </ng-container>\r\n</div>\r\n\r\n\r\n<div class=\"base-filter\" *ngIf=\"!data?.color?.pattern\">\r\n  <ng-container *ngFor=\"let range of selectData.data\">\r\n    <section (click)=\"getFilterInfo(range.value)\" [ngClass]=\"{active: range.value === timeIndex}\">\r\n      <span class=\"top-dash-l\"></span>\r\n      <span class=\"top-dash-r\"></span>\r\n      <div class=\"switch-btn\">{{range.name}}</div>\r\n      <span class=\"bottom-dash-l\"></span>\r\n      <span class=\"bottom-dash-r\"></span>\r\n    </section>\r\n  </ng-container>\r\n</div>\r\n\r\n",
                    styles: [":host{display:flex;height:100%;flex-wrap:wrap}.base-filter{width:100%;height:100%}.base-filter section{display:inline-block;height:28px;width:104px;margin-right:13px;border-left:2px solid #36f;border-right:2px solid #36f;position:relative}.base-filter section span{display:inline-block;width:5px;height:2px;background-color:#36f;position:absolute;top:27px}.base-filter section .top-dash-l{top:-1px;left:-2px}.base-filter section .top-dash-r{top:-1px;right:-2px}.base-filter section .bottom-dash-l{left:-2px}.base-filter section .bottom-dash-r{right:-2px}.base-filter .active .switch-btn{background-color:rgba(51,102,255,.8);color:rgba(255,255,255,.85)}.base-filter .switch-btn{width:100%;height:100%;background:rgba(51,102,255,.3);color:rgba(255,255,255,.65);font-family:PingFangSC-Regular;font-size:16px;line-height:28px;text-align:center;position:relative;cursor:pointer}.base-filter .switch-btn:before{width:94px;height:3px;content:'';margin:0 auto;position:absolute;left:3px;top:-3px;z-index:1;background:#09152d}.pattern section{border:none;height:37px}.pattern section .pattern-bgc{display:flex;align-items:center;justify-content:center;background:url(assets/base-filter/image/no.png) center center/cover no-repeat}.pattern section .pattern-active{background:url(assets/base-filter/image/active.png) center center no-repeat}"]
                }] }
    ];
    /** @nocollapse */
    BaseFilterComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    return BaseFilterComponent;
}());
export { BaseFilterComponent };
if (false) {
    /** @type {?} */
    BaseFilterComponent.prototype.selectData;
    /** @type {?} */
    BaseFilterComponent.prototype.timeIndex;
    /** @type {?} */
    BaseFilterComponent.prototype.data;
    /**
     * @type {?}
     * @private
     */
    BaseFilterComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYmFzZS1maWx0ZXIvIiwic291cmNlcyI6WyJsaWIvYmFzZS1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckU7SUFVRSw2QkFDVSxvQkFBMEMsRUFDbEQsT0FBc0I7UUFEZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCOztRQUpwRCxlQUFVLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFLYixVQUFVO1FBQ1YsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUNyQyxDQUFDOzs7O0lBQ0Qsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDcEI7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUUxQztJQUNILENBQUM7Ozs7O0lBRUQsMkNBQWE7Ozs7SUFBYixVQUFjLENBQUM7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix5NEJBQTJDOztpQkFFNUM7Ozs7Z0JBTlEsb0JBQW9CO2dCQUFFLGFBQWE7O0lBa0M1QywwQkFBQztDQUFBLEFBaENELElBZ0NDO1NBM0JZLG1CQUFtQjs7O0lBRTlCLHlDQUFxQjs7SUFDckIsd0NBQWU7O0lBQ2YsbUNBQVU7Ozs7O0lBRVIsbURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tcG9uZW50RGF0YSB9IGZyb20gJ3BsdWdpbi1tYW5hZ2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWJhc2UtZmlsdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhc2UtZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFzZS1maWx0ZXIuY29tcG9uZW50LnN0eWwnXVxufSlcbmV4cG9ydCBjbGFzcyBCYXNlRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gQE91dHB1dCgpIG91dGJvdW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBzZWxlY3REYXRhOiBhbnkgPSBbXTtcbiAgdGltZUluZGV4ID0gJyc7XG4gIGRhdGE6IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbHVnaW5NYW5hZ2VyU2VydmljZTogUGx1Z2luTWFuYWdlclNlcnZpY2UsXG4gICAgY29tRGF0YTogY29tcG9uZW50RGF0YSkge1xuICAgIC8vIOaOpeaUtuS4remXtOS7tuS8oOWAvFxuICAgIHRoaXMuZGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEsICd0aGlzLmRhdGEnKVxuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIGlmICghdGhpcy5kYXRhLmRhdGEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCfov5vmnaXkuoYnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEuZGF0YSkge1xuICAgICAgdGhpcy5zZWxlY3REYXRhID0gdGhpcy5kYXRhLmRhdGE7XG4gICAgICB0aGlzLnRpbWVJbmRleCA9IHRoaXMuZGF0YS5kYXRhLmNoZWNrWzBdO1xuXG4gICAgfVxuICB9XG5cbiAgZ2V0RmlsdGVySW5mbyhlKSB7XG4gICAgdGhpcy50aW1lSW5kZXggPSBlO1xuICAgIHRoaXMucGx1Z2luTWFuYWdlclNlcnZpY2UuY29tcFRvTWlkKFt7IGtleTogdGhpcy5kYXRhLmRhdGEua2V5WzBdLCBkYXRhOiBlIH1dKTtcbiAgfVxufVxuIl19