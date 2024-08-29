/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { componentData } from "plugin-manager";
var HighlightProgressComponent = /** @class */ (function () {
    function HighlightProgressComponent(comData) {
        this.progress = 0;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    HighlightProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.progress = 100;
        }), 1000);
    };
    HighlightProgressComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-highlight-progress",
                    template: "<div\n  class=\"highlight-progress\"\n  [style.backgroundImage]=\"\n    'url(' +\n    (color.shadowImg || 'assets/highlight-label/image/card_bg.png') +\n    ')'\n  \"\n>\n  <div class=\"cot-wrap\">\n    <div\n      class=\"cot-top\"\n      [style.fontSize]=\"color.labelSize\"\n      [style.color]=\"color.labelColor\"\n    >\n      {{ data.label }}\n    </div>\n    <div class=\"cot-bot\">\n      <div class=\"progressbar-wrap\">\n        <div\n          class=\"progressbar-external\"\n          [style.background]=\"\n            color.progressColor && color.progressColor.length\n              ? color.progressColor[1] || '#00000000'\n              : '#00000000'\n          \"\n        >\n          <div\n            class=\"progressbar-internal\"\n            [style.background]=\"\n              color.progressColor && color.progressColor.length\n                ? color.progressColor[0] || '#00FFDA'\n                : '#00FFDA'\n            \"\n            [style.width]=\"progress + '%'\"\n            [style.transition]=\"\n              'all ' + (data.duration || 2) + (data.durationUnit || 's')\n            \"\n          ></div>\n        </div>\n      </div>\n      <div\n        class=\"percentage\"\n        [style.fontSize]=\"color.progressLabelSize\"\n        [style.color]=\"color.progressLabelColor\"\n      >\n        100%\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".highlight-progress{display:flex;justify-content:center;align-items:center;width:100%;height:100%;background-image:url(/assets/highlight-label/image/card_bg.png);background-size:100% 100%;border-radius:10px;overflow:hidden}.highlight-progress .cot-wrap{display:flex;flex-direction:column;justify-content:center;align-items:center}.highlight-progress .cot-wrap .cot-top{width:64px;height:24px;font-size:16px;font-family:PingFang SC,PingFang SC-Regular;font-weight:Regular;text-align:left;color:#fff;line-height:24px}.highlight-progress .cot-wrap .cot-bot{display:flex;justify-content:center;align-items:center}.highlight-progress .cot-wrap .cot-bot .progressbar-wrap .progressbar-external{display:flex;align-items:center;padding:0 4px;width:200px;height:14px;border:2px solid rgba(255,255,255,.4);border-radius:6px}.highlight-progress .cot-wrap .cot-bot .progressbar-wrap .progressbar-external .progressbar-internal{width:0;height:6px;background:#00ffda;border-radius:5px;transition:.5s}.highlight-progress .cot-wrap .cot-bot .percentage{width:37px;height:34px;font-size:17px;font-family:PingFang SC,PingFang SC-Regular;font-weight:Regular;text-align:left;color:#fff;line-height:34px;margin-left:12px}"]
                }] }
    ];
    /** @nocollapse */
    HighlightProgressComponent.ctorParameters = function () { return [
        { type: componentData }
    ]; };
    return HighlightProgressComponent;
}());
export { HighlightProgressComponent };
if (false) {
    /** @type {?} */
    HighlightProgressComponent.prototype.data;
    /** @type {?} */
    HighlightProgressComponent.prototype.color;
    /** @type {?} */
    HighlightProgressComponent.prototype.progress;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LXByb2dyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hpZ2hsaWdodC1wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9oaWdobGlnaHQtcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBd0IsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckU7SUFVRSxvQ0FBWSxPQUFzQjtRQUZsQyxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBR1gsVUFBVTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUN4QyxDQUFDOzs7O0lBRUQsNkNBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIQyxVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsdzNDQUFrRDs7aUJBRW5EOzs7O2dCQU44QixhQUFhOztJQXdCNUMsaUNBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQWpCWSwwQkFBMEI7OztJQUNyQywwQ0FBVTs7SUFDViwyQ0FBVzs7SUFDWCw4Q0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21wb25lbnREYXRhIH0gZnJvbSBcInBsdWdpbi1tYW5hZ2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItaGlnaGxpZ2h0LXByb2dyZXNzXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaGlnaGxpZ2h0LXByb2dyZXNzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9oaWdobGlnaHQtcHJvZ3Jlc3MuY29tcG9uZW50LnN0eWxcIl0sXG59KVxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodFByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGF0YTogYW55O1xuICBjb2xvcjogYW55O1xuICBwcm9ncmVzcyA9IDA7XG5cbiAgY29uc3RydWN0b3IoY29tRGF0YTogY29tcG9uZW50RGF0YSkge1xuICAgIC8vIOaOpeaUtuS4remXtOS7tuS8oOWAvFxuICAgIGNvbnNvbGUubG9nKFwiY29tRGF0YVwiLCBjb21EYXRhKTtcbiAgICB0aGlzLmRhdGEgPSBjb21EYXRhLmNvbmZpZ0RhdGEuZGF0YTtcbiAgICB0aGlzLmNvbG9yID0gY29tRGF0YS5jb25maWdEYXRhLmNvbG9yO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMTAwO1xuICAgIH0sIDEwMDApO1xuICB9XG59XG4iXX0=