/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
export class DemoComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kZW1vLyIsInNvdXJjZXMiOlsibGliL2RlbW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9yRSxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFLeEIsWUFBb0Isb0JBQTBDLEVBQUUsT0FBc0I7UUFBbEUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1RCxVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQTtRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFBO0lBQ3ZDLENBQUM7Ozs7SUFFRCxRQUFRO0lBRVIsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsK0RBQW9DOzthQUVyQzs7OztZQU5RLG9CQUFvQjtZQUFFLGFBQWE7Ozs7SUFTMUMsNkJBQVU7O0lBQ1YsOEJBQVc7Ozs7O0lBRUMsNkNBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21wb25lbnREYXRhIH0gZnJvbSAncGx1Z2luLW1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZGVtbycsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZW1vLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGVtby5jb21wb25lbnQuc3R5bCddXG59KVxuZXhwb3J0IGNsYXNzIERlbW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsdWdpbk1hbmFnZXJTZXJ2aWNlOiBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tRGF0YTogY29tcG9uZW50RGF0YSkge1xuICAgIC8vIOaOpeaUtuS4remXtOS7tuS8oOWAvFxuICAgIGNvbnNvbGUubG9nKFwiY29tRGF0YVwiLCBjb21EYXRhKVxuICAgIHRoaXMuZGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YS5kYXRhXG4gICAgdGhpcy5jb2xvciA9IGNvbURhdGEuY29uZmlnRGF0YS5jb2xvclxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxufVxuIl19