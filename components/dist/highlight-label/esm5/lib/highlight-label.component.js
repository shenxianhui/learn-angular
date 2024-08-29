/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
var HighlightLabelComponent = /** @class */ (function () {
    function HighlightLabelComponent(pluginManagerService, comData) {
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
    HighlightLabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    HighlightLabelComponent.prototype.onMouseEnter = /**
     * @return {?}
     */
    function () {
        this.isActive = true;
    };
    /**
     * @return {?}
     */
    HighlightLabelComponent.prototype.onMouseLeave = /**
     * @return {?}
     */
    function () {
        this.isActive = false;
    };
    HighlightLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-highlight-label",
                    template: "<div\n  *ngIf=\"isActive\"\n  class=\"highlight-label\"\n  [style.backgroundImage]=\"\n    'url(' +\n    (color.shadowImg || 'assets/highlight-label/image/card_bg.png') +\n    ')'\n  \"\n  (mouseenter)=\"onMouseEnter()\"\n  (mouseleave)=\"onMouseLeave()\"\n>\n  <div\n    class=\"label\"\n    [style.fontSize]=\"color.labelSize\"\n    [style.color]=\"color.labelColor\"\n    [style.backgroundImage]=\"\n      'url(' +\n      (color.labelBgImg || 'assets/highlight-label/image/label_bg.png') +\n      ')'\n    \"\n  >\n    {{ data.label }}\n  </div>\n</div>\n<div\n  *ngIf=\"!isActive\"\n  class=\"highlight-label twinkle\"\n  (mouseenter)=\"onMouseEnter()\"\n  (mouseleave)=\"onMouseLeave()\"\n>\n  <div\n    class=\"label\"\n    [style.fontSize]=\"color.labelSize\"\n    [style.color]=\"color.labelColor\"\n    [style.backgroundImage]=\"\n      'url(' + 'assets/highlight-label/image/label_bg_def.png' + ')'\n    \"\n  >\n    {{ data.label }}\n  </div>\n</div>\n",
                    styles: [".highlight-label{display:flex;justify-content:center;align-items:center;width:100%;height:100%;cursor:pointer;background-image:url(assets/highlight-label/image/card_bg_ss.webp);background-size:100% 100%;border-radius:10px;overflow:hidden}.highlight-label .label{position:relative;display:flex;justify-content:center;align-items:center;width:100%;height:100%;max-width:94px;max-height:94px;color:#fff;background-size:auto 100%;background-position:center;background-repeat:no-repeat;font-size:26px}"]
                }] }
    ];
    /** @nocollapse */
    HighlightLabelComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    return HighlightLabelComponent;
}());
export { HighlightLabelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hpZ2hsaWdodC1sYWJlbC8iLCJzb3VyY2VzIjpbImxpYi9oaWdobGlnaHQtbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRTtJQVVFLGlDQUNVLG9CQUEwQyxFQUNsRCxPQUFzQjtRQURkLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFIcEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQU1mLFVBQVU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUixjQUFZLENBQUM7Ozs7SUFFYiw4Q0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsOENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiwrOEJBQStDOztpQkFFaEQ7Ozs7Z0JBTlEsb0JBQW9CO2dCQUFFLGFBQWE7O0lBK0I1Qyw4QkFBQztDQUFBLEFBN0JELElBNkJDO1NBeEJZLHVCQUF1Qjs7O0lBQ2xDLHVDQUFVOztJQUNWLHdDQUFXOztJQUNYLDJDQUFpQjs7Ozs7SUFHZix1REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tcG9uZW50RGF0YSB9IGZyb20gXCJwbHVnaW4tbWFuYWdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLWhpZ2hsaWdodC1sYWJlbFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2hpZ2hsaWdodC1sYWJlbC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaGlnaGxpZ2h0LWxhYmVsLmNvbXBvbmVudC5zdHlsXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRMYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcbiAgaXNBY3RpdmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsdWdpbk1hbmFnZXJTZXJ2aWNlOiBQbHVnaW5NYW5hZ2VyU2VydmljZSxcbiAgICBjb21EYXRhOiBjb21wb25lbnREYXRhXG4gICkge1xuICAgIC8vIOaOpeaUtuS4remXtOS7tuS8oOWAvFxuICAgIGNvbnNvbGUubG9nKFwiY29tRGF0YVwiLCBjb21EYXRhKTtcbiAgICB0aGlzLmRhdGEgPSBjb21EYXRhLmNvbmZpZ0RhdGEuZGF0YTtcbiAgICB0aGlzLmNvbG9yID0gY29tRGF0YS5jb25maWdEYXRhLmNvbG9yO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG4gIG9uTW91c2VFbnRlcigpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIG9uTW91c2VMZWF2ZSgpIHtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cbn1cbiJdfQ==