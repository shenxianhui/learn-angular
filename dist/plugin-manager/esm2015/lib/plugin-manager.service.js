/**
 * @fileoverview added by tsickle
 * Generated from: lib/plugin-manager.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PluginManagerModule } from './plugin-manager.module';
import { COMMON_DEPS } from './common-deps';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./plugin-manager.module";
/** @type {?} */
const SystemJs = ((/** @type {?} */ (window))).System;
/**
 * @abstract
 */
export class componentData {
    /**
     * @param {?} configData
     */
    constructor(configData) {
        this.configData = configData;
    }
}
if (false) {
    /** @type {?} */
    componentData.prototype.configData;
}
export class PluginData extends componentData {
}
/**
 * @param {?} config
 * @return {?}
 */
export function createPlugin(config) {
    return new NgPlugin(config.name, config.module, config.component);
}
export class NgPlugin {
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
if (false) {
    /** @type {?} */
    NgPlugin.prototype.name;
    /** @type {?} */
    NgPlugin.prototype.module;
    /** @type {?} */
    NgPlugin.prototype.component;
}
export class PluginManagerService {
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
/** @nocollapse */ PluginManagerService.ngInjectableDef = i0.defineInjectable({ factory: function PluginManagerService_Factory() { return new PluginManagerService(); }, token: PluginManagerService, providedIn: i1.PluginManagerModule });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGx1Z2luLW1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BsdWdpbi1tYW5hZ2VyLyIsInNvdXJjZXMiOlsibGliL3BsdWdpbi1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFPLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7OztNQUUvQixRQUFRLEdBQUcsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLE1BQU07Ozs7QUFFdkMsTUFBTSxPQUFnQixhQUFhOzs7O0lBQ2pDLFlBQW1CLFVBQWU7UUFBZixlQUFVLEdBQVYsVUFBVSxDQUFLO0lBQUcsQ0FBQztDQUN2Qzs7O0lBRGEsbUNBQXNCOztBQUdwQyxNQUFNLE9BQU8sVUFBVyxTQUFRLGFBQWE7Q0FDNUM7Ozs7O0FBRUQsTUFBTSxVQUFVLFlBQVksQ0FBQyxNQUk1QjtJQUNDLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwRSxDQUFDO0FBRUQsTUFBTSxPQUFPLFFBQVE7Ozs7OztJQUNuQixZQUNTLElBQVksRUFDWixNQUFpQixFQUNqQixTQUFvQjtRQUZwQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQzdCLENBQUM7Q0FDRjs7O0lBSkcsd0JBQW1COztJQUNuQiwwQkFBd0I7O0lBQ3hCLDZCQUEyQjs7QUFPL0IsTUFBTSxPQUFPLG9CQUFvQjtJQVMvQjtRQVBPLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsQ0FBQztRQUVsRCxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUtKLENBQUM7Ozs7OztJQUdqQixTQUFTLENBQUMsSUFBSTtRQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFHRCxTQUFTO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7Ozs7OztJQUdELFdBQVcsQ0FBQyxJQUFJO1FBQ2QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDOzs7OztJQUdELFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFHRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLE9BQU87U0FDUjtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQ3JDLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUU7OztRQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBRSxHQUFHLENBQUUsRUFBQyxFQUMxRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBSTtRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsSUFBSSxTQUFTLENBQUMsSUFBSTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLFNBQVMsQ0FBQzthQUN0RCxJQUFJOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFDO2FBQ2pDLElBQUk7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUNiLElBQUksTUFBTSxZQUFZLFFBQVEsRUFBRTtnQkFDOUIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxTQUFTLENBQUMsbUNBQW1DLENBQUMsQ0FBQzthQUMxRDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7O1lBN0VGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsbUJBQW1CO2FBQ2hDOzs7Ozs7O0lBR0MseUNBQWtEOztJQUVsRCwyQ0FBb0I7O0lBQ3BCLHVDQUFhOztJQUNiLG9DQUFVOztJQUNWLDZDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgVHlwZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1BsdWdpbk1hbmFnZXJNb2R1bGV9IGZyb20gJy4vcGx1Z2luLW1hbmFnZXIubW9kdWxlJztcbmltcG9ydCB7Q09NTU9OX0RFUFN9IGZyb20gJy4vY29tbW9uLWRlcHMnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBTeXN0ZW1KcyA9ICh3aW5kb3cgYXMgYW55KS5TeXN0ZW07XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBjb21wb25lbnREYXRhIHtcbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZ0RhdGE6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFBsdWdpbkRhdGEgZXh0ZW5kcyBjb21wb25lbnREYXRhIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBsdWdpbihjb25maWc6IHtcbiAgbmFtZTogc3RyaW5nO1xuICBtb2R1bGU6IFR5cGU8YW55PjtcbiAgY29tcG9uZW50OiBUeXBlPGFueT5cbn0pIHtcbiAgcmV0dXJuIG5ldyBOZ1BsdWdpbihjb25maWcubmFtZSwgY29uZmlnLm1vZHVsZSwgY29uZmlnLmNvbXBvbmVudCk7XG59XG5cbmV4cG9ydCBjbGFzcyBOZ1BsdWdpbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIG1vZHVsZTogVHlwZTxhbnk+LFxuICAgIHB1YmxpYyBjb21wb25lbnQ6IFR5cGU8YW55Pikge1xuICB9XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogUGx1Z2luTWFuYWdlck1vZHVsZVxufSlcbmV4cG9ydCBjbGFzcyBQbHVnaW5NYW5hZ2VyU2VydmljZSB7XG5cbiAgcHVibGljIGZpbHRlclZhJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcblxuICBkZXBzRGVmaW5lZCA9IGZhbHNlO1xuICBjb250ZW50OiBhbnk7XG4gIG5hbWU6IGFueTtcbiAgY29tcG9uZW50RGF0YTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLy8g5o6l5pS257uE5Lu25Lyg5YC8XG4gIGNvbXBUb01pZChkYXRhKSB7XG4gICAgdGhpcy5maWx0ZXJWYSQubmV4dChkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfVxuXG4gIC8vIOe7mee7hOS7tuS8oOWAvFxuICBtaWRUb0NvbXAoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5jb21wb25lbnREYXRhKTtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnREYXRhO1xuICB9XG5cbiAgLy8g5o6l5pS25Li75qGG5p625Luj56CB5Lyg5YC8XG4gIHBhcmVudFRvTWlkKGRhdGEpIHtcbiAgICB0aGlzLmNvbXBvbmVudERhdGEgPSBkYXRhO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICB9XG5cbiAgLy8g57uZ5Li75qGG5p625Lyg5YC8XG4gIG1pZFRvUGFyZW50KCkge1xuICAgIGNvbnNvbGUubG9nKDIpO1xuICB9XG5cblxuICBkZWZpbmVEZXBzKCkge1xuICAgIGlmICh0aGlzLmRlcHNEZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKENPTU1PTl9ERVBTKS5mb3JFYWNoKGRlcCA9PlxuICAgICAgKHdpbmRvdyBhcyBhbnkpLmRlZmluZShkZXAsIFtdLCAoKSA9PiBDT01NT05fREVQU1sgZGVwIF0pXG4gICAgKTtcbiAgICB0aGlzLmRlcHNEZWZpbmVkID0gdHJ1ZTtcbiAgfVxuXG4gIHNldERhdGEoZGF0YSkge1xuICAgIHRoaXMuY29udGVudCA9IGRhdGE7XG4gIH1cblxuICBnZXREYXRhKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBzZXQgZmlsdGVyVmFsKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XG4gIH1cblxuICBnZXQgZmlsdGVyVmFsKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMubmFtZSk7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGxvYWRNb2R1bGUobmFtZTogc3RyaW5nKTogUHJvbWlzZTxOZ1BsdWdpbj4ge1xuICAgIHRoaXMuZGVmaW5lRGVwcygpO1xuICAgIHJldHVybiBTeXN0ZW1Kcy5pbXBvcnQoYC4vYXNzZXRzLyR7bmFtZX0vJHtuYW1lfS51bWQuanNgKVxuICAgICAgLnRoZW4oKCkgPT4gU3lzdGVtSnMuaW1wb3J0KG5hbWUpKVxuICAgICAgLnRoZW4ocGx1Z2luID0+IHtcbiAgICAgICAgaWYgKHBsdWdpbiBpbnN0YW5jZW9mIE5nUGx1Z2luKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwbHVnaW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoaXMgbW9kdWxlIGlzIG5vdCBhIHZhbGlkIHBsdWdpbicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxufVxuIl19