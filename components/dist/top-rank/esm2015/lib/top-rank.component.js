/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
export class TopRankComponent {
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
if (false) {
    /** @type {?} */
    TopRankComponent.prototype.tbodyDiv;
    /** @type {?} */
    TopRankComponent.prototype.rowbodyDiv;
    /** @type {?} */
    TopRankComponent.prototype.data;
    /** @type {?} */
    TopRankComponent.prototype.color;
    /**
     * @type {?}
     * @private
     */
    TopRankComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLXJhbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdG9wLXJhbmsvIiwic291cmNlcyI6WyJsaWIvdG9wLXJhbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3JFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBUTNCLFlBQ1Usb0JBQTBDLEVBQ2xELE9BQXNCO1FBRGQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUdsRCxVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLEtBQUssRUFBRTtZQUN2QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzlCLE9BQU07YUFDUDtZQUNELFdBQVc7OztZQUFDLEdBQUcsRUFBRTs7b0JBQ1gsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztnQkFDM0UsTUFBTSxDQUFDLE9BQU87Ozs7O2dCQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUNoQyxPQUFPLENBQUMsT0FBTyxDQUNiO3dCQUNFLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTt3QkFDOUIsRUFBRSxT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IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tcG9uZW50RGF0YSB9IGZyb20gXCJwbHVnaW4tbWFuYWdlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLXRvcC1yYW5rXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vdG9wLXJhbmsuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3RvcC1yYW5rLmNvbXBvbmVudC5zdHlsXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBUb3BSYW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChcInRib2R5XCIpXG4gIHRib2R5RGl2OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwicm93Ym9keVwiKVxuICByb3dib2R5RGl2OiBFbGVtZW50UmVmO1xuICBkYXRhOiBhbnk7XG4gIGNvbG9yOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbHVnaW5NYW5hZ2VyU2VydmljZTogUGx1Z2luTWFuYWdlclNlcnZpY2UsXG4gICAgY29tRGF0YTogY29tcG9uZW50RGF0YVxuICApIHtcbiAgICAvLyDmjqXmlLbkuK3pl7Tku7bkvKDlgLxcbiAgICBjb25zb2xlLmxvZyhcImNvbURhdGFcIiwgY29tRGF0YSk7XG4gICAgdGhpcy5kYXRhID0gY29tRGF0YS5jb25maWdEYXRhLmRhdGE7XG4gICAgdGhpcy5jb2xvciA9IGNvbURhdGEuY29uZmlnRGF0YS5jb2xvcjtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmRhdGEucm9sbGluZ0RpcmVjdGlvbiA9PSAncm93Jykge1xuICAgICAgaWYgKHRoaXMuZGF0YS5saXN0Lmxlbmd0aCA8PSAyKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBsZXQgdHJMaXN0ID0gdGhpcy5yb3dib2R5RGl2Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWNvbmQtd3JhcFwiKTtcbiAgICAgICAgdHJMaXN0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5hbmltYXRlKFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKDApXCIgfSxcbiAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWChjYWxjKC0xMDAlICsgLTIwcHgpKVwiIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgICAgIGl0ZXJhdGlvbnM6IDEsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhLmxpc3QucHVzaCh0aGlzLmRhdGEubGlzdC5zaGlmdCgpKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcm9sbGluZ051bSA9IHRoaXMuZGF0YS5yb2xsaW5nTnVtIHx8IDNcbiAgICAgIGlmICh0aGlzLmRhdGEubGlzdC5sZW5ndGggPD0gcm9sbGluZ051bSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IGFuaW1hdGVFbGVtZW50cyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHRyTGlzdCA9IHRoaXMudGJvZHlEaXYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvdXJ0aC13cmFwXCIpO1xuXG4gICAgICAgIHRyTGlzdC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtMTBweCkgcm90YXRlWCg5MGRlZylcIjtcbiAgICAgICAgICAgIHRyTGlzdFswXS5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLTQ0cHgpXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZGF0YS5saXN0LnB1c2godGhpcy5kYXRhLmxpc3Quc2hpZnQoKSk7XG5cbiAgICAgICAgICB0ckxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCI7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKDAsMClcIjtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgICAgICBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuNXMgZWFzZVwiO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfTtcbiAgICAgIHNldEludGVydmFsKGFuaW1hdGVFbGVtZW50cywgMzAwMCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Qm9keUhlaWdodCgpIHtcbiAgICBjb25zdCByb2xsaW5nTnVtID0gdGhpcy5kYXRhLnJvbGxpbmdOdW07XG4gICAgY29uc3QgbnVtID0gcm9sbGluZ051bSA/IChyb2xsaW5nTnVtICogNDMpICsgJ3B4JyA6ICcxMDAlJztcbiAgICByZXR1cm4gbnVtO1xuICB9XG59XG4iXX0=