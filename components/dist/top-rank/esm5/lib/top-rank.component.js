/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
var TopRankComponent = /** @class */ (function () {
    function TopRankComponent(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    TopRankComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.data.rollingDirection == 'row') {
            if (this.data.list.length <= 2) {
                return;
            }
            setInterval((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var trList = _this.rowbodyDiv.nativeElement.querySelectorAll(".second-wrap");
                trList.forEach((/**
                 * @param {?} element
                 * @param {?} index
                 * @return {?}
                 */
                function (element, index) {
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
                function () {
                    _this.data.list.push(_this.data.list.shift());
                }), 500);
            }), 3000);
        }
        else {
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
                var trList = _this.tbodyDiv.nativeElement.querySelectorAll(".fourth-wrap");
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
                    element.style.transform = "translateY(-44px)";
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
        }
    };
    /**
     * @return {?}
     */
    TopRankComponent.prototype.getBodyHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rollingNum = this.data.rollingNum;
        /** @type {?} */
        var num = rollingNum ? (rollingNum * 43) + 'px' : '100%';
        return num;
    };
    TopRankComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-top-rank",
                    template: "<div class=\"top-rank\">\n  <div class=\"first-wrap\" [style.backgroundImage]=\"\n      'url(' +\n      (data.titleImg || 'assets/top-rank/image/top_rank_header_bg.png') +\n      ')'\n    \">\n    <div class=\"text1\">{{ data.title }}</div>\n    <div class=\"text2\">{{ data.titleValue }}</div>\n    <div class=\"text3 text-ellipsis\">{{ data.titleLabel }}</div>\n  </div>\n\n  <div class=\"secondthird-wrap\" #rowbody *ngIf=\"data.rollingDirection == 'row'\">\n    <div class=\"second-wrap row\" *ngFor=\"let item of data.list\">\n      <div class=\"second-content\">\n        <div class=\"left-line\"></div>\n        <div class=\"right-content\">\n          <div class=\"content-top\">\n            {{ item.lable || 'TOP' }}\n          </div>\n          <div class=\"content-bot\">\n            <div class=\"bot-text text-ellipsis\" [style.fontSize]=\"color.titleValueSize\"\n              [style.color]=\"color.titleValueColor\">\n              {{ item.title }}\n            </div>\n            <div class=\"bot-nub\">{{ item.num }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"secondthird-wrap\" *ngIf=\"data.rollingDirection != 'row'\">\n    <div class=\"second-wrap\">\n      <div class=\"second-content\">\n        <div class=\"left-line\"></div>\n        <div class=\"right-content\">\n          <div class=\"content-top\">\n            {{ data.title1 }}\n          </div>\n          <div class=\"content-bot\">\n            <div class=\"bot-text text-ellipsis\" [style.fontSize]=\"color.titleValueSize\"\n              [style.color]=\"color.titleValueColor\">\n              {{ data.title1Label }}\n            </div>\n            <div class=\"bot-nub\">{{ data.title1Value }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"third-wrap\">\n      <div class=\"second-content\">\n        <div class=\"left-line\"></div>\n        <div class=\"right-content\">\n          <div class=\"content-top\">\n            {{ data.title2 }}\n          </div>\n          <div class=\"content-bot\">\n            <div class=\"bot-text text-ellipsis\" [style.fontSize]=\"color.titleValueSize\"\n              [style.color]=\"color.titleValueColor\">\n              {{ data.title2Label }}\n            </div>\n            <div class=\"bot-nub\">{{ data.title2Value }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"wrap\" #tbody *ngIf=\"data.rollingDirection != 'row'\" [style.height]=\"getBodyHeight()\">\n    <div class=\"fourth-wrap\" *ngFor=\"let item of data.list\">\n      <div class=\"fourth-top\" [style.fontSize]=\"color.listTitleSize\" [style.color]=\"color.listTitleColor\">\n        <!-- <div class=\"top-nub\">04</div> -->\n        <div class=\"top-name text-ellipsis\">\n          {{ item.title }}\n        </div>\n      </div>\n      <div class=\"fourth-bot\">\n        <div class=\"progressbar\">\n          <div class=\"external\" [style.background]=\"\n              color.listProgressColor && color.listProgressColor.length\n                ? color.listProgressColor[1] || 'rgba(255, 255, 255, 0.2)'\n                : 'rgba(255, 255, 255, 0.2)'\n            \">\n            <div class=\"internal\" [style.width]=\"item.progress + '%'\" [style.background]=\"\n                color.listProgressColor && color.listProgressColor.length\n                  ? color.listProgressColor[0] || 'linear-gradient(90deg, rgba(82, 210, 255, 0.4), rgba(109, 217, 255, 0.9) 99%)'\n                  : 'linear-gradient(90deg, rgba(82, 210, 255, 0.4), rgba(109, 217, 255, 0.9) 99%)'\n              \"></div>\n          </div>\n        </div>\n        <div class=\"bot-nub\" [style.fontSize]=\"color.listNumSize\" [style.color]=\"color.listNumColor\">\n          {{ item.num }}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                    styles: [".text-ellipsis{width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.top-rank{width:100%;height:100%;color:#fff;font-family:Roboto,Roboto-Medium}.top-rank .first-wrap{margin-bottom:20px;width:100%;height:120px;background:url(/assets/top-rank/image/top_rank_header_bg.png) 0 0/100% 100% no-repeat;display:flex;flex-direction:column;justify-content:center;align-items:center}.top-rank .first-wrap .text1{font-size:14px;font-weight:Medium;text-align:center;color:#ffbf59;line-height:14px}.top-rank .first-wrap .text2{font-size:24px;font-weight:Medium;text-align:center;color:#ff435b;line-height:20px;margin-top:10px;margin-bottom:10px}.top-rank .first-wrap .text3{font-size:14px;font-weight:Medium;text-align:center;color:#fff;line-height:14px}.top-rank .wrap{overflow:hidden}.top-rank .secondthird-wrap{display:flex;overflow:hidden;margin-bottom:10px}.top-rank .secondthird-wrap .row{flex-shrink:0;width:calc(50% - 10px)!important}.top-rank .secondthird-wrap .second-wrap{width:50%;margin-right:20px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.4)}.top-rank .secondthird-wrap .second-wrap .second-content{display:flex}.top-rank .secondthird-wrap .second-wrap .second-content .left-line{position:relative;width:1px;height:40px;background:rgba(255,255,255,.2)}.top-rank .secondthird-wrap .second-wrap .second-content .left-line::before{content:'';position:absolute;left:0;top:0;width:4px;height:14px;background:#52d2ff}.top-rank .secondthird-wrap .second-wrap .second-content .right-content{width:100%;margin-left:10px}.top-rank .secondthird-wrap .second-wrap .second-content .right-content .content-top{font-size:14px;font-weight:Medium;text-align:left;color:#52d2ff;line-height:14px;margin-bottom:12px}.top-rank .secondthird-wrap .second-wrap .second-content .right-content .content-bot{display:flex;align-items:center;justify-content:space-between}.top-rank .secondthird-wrap .second-wrap .second-content .right-content .content-bot .bot-text{font-size:14px;font-weight:Regular;text-align:left;color:#fff;line-height:14px}.top-rank .secondthird-wrap .second-wrap .second-content .right-content .content-bot .bot-nub{font-size:20px;font-weight:Medium;text-align:right;color:#fafbff;line-height:20px}.top-rank .secondthird-wrap .third-wrap{width:50%;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.4)}.top-rank .secondthird-wrap .third-wrap .second-content{display:flex}.top-rank .secondthird-wrap .third-wrap .second-content .left-line{position:relative;width:1px;height:40px;background:rgba(255,255,255,.2)}.top-rank .secondthird-wrap .third-wrap .second-content .left-line::before{content:'';position:absolute;left:0;top:0;width:4px;height:14px;background:#52d2ff}.top-rank .secondthird-wrap .third-wrap .second-content .right-content{width:100%;margin-left:10px}.top-rank .secondthird-wrap .third-wrap .second-content .right-content .content-top{font-size:14px;font-weight:Medium;text-align:left;color:#52d2ff;line-height:14px;margin-bottom:12px}.top-rank .secondthird-wrap .third-wrap .second-content .right-content .content-bot{display:flex;align-items:center;justify-content:space-between}.top-rank .secondthird-wrap .third-wrap .second-content .right-content .content-bot .bot-text{font-size:14px;font-weight:Regular;text-align:left;color:#fff;line-height:14px}.top-rank .secondthird-wrap .third-wrap .second-content .right-content .content-bot .bot-nub{font-size:20px;font-weight:Medium;text-align:right;color:#fafbff;line-height:20px;margin-top:-2px}.top-rank .swiper-container{width:100%;height:150px}.top-rank .fourth-wrap{display:flex;flex-direction:column;transition:.5s;justify-content:center;margin-top:10px}.top-rank .fourth-wrap .fourth-top{display:flex}.top-rank .fourth-wrap .fourth-top .top-nub{font-size:14px;font-weight:Medium;text-align:left;color:#fff;line-height:14px;margin-right:8px}.top-rank .fourth-wrap .fourth-top .top-name{font-size:14px;font-weight:Regular;text-align:left;color:#fff;line-height:14px}.top-rank .fourth-wrap .fourth-bot{display:flex;align-items:center}.top-rank .fourth-wrap .fourth-bot .progressbar{flex-grow:1}.top-rank .fourth-wrap .fourth-bot .progressbar .external{height:6px;background:rgba(255,255,255,.2)}.top-rank .fourth-wrap .fourth-bot .progressbar .external .internal{height:6px;background:linear-gradient(90deg,rgba(82,210,255,.4),rgba(109,217,255,.9) 99%)}.top-rank .fourth-wrap .fourth-bot .bot-nub{font-size:18px;font-weight:Medium;text-align:right;color:#fafbff;line-height:20px;width:55px}"]
                }] }
    ];
    /** @nocollapse */
    TopRankComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    TopRankComponent.propDecorators = {
        tbodyDiv: [{ type: ViewChild, args: ["tbody",] }],
        rowbodyDiv: [{ type: ViewChild, args: ["rowbody",] }]
    };
    return TopRankComponent;
}());
export { TopRankComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLXJhbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vdG9wLXJhbmsvIiwic291cmNlcyI6WyJsaWIvdG9wLXJhbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJFO0lBYUUsMEJBQ1Usb0JBQTBDLEVBQ2xELE9BQXNCO1FBRGQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUdsRCxVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFBQSxpQkF3REM7UUF2REMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixJQUFJLEtBQUssRUFBRTtZQUN2QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzlCLE9BQU07YUFDUDtZQUNELFdBQVc7OztZQUFDOztvQkFDTixNQUFNLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO2dCQUMzRSxNQUFNLENBQUMsT0FBTzs7Ozs7Z0JBQUMsVUFBQyxPQUFPLEVBQUUsS0FBSztvQkFDNUIsT0FBTyxDQUFDLE9BQU8sQ0FDYjt3QkFDRSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7d0JBQzlCLEVBQUUsU0FBUyxFQUFFLGlDQUFpQyxFQUFF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SW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21wb25lbnREYXRhIH0gZnJvbSBcInBsdWdpbi1tYW5hZ2VyXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItdG9wLXJhbmtcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi90b3AtcmFuay5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vdG9wLXJhbmsuY29tcG9uZW50LnN0eWxcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFRvcFJhbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFwidGJvZHlcIilcbiAgdGJvZHlEaXY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJyb3dib2R5XCIpXG4gIHJvd2JvZHlEaXY6IEVsZW1lbnRSZWY7XG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBsdWdpbk1hbmFnZXJTZXJ2aWNlOiBQbHVnaW5NYW5hZ2VyU2VydmljZSxcbiAgICBjb21EYXRhOiBjb21wb25lbnREYXRhXG4gICkge1xuICAgIC8vIOaOpeaUtuS4remXtOS7tuS8oOWAvFxuICAgIGNvbnNvbGUubG9nKFwiY29tRGF0YVwiLCBjb21EYXRhKTtcbiAgICB0aGlzLmRhdGEgPSBjb21EYXRhLmNvbmZpZ0RhdGEuZGF0YTtcbiAgICB0aGlzLmNvbG9yID0gY29tRGF0YS5jb25maWdEYXRhLmNvbG9yO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5yb2xsaW5nRGlyZWN0aW9uID09ICdyb3cnKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmxpc3QubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGxldCB0ckxpc3QgPSB0aGlzLnJvd2JvZHlEaXYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlY29uZC13cmFwXCIpO1xuICAgICAgICB0ckxpc3QuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBlbGVtZW50LmFuaW1hdGUoXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoMClcIiB9LFxuICAgICAgICAgICAgICB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVYKGNhbGMoLTEwMCUgKyAtMjBweCkpXCIgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwMCxcbiAgICAgICAgICAgICAgaXRlcmF0aW9uczogMSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRhdGEubGlzdC5wdXNoKHRoaXMuZGF0YS5saXN0LnNoaWZ0KCkpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCByb2xsaW5nTnVtID0gdGhpcy5kYXRhLnJvbGxpbmdOdW0gfHwgM1xuICAgICAgaWYgKHRoaXMuZGF0YS5saXN0Lmxlbmd0aCA8PSByb2xsaW5nTnVtKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgYW5pbWF0ZUVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICBsZXQgdHJMaXN0ID0gdGhpcy50Ym9keURpdi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm91cnRoLXdyYXBcIik7XG5cbiAgICAgICAgdHJMaXN0LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC0xMHB4KSByb3RhdGVYKDkwZGVnKVwiO1xuICAgICAgICAgICAgdHJMaXN0WzBdLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtNDRweClcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kYXRhLmxpc3QucHVzaCh0aGlzLmRhdGEubGlzdC5zaGlmdCgpKTtcblxuICAgICAgICAgIHRyTGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoMCwwKVwiO1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICAgIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC41cyBlYXNlXCI7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9O1xuICAgICAgc2V0SW50ZXJ2YWwoYW5pbWF0ZUVsZW1lbnRzLCAzMDAwKTtcbiAgICB9XG4gIH1cblxuICBnZXRCb2R5SGVpZ2h0KCkge1xuICAgIGNvbnN0IHJvbGxpbmdOdW0gPSB0aGlzLmRhdGEucm9sbGluZ051bTtcbiAgICBjb25zdCBudW0gPSByb2xsaW5nTnVtID8gKHJvbGxpbmdOdW0gKiA0MykgKyAncHgnIDogJzEwMCUnO1xuICAgIHJldHVybiBudW07XG4gIH1cbn1cbiJdfQ==