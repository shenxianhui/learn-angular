/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
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
        { type: Component, args: [{
                    selector: 'lib-player',
                    template: "<div class=\"player-box\" [ngStyle]=\"{'border-radius': color.borderRadius ? color.borderRadius : '0px'}\">\n  <div *ngIf=\"data.type === 'image'\" class=\"player-item\">\n    <img [src]=\"data.src\" alt=\"Image\">\n  </div>\n  <div *ngIf=\"data.type === 'video'\" class=\"player-item\">\n    <video [src]=\"data.src\" controls>\n      \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u89C6\u9891\u6807\u7B7E.\n    </video>\n  </div>\n</div>",
                    styles: [".player-box{width:100%;height:100%;overflow:hidden}.player-item,.player-item img,.player-item video{width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    PlayerComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    return PlayerComponent;
}());
export { PlayerComponent };
if (false) {
    /** @type {?} */
    PlayerComponent.prototype.data;
    /** @type {?} */
    PlayerComponent.prototype.color;
    /** @type {?} */
    PlayerComponent.prototype.hoverIndex;
    /**
     * @type {?}
     * @private
     */
    PlayerComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BsYXllci8iLCJzb3VyY2VzIjpbImxpYi9wbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRTtJQVdFLHlCQUFvQixvQkFBMEMsRUFBRSxPQUFzQjtRQUFsRSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVELFVBQVU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFBO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUE7SUFDdkMsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLHFjQUFzQzs7aUJBRXZDOzs7O2dCQU5RLG9CQUFvQjtnQkFBRSxhQUFhOztJQXVCNUMsc0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWhCWSxlQUFlOzs7SUFFMUIsK0JBQVU7O0lBQ1YsZ0NBQVc7O0lBQ1gscUNBQWdCOzs7OztJQUVKLCtDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tcG9uZW50RGF0YSB9IGZyb20gJ3BsdWdpbi1tYW5hZ2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wbGF5ZXIuY29tcG9uZW50LnN0eWwnXVxufSlcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcbiAgaG92ZXJJbmRleDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21EYXRhOiBjb21wb25lbnREYXRhKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpXG4gICAgdGhpcy5kYXRhID0gY29tRGF0YS5jb25maWdEYXRhLmRhdGFcbiAgICB0aGlzLmNvbG9yID0gY29tRGF0YS5jb25maWdEYXRhLmNvbG9yXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=