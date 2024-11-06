/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugin-manager.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PluginManagerModule } from './plugin-manager.module';
import { COMMON_DEPS } from './common-deps';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./plugin-manager.module";
/** @type {?} */
var SystemJs = ((/** @type {?} */ (window))).System;
/**
 * @abstract
 */
var /**
 * @abstract
 */
componentData = /** @class */ (function () {
    function componentData(configData) {
        this.configData = configData;
    }
    return componentData;
}());
/**
 * @abstract
 */
export { componentData };
if (false) {
    /** @type {?} */
    componentData.prototype.configData;
}
var PluginData = /** @class */ (function (_super) {
    tslib_1.__extends(PluginData, _super);
    function PluginData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PluginData;
}(componentData));
export { PluginData };
/**
 * @param {?} config
 * @return {?}
 */
export function createPlugin(config) {
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
export { NgPlugin };
if (false) {
    /** @type {?} */
    NgPlugin.prototype.name;
    /** @type {?} */
    NgPlugin.prototype.module;
    /** @type {?} */
    NgPlugin.prototype.component;
}
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
    /** @nocollapse */ PluginManagerService.ngInjectableDef = i0.defineInjectable({ factory: function PluginManagerService_Factory() { return new PluginManagerService(); }, token: PluginManagerService, providedIn: i1.PluginManagerModule });
    return PluginManagerService;
}());
export { PluginManagerService };
if (false) {
    /** @type {?} */
    PluginManagerService.prototype.filterVa$;
    /** @type {?} */
    PluginManagerService.prototype.depsDefined;
    /** @type {?} */
    PluginManagerService.prototype.content;
    /** @type {?} */
    PluginManagerService.prototype.name;
    /** @type {?} */
    PluginManagerService.prototype.componentData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BsdWdpbi1tYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbi1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBTyxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7Ozs7SUFFL0IsUUFBUSxHQUFHLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxNQUFNOzs7O0FBRXZDOzs7O0lBQ0UsdUJBQW1CLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO0lBQUcsQ0FBQztJQUN4QyxvQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7Ozs7O0lBRGEsbUNBQXNCOztBQUdwQztJQUFnQyxzQ0FBYTtJQUE3Qzs7SUFDQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUFDLEFBREQsQ0FBZ0MsYUFBYSxHQUM1Qzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxNQUk1QjtJQUNDLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBRUQ7SUFDRSxrQkFDUyxJQUFZLEVBQ1osTUFBaUIsRUFDakIsU0FBb0I7UUFGcEIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUM3QixDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFORCxJQU1DOzs7O0lBSkcsd0JBQW1COztJQUNuQiwwQkFBd0I7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QUFrRDs7SUFFbEQsMkNBQW9COztJQUNwQix1Q0FBYTs7SUFDYixvQ0FBVTs7SUFDViw2Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIFR5cGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQbHVnaW5NYW5hZ2VyTW9kdWxlfSBmcm9tICcuL3BsdWdpbi1tYW5hZ2VyLm1vZHVsZSc7XG5pbXBvcnQge0NPTU1PTl9ERVBTfSBmcm9tICcuL2NvbW1vbi1kZXBzJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuY29uc3QgU3lzdGVtSnMgPSAod2luZG93IGFzIGFueSkuU3lzdGVtO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgY29tcG9uZW50RGF0YSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWdEYXRhOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBQbHVnaW5EYXRhIGV4dGVuZHMgY29tcG9uZW50RGF0YSB7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQbHVnaW4oY29uZmlnOiB7XG4gIG5hbWU6IHN0cmluZztcbiAgbW9kdWxlOiBUeXBlPGFueT47XG4gIGNvbXBvbmVudDogVHlwZTxhbnk+XG59KSB7XG4gIHJldHVybiBuZXcgTmdQbHVnaW4oY29uZmlnLm5hbWUsIGNvbmZpZy5tb2R1bGUsIGNvbmZpZy5jb21wb25lbnQpO1xufVxuXG5leHBvcnQgY2xhc3MgTmdQbHVnaW4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIHB1YmxpYyBtb2R1bGU6IFR5cGU8YW55PixcbiAgICBwdWJsaWMgY29tcG9uZW50OiBUeXBlPGFueT4pIHtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFBsdWdpbk1hbmFnZXJNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgUGx1Z2luTWFuYWdlclNlcnZpY2Uge1xuXG4gIHB1YmxpYyBmaWx0ZXJWYSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG5cbiAgZGVwc0RlZmluZWQgPSBmYWxzZTtcbiAgY29udGVudDogYW55O1xuICBuYW1lOiBhbnk7XG4gIGNvbXBvbmVudERhdGE6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8vIOaOpeaUtue7hOS7tuS8oOWAvFxuICBjb21wVG9NaWQoZGF0YSkge1xuICAgIHRoaXMuZmlsdGVyVmEkLm5leHQoZGF0YSk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH1cblxuICAvLyDnu5nnu4Tku7bkvKDlgLxcbiAgbWlkVG9Db21wKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29tcG9uZW50RGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGF0YTtcbiAgfVxuXG4gIC8vIOaOpeaUtuS4u+ahhuaetuS7o+eggeS8oOWAvFxuICBwYXJlbnRUb01pZChkYXRhKSB7XG4gICAgdGhpcy5jb21wb25lbnREYXRhID0gZGF0YTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfVxuXG4gIC8vIOe7meS4u+ahhuaetuS8oOWAvFxuICBtaWRUb1BhcmVudCgpIHtcbiAgICBjb25zb2xlLmxvZygyKTtcbiAgfVxuXG5cbiAgZGVmaW5lRGVwcygpIHtcbiAgICBpZiAodGhpcy5kZXBzRGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyhDT01NT05fREVQUykuZm9yRWFjaChkZXAgPT5cbiAgICAgICh3aW5kb3cgYXMgYW55KS5kZWZpbmUoZGVwLCBbXSwgKCkgPT4gQ09NTU9OX0RFUFNbIGRlcCBdKVxuICAgICk7XG4gICAgdGhpcy5kZXBzRGVmaW5lZCA9IHRydWU7XG4gIH1cblxuICBzZXREYXRhKGRhdGEpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkYXRhO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgc2V0IGZpbHRlclZhbChuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xuICB9XG5cbiAgZ2V0IGZpbHRlclZhbCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUpO1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBsb2FkTW9kdWxlKG5hbWU6IHN0cmluZyk6IFByb21pc2U8TmdQbHVnaW4+IHtcbiAgICB0aGlzLmRlZmluZURlcHMoKTtcbiAgICByZXR1cm4gU3lzdGVtSnMuaW1wb3J0KGAuL2Fzc2V0cy8ke25hbWV9LyR7bmFtZX0udW1kLmpzYClcbiAgICAgIC50aGVuKCgpID0+IFN5c3RlbUpzLmltcG9ydChuYW1lKSlcbiAgICAgIC50aGVuKHBsdWdpbiA9PiB7XG4gICAgICAgIGlmIChwbHVnaW4gaW5zdGFuY2VvZiBOZ1BsdWdpbikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocGx1Z2luKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGlzIG1vZHVsZSBpcyBub3QgYSB2YWxpZCBwbHVnaW4nKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==