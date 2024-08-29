/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
export class InfoStatisticsComponent {
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
        /** @type {?} */
        let rollingNum = this.data.rollingNum || 3;
        if (this.data.list.length <= rollingNum) {
            return;
        }
        /** @type {?} */
        const animateElements = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let trList = this.tbodyDiv.nativeElement.querySelectorAll(".progressbar");
            trList.forEach((/**
             * @param {?} element
             * @param {?} index
             * @return {?}
             */
            (element, index) => {
                if (index == 0) {
                    element.style.transform = "translateY(-10px) rotateX(90deg)";
                    trList[0].style.opacity = "0";
                    return;
                }
                element.style.transform = "translateY(-43px)";
            }));
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.data.list.push(this.data.list.shift());
                trList.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                (element) => {
                    element.style.transition = "none";
                    element.style.transform = "translate(0,0)";
                    element.style.opacity = "none";
                    element.style.opacity = "1";
                    element.offsetHeight;
                    element.style.transition = "all 0.5s ease";
                }));
            }), 500);
        });
        setInterval(animateElements, 3000);
    }
    /**
     * @return {?}
     */
    getBodyHeight() {
        /** @type {?} */
        const rollingNum = this.data.rollingNum;
        /** @type {?} */
        const num = rollingNum ? (rollingNum * 43) + 'px' : '100%';
        return num;
    }
}
InfoStatisticsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-info-statistics',
                template: "<div class=\"wrap\">\n  <div class=\"card-wrap\">\n    <div class=\"crad\">\n      <div class=\"card-cot\">\n        <div\n          class=\"cot-top\"\n          [style.fontSize]=\"color.titleValueSize\"\n          [style.color]=\"color.titleValueColor\"\n        >\n          {{ data.title1Value }}\n          <!-- <span\n            *ngIf=\"data.title1Arrow === 'up'\"\n            [style.color]=\"\n              color.titleArrowColor && color.titleArrowColor.length\n                ? color.titleArrowColor[0] || '#52d2ff'\n                : '#52d2ff'\n            \"\n            >\u2191</span\n          >\n          <span\n            *ngIf=\"data.title1Arrow === 'down'\"\n            [style.color]=\"\n              color.titleArrowColor && color.titleArrowColor.length\n                ? color.titleArrowColor[1] || '#52d2ff'\n                : '#52d2ff'\n            \"\n          >\n            \u2193\n          </span> -->\n        </div>\n        <div\n          class=\"cot-bot text-ellipsis\"\n          [style.fontSize]=\"color.titleLabelSize\"\n          [style.color]=\"color.titleLabelColor\"\n        >\n          {{ data.title1Label }}\n        </div>\n      </div>\n    </div>\n    <div class=\"crad\">\n      <div class=\"card-cot\">\n        <div\n          class=\"cot-top\"\n          [style.fontSize]=\"color.titleValueSize\"\n          [style.color]=\"color.titleValueColor\"\n        >\n          {{ data.title2Value }}\n          <!-- <span\n            *ngIf=\"data.title2Arrow === 'up'\"\n            [style.color]=\"\n              color.titleArrowColor && color.titleArrowColor.length\n                ? color.titleArrowColor[0] || '#52d2ff'\n                : '#52d2ff'\n            \"\n            >\u2191</span\n          >\n          <span\n            *ngIf=\"data.title2Arrow === 'down'\"\n            [style.color]=\"\n              color.titleArrowColor && color.titleArrowColor.length\n                ? color.titleArrowColor[1] || '#52d2ff'\n                : '#52d2ff'\n            \"\n          >\n            \u2193\n          </span> -->\n        </div>\n        <div\n          class=\"cot-bot text-ellipsis\"\n          [style.fontSize]=\"color.titleLabelSize\"\n          [style.color]=\"color.titleLabelColor\"\n        >\n          {{ data.title2Label }}\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"line\"></div> -->\n  <img src=\"assets/info-statistics/image/line.png\" alt=\"\" class=\"new-line\" />\n  <div class=\"card-bot-wrap\">\n    <div class=\"card-left\">\n      <div class=\"card-left-cot\">\n        <img class=\"card-left-pic\" [src]=\"data.contentIcon\" alt=\"\" />\n        <div\n          class=\"card-left--text text-ellipsis\"\n          [style.fontSize]=\"color.contentLabelSize\"\n          [style.color]=\"color.contentLabelColor\"\n        >\n          {{ data.contentLabel }}\n        </div>\n      </div>\n    </div>\n    <div class=\"card-right\">\n      <div class=\"card-right-cot\">\n        <div\n          class=\"card-right-text\"\n          [style.fontSize]=\"color.contentValueSize\"\n          [style.color]=\"color.contentValueColor\"\n        >\n          {{ data.contentValue }}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div #tbody [style.height]=\"getBodyHeight()\" class=\"progressbar-box\">\n    <div *ngFor=\"let item of data.list\" class=\"progressbar\">\n      <div\n        class=\"text text-ellipsis\"\n        [style.fontSize]=\"color.listTitleSize\"\n        [style.color]=\"color.listTitleColor\"\n      >\n        {{ item.title }}\n      </div>\n      <div class=\"middle\">\n        <div\n          class=\"long\"\n          [style.background]=\"\n            color.listProgressColor && color.listProgressColor.length\n              ? color.listProgressColor[1] || 'rgba(255, 255, 255, 0.2)'\n              : 'rgba(255, 255, 255, 0.2)'\n          \"\n        >\n          <div\n            class=\"short\"\n            [style.width]=\"item.progress + '%'\"\n            [style.background]=\"\n              color.listProgressColor && color.listProgressColor.length\n                ? color.listProgressColor[0] ||\n                  'linear-gradient(90deg, rgba(82, 210, 255, 0.4), rgba(109, 217, 255, 0.9) 99%)'\n                : 'linear-gradient(90deg, rgba(82, 210, 255, 0.4), rgba(109, 217, 255, 0.9) 99%)'\n            \"\n          ></div>\n        </div>\n      </div>\n      <div\n        class=\"nub\"\n        [style.fontSize]=\"color.listNumSize\"\n        [style.color]=\"color.listNumColor\"\n      >\n        {{ item.num }}\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: [".text-ellipsis{width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.wrap{width:100%;height:100%}.wrap .card-wrap{display:flex}.wrap .card-wrap .crad{width:50%;height:70px;background:rgba(255,255,255,.08)}.wrap .card-wrap .crad:not(:last-child){margin-right:10px}.wrap .card-wrap .crad .card-cot{margin-left:20px}.wrap .card-wrap .crad .card-cot .cot-top{margin-top:10px;height:24px;font-size:24px;font-family:PingFang SC,PingFang SC-Medium;font-weight:Medium;text-align:left;color:#52d2ff;line-height:24px;letter-spacing:.01px}.wrap .card-wrap .crad .card-cot .cot-bot{margin-top:12px;height:14px;font-size:14px;font-family:PingFang SC,PingFang SC-Medium;font-weight:Medium;text-align:left;color:#fff;line-height:14px;letter-spacing:.01px}.new-line{width:100%;height:5.6px}.line{position:relative;margin-top:12px;width:100%;height:1px;background:rgba(255,255,255,.4)}.line::before{content:'';position:absolute;left:0;top:0;width:30px;height:5px;background:#52d2ff}.line::after{content:'';position:absolute;right:0;top:0;width:30px;height:5px;background:#52d2ff}.card-bot-wrap{margin-top:5px;display:flex}.card-bot-wrap .card-left{padding-right:8px;margin-right:8px;width:65%;height:40px;background:rgba(255,255,255,.08);display:flex;align-items:center}.card-bot-wrap .card-left .card-left-cot{width:100%;margin-left:10px;display:flex;align-items:center;justify-content:center}.card-bot-wrap .card-left .card-left-cot .card-left-pic{width:24px;height:24px}.card-bot-wrap .card-left .card-left-cot .card-left--text{margin-left:12px;width:100%;height:14px;font-size:14px;font-family:PingFang SC,PingFang SC-Medium;font-weight:Medium;text-align:left;color:#fff;line-height:14px;letter-spacing:.01px}.card-bot-wrap .card-right{width:35%;height:40px;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:flex-end;padding-right:10px}.card-bot-wrap .card-right .card-right-cot .card-right-text{width:81px;height:24px;font-size:24px;font-family:Roboto,Roboto-Medium;font-weight:Medium;text-align:right;color:#fff;line-height:24px;letter-spacing:.01px}.progressbar-box{overflow:hidden}.progressbar{margin-top:23px;display:flex;align-items:center;transtion:all .5s ease}.progressbar .text{width:58px;height:14px;font-size:14px;font-family:Roboto,Roboto-Medium;font-weight:Regular;text-align:left;color:#fff;line-height:14px;letter-spacing:.01px}.progressbar .middle{flex-grow:1;margin-left:18px;margin-right:24px}.progressbar .middle .long{width:100%;height:6px;background:rgba(255,255,255,.2)}.progressbar .middle .long .short{width:80%;height:6px;background:linear-gradient(90deg,rgba(82,210,255,.4),rgba(109,217,255,.9) 99%)}.progressbar .nub{width:33px;height:20px;font-size:18px;font-family:Roboto,Roboto-Medium;font-weight:Medium;text-align:right;color:#fafbff;line-height:20px;letter-spacing:.01px}"]
            }] }
];
/** @nocollapse */
InfoStatisticsComponent.ctorParameters = () => [
    { type: PluginManagerService },
    { type: componentData }
];
InfoStatisticsComponent.propDecorators = {
    tbodyDiv: [{ type: ViewChild, args: ["tbody",] }]
};
if (false) {
    /** @type {?} */
    InfoStatisticsComponent.prototype.tbodyDiv;
    /** @type {?} */
    InfoStatisticsComponent.prototype.data;
    /** @type {?} */
    InfoStatisticsComponent.prototype.color;
    /**
     * @type {?}
     * @private
     */
    InfoStatisticsComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1zdGF0aXN0aWNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2luZm8tc3RhdGlzdGljcy8iLCJzb3VyY2VzIjpbImxpYi9pbmZvLXN0YXRpc3RpY3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3JFLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBTWxDLFlBQW9CLG9CQUEwQyxFQUFFLE9BQXNCO1FBQWxFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDNUQsVUFBVTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUE7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQTtJQUN2QyxDQUFDOzs7O0lBRUQsUUFBUTs7WUFDRixVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxVQUFVLEVBQUU7WUFDdkMsT0FBTTtTQUNQOztjQUNLLGVBQWU7OztRQUFHLEdBQUcsRUFBRTs7Z0JBQ3ZCLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7WUFHekUsTUFBTSxDQUFDLE9BQU87Ozs7O1lBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ2hDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtvQkFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxrQ0FBa0MsQ0FBQztvQkFDN0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO29CQUM5QixPQUFNO2lCQUNQO2dCQUNELE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1lBQ2hELENBQUMsRUFBQyxDQUFDO1lBRUgsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUU1QyxNQUFNLENBQUMsT0FBTzs7OztnQkFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO29CQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7b0JBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO29CQUMzQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLFlBQVksQ0FBQztvQkFDckIsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDO2dCQUM3QyxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQTtRQUNELFdBQVcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFHckMsQ0FBQzs7OztJQUVELGFBQWE7O2NBQ0wsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTs7Y0FDakMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQzFELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBMURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixvaUpBQStDOzthQUVoRDs7OztZQU5RLG9CQUFvQjtZQUFFLGFBQWE7Ozt1QkFRekMsU0FBUyxTQUFDLE9BQU87Ozs7SUFBbEIsMkNBQ3FCOztJQUNyQix1Q0FBVTs7SUFDVix3Q0FBVzs7Ozs7SUFFQyx1REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tcG9uZW50RGF0YSB9IGZyb20gJ3BsdWdpbi1tYW5hZ2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWluZm8tc3RhdGlzdGljcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9pbmZvLXN0YXRpc3RpY3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9pbmZvLXN0YXRpc3RpY3MuY29tcG9uZW50LnN0eWwnXVxufSlcbmV4cG9ydCBjbGFzcyBJbmZvU3RhdGlzdGljc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJ0Ym9keVwiKVxuICB0Ym9keURpdjogRWxlbWVudFJlZjtcbiAgZGF0YTogYW55O1xuICBjb2xvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21EYXRhOiBjb21wb25lbnREYXRhKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpXG4gICAgdGhpcy5kYXRhID0gY29tRGF0YS5jb25maWdEYXRhLmRhdGFcbiAgICB0aGlzLmNvbG9yID0gY29tRGF0YS5jb25maWdEYXRhLmNvbG9yXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsZXQgcm9sbGluZ051bSA9IHRoaXMuZGF0YS5yb2xsaW5nTnVtIHx8IDNcbiAgICBpZiAodGhpcy5kYXRhLmxpc3QubGVuZ3RoIDw9IHJvbGxpbmdOdW0pIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBhbmltYXRlRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICBsZXQgdHJMaXN0ID0gdGhpcy50Ym9keURpdi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvZ3Jlc3NiYXJcIik7XG5cblxuICAgICAgdHJMaXN0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLTEwcHgpIHJvdGF0ZVgoOTBkZWcpXCI7XG4gICAgICAgICAgdHJMaXN0WzBdLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtNDNweClcIjtcbiAgICAgIH0pO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhLmxpc3QucHVzaCh0aGlzLmRhdGEubGlzdC5zaGlmdCgpKTtcblxuICAgICAgICB0ckxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoMCwwKVwiO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwibm9uZVwiO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xuICAgICAgICAgIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuNXMgZWFzZVwiO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDUwMCk7XG4gICAgfTtcbiAgICBzZXRJbnRlcnZhbChhbmltYXRlRWxlbWVudHMsIDMwMDApO1xuXG5cbiAgfVxuXG4gIGdldEJvZHlIZWlnaHQoKSB7XG4gICAgY29uc3Qgcm9sbGluZ051bSA9IHRoaXMuZGF0YS5yb2xsaW5nTnVtO1xuICAgIGNvbnN0IG51bSA9IHJvbGxpbmdOdW0gPyAocm9sbGluZ051bSAqIDQzKSArICdweCcgOiAnMTAwJSc7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxufVxuIl19