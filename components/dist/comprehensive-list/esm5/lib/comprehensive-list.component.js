/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, ElementRef } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
/**
 * @record
 */
function ThemeData() { }
if (false) {
    /** @type {?|undefined} */
    ThemeData.prototype.color;
    /** @type {?|undefined} */
    ThemeData.prototype.backgroundColor;
}
/**
 * @record
 */
function ColorData() { }
if (false) {
    /** @type {?|undefined} */
    ColorData.prototype.colType;
    /** @type {?|undefined} */
    ColorData.prototype.themeMap;
}
var ComprehensiveListComponent = /** @class */ (function () {
    function ComprehensiveListComponent(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = tslib_1.__assign({ viewNum: 5, colType: ["dot", "icon", "text", "text"], themeMap: {
                red: {
                    color: "#FF435B",
                    backgroundColor: "#FF435B",
                },
                yellow: {
                    color: "#FFBF59",
                    backgroundColor: "#FFBF59",
                },
                blue: {
                    color: "#52D2FF",
                    backgroundColor: "#52D2FF",
                },
            } }, (comData.configData.color || {}));
    }
    /**
     * @return {?}
     */
    ComprehensiveListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var viewNum = this.color.viewNum || 5;
        if (this.data.td.length <= viewNum) {
            return;
        }
        /** @type {?} */
        var animateElements = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var trList = _this.tbodyDiv.nativeElement.querySelectorAll(".second-wrap");
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
                _this.data.td.push(_this.data.td.shift());
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
                    element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
                }));
            }), 300);
        });
        setInterval(animateElements, 3000);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ComprehensiveListComponent.prototype.getTheme = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var colorData = this.color;
        /** @type {?} */
        var themes = Object.entries(colorData.themeMap || {}).map((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var key = item[0];
            /** @type {?} */
            var val = item[1] || {};
            return {
                name: key,
                data: val,
            };
        }));
        /** @type {?} */
        var data = themes.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.name === name; }));
        return data ? data.data : {};
    };
    /**
     * @param {?} iconName
     * @return {?}
     */
    ComprehensiveListComponent.prototype.getCountryIcon = /**
     * @param {?} iconName
     * @return {?}
     */
    function (iconName) {
        return "assets/comprehensive-list/image/" + iconName + ".png";
    };
    /**
     * @return {?}
     */
    ComprehensiveListComponent.prototype.getBodyHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var dataLength = this.data.td.length;
        /** @type {?} */
        var viewNum = this.color.viewNum;
        /** @type {?} */
        var num = dataLength > viewNum ? viewNum : dataLength;
        /** @type {?} */
        var hPx = 43 + viewNum * 43 + "px"
        // return num * 31 + (num - 1) * 10 + "px";
        ;
        // return num * 31 + (num - 1) * 10 + "px";
        return viewNum ? hPx : '100%';
    };
    ComprehensiveListComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-comprehensive-list",
                    template: "<div class=\"main\" [style.height]=\"getBodyHeight()\">\n  <table>\n    <thead>\n      <tr>\n        <th *ngFor=\"let item of data.th; let index = index\">\n          <div [class.tar]=\"index === data.th.length - 1\">{{ item }}</div>\n        </th>\n      </tr>\n    </thead>\n    <tbody #tbody>\n      <tr class=\"second-wrap\" *ngFor=\"let trItm of data.td; let trIdx = index\">\n        <td *ngFor=\"\n            let colItm of color.colType || ['dot', 'icon', 'text', 'text'];\n            let colIdx = index\n          \" [class.tar]=\"colIdx === data.th.length - 1\">\n          <div *ngIf=\"colItm === 'dot'\" class=\"aic\">\n            <div class=\"tag\" [style.backgroundColor]=\"getTheme(trItm.data[colIdx].themeKey).color || '#ffffff'\"></div>\n            {{ trItm.data[colIdx].value }}\n          </div>\n          <!-- <div *ngIf=\"colItm === 'icon'\" class=\"mr10 ml-2\"> -->\n          <div *ngIf=\"colItm === 'icon'\" class=\"\">\n            <div class=\"group\">\n              <img class=\"flag\" [src]=\"getCountryIcon(trItm.data[colIdx].iconName)\" alt=\"\" />\n              {{ trItm.data[colIdx].value || '\u540D\u79F0' }}\n            </div>\n          </div>\n          <div *ngIf=\"colItm === 'text'\" class=\"\"\n            [style.color]=\"getTheme(trItm.data[colIdx].themeKey).color || '#ffffff'\">\n            {{ trItm.data[colIdx].value }}\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
                    styles: [".theme1-color{color:#ff435b}.theme1-bgColor{background:#ff435b}.theme2-color{color:#ffbf59}.theme2-bgColor{background:#ffbf59}.theme3-color{color:#52d2ff}.theme3-bgColor{background:#52d2ff}.theme4-color{color:#50ffcc}.theme4-bgColor{background:#50ffcc}.theme5-color{color:#fff}.theme5-bgColor{background:#fff}.aic{display:flex;align-items:center}.main{width:100%;height:100%;overflow:hidden}.main table{color:#fff;border-collapse:collapse;width:100%}.main table tbody{overflow:hidden}.main table tr th{text-align:left}.main table tr th div{padding:5px 10px;border-bottom:1px solid rgba(255,255,255,.4);margin-bottom:15px;font-size:14px;font-family:PingFang SC,PingFang SC-Regular;font-weight:400;color:rgba(255,255,255,.8)}.main table tr td>div{padding:5px 10px;background:rgba(255,255,255,.1);margin-bottom:10px}.main table tr td .tag{width:5px;height:5px;border-radius:50%;margin-right:8px}.main table tr td .group{display:flex;align-items:center}.main table tr td .group .flag{width:20px;height:14px;margin-right:5px}.main .mr10{margin-right:10px}.main .ml-2{margin-left:-2px}.main .tar{text-align:right}.second-wrap{transition:transform .5s ease-in-out,opacity .3s ease-in-out}"]
                }] }
    ];
    /** @nocollapse */
    ComprehensiveListComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    ComprehensiveListComponent.propDecorators = {
        tbodyDiv: [{ type: ViewChild, args: ["tbody",] }]
    };
    return ComprehensiveListComponent;
}());
export { ComprehensiveListComponent };
if (false) {
    /** @type {?} */
    ComprehensiveListComponent.prototype.tbodyDiv;
    /** @type {?} */
    ComprehensiveListComponent.prototype.data;
    /** @type {?} */
    ComprehensiveListComponent.prototype.color;
    /**
     * @type {?}
     * @private
     */
    ComprehensiveListComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHJlaGVuc2l2ZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXByZWhlbnNpdmUtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wcmVoZW5zaXZlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUVyRSx3QkFHQzs7O0lBRkMsMEJBQWU7O0lBQ2Ysb0NBQXlCOzs7OztBQUUzQix3QkFHQzs7O0lBRkMsNEJBQXdCOztJQUN4Qiw2QkFBa0I7O0FBRXBCO0lBV0Usb0NBQ1Usb0JBQTBDLEVBQ2xELE9BQXNCO1FBRGQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUdsRCxVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxzQkFDUixPQUFPLEVBQUUsQ0FBQyxFQUNWLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUN4QyxRQUFRLEVBQUU7Z0JBQ1IsR0FBRyxFQUFFO29CQUNILEtBQUssRUFBRSxTQUFTO29CQUNoQixlQUFlLEVBQUUsU0FBUztpQkFDM0I7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxTQUFTO29CQUNoQixlQUFlLEVBQUUsU0FBUztpQkFDM0I7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxTQUFTO29CQUNoQixlQUFlLEVBQUUsU0FBUztpQkFDM0I7YUFDRixJQUNFLENBQUMsT0FBTyxDQUFDLFVB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SyxDQUFDLE9BQU87O1lBQzVCLEdBQUcsR0FBRyxVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVU7O1lBQ25ELEdBQUcsR0FBRyxFQUFFLEdBQUcsT0FBTyxHQUFHLEVBQUUsR0FBRyxJQUFJO1FBRWxDLDJDQUEyQzs7UUFBM0MsMkNBQTJDO1FBQzNDLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNoQyxDQUFDOztnQkF0R0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLHk3Q0FBa0Q7O2lCQUVuRDs7OztnQkFkUSxvQkFBb0I7Z0JBQUUsYUFBYTs7OzJCQWdCekMsU0FBUyxTQUFDLE9BQU87O0lBaUdwQixpQ0FBQztDQUFBLEFBdkdELElBdUdDO1NBbEdZLDBCQUEwQjs7O0lBQ3JDLDhDQUNxQjs7SUFDckIsMENBQVU7O0lBQ1YsMkNBQVc7Ozs7O0lBR1QsMERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tcG9uZW50RGF0YSB9IGZyb20gXCJwbHVnaW4tbWFuYWdlclwiO1xuXG5pbnRlcmZhY2UgVGhlbWVEYXRhIHtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbn1cbmludGVyZmFjZSBDb2xvckRhdGEge1xuICBjb2xUeXBlPzogQXJyYXk8c3RyaW5nPjtcbiAgdGhlbWVNYXA/OiBzdHJpbmc7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLWNvbXByZWhlbnNpdmUtbGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NvbXByZWhlbnNpdmUtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY29tcHJlaGVuc2l2ZS1saXN0LmNvbXBvbmVudC5zdHlsXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wcmVoZW5zaXZlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJ0Ym9keVwiKVxuICB0Ym9keURpdjogRWxlbWVudFJlZjtcbiAgZGF0YTogYW55O1xuICBjb2xvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLFxuICAgIGNvbURhdGE6IGNvbXBvbmVudERhdGFcbiAgKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YS5kYXRhO1xuICAgIHRoaXMuY29sb3IgPSB7XG4gICAgICB2aWV3TnVtOiA1LFxuICAgICAgY29sVHlwZTogW1wiZG90XCIsIFwiaWNvblwiLCBcInRleHRcIiwgXCJ0ZXh0XCJdLFxuICAgICAgdGhlbWVNYXA6IHtcbiAgICAgICAgcmVkOiB7XG4gICAgICAgICAgY29sb3I6IFwiI0ZGNDM1QlwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkY0MzVCXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHllbGxvdzoge1xuICAgICAgICAgIGNvbG9yOiBcIiNGRkJGNTlcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQkY1OVwiLFxuICAgICAgICB9LFxuICAgICAgICBibHVlOiB7XG4gICAgICAgICAgY29sb3I6IFwiIzUyRDJGRlwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTJEMkZGXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgLi4uKGNvbURhdGEuY29uZmlnRGF0YS5jb2xvciB8fCB7fSksXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCB2aWV3TnVtID0gdGhpcy5jb2xvci52aWV3TnVtIHx8IDU7XG4gICAgaWYgKHRoaXMuZGF0YS50ZC5sZW5ndGggPD0gdmlld051bSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhbmltYXRlRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0ckxpc3QgPSB0aGlzLnRib2R5RGl2Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWNvbmQtd3JhcFwiKTtcblxuXG4gICAgICB0ckxpc3QuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtMTBweCkgcm90YXRlWCg5MGRlZylcIjtcbiAgICAgICAgICB0ckxpc3RbMF0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC00M3B4KVwiO1xuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEudGQucHVzaCh0aGlzLmRhdGEudGQuc2hpZnQoKSk7XG5cbiAgICAgICAgdHJMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKDAsMClcIjtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjVzIGVhc2UsIG9wYWNpdHkgMC41cyBlYXNlXCI7XG4gICAgICAgIH0pO1xuICAgICAgfSwgMzAwKTtcbiAgICB9O1xuICAgIHNldEludGVydmFsKGFuaW1hdGVFbGVtZW50cywgMzAwMCk7XG5cblxuICB9XG5cbiAgZ2V0VGhlbWUobmFtZTogc3RyaW5nKTogVGhlbWVEYXRhIHtcbiAgICBjb25zdCBjb2xvckRhdGE6IENvbG9yRGF0YSA9IHRoaXMuY29sb3I7XG4gICAgY29uc3QgdGhlbWVzID0gT2JqZWN0LmVudHJpZXMoY29sb3JEYXRhLnRoZW1lTWFwIHx8IHt9KS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGl0ZW1bMF07XG4gICAgICBjb25zdCB2YWwgPSBpdGVtWzFdIHx8IHt9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgIGRhdGE6IHZhbCxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IHRoZW1lcy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIGRhdGEgPyBkYXRhLmRhdGEgOiB7fTtcbiAgfVxuICBnZXRDb3VudHJ5SWNvbihpY29uTmFtZSkge1xuICAgIHJldHVybiBgYXNzZXRzL2NvbXByZWhlbnNpdmUtbGlzdC9pbWFnZS8ke2ljb25OYW1lfS5wbmdgO1xuICB9XG5cbiAgZ2V0Qm9keUhlaWdodCgpIHtcbiAgICBjb25zdCBkYXRhTGVuZ3RoID0gdGhpcy5kYXRhLnRkLmxlbmd0aDtcbiAgICBjb25zdCB2aWV3TnVtID0gdGhpcy5jb2xvci52aWV3TnVtO1xuICAgIGNvbnN0IG51bSA9IGRhdGFMZW5ndGggPiB2aWV3TnVtID8gdmlld051bSA6IGRhdGFMZW5ndGg7XG4gICAgbGV0IGhQeCA9IDQzICsgdmlld051bSAqIDQzICsgXCJweFwiXG5cbiAgICAvLyByZXR1cm4gbnVtICogMzEgKyAobnVtIC0gMSkgKiAxMCArIFwicHhcIjtcbiAgICByZXR1cm4gdmlld051bSA/IGhQeCA6ICcxMDAlJztcbiAgfVxufVxuIl19