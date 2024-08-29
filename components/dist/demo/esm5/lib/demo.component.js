/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
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
        { type: Component, args: [{
                    selector: 'lib-demo',
                    template: "<div class=\"info-statistics\">\u793A\u4F8B</div>\n",
                    styles: [".info-statistics{font-size:20px;color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    DemoComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    return DemoComponent;
}());
export { DemoComponent };
if (false) {
    /** @type {?} */
    DemoComponent.prototype.data;
    /** @type {?} */
    DemoComponent.prototype.color;
    /**
     * @type {?}
     * @private
     */
    DemoComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZW1vLyIsInNvdXJjZXMiOlsibGliL2RlbW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRTtJQVVFLHVCQUFvQixvQkFBMEMsRUFBRSxPQUFzQjtRQUFsRSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVELFVBQVU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFBO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUE7SUFDdkMsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjtJQUVBLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLCtEQUFvQzs7aUJBRXJDOzs7O2dCQU5RLG9CQUFvQjtnQkFBRSxhQUFhOztJQXNCNUMsb0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLGFBQWE7OztJQUV4Qiw2QkFBVTs7SUFDViw4QkFBVzs7Ozs7SUFFQyw2Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luTWFuYWdlclNlcnZpY2UsIGNvbXBvbmVudERhdGEgfSBmcm9tICdwbHVnaW4tbWFuYWdlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1kZW1vJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RlbW8uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZW1vLmNvbXBvbmVudC5zdHlsJ11cbn0pXG5leHBvcnQgY2xhc3MgRGVtb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZGF0YTogYW55O1xuICBjb2xvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21EYXRhOiBjb21wb25lbnREYXRhKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpXG4gICAgdGhpcy5kYXRhID0gY29tRGF0YS5jb25maWdEYXRhLmRhdGFcbiAgICB0aGlzLmNvbG9yID0gY29tRGF0YS5jb25maWdEYXRhLmNvbG9yXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG59XG4iXX0=