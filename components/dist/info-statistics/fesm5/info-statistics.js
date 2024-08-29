import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, ViewChild, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InfoStatisticsModule = /** @class */ (function () {
    function InfoStatisticsModule() {
    }
    InfoStatisticsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [InfoStatisticsComponent],
                    entryComponents: [InfoStatisticsComponent],
                    imports: [CommonModule, NgZorroAntdModule],
                    exports: [InfoStatisticsComponent]
                },] }
    ];
    return InfoStatisticsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var publicApi = createPlugin({
    name: 'info-statistics',
    module: InfoStatisticsModule,
    component: InfoStatisticsComponent
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export default publicApi;

//# sourceMappingURL=info-statistics.js.map