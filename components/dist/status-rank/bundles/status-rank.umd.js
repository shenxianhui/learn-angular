(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('plugin-manager'), require('@angular/core'), require('ng-zorro-antd'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('status-rank', ['plugin-manager', '@angular/core', 'ng-zorro-antd', '@angular/common'], factory) :
    (global['status-rank'] = factory(global.pluginManager,global.ng.core,global.ngZorroAntd,global.ng.common));
}(this, (function (pluginManager,core,ngZorroAntd,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StatusRankComponent = /** @class */ (function () {
        function StatusRankComponent(pluginManagerService, comData) {
            this.pluginManagerService = pluginManagerService;
            // 接收中间件传值
            console.log("comData", comData);
            this.data = comData.configData.data;
            this.color = comData.configData.color;
        }
        /**
         * @param {?} value
         * @param {?=} list
         * @return {?}
         */
        StatusRankComponent.prototype.getPercentage = /**
         * @param {?} value
         * @param {?=} list
         * @return {?}
         */
            function (value, list) {
                if (list === void 0) {
                    list = [];
                }
                /** @type {?} */
                var total = 0;
                list.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    total += item.value;
                }));
                return (value / total) * 100 + "%";
            };
        /**
         * @return {?}
         */
        StatusRankComponent.prototype.ngOnInit = /**
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
                var animateElements = ( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var trList = _this.tbodyDiv.nativeElement.querySelectorAll(".wrap");
                    trList.forEach(( /**
                     * @param {?} element
                     * @param {?} index
                     * @return {?}
                     */function (element, index) {
                        if (index == 0) {
                            element.style.transform = "translateY(-10px) rotateX(90deg)";
                            trList[0].style.opacity = "0";
                            return;
                        }
                        element.style.transform = "translateY(-92px)";
                    }));
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.data.list.push(_this.data.list.shift());
                        trList.forEach(( /**
                         * @param {?} element
                         * @return {?}
                         */function (element) {
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
        StatusRankComponent.prototype.getBodyHeight = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var dataLength = this.data.list.length;
                /** @type {?} */
                var rollingNum = this.data.rollingNum;
                /** @type {?} */
                var num = dataLength > rollingNum ? rollingNum : dataLength;
                return num * 72 + (num - 1) * 20 + "px";
            };
        StatusRankComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "lib-status-rank",
                        template: "<div class=\"status-rank\" #tbody [style.height]=\"getBodyHeight()\">\n  <div class=\"wrap\" *ngFor=\"let item of data.list\">\n    <div class=\"left\">\n      <div class=\"text-wrap\">\n        <div class=\"text text-ellipsis\">{{ item.title }}</div>\n      </div>\n      <div class=\"nub-wrap\">\n        <div class=\"nub\">{{ item.value }}</div>\n        <!-- <img [src]=\"item.icon\" alt=\"\" /> -->\n      </div>\n    </div>\n    <div class=\"right\">\n      <div class=\"line\"></div>\n      <div class=\"state-wrap\">\n        <div class=\"state\" *ngFor=\"let item1 of item.column; let index = index\">\n          <div\n            class=\"state-text\"\n            [style.fontSize]=\"(color.column || [])[index]?.LabelSize\"\n            [style.color]=\"(color.column || [])[index]?.LabelColor\"\n          >\n            {{ item1.label }}\n          </div>\n          <div class=\"state-nub-wrap\">\n            <div class=\"progressbar\">\n              <div\n                class=\"external\"\n                [style.backgroundColor]=\"\n                  (color.column || [])[index]?.progressColor &&\n                  (color.column || [])[index]?.progressColor.length\n                    ? (color.column || [])[index]?.progressColor[1]\n                    : null\n                \"\n              >\n                <div\n                  class=\"internal\"\n                  [style.backgroundColor]=\"\n                    (color.column || [])[index]?.progressColor &&\n                    (color.column || [])[index]?.progressColor.length\n                      ? (color.column || [])[index]?.progressColor[0]\n                      : null\n                  \"\n                  [style.width]=\"getPercentage(item1.value, item.column)\"\n                ></div>\n              </div>\n            </div>\n            <div\n              class=\"number-wrap\"\n              [style.backgroundColor]=\"\n                (color.column || [])[index]?.ValueBgColor\n              \"\n            >\n              <div\n                class=\"number\"\n                [style.fontSize]=\"(color.column || [])[index]?.ValueSize\"\n                [style.color]=\"(color.column || [])[index]?.ValueColor\"\n              >\n                {{ item1.value }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- \u9700\u8981\u7528\u5B9A\u4F4D\u7684 -->\n    <div class=\"background-wrap\">\n      <div class=\"pic-wrap\">\n        <img\n          class=\"pic-left\"\n          src=\"assets/status-rank/image/status_rank_draw1.png\"\n          alt=\"\"\n        />\n        <img\n          class=\"pic-mid\"\n          src=\"assets/status-rank/image/status_rank_draw2.png\"\n          alt=\"\"\n        />\n      </div>\n      <div class=\"middle-wrap\">\n        <div class=\"middle-line\"></div>\n      </div>\n      <div class=\"pic-wrap\">\n        <img\n          class=\"pic-mid rotate180\"\n          src=\"assets/status-rank/image/status_rank_draw2.png\"\n          alt=\"\"\n        />\n        <img\n          class=\"pic-left\"\n          src=\"assets/status-rank/image/status_rank_draw1.png\"\n          alt=\"\"\n        />\n      </div>\n    </div>\n  </div>\n</div>\n",
                        styles: [".rotate180{transform:rotate(180deg)}.text-ellipsis{width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.status-rank{width:100%;height:100%;overflow:hidden}.status-rank .wrap{position:relative;display:flex;width:100%;transition:.5s}.status-rank .wrap:not(:last-child){margin-bottom:20px}.status-rank .wrap .left{width:25%}.status-rank .wrap .left .text-wrap{margin-bottom:9px;display:flex;justify-content:center;align-items:center;width:100%;height:23px;background-image:url(assets/status-rank/image/title_bg.png);background-size:100% 100%;background-repeat:no-repeat}.status-rank .wrap .left .text-wrap .text{text-align:center;font-size:14px;font-weight:Medium;color:#52d2ff;line-height:14px}.status-rank .wrap .left .nub-wrap{display:flex;align-items:center;justify-content:center;margin-top:11px;width:50%;height:34px;border-top:1px solid rgba(255,255,255,.4);border-bottom:1px solid rgba(255,255,255,.4)}.status-rank .wrap .left .nub-wrap .nub{font-size:20px;font-weight:Medium;text-align:left;color:#fafbff;line-height:20px;font-family:Roboto,Roboto-Medium}.status-rank .wrap .left .nub-wrap img{width:40px;height:40px}.status-rank .wrap .right{flex-grow:1}.status-rank .wrap .right .line{position:relative;margin-left:4px;margin-bottom:12px;height:1px;background-color:rgba(255,255,255,.4)}.status-rank .wrap .right .line::after{content:'';position:absolute;right:0;top:0;width:1px;height:8px;background-color:rgba(255,255,255,.4)}.status-rank .wrap .right .state-wrap{display:flex;flex-grow:1}.status-rank .wrap .right .state-wrap .state{flex-grow:1;margin-right:12px}.status-rank .wrap .right .state-wrap .state:nth-child(1) .state-nub-wrap .progressbar .external .internal{background:linear-gradient(90deg,rgba(82,210,255,.5),rgba(109,217,255,.9) 99%)}.status-rank .wrap .right .state-wrap .state:nth-child(1) .state-nub-wrap .number-wrap{background:rgba(82,210,255,.12)}.status-rank .wrap .right .state-wrap .state:nth-child(1) .state-nub-wrap .number-wrap .number{color:#52d2ff}.status-rank .wrap .right .state-wrap .state:nth-child(2) .state-nub-wrap .progressbar .external .internal{background:linear-gradient(90deg,rgba(255,191,89,.5),rgba(255,191,89,.9) 99%)}.status-rank .wrap .right .state-wrap .state:nth-child(2) .state-nub-wrap .number-wrap{background:rgba(255,191,89,.12)}.status-rank .wrap .right .state-wrap .state:nth-child(2) .state-nub-wrap .number-wrap .number{color:#ffbf59}.status-rank .wrap .right .state-wrap .state:nth-child(3) .state-nub-wrap .progressbar .external .internal{background:linear-gradient(90deg,rgba(255,67,91,.5),rgba(255,67,91,.9) 99%)}.status-rank .wrap .right .state-wrap .state:nth-child(3) .state-nub-wrap .number-wrap{background:rgba(255,67,91,.12)}.status-rank .wrap .right .state-wrap .state:nth-child(3) .state-nub-wrap .number-wrap .number{color:#ff435b}.status-rank .wrap .right .state-wrap .state .state-text{margin-bottom:6px;font-size:14px;font-weight:Regular;text-align:right;color:rgba(255,255,255,.8);line-height:14px}.status-rank .wrap .right .state-wrap .state .state-nub-wrap .progressbar .external{width:100%;height:4px;background:rgba(255,255,255,.2)}.status-rank .wrap .right .state-wrap .state .state-nub-wrap .progressbar .external .internal{height:4px}.status-rank .wrap .right .state-wrap .state .state-nub-wrap .number-wrap{height:35px;padding-top:6px}.status-rank .wrap .right .state-wrap .state .state-nub-wrap .number-wrap .number{font-size:18px;font-weight:Medium;text-align:right;line-height:18px;margin-right:6px;font-family:Roboto,Roboto-Medium}.status-rank .background-wrap{position:absolute;top:32px;left:calc(12.5% + 8px);right:0;display:flex}.status-rank .background-wrap .pic-wrap{display:flex;align-items:center}.status-rank .background-wrap .pic-wrap .pic-left{width:4px;height:34px}.status-rank .background-wrap .pic-wrap .pic-mid{width:4px;height:6px;margin:0 2px}.status-rank .background-wrap .middle-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:40px;background:rgba(255,255,255,.01)}.status-rank .background-wrap .middle-wrap .middle-line{width:100%;height:1px;background:rgba(250,251,255,.12)}"]
                    }] }
        ];
        /** @nocollapse */
        StatusRankComponent.ctorParameters = function () {
            return [
                { type: pluginManager.PluginManagerService },
                { type: pluginManager.componentData }
            ];
        };
        StatusRankComponent.propDecorators = {
            tbodyDiv: [{ type: core.ViewChild, args: ["tbody",] }]
        };
        return StatusRankComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StatusRankModule = /** @class */ (function () {
        function StatusRankModule() {
        }
        StatusRankModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [StatusRankComponent],
                        entryComponents: [StatusRankComponent],
                        imports: [common.CommonModule, ngZorroAntd.NgZorroAntdModule],
                        exports: [StatusRankComponent]
                    },] }
        ];
        return StatusRankModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var publicApi = pluginManager.createPlugin({
        name: "status-rank",
        module: StatusRankModule,
        component: StatusRankComponent,
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    return publicApi;

})));

//# sourceMappingURL=status-rank.umd.js.map