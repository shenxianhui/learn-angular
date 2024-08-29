/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
var InfoStatisticsComponent = /** @class */ (function () {
    function InfoStatisticsComponent(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    InfoStatisticsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var rollingNum = this.data.rollingNum || 3;
        if (this.data.list.length <= rollingNum) {
            return;
        }
        /** @type {?} */
        var animateElements = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var trList = _this.tbodyDiv.nativeElement.querySelectorAll(".progressbar");
            trList.forEach((/**
             * @param {?} element
             * @param {?} index
             * @return {?}
             */
            function (element, index) {
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
            function () {
                _this.data.list.push(_this.data.list.shift());
                trList.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
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
    };
    /**
     * @return {?}
     */
    InfoStatisticsComponent.prototype.getBodyHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rollingNum = this.data.rollingNum;
        /** @type {?} */
        var num = rollingNum ? (rollingNum * 43) + 'px' : '100%';
        return num;
    };
    InfoStatisticsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-info-statistics',
                    template: "<div class=\"wrap\">\n  <div class=\"card-wrap\">\n    <div class=\"crad\">\n      <div class=\"card-cot\">\n        <div\n          class=\"cot-top\"\n          [style.fontSize]=\"color.titleValueSize\"\n          [style.color]=\"color.titleValueColor\"\n        >\n          {{ data.title1Value }}\n          <!-- <span\n            *ngIf=\"data.title1Arrow === 'up'\"\n            [style.color]=\"\n              color.titleArrowColor && color.titleArrowColor.length\n                ? color.titleArrowColor[0] || '#52d2ff'\n                : '#52d2ff'\n            \"\n            >\u2191</span\n          >\n          <span\n            *ngIf=\"data.title1Arrow === 'down'\"\n            [style.color]=\"\n              color.titleArrowColor && color.titleArrowColor.length\n                ? color.titleArrowColor[1] || '#52d2ff'\n                : '#52d2ff'\n            \"\n          >\n            \u2193\n          </span> -->\n        </div>\n        <div\n          class=\"cot-bot text-ellipsis\"\n          [style.fontSize]=\"color.titleLabelSize\"\n          [style.color]=\"color.titleLabelColor\"\n        >\n          {{ data.title1Label }}\n        </div>\n      </div>\n    </div>\n    <div class=\"crad\">\n      <div class=\"card-cot\">\n        <div\n          class=\"cot-top\"\n          [style.fontSize]=\"color.titleValueSize\"\n          [style.color]=\"color.titleValueColor\"\n        >\n          {{ data.title2Value }}\n          <!-- <span\n            *ngIf=\"data.title2Arrow === 'up'\"\n            [style.color]=\"\n              color.titleArrowColor && color.titleArrowColor.length\n                ? color.titleArrowColor[0] || '#52d2ff'\n                : '#52d2ff'\n            \"\n            >\u2191</span\n          >\n          <span\n            *ngIf=\"data.title2Arrow === 'down'\"\n            [style.color]=\"\n              color.titleArrowColor && color.titleArrowColor.length\n                ? color.titleArrowColor[1] || '#52d2ff'\n                : '#52d2ff'\n            \"\n          >\n            \u2193\n          </span> -->\n        </div>\n        <div\n          class=\"cot-bot text-ellipsis\"\n          [style.fontSize]=\"color.titleLabelSize\"\n          [style.color]=\"color.titleLabelColor\"\n        >\n          {{ data.title2Label }}\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"line\"></div> -->\n  <img src=\"assets/info-statistics/image/line.png\" alt=\"\" class=\"new-line\" />\n  <div class=\"card-bot-wrap\">\n    <div class=\"card-left\">\n      <div class=\"card-left-cot\">\n        <img class=\"card-left-pic\" [src]=\"data.contentIcon\" alt=\"\" />\n        <div\n          class=\"card-left--text text-ellipsis\"\n          [style.fontSize]=\"color.contentLabelSize\"\n          [style.color]=\"color.contentLabelColor\"\n        >\n          {{ data.contentLabel }}\n        </div>\n      </div>\n    </div>\n    <div class=\"card-right\">\n      <div class=\"card-right-cot\">\n        <div\n          class=\"card-right-text\"\n          [style.fontSize]=\"color.contentValueSize\"\n          [style.color]=\"color.contentValueColor\"\n        >\n          {{ data.contentValue }}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div #tbody [style.height]=\"getBodyHeight()\" class=\"progressbar-box\">\n    <div *ngFor=\"let item of data.list\" class=\"progressbar\">\n      <div\n        class=\"text text-ellipsis\"\n        [style.fontSize]=\"color.listTitleSize\"\n        [style.color]=\"color.listTitleColor\"\n      >\n        {{ item.title }}\n      </div>\n      <div class=\"middle\">\n        <div\n          class=\"long\"\n          [style.background]=\"\n            color.listProgressColor && color.listProgressColor.length\n              ? color.listProgressColor[1] || 'rgba(255, 255, 255, 0.2)'\n              : 'rgba(255, 255, 255, 0.2)'\n          \"\n        >\n          <div\n            class=\"short\"\n            [style.width]=\"item.progress + '%'\"\n            [style.background]=\"\n              color.listProgressColor && color.listProgressColor.length\n                ? color.listProgressColor[0] ||\n                  'linear-gradient(90deg, rgba(82, 210, 255, 0.4), rgba(109, 217, 255, 0.9) 99%)'\n                : 'linear-gradient(90deg, rgba(82, 210, 255, 0.4), rgba(109, 217, 255, 0.9) 99%)'\n            \"\n          ></div>\n        </div>\n      </div>\n      <div\n        class=\"nub\"\n        [style.fontSize]=\"color.listNumSize\"\n        [style.color]=\"color.listNumColor\"\n      >\n        {{ item.num }}\n      </div>\n    </div>\n  </div>\n</div>\n",
                    styles: [".text-ellipsis{width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.wrap{width:100%;height:100%}.wrap .card-wrap{display:flex}.wrap .card-wrap .crad{width:50%;height:70px;background:rgba(255,255,255,.08)}.wrap .card-wrap .crad:not(:last-child){margin-right:10px}.wrap .card-wrap .crad .card-cot{margin-left:20px}.wrap .card-wrap .crad .card-cot .cot-top{margin-top:10px;height:24px;font-size:24px;font-family:PingFang SC,PingFang SC-Medium;font-weight:Medium;text-align:left;color:#52d2ff;line-height:24px;letter-spacing:.01px}.wrap .card-wrap .crad .card-cot .cot-bot{margin-top:12px;height:14px;font-size:14px;font-family:PingFang SC,PingFang SC-Medium;font-weight:Medium;text-align:left;color:#fff;line-height:14px;letter-spacing:.01px}.new-line{width:100%;height:5.6px}.line{position:relative;margin-top:12px;width:100%;height:1px;background:rgba(255,255,255,.4)}.line::before{content:'';position:absolute;left:0;top:0;width:30px;height:5px;background:#52d2ff}.line::after{content:'';position:absolute;right:0;top:0;width:30px;height:5px;background:#52d2ff}.card-bot-wrap{margin-top:5px;display:flex}.card-bot-wrap .card-left{padding-right:8px;margin-right:8px;width:65%;height:40px;background:rgba(255,255,255,.08);display:flex;align-items:center}.card-bot-wrap .card-left .card-left-cot{width:100%;margin-left:10px;display:flex;align-items:center;justify-content:center}.card-bot-wrap .card-left .card-left-cot .card-left-pic{width:24px;height:24px}.card-bot-wrap .card-left .card-left-cot .card-left--text{margin-left:12px;width:100%;height:14px;font-size:14px;font-family:PingFang SC,PingFang SC-Medium;font-weight:Medium;text-align:left;color:#fff;line-height:14px;letter-spacing:.01px}.card-bot-wrap .card-right{width:35%;height:40px;background:rgba(255,255,255,.08);display:flex;align-items:center;justify-content:flex-end;padding-right:10px}.card-bot-wrap .card-right .card-right-cot .card-right-text{width:81px;height:24px;font-size:24px;font-family:Roboto,Roboto-Medium;font-weight:Medium;text-align:right;color:#fff;line-height:24px;letter-spacing:.01px}.progressbar-box{overflow:hidden}.progressbar{margin-top:23px;display:flex;align-items:center;transtion:all .5s ease}.progressbar .text{width:58px;height:14px;font-size:14px;font-family:Roboto,Roboto-Medium;font-weight:Regular;text-align:left;color:#fff;line-height:14px;letter-spacing:.01px}.progressbar .middle{flex-grow:1;margin-left:18px;margin-right:24px}.progressbar .middle .long{width:100%;height:6px;background:rgba(255,255,255,.2)}.progressbar .middle .long .short{width:80%;height:6px;background:linear-gradient(90deg,rgba(82,210,255,.4),rgba(109,217,255,.9) 99%)}.progressbar .nub{width:33px;height:20px;font-size:18px;font-family:Roboto,Roboto-Medium;font-weight:Medium;text-align:right;color:#fafbff;line-height:20px;letter-spacing:.01px}"]
                }] }
    ];
    /** @nocollapse */
    InfoStatisticsComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    InfoStatisticsComponent.propDecorators = {
        tbodyDiv: [{ type: ViewChild, args: ["tbody",] }]
    };
    return InfoStatisticsComponent;
}());
export { InfoStatisticsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mby1zdGF0aXN0aWNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2luZm8tc3RhdGlzdGljcy8iLCJzb3VyY2VzIjpbImxpYi9pbmZvLXN0YXRpc3RpY3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJFO0lBV0UsaUNBQW9CLG9CQUEwQyxFQUFFLE9BQXNCO1FBQWxFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDNUQsVUFBVTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUE7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQTtJQUN2QyxDQUFDOzs7O0lBRUQsMENBQVE7OztJQUFSO1FBQUEsaUJBa0NDOztZQWpDSyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxVQUFVLEVBQUU7WUFDdkMsT0FBTTtTQUNQOztZQUNLLGVBQWU7OztRQUFHOztnQkFDbEIsTUFBTSxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztZQUd6RSxNQUFNLENBQUMsT0FBTzs7Ozs7WUFBQyxVQUFDLE9BQU8sRUFBRSxLQUFLO2dCQUM1QixJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7b0JBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsa0NBQWtDLENBQUM7b0JBQzdELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztvQkFDOUIsT0FBTTtpQkFDUDtnQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztZQUNoRCxDQUFDLEVBQUMsQ0FBQztZQUVILFVBQVU7OztZQUFDO2dCQUNULEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUU1QyxNQUFNLENBQUMsT0FBTzs7OztnQkFBQyxVQUFDLE9BQU87b0JBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztvQkFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7b0JBQzNDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO29CQUM1QixPQUFPLENBQUMsWUFBWSxDQUFDO29CQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7Z0JBQzdDLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFBO1FBQ0QsV0FBVyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUdyQyxDQUFDOzs7O0lBRUQsK0NBQWE7OztJQUFiOztZQUNRLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7O1lBQ2pDLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTTtRQUMxRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O2dCQTFERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0Isb2lKQUErQzs7aUJBRWhEOzs7O2dCQU5RLG9CQUFvQjtnQkFBRSxhQUFhOzs7MkJBUXpDLFNBQVMsU0FBQyxPQUFPOztJQXFEcEIsOEJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQXREWSx1QkFBdUI7OztJQUNsQywyQ0FDcUI7O0lBQ3JCLHVDQUFVOztJQUNWLHdDQUFXOzs7OztJQUVDLHVEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21wb25lbnREYXRhIH0gZnJvbSAncGx1Z2luLW1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItaW5mby1zdGF0aXN0aWNzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2luZm8tc3RhdGlzdGljcy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2luZm8tc3RhdGlzdGljcy5jb21wb25lbnQuc3R5bCddXG59KVxuZXhwb3J0IGNsYXNzIEluZm9TdGF0aXN0aWNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcInRib2R5XCIpXG4gIHRib2R5RGl2OiBFbGVtZW50UmVmO1xuICBkYXRhOiBhbnk7XG4gIGNvbG9yOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbHVnaW5NYW5hZ2VyU2VydmljZTogUGx1Z2luTWFuYWdlclNlcnZpY2UsIGNvbURhdGE6IGNvbXBvbmVudERhdGEpIHtcbiAgICAvLyDmjqXmlLbkuK3pl7Tku7bkvKDlgLxcbiAgICBjb25zb2xlLmxvZyhcImNvbURhdGFcIiwgY29tRGF0YSlcbiAgICB0aGlzLmRhdGEgPSBjb21EYXRhLmNvbmZpZ0RhdGEuZGF0YVxuICAgIHRoaXMuY29sb3IgPSBjb21EYXRhLmNvbmZpZ0RhdGEuY29sb3JcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCByb2xsaW5nTnVtID0gdGhpcy5kYXRhLnJvbGxpbmdOdW0gfHwgM1xuICAgIGlmICh0aGlzLmRhdGEubGlzdC5sZW5ndGggPD0gcm9sbGluZ051bSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGFuaW1hdGVFbGVtZW50cyA9ICgpID0+IHtcbiAgICAgIGxldCB0ckxpc3QgPSB0aGlzLnRib2R5RGl2Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9ncmVzc2JhclwiKTtcblxuXG4gICAgICB0ckxpc3QuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtMTBweCkgcm90YXRlWCg5MGRlZylcIjtcbiAgICAgICAgICB0ckxpc3RbMF0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC00M3B4KVwiO1xuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEubGlzdC5wdXNoKHRoaXMuZGF0YS5saXN0LnNoaWZ0KCkpO1xuXG4gICAgICAgIHRyTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCI7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgwLDApXCI7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCJub25lXCI7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC41cyBlYXNlXCI7XG4gICAgICAgIH0pO1xuICAgICAgfSwgNTAwKTtcbiAgICB9O1xuICAgIHNldEludGVydmFsKGFuaW1hdGVFbGVtZW50cywgMzAwMCk7XG5cblxuICB9XG5cbiAgZ2V0Qm9keUhlaWdodCgpIHtcbiAgICBjb25zdCByb2xsaW5nTnVtID0gdGhpcy5kYXRhLnJvbGxpbmdOdW07XG4gICAgY29uc3QgbnVtID0gcm9sbGluZ051bSA/IChyb2xsaW5nTnVtICogNDMpICsgJ3B4JyA6ICcxMDAlJztcbiAgICByZXR1cm4gbnVtO1xuICB9XG59XG4iXX0=