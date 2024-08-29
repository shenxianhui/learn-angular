import * as core from '@angular/core';
import { NgModule, Injectable, defineInjectable } from '@angular/core';
import * as common from '@angular/common';
import { CommonModule } from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as tslib_1 from 'tslib';
import { __extends } from 'tslib';
import * as NgZorro from 'ng-zorro-antd';
import * as operators from 'rxjs/operators';
import * as le5leStore from 'le5le-store';
import * as fileSaver from 'file-saver';
import * as http from '@angular/common/http';
import * as rxjs from 'rxjs';
import { BehaviorSubject } from 'rxjs';

var manager = /*#__PURE__*/Object.freeze({
    get createPlugin () { return createPlugin; },
    get componentData () { return componentData; },
    get PluginData () { return PluginData; },
    get NgPlugin () { return NgPlugin; },
    get PluginManagerService () { return PluginManagerService; },
    get PluginManagerModule () { return PluginManagerModule; }
});

/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugin-manager.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PluginManagerModule = /** @class */ (function () {
    function PluginManagerModule() {
    }
    PluginManagerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        CommonModule
                    ],
                    exports: []
                },] }
    ];
    return PluginManagerModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-deps.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var COMMON_DEPS = {
    '@angular/core': core,
    '@angular/common': common,
    '@angular/forms': forms,
    '@angular/router': router,
    'ng-zorro-antd': NgZorro,
    'plugin-manager': manager,
    'rxjs/operators': operators,
    'le5le-store': le5leStore,
    'file-saver': fileSaver,
    '@angular/common/http': http,
    rxjs: rxjs,
    tslib: tslib_1,
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugin-manager.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SystemJs = ((/** @type {?} */ (window))).System;
/**
 * @abstract
 */
var  /**
 * @abstract
 */
componentData = /** @class */ (function () {
    function componentData(configData) {
        this.configData = configData;
    }
    return componentData;
}());
var PluginData = /** @class */ (function (_super) {
    __extends(PluginData, _super);
    function PluginData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PluginData;
}(componentData));
/**
 * @param {?} config
 * @return {?}
 */
function createPlugin(config) {
    return new NgPlugin(config.name, config.module, config.component);
}
var NgPlugin = /** @class */ (function () {
    function NgPlugin(name, module, component) {
        this.name = name;
        this.module = module;
        this.component = component;
    }
    return NgPlugin;
}());
var PluginManagerService = /** @class */ (function () {
    function PluginManagerService() {
        this.filterVa$ = new BehaviorSubject(null);
        this.depsDefined = false;
    }
    // 接收组件传值
    // 接收组件传值
    /**
     * @param {?} data
     * @return {?}
     */
    PluginManagerService.prototype.compToMid = 
    // 接收组件传值
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.filterVa$.next(data);
        console.log(data);
    };
    // 给组件传值
    // 给组件传值
    /**
     * @return {?}
     */
    PluginManagerService.prototype.midToComp = 
    // 给组件传值
    /**
     * @return {?}
     */
    function () {
        console.log(this.componentData);
        return this.componentData;
    };
    // 接收主框架代码传值
    // 接收主框架代码传值
    /**
     * @param {?} data
     * @return {?}
     */
    PluginManagerService.prototype.parentToMid = 
    // 接收主框架代码传值
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.componentData = data;
        console.log(data);
    };
    // 给主框架传值
    // 给主框架传值
    /**
     * @return {?}
     */
    PluginManagerService.prototype.midToParent = 
    // 给主框架传值
    /**
     * @return {?}
     */
    function () {
        console.log(2);
    };
    /**
     * @return {?}
     */
    PluginManagerService.prototype.defineDeps = /**
     * @return {?}
     */
    function () {
        if (this.depsDefined) {
            return;
        }
        Object.keys(COMMON_DEPS).forEach((/**
         * @param {?} dep
         * @return {?}
         */
        function (dep) {
            return ((/** @type {?} */ (window))).define(dep, [], (/**
             * @return {?}
             */
            function () { return COMMON_DEPS[dep]; }));
        }));
        this.depsDefined = true;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    PluginManagerService.prototype.setData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.content = data;
    };
    /**
     * @return {?}
     */
    PluginManagerService.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.content;
    };
    Object.defineProperty(PluginManagerService.prototype, "filterVal", {
        get: /**
         * @return {?}
         */
        function () {
            console.log(this.name);
            return this.name;
        },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            this.name = name;
            console.log(this.name);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} name
     * @return {?}
     */
    PluginManagerService.prototype.loadModule = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.defineDeps();
        return SystemJs.import("./assets/" + name + "/" + name + ".umd.js")
            .then((/**
         * @return {?}
         */
        function () { return SystemJs.import(name); }))
            .then((/**
         * @param {?} plugin
         * @return {?}
         */
        function (plugin) {
            if (plugin instanceof NgPlugin) {
                return Promise.resolve(plugin);
            }
            else {
                throw new TypeError('This module is not a valid plugin');
            }
        }));
    };
    PluginManagerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: PluginManagerModule
                },] }
    ];
    /** @nocollapse */
    PluginManagerService.ctorParameters = function () { return []; };
    /** @nocollapse */ PluginManagerService.ngInjectableDef = defineInjectable({ factory: function PluginManagerService_Factory() { return new PluginManagerService(); }, token: PluginManagerService, providedIn: PluginManagerModule });
    return PluginManagerService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: plugin-manager.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { createPlugin, componentData, PluginData, NgPlugin, PluginManagerService, PluginManagerModule };

//# sourceMappingURL=plugin-manager.js.map