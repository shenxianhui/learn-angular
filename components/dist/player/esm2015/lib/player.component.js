/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
export class PlayerComponent {
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
PlayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-player',
                template: "<div class=\"player-box\" [ngStyle]=\"{'border-radius': color.borderRadius ? color.borderRadius : '0px'}\">\n  <div *ngIf=\"data.type === 'image'\" class=\"player-item\">\n    <img [src]=\"data.src\" alt=\"Image\">\n  </div>\n  <div *ngIf=\"data.type === 'video'\" class=\"player-item\">\n    <video [src]=\"data.src\" controls>\n      \u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u89C6\u9891\u6807\u7B7E.\n    </video>\n  </div>\n</div>",
                styles: [".player-box{width:100%;height:100%;overflow:hidden}.player-item,.player-item img,.player-item video{width:100%;height:100%}"]
            }] }
];
/** @nocollapse */
PlayerComponent.ctorParameters = () => [
    { type: PluginManagerService },
    { type: componentData }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BsYXllci8iLCJzb3VyY2VzIjpbImxpYi9wbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9yRSxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFNMUIsWUFBb0Isb0JBQTBDLEVBQUUsT0FBc0I7UUFBbEUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1RCxVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQTtRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFBO0lBQ3ZDLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIscWNBQXNDOzthQUV2Qzs7OztZQU5RLG9CQUFvQjtZQUFFLGFBQWE7Ozs7SUFTMUMsK0JBQVU7O0lBQ1YsZ0NBQVc7O0lBQ1gscUNBQWdCOzs7OztJQUVKLCtDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tcG9uZW50RGF0YSB9IGZyb20gJ3BsdWdpbi1tYW5hZ2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXBsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wbGF5ZXIuY29tcG9uZW50LnN0eWwnXVxufSlcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcbiAgaG92ZXJJbmRleDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21EYXRhOiBjb21wb25lbnREYXRhKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpXG4gICAgdGhpcy5kYXRhID0gY29tRGF0YS5jb25maWdEYXRhLmRhdGFcbiAgICB0aGlzLmNvbG9yID0gY29tRGF0YS5jb25maWdEYXRhLmNvbG9yXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=