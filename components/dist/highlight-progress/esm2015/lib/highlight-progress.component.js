/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { componentData } from "plugin-manager";
export class HighlightProgressComponent {
    /**
     * @param {?} comData
     */
    constructor(comData) {
        this.progress = 0;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.progress = 100;
        }), 1000);
    }
}
HighlightProgressComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-highlight-progress",
                template: "<div\n  class=\"highlight-progress\"\n  [style.backgroundImage]=\"\n    'url(' +\n    (color.shadowImg || 'assets/highlight-label/image/card_bg.png') +\n    ')'\n  \"\n>\n  <div class=\"cot-wrap\">\n    <div\n      class=\"cot-top\"\n      [style.fontSize]=\"color.labelSize\"\n      [style.color]=\"color.labelColor\"\n    >\n      {{ data.label }}\n    </div>\n    <div class=\"cot-bot\">\n      <div class=\"progressbar-wrap\">\n        <div\n          class=\"progressbar-external\"\n          [style.background]=\"\n            color.progressColor && color.progressColor.length\n              ? color.progressColor[1] || '#00000000'\n              : '#00000000'\n          \"\n        >\n          <div\n            class=\"progressbar-internal\"\n            [style.background]=\"\n              color.progressColor && color.progressColor.length\n                ? color.progressColor[0] || '#00FFDA'\n                : '#00FFDA'\n            \"\n            [style.width]=\"progress + '%'\"\n            [style.transition]=\"\n              'all ' + (data.duration || 2) + (data.durationUnit || 's')\n            \"\n          ></div>\n        </div>\n      </div>\n      <div\n        class=\"percentage\"\n        [style.fontSize]=\"color.progressLabelSize\"\n        [style.color]=\"color.progressLabelColor\"\n      >\n        100%\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".highlight-progress{display:flex;justify-content:center;align-items:center;width:100%;height:100%;background-image:url(/assets/highlight-label/image/card_bg.png);background-size:100% 100%;border-radius:10px;overflow:hidden}.highlight-progress .cot-wrap{display:flex;flex-direction:column;justify-content:center;align-items:center}.highlight-progress .cot-wrap .cot-top{width:64px;height:24px;font-size:16px;font-family:PingFang SC,PingFang SC-Regular;font-weight:Regular;text-align:left;color:#fff;line-height:24px}.highlight-progress .cot-wrap .cot-bot{display:flex;justify-content:center;align-items:center}.highlight-progress .cot-wrap .cot-bot .progressbar-wrap .progressbar-external{display:flex;align-items:center;padding:0 4px;width:200px;height:14px;border:2px solid rgba(255,255,255,.4);border-radius:6px}.highlight-progress .cot-wrap .cot-bot .progressbar-wrap .progressbar-external .progressbar-internal{width:0;height:6px;background:#00ffda;border-radius:5px;transition:.5s}.highlight-progress .cot-wrap .cot-bot .percentage{width:37px;height:34px;font-size:17px;font-family:PingFang SC,PingFang SC-Regular;font-weight:Regular;text-align:left;color:#fff;line-height:34px;margin-left:12px}"]
            }] }
];
/** @nocollapse */
HighlightProgressComponent.ctorParameters = () => [
    { type: componentData }
];
if (false) {
    /** @type {?} */
    HighlightProgressComponent.prototype.data;
    /** @type {?} */
    HighlightProgressComponent.prototype.color;
    /** @type {?} */
    HighlightProgressComponent.prototype.progress;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LXByb2dyZXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2hpZ2hsaWdodC1wcm9ncmVzcy8iLCJzb3VyY2VzIjpbImxpYi9oaWdobGlnaHQtcHJvZ3Jlc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBd0IsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPckUsTUFBTSxPQUFPLDBCQUEwQjs7OztJQUtyQyxZQUFZLE9BQXNCO1FBRmxDLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFHWCxVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDdEIsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyx3M0NBQWtEOzthQUVuRDs7OztZQU44QixhQUFhOzs7O0lBUTFDLDBDQUFVOztJQUNWLDJDQUFXOztJQUNYLDhDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGx1Z2luTWFuYWdlclNlcnZpY2UsIGNvbXBvbmVudERhdGEgfSBmcm9tIFwicGx1Z2luLW1hbmFnZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpYi1oaWdobGlnaHQtcHJvZ3Jlc3NcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9oaWdobGlnaHQtcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2hpZ2hsaWdodC1wcm9ncmVzcy5jb21wb25lbnQuc3R5bFwiXSxcbn0pXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0UHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBkYXRhOiBhbnk7XG4gIGNvbG9yOiBhbnk7XG4gIHByb2dyZXNzID0gMDtcblxuICBjb25zdHJ1Y3Rvcihjb21EYXRhOiBjb21wb25lbnREYXRhKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YS5kYXRhO1xuICAgIHRoaXMuY29sb3IgPSBjb21EYXRhLmNvbmZpZ0RhdGEuY29sb3I7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSAxMDA7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cbiJdfQ==