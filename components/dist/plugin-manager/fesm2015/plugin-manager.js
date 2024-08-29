import * as core from '@angular/core';
import { NgModule, Injectable, defineInjectable } from '@angular/core';
import * as common from '@angular/common';
import { CommonModule } from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as tslib from 'tslib';
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
class PluginManagerModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-deps.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const COMMON_DEPS = {
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
    rxjs,
    tslib,
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugin-manager.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SystemJs = ((/** @type {?} */ (window))).System;
/**
 * @abstract
 */
class componentData {
    /**
     * @param {?} configData
     */
    constructor(configData) {
        this.configData = configData;
    }
}
class PluginData extends componentData {
}
/**
 * @param {?} config
 * @return {?}
 */
function createPlugin(config) {
    return new NgPlugin(config.name, config.module, config.component);
}
class NgPlugin {
    /**
     * @param {?} name
     * @param {?} module
     * @param {?} component
     */
    constructor(name, module, component) {
        this.name = name;
        this.module = module;
        this.component = component;
    }
}
class PluginManagerService {
    constructor() {
        this.filterVa$ = new BehaviorSubject(null);
        this.depsDefined = false;
    }
    // 接收组件传值
    /**
     * @param {?} data
     * @return {?}
     */
    compToMid(data) {
        this.filterVa$.next(data);
        console.log(data);
    }
    // 给组件传值
    /**
     * @return {?}
     */
    midToComp() {
        console.log(this.componentData);
        return this.componentData;
    }
    // 接收主框架代码传值
    /**
     * @param {?} data
     * @return {?}
     */
    parentToMid(data) {
        this.componentData = data;
        console.log(data);
    }
    // 给主框架传值
    /**
     * @return {?}
     */
    midToParent() {
        console.log(2);
    }
    /**
     * @return {?}
     */
    defineDeps() {
        if (this.depsDefined) {
            return;
        }
        Object.keys(COMMON_DEPS).forEach((/**
         * @param {?} dep
         * @return {?}
         */
        dep => ((/** @type {?} */ (window))).define(dep, [], (/**
         * @return {?}
         */
        () => COMMON_DEPS[dep]))));
        this.depsDefined = true;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setData(data) {
        this.content = data;
    }
    /**
     * @return {?}
     */
    getData() {
        return this.content;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set filterVal(name) {
        this.name = name;
        console.log(this.name);
    }
    /**
     * @return {?}
     */
    get filterVal() {
        console.log(this.name);
        return this.name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    loadModule(name) {
        this.defineDeps();
        return SystemJs.import(`./assets/${name}/${name}.umd.js`)
            .then((/**
         * @return {?}
         */
        () => SystemJs.import(name)))
            .then((/**
         * @param {?} plugin
         * @return {?}
         */
        plugin => {
            if (plugin instanceof NgPlugin) {
                return Promise.resolve(plugin);
            }
            else {
                throw new TypeError('This module is not a valid plugin');
            }
        }));
    }
}
PluginManagerService.decorators = [
    { type: Injectable, args: [{
                providedIn: PluginManagerModule
            },] }
];
/** @nocollapse */
PluginManagerService.ctorParameters = () => [];
/** @nocollapse */ PluginManagerService.ngInjectableDef = defineInjectable({ factory: function PluginManagerService_Factory() { return new PluginManagerService(); }, token: PluginManagerService, providedIn: PluginManagerModule });

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