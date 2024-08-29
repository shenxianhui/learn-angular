(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('plugin-manager'), require('@angular/core'), require('ng-zorro-antd'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('collapse', ['plugin-manager', '@angular/core', 'ng-zorro-antd', '@angular/common'], factory) :
    (global.collapse = factory(global.pluginManager,global.ng.core,global.ngZorroAntd,global.ng.common));
}(this, (function (pluginManager,core,ngZorroAntd,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CollapseComponent = /** @class */ (function () {
        function CollapseComponent(pluginManagerService, comData) {
            this.pluginManagerService = pluginManagerService;
            // 接收中间件传值
            console.log("comData", comData);
            this.data = comData.configData.data;
            /** @type {?} */
            var color = comData.configData.color;
            this.color = {
                "firstBackground": color.firstBackground || "linear-gradient(180deg, rgba(24, 73, 110, 1) 0%, rgba(16, 42, 66, 1) 100%)",
                //父级面板背景
                "firstColor": color.firstColor || "#FFF",
                //父级文字颜色
                "firstFontSize": color.firstFontSize || "14px",
                //父级文字大小
                "firstPadding": color.firstPadding || "10px 16px",
                //父级内边距
                "firstMargin": color.firstMargin || "8px",
                //父级外边距
                "firstActiveBackground": color.firstActiveBackground || "linear-gradient(180deg, rgba(40, 123, 179, 1) 0%, rgba(16, 46, 73, 1) 100%)",
                //父级面板选中背景 
                "firstActiveColor": color.firstActiveColor || "#FFF",
                //父级面板选中文字颜色  
                "firstActiveFonteSize": color.firstActiveFonteSize || "14px",
                //父级面板选中文字大小
                "secondBackground": color.secondBackground || "linear-gradient(180deg, rgba(18, 49, 79, 1) 0%, rgba(12, 30, 51, 1) 100%)",
                //子级面板背景
                "secondColor": color.secondColor || "#FFF",
                // 子级面板文字颜色
                "secondFontSize": color.secondFontSize || "14px",
                // 子级面板字体大小
                "secondPadding": color.secondPadding || "10px 0 10px 28px",
                // 子级面板内边距
                "secondMargin": color.secondMargin || "0px",
                // 子级面板外边距
                "secondActiveBackground": color.secondActiveBackground || "linear-gradient(180deg, rgba(25, 74, 112, 1) 0%, rgba(15, 42, 68, 1) 100%)",
                // 子级面板选中背景
                "secondActiveColor": color.secondActiveColor || "#FFF",
                // 子级面板选中文字颜色
                "secondActiveFonteSize": color.secondActiveFonteSize || "14px" // 子级面板选中文字大小
            };
            console.log("color", this.color);
        }
        /**
         * @return {?}
         */
        CollapseComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} item
         * @return {?}
         */
        CollapseComponent.prototype.clickFirst = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                item.isCollapse = !item.isCollapse;
                console.log("clickFirst", item);
            };
        CollapseComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-collapse',
                        template: "<div class=\"collapse-box\">\n  <ul>\n    <li class=\"sub-menu\" *ngFor=\"let item of data.list\" [ngStyle]=\"{'marginBottom':color.firstMargin}\">\n      <div class=\"sub-menu-title\" (click)=\"clickFirst(item)\" [ngClass]=\"{'sub-menu-check': item.isCollapse}\"\n        [ngStyle]=\"{'background':item.isCollapse ? color.firstActiveBackground : color.firstBackground,\n                    'color': item.isCollapse ? color.firstActiveColor : color.firstColor,\n                    'fontSize': item.isCollapse ? color.firstActiveFonteSize : color.firstFontSize,\n                    'padding':color.firstPadding\n                  }\">\n        <span>{{item.title}}</span>\n        <img src=\"assets/collapse/image/icon-down.png\" alt=\"\" [ngClass]=\"{'rotate-x180':item.isCollapse}\">\n      </div>\n      <ul class=\"menu-item\" [ngClass]=\"{'max-height-0':!item.isCollapse}\" [ngStyle]=\"{'background':color.secondBackground,'margin':color.secondMargin}\">\n        <li *ngFor=\"let mItem of item.children\">\n          <div class=\"menu-item-title\" [ngClass]=\"{'menu-item-check':mItem.isActive}\"\n            [ngStyle]=\"{'background':mItem.isActive ? color.secondActiveBackground : '',\n                        'color': mItem.isActive ? color.secondActiveColor : color.secondColor,\n                        'fontSize': mItem.isActive ? color.secondActiveFonteSize : color.secondFontSize,\n                        'padding':color.secondPadding\n                      }\">{{mItem.title}}</div>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>",
                        styles: ["li,ul{list-style:none;margin:0;padding:0}.collapse-box{color:#fff;font-size:14px;overflow-y:auto}.sub-menu{margin-bottom:8px;border-radius:4px;overflow:hidden}.sub-menu-title{background:linear-gradient(180deg,#18496e 0,#102a42 100%);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;transition:.3s;font-weight:700}.sub-menu-title:hover{background:linear-gradient(#287bb3 0,#102e49 100%)!important}.sub-menu-title img{width:12px;height:12px;transition:.3s}.rotate-x180{transform:rotateZ(180deg)}.sub-menu-check{background:linear-gradient(180deg,#287bb3 0,#102e49 100%)}.menu-item{transition:max-height .3s;max-height:500px;background:linear-gradient(180deg,#12314f 0,#0c1e33 100%)}.menu-item-title{padding:10px 0 10px 28px;cursor:pointer;transition:.3s}.menu-item-check,.menu-item-title:hover{background:linear-gradient(180deg,#194a70 0,#0f2a44 100%)}.display-none{display:none}.max-height-0{max-height:0}"]
                    }] }
        ];
        /** @nocollapse */
        CollapseComponent.ctorParameters = function () {
            return [
                { type: pluginManager.PluginManagerService },
                { type: pluginManager.componentData }
            ];
        };
        return CollapseComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CollapseModule = /** @class */ (function () {
        function CollapseModule() {
        }
        CollapseModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [CollapseComponent],
                        entryComponents: [CollapseComponent],
                        imports: [common.CommonModule, ngZorroAntd.NgZorroAntdModule],
                        exports: [CollapseComponent]
                    },] }
        ];
        return CollapseModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var publicApi = pluginManager.createPlugin({
        name: 'collapse',
        module: CollapseModule,
        component: CollapseComponent
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    return publicApi;

})));

//# sourceMappingURL=collapse.umd.js.map