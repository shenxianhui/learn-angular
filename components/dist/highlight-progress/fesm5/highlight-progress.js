import { componentData, createPlugin } from 'plugin-manager';
import { Component, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HighlightProgressComponent = /** @class */ (function () {
    function HighlightProgressComponent(comData) {
        this.progress = 0;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    HighlightProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.progress = 100;
        }), 1000);
    };
    HighlightProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-highlight-progress",
                    template: "<div\n  class=\"highlight-progress\"\n  [style.backgroundImage]=\"\n    'url(' +\n    (color.shadowImg || 'assets/highlight-label/image/card_bg.png') +\n    ')'\n  \"\n>\n  <div class=\"cot-wrap\">\n    <div\n      class=\"cot-top\"\n      [style.fontSize]=\"color.labelSize\"\n      [style.color]=\"color.labelColor\"\n    >\n      {{ data.label }}\n    </div>\n    <div class=\"cot-bot\">\n      <div class=\"progressbar-wrap\">\n        <div\n          class=\"progressbar-external\"\n          [style.background]=\"\n            color.progressColor && color.progressColor.length\n              ? color.progressColor[1] || '#00000000'\n              : '#00000000'\n          \"\n        >\n          <div\n            class=\"progressbar-internal\"\n            [style.background]=\"\n              color.progressColor && color.progressColor.length\n                ? color.progressColor[0] || '#00FFDA'\n                : '#00FFDA'\n            \"\n            [style.width]=\"progress + '%'\"\n            [style.transition]=\"\n              'all ' + (data.duration || 2) + (data.durationUnit || 's')\n            \"\n          ></div>\n        </div>\n      </div>\n      <div\n        class=\"percentage\"\n        [style.fontSize]=\"color.progressLabelSize\"\n        [style.color]=\"color.progressLabelColor\"\n      >\n        100%\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".highlight-progress{display:flex;justify-content:center;align-items:center;width:100%;height:100%;background-image:url(/assets/highlight-label/image/card_bg.png);background-size:100% 100%;border-radius:10px;overflow:hidden}.highlight-progress .cot-wrap{display:flex;flex-direction:column;justify-content:center;align-items:center}.highlight-progress .cot-wrap .cot-top{width:64px;height:24px;font-size:16px;font-family:PingFang SC,PingFang SC-Regular;font-weight:Regular;text-align:left;color:#fff;line-height:24px}.highlight-progress .cot-wrap .cot-bot{display:flex;justify-content:center;align-items:center}.highlight-progress .cot-wrap .cot-bot .progressbar-wrap .progressbar-external{display:flex;align-items:center;padding:0 4px;width:200px;height:14px;border:2px solid rgba(255,255,255,.4);border-radius:6px}.highlight-progress .cot-wrap .cot-bot .progressbar-wrap .progressbar-external .progressbar-internal{width:0;height:6px;background:#00ffda;border-radius:5px;transition:.5s}.highlight-progress .cot-wrap .cot-bot .percentage{width:37px;height:34px;font-size:17px;font-family:PingFang SC,PingFang SC-Regular;font-weight:Regular;text-align:left;color:#fff;line-height:34px;margin-left:12px}"]
                }] }
    ];
    /** @nocollapse */
    HighlightProgressComponent.ctorParameters = function () { return [
        { type: componentData }
    ]; };
    return HighlightProgressComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HighlightProgressModule = /** @class */ (function () {
    function HighlightProgressModule() {
    }
    HighlightProgressModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [HighlightProgressComponent],
                    entryComponents: [HighlightProgressComponent],
                    imports: [CommonModule, NgZorroAntdModule],
                    exports: [HighlightProgressComponent]
                },] }
    ];
    return HighlightProgressModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var publicApi = createPlugin({
    name: "highlight-progress",
    module: HighlightProgressModule,
    component: HighlightProgressComponent,
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export default publicApi;

//# sourceMappingURL=highlight-progress.js.map