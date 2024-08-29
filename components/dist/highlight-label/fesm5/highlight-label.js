import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HighlightLabelComponent = /** @class */ (function () {
    function HighlightLabelComponent(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        this.isActive = false;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    HighlightLabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    HighlightLabelComponent.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        this.isActive = true;
    };
    /**
     * @return {?}
     */
    HighlightLabelComponent.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
    };
    HighlightLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-highlight-label",
                    template: "<div\n  *ngIf=\"isActive\"\n  class=\"highlight-label\"\n  [style.backgroundImage]=\"\n    'url(' +\n    (color.shadowImg || 'assets/highlight-label/image/card_bg.png') +\n    ')'\n  \"\n  (mouseenter)=\"onMouseEnter()\"\n  (mouseleave)=\"onMouseLeave()\"\n>\n  <div\n    class=\"label\"\n    [style.fontSize]=\"color.labelSize\"\n    [style.color]=\"color.labelColor\"\n    [style.backgroundImage]=\"\n      'url(' +\n      (color.labelBgImg || 'assets/highlight-label/image/label_bg.png') +\n      ')'\n    \"\n  >\n    {{ data.label }}\n  </div>\n</div>\n<div\n  *ngIf=\"!isActive\"\n  class=\"highlight-label twinkle\"\n  (mouseenter)=\"onMouseEnter()\"\n  (mouseleave)=\"onMouseLeave()\"\n>\n  <div\n    class=\"label\"\n    [style.fontSize]=\"color.labelSize\"\n    [style.color]=\"color.labelColor\"\n    [style.backgroundImage]=\"\n      'url(' + 'assets/highlight-label/image/label_bg_def.png' + ')'\n    \"\n  >\n    {{ data.label }}\n  </div>\n</div>\n",
                    styles: [".highlight-label{display:flex;justify-content:center;align-items:center;width:100%;height:100%;cursor:pointer;background-image:url(assets/highlight-label/image/card_bg_ss.webp);background-size:100% 100%;border-radius:10px;overflow:hidden}.highlight-label .label{position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:100%;max-width:94px;max-height:94px;color:#fff;background-size:auto 100%;background-position:center;background-repeat:no-repeat;font-size:26px}"]
                }] }
    ];
    /** @nocollapse */
    HighlightLabelComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    return HighlightLabelComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HighlightLabelModule = /** @class */ (function () {
    function HighlightLabelModule() {
    }
    HighlightLabelModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [HighlightLabelComponent],
                    entryComponents: [HighlightLabelComponent],
                    imports: [CommonModule, NgZorroAntdModule],
                    exports: [HighlightLabelComponent]
                },] }
    ];
    return HighlightLabelModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var publicApi = createPlugin({
    name: 'highlight-label',
    module: HighlightLabelModule,
    component: HighlightLabelComponent
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export default publicApi;

//# sourceMappingURL=highlight-label.js.map