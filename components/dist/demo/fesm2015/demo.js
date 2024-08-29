import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DemoComponent {
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
    ngOnInit() {
    }
}
DemoComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-demo',
                template: "<div class=\"info-statistics\">\u793A\u4F8B</div>\n",
                styles: [".info-statistics{font-size:20px;color:#fff}"]
            }] }
];
/** @nocollapse */
DemoComponent.ctorParameters = () => [
    { type: PluginManagerService },
    { type: componentData }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DemoModule {
}
DemoModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DemoComponent],
                entryComponents: [DemoComponent],
                imports: [CommonModule, NgZorroAntdModule],
                exports: [DemoComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var publicApi = createPlugin({
    name: "demo",
    module: DemoModule,
    component: DemoComponent,
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export default publicApi;

//# sourceMappingURL=demo.js.map