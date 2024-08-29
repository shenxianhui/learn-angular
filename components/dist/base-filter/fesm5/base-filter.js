import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseFilterModule = /** @class */ (function () {
    function BaseFilterModule() {
    }
    BaseFilterModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [BaseFilterComponent],
                    entryComponents: [BaseFilterComponent],
                    imports: [CommonModule, NgZorroAntdModule],
                    exports: [BaseFilterComponent]
                },] }
    ];
    return BaseFilterModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var publicApi = createPlugin({
    name: 'base-filter',
    module: BaseFilterModule,
    component: BaseFilterComponent
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export default publicApi;

//# sourceMappingURL=base-filter.js.map