(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('plugin-manager'), require('@angular/core'), require('ng-zorro-antd'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('demo', ['plugin-manager', '@angular/core', 'ng-zorro-antd', '@angular/common'], factory) :
    (global.demo = factory(global.pluginManager,global.ng.core,global.ngZorroAntd,global.ng.common));
}(this, (function (pluginManager,core,ngZorroAntd,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DemoComponent = /** @class */ (function () {
        function DemoComponent(pluginManagerService, comData) {
            this.pluginManagerService = pluginManagerService;
            // 接收中间件传值
            console.log("comData", comData);
            this.data = comData.configData.data;
            this.color = comData.configData.color;
        }
        /**
         * @return {?}
         */
        DemoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        DemoComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-demo',
                        template: "<div class=\"info-statistics\">\u793A\u4F8B</div>\n",
                        styles: [".info-statistics{font-size:20px;color:#fff}"]
                    }] }
        ];
        /** @nocollapse */
        DemoComponent.ctorParameters = function () {
            return [
                { type: pluginManager.PluginManagerService },
                { type: pluginManager.componentData }
            ];
        };
        return DemoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DemoModule = /** @class */ (function () {
        function DemoModule() {
        }
        DemoModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [DemoComponent],
                        entryComponents: [DemoComponent],
                        imports: [common.CommonModule, ngZorroAntd.NgZorroAntdModule],
                        exports: [DemoComponent]
                    },] }
        ];
        return DemoModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var publicApi = pluginManager.createPlugin({
        name: "demo",
        module: DemoModule,
        component: DemoComponent,
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    return publicApi;

})));

//# sourceMappingURL=demo.umd.js.map