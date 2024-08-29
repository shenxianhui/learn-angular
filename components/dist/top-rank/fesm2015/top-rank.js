import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, ViewChild, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TopRankComponent {
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
        if (this.data.rollingDirection == 'row') {
            if (this.data.list.length <= 2) {
                return;
            }
            setInterval((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let trList = this.rowbodyDiv.nativeElement.querySelectorAll(".second-wrap");
                trList.forEach((/**
                 * @param {?} element
                 * @param {?} index
                 * @return {?}
                 */
                (element, index) => {
                    element.animate([
                        { transform: "translateX(0)" },
                        { transform: "translateX(calc(-100% + -20px))" }
                    ], {
                        duration: 500,
                        iterations: 1,
                    });
                }));
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.data.list.push(this.data.list.shift());
                }), 500);
            }), 3000);
        }
        else {
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
                let trList = this.tbodyDiv.nativeElement.querySelectorAll(".fourth-wrap");
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
                    element.style.transform = "translateY(-44px)";
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
TopRankComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-top-rank",
                template: "<div class=\"top-rank\">\n  <div class=\"first-wrap\" [style.backgroundImage]=\"\n      'url(' +\n      (data.titleImg || 'assets/top-rank/image/top_rank_header_bg.png') +\n      ')'\n    \">\n    <div class=\"text1\">{{ data.title }}</div>\n    <div class=\"text2\">{{ data.titleValue }}</div>\n    <div class=\"text3 text-ellipsis\">{{ data.titleLabel }}</div>\n  </div>\n\n  <div class=\"secondthird-wrap\" #rowbody *ngIf=\"data.rollingDirection == 'row'\">\n    <div class=\"second-wrap row\" *ngFor=\"let item of data.list\">\n      <div class=\"second-content\">\n        <div class=\"left-line\"></div>\n        <div class=\"right-content\">\n          <div class=\"content-top\">\n            {{ item.lable || 'TOP' }}\n          </div>\n          <div class=\"content-bot\">\n            <div class=\"bot-text text-ellipsis\" [style.fontSize]=\"color.titleValueSize\"\n              [style.color]=\"color.titleValueColor\">\n              {{ item.title }}\n            </div>\n            <div class=\"bot-nub\">{{ item.num }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"secondthird-wrap\" *ngIf=\"data.rollingDirection != 'row'\">\n    <div class=\"second-wrap\">\n      <div class=\"second-content\">\n        <div class=\"left-line\"></div>\n        <div class=\"right-content\">\n          <div class=\"content-top\">\n            {{ data.title1 }}\n          </div>\n          <div class=\"content-bot\">\n            <div class=\"bot-text text-ellipsis\" [style.fontSize]=\"color.titleValueSize\"\n              [style.color]=\"color.titleValueColor\">\n              {{ data.title1Label }}\n            </div>\n            <div class=\"bot-nub\">{{ data.title1Value }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"third-wrap\">\n      <div class=\"second-content\">\n        <div class=\"left-line\"></div>\n        <div class=\"right-content\">\n          <div class=\"content-top\">\n            {{ data.title2 }}\n          </div>\n          <div class=\"content-bot\">\n            <div class=\"bot-text text-ellipsis\" [style.fontSize]=\"color.titleValueSize\"\n              [style.color]=\"color.titleValueColor\">\n              {{ data.title2Label }}\n            </div>\n            <div class=\"bot-nub\">{{ data.title2Value }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"wrap\" #tbody *ngIf=\"data.rollingDirection != 'row'\" [style.height]=\"getBodyHeight()\">\n    <div class=\"fourth-wrap\" *ngFor=\"let item of data.list\">\n      <div class=\"fourth-top\" [style.fontSize]=\"color.listTitleSize\" [style.color]=\"color.listTitleColor\">\n        <!-- <div class=\"top-nub\">04</div> -->\n        <div class=\"top-name text-ellipsis\">\n          {{ item.title }}\n        </div>\n      </div>\n      <div class=\"fourth-bot\">\n        <div class=\"progressbar\">\n          <div class=\"external\" [style.background]=\"\n              color.listProgressColor && color.listProgressColor.length\n                ? color.listProgressColor[1] || 'rgba(255, 255, 255, 0.2)'\n                : 'rgba(255, 255, 255, 0.2)'\n            \">\n            <div class=\"internal\" [style.width]=\"item.progress + '%'\" [style.background]=\"\n                color.listProgressColor && color.listProgressColor.length\n                  ? color.listProgressColor[0] || 'linear-gradient(90deg, rgba(82, 210, 255, 0.4), rgba(109, 217, 255, 0.9) 99%)'\n                  : 'linear-gradient(90deg, rgba(82, 210, 255, 0.4), rgba(109, 217, 255, 0.9) 99%)'\n              \"></div>\n          </div>\n        </div>\n        <div class=\"bot-nub\" [style.fontSize]=\"color.listNumSize\" [style.color]=\"color.listNumColor\">\n          {{ item.num }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                styles: [".text-ellipsis{width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.top-rank{width:100%;height:100%;color:#fff;font-family:Roboto,Roboto-Medium}.top-rank .first-wrap{margin-bottom:20px;width:100%;height:120px;background:url(/assets/top-rank/image/top_rank_header_bg.png) 0 0/100% 100% no-repeat;display:flex;flex-direction:column;justify-content:center;align-items:center}.top-rank .first-wrap .text1{font-size:14px;font-weight:Medium;text-align:center;color:#ffbf59;line-height:14px}.top-rank .first-wrap .text2{font-size:24px;font-weight:Medium;text-align:center;color:#ff435b;line-height:20px;margin-top:10px;margin-bottom:10px}.top-rank .first-wrap .text3{font-size:14px;font-weight:Medium;text-align:center;color:#fff;line-height:14px}.top-rank .wrap{overflow:hidden}.top-rank .secondthird-wrap{display:flex;overflow:hidden;margin-bottom:10px}.top-rank .secondthird-wrap .row{flex-shrink:0;width:calc(50% - 10px)!important}.top-rank .secondthird-wrap .second-wrap{width:50%;margin-right:20px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.4)}.top-rank .secondthird-wrap .second-wrap .second-content{display:flex}.top-rank .secondthird-wrap .second-wrap .second-content .left-line{position:relative;width:1px;height:40px;background:rgba(255,255,255,.2)}.top-rank .secondthird-wrap .second-wrap .second-content .left-line::before{content:'';position:absolute;left:0;top:0;width:4px;height:14px;background:#52d2ff}.top-rank .secondthird-wrap .second-wrap .second-content .right-content{width:100%;margin-left:10px}.top-rank .secondthird-wrap .second-wrap .second-content .right-content .content-top{font-size:14px;font-weight:Medium;text-align:left;color:#52d2ff;line-height:14px;margin-bottom:12px}.top-rank .secondthird-wrap .second-wrap .second-content .right-content .content-bot{display:flex;align-items:center;justify-content:space-between}.top-rank .secondthird-wrap .second-wrap .second-content .right-content .content-bot .bot-text{font-size:14px;font-weight:Regular;text-align:left;color:#fff;line-height:14px}.top-rank .secondthird-wrap .second-wrap .second-content .right-content .content-bot .bot-nub{font-size:20px;font-weight:Medium;text-align:right;color:#fafbff;line-height:20px}.top-rank .secondthird-wrap .third-wrap{width:50%;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.4)}.top-rank .secondthird-wrap .third-wrap .second-content{display:flex}.top-rank .secondthird-wrap .third-wrap .second-content .left-line{position:relative;width:1px;height:40px;background:rgba(255,255,255,.2)}.top-rank .secondthird-wrap .third-wrap .second-content .left-line::before{content:'';position:absolute;left:0;top:0;width:4px;height:14px;background:#52d2ff}.top-rank .secondthird-wrap .third-wrap .second-content .right-content{width:100%;margin-left:10px}.top-rank .secondthird-wrap .third-wrap .second-content .right-content .content-top{font-size:14px;font-weight:Medium;text-align:left;color:#52d2ff;line-height:14px;margin-bottom:12px}.top-rank .secondthird-wrap .third-wrap .second-content .right-content .content-bot{display:flex;align-items:center;justify-content:space-between}.top-rank .secondthird-wrap .third-wrap .second-content .right-content .content-bot .bot-text{font-size:14px;font-weight:Regular;text-align:left;color:#fff;line-height:14px}.top-rank .secondthird-wrap .third-wrap .second-content .right-content .content-bot .bot-nub{font-size:20px;font-weight:Medium;text-align:right;color:#fafbff;line-height:20px;margin-top:-2px}.top-rank .swiper-container{width:100%;height:150px}.top-rank .fourth-wrap{display:flex;flex-direction:column;transition:.5s;justify-content:center;margin-top:10px}.top-rank .fourth-wrap .fourth-top{display:flex}.top-rank .fourth-wrap .fourth-top .top-nub{font-size:14px;font-weight:Medium;text-align:left;color:#fff;line-height:14px;margin-right:8px}.top-rank .fourth-wrap .fourth-top .top-name{font-size:14px;font-weight:Regular;text-align:left;color:#fff;line-height:14px}.top-rank .fourth-wrap .fourth-bot{display:flex;align-items:center}.top-rank .fourth-wrap .fourth-bot .progressbar{flex-grow:1}.top-rank .fourth-wrap .fourth-bot .progressbar .external{height:6px;background:rgba(255,255,255,.2)}.top-rank .fourth-wrap .fourth-bot .progressbar .external .internal{height:6px;background:linear-gradient(90deg,rgba(82,210,255,.4),rgba(109,217,255,.9) 99%)}.top-rank .fourth-wrap .fourth-bot .bot-nub{font-size:18px;font-weight:Medium;text-align:right;color:#fafbff;line-height:20px;width:55px}"]
            }] }
];
/** @nocollapse */
TopRankComponent.ctorParameters = () => [
    { type: PluginManagerService },
    { type: componentData }
];
TopRankComponent.propDecorators = {
    tbodyDiv: [{ type: ViewChild, args: ["tbody",] }],
    rowbodyDiv: [{ type: ViewChild, args: ["rowbody",] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TopRankModule {
}
TopRankModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TopRankComponent],
                entryComponents: [TopRankComponent],
                imports: [CommonModule, NgZorroAntdModule],
                exports: [TopRankComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var publicApi = createPlugin({
    name: "top-rank",
    module: TopRankModule,
    component: TopRankComponent,
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export default publicApi;

//# sourceMappingURL=top-rank.js.map