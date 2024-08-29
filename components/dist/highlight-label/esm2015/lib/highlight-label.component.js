/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
export class HighlightLabelComponent {
    /**
     * @param {?} pluginManagerService
     * @param {?} comData
     */
    constructor(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        this.isActive = false;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    onMouseEnter() {
        this.isActive = true;
    }
    /**
     * @return {?}
     */
    onMouseLeave() {
        this.isActive = false;
    }
}
HighlightLabelComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-highlight-label",
                template: "<div\n  *ngIf=\"isActive\"\n  class=\"highlight-label\"\n  [style.backgroundImage]=\"\n    'url(' +\n    (color.shadowImg || 'assets/highlight-label/image/card_bg.png') +\n    ')'\n  \"\n  (mouseenter)=\"onMouseEnter()\"\n  (mouseleave)=\"onMouseLeave()\"\n>\n  <div\n    class=\"label\"\n    [style.fontSize]=\"color.labelSize\"\n    [style.color]=\"color.labelColor\"\n    [style.backgroundImage]=\"\n      'url(' +\n      (color.labelBgImg || 'assets/highlight-label/image/label_bg.png') +\n      ')'\n    \"\n  >\n    {{ data.label }}\n  </div>\n</div>\n<div\n  *ngIf=\"!isActive\"\n  class=\"highlight-label twinkle\"\n  (mouseenter)=\"onMouseEnter()\"\n  (mouseleave)=\"onMouseLeave()\"\n>\n  <div\n    class=\"label\"\n    [style.fontSize]=\"color.labelSize\"\n    [style.color]=\"color.labelColor\"\n    [style.backgroundImage]=\"\n      'url(' + 'assets/highlight-label/image/label_bg_def.png' + ')'\n    \"\n  >\n    {{ data.label }}\n  </div>\n</div>\n",
                styles: [".highlight-label{display:flex;justify-content:center;align-items:center;width:100%;height:100%;cursor:pointer;background-image:url(assets/highlight-label/image/card_bg_ss.webp);background-size:100% 100%;border-radius:10px;overflow:hidden}.highlight-label .label{position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:100%;max-width:94px;max-height:94px;color:#fff;background-size:auto 100%;background-position:center;background-repeat:no-repeat;font-size:26px}"]
            }] }
];
/** @nocollapse */
HighlightLabelComponent.ctorParameters = () => [
    { type: PluginManagerService },
    { type: componentData }
];
if (false) {
    /** @type {?} */
    HighlightLabelComponent.prototype.data;
    /** @type {?} */
    HighlightLabelComponent.prototype.color;
    /** @type {?} */
    HighlightLabelComponent.prototype.isActive;
    /**
     * @type {?}
     * @private
     */
    HighlightLabelComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hpZ2hsaWdodC1sYWJlbC8iLCJzb3VyY2VzIjpbImxpYi9oaWdobGlnaHQtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9yRSxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQUtsQyxZQUNVLG9CQUEwQyxFQUNsRCxPQUFzQjtRQURkLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFIcEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQU1mLFVBQVU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELFFBQVEsS0FBSSxDQUFDOzs7O0lBRWIsWUFBWTtRQUNWLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiwrOEJBQStDOzthQUVoRDs7OztZQU5RLG9CQUFvQjtZQUFFLGFBQWE7Ozs7SUFRMUMsdUNBQVU7O0lBQ1Ysd0NBQVc7O0lBQ1gsMkNBQWlCOzs7OztJQUdmLHVEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21wb25lbnREYXRhIH0gZnJvbSBcInBsdWdpbi1tYW5hZ2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItaGlnaGxpZ2h0LWxhYmVsXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaGlnaGxpZ2h0LWxhYmVsLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9oaWdobGlnaHQtbGFiZWwuY29tcG9uZW50LnN0eWxcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodExhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGF0YTogYW55O1xuICBjb2xvcjogYW55O1xuICBpc0FjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLFxuICAgIGNvbURhdGE6IGNvbXBvbmVudERhdGFcbiAgKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YS5kYXRhO1xuICAgIHRoaXMuY29sb3IgPSBjb21EYXRhLmNvbmZpZ0RhdGEuY29sb3I7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgb25Nb3VzZUVudGVyKCkge1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgb25Nb3VzZUxlYXZlKCkge1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgfVxufVxuIl19