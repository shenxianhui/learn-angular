(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('plugin-manager'), require('@angular/core'), require('ng-zorro-antd'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('player', ['plugin-manager', '@angular/core', 'ng-zorro-antd', '@angular/common'], factory) :
    (global.player = factory(global.pluginManager,global.ng.core,global.ngZorroAntd,global.ng.common));
}(this, (function (pluginManager,core,ngZorroAntd,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlayerComponent = /** @class */ (function () {
        function PlayerComponent(pluginManagerService, comData) {
            this.pluginManagerService = pluginManagerService;
            // 接收中间件传值
            console.log("comData", comData);
            this.data = comData.configData.data;
            this.color = comData.configData.color;
        }
        /**
         * @return {?}
         */
        PlayerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        PlayerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-player',
                        template: "<div class=\"player-box\" [ngStyle]=\"{'border-radius': color.borderRadius ? color.borderRadius : '0px'}\">\n  <div *ngIf=\"data.type === 'image'\" class=\"player-item\">\n    <img [src]=\"data.src\" alt=\"Image\">\n  </div>\n  <div *ngIf=\"data.type === 'video'\" class=\"player-item\">\n    <video [src]=\"data.src\" controls>\n      \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u89C6\u9891\u6807\u7B7E.\n    </video>\n  </div>\n</div>",
                        styles: [".player-box{width:100%;height:100%;overflow:hidden}.player-item,.player-item img,.player-item video{width:100%;height:100%}"]
                    }] }
        ];
        /** @nocollapse */
        PlayerComponent.ctorParameters = function () {
            return [
                { type: pluginManager.PluginManagerService },
                { type: pluginManager.componentData }
            ];
        };
        return PlayerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PlayerModule = /** @class */ (function () {
        function PlayerModule() {
        }
        PlayerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [PlayerComponent],
                        entryComponents: [PlayerComponent],
                        imports: [common.CommonModule, ngZorroAntd.NgZorroAntdModule],
                        exports: [PlayerComponent]
                    },] }
        ];
        return PlayerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var publicApi = pluginManager.createPlugin({
        name: 'player',
        module: PlayerModule,
        component: PlayerComponent
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    return publicApi;

})));

//# sourceMappingURL=player.umd.js.map