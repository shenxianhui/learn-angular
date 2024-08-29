/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ComprehensiveListComponent {
    /**
     * @param {?} pluginManagerService
     * @param {?} comData
     */
    constructor(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = Object.assign({ viewNum: 5, colType: ["dot", "icon", "text", "text"], themeMap: {
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
    ngOnInit() {
        /** @type {?} */
        let viewNum = this.color.viewNum || 5;
        if (this.data.td.length <= viewNum) {
            return;
        }
        /** @type {?} */
        const animateElements = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const trList = this.tbodyDiv.nativeElement.querySelectorAll(".second-wrap");
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
                this.data.td.push(this.data.td.shift());
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
                    element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
                }));
            }), 300);
        });
        setInterval(animateElements, 3000);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    getTheme(name) {
        /** @type {?} */
        const colorData = this.color;
        /** @type {?} */
        const themes = Object.entries(colorData.themeMap || {}).map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            const key = item[0];
            /** @type {?} */
            const val = item[1] || {};
            return {
                name: key,
                data: val,
            };
        }));
        /** @type {?} */
        const data = themes.find((/**
         * @param {?} item
         * @return {?}
         */
        (item) => item.name === name));
        return data ? data.data : {};
    }
    /**
     * @param {?} iconName
     * @return {?}
     */
    getCountryIcon(iconName) {
        return `assets/comprehensive-list/image/${iconName}.png`;
    }
    /**
     * @return {?}
     */
    getBodyHeight() {
        /** @type {?} */
        const dataLength = this.data.td.length;
        /** @type {?} */
        const viewNum = this.color.viewNum;
        /** @type {?} */
        const num = dataLength > viewNum ? viewNum : dataLength;
        /** @type {?} */
        let hPx = 43 + viewNum * 43 + "px"
        // return num * 31 + (num - 1) * 10 + "px";
        ;
        // return num * 31 + (num - 1) * 10 + "px";
        return viewNum ? hPx : '100%';
    }
}
ComprehensiveListComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-comprehensive-list",
                template: "<div class=\"main\" [style.height]=\"getBodyHeight()\">\n  <table>\n    <thead>\n      <tr>\n        <th *ngFor=\"let item of data.th; let index = index\">\n          <div [class.tar]=\"index === data.th.length - 1\">{{ item }}</div>\n        </th>\n      </tr>\n    </thead>\n    <tbody #tbody>\n      <tr class=\"second-wrap\" *ngFor=\"let trItm of data.td; let trIdx = index\">\n        <td *ngFor=\"\n            let colItm of color.colType || ['dot', 'icon', 'text', 'text'];\n            let colIdx = index\n          \" [class.tar]=\"colIdx === data.th.length - 1\">\n          <div *ngIf=\"colItm === 'dot'\" class=\"aic\">\n            <div class=\"tag\" [style.backgroundColor]=\"getTheme(trItm.data[colIdx].themeKey).color || '#ffffff'\"></div>\n            {{ trItm.data[colIdx].value }}\n          </div>\n          <!-- <div *ngIf=\"colItm === 'icon'\" class=\"mr10 ml-2\"> -->\n          <div *ngIf=\"colItm === 'icon'\" class=\"\">\n            <div class=\"group\">\n              <img class=\"flag\" [src]=\"getCountryIcon(trItm.data[colIdx].iconName)\" alt=\"\" />\n              {{ trItm.data[colIdx].value || '\u540D\u79F0' }}\n            </div>\n          </div>\n          <div *ngIf=\"colItm === 'text'\" class=\"\"\n            [style.color]=\"getTheme(trItm.data[colIdx].themeKey).color || '#ffffff'\">\n            {{ trItm.data[colIdx].value }}\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
                styles: [".theme1-color{color:#ff435b}.theme1-bgColor{background:#ff435b}.theme2-color{color:#ffbf59}.theme2-bgColor{background:#ffbf59}.theme3-color{color:#52d2ff}.theme3-bgColor{background:#52d2ff}.theme4-color{color:#50ffcc}.theme4-bgColor{background:#50ffcc}.theme5-color{color:#fff}.theme5-bgColor{background:#fff}.aic{display:flex;align-items:center}.main{width:100%;height:100%;overflow:hidden}.main table{color:#fff;border-collapse:collapse;width:100%}.main table tbody{overflow:hidden}.main table tr th{text-align:left}.main table tr th div{padding:5px 10px;border-bottom:1px solid rgba(255,255,255,.4);margin-bottom:15px;font-size:14px;font-family:PingFang SC,PingFang SC-Regular;font-weight:400;color:rgba(255,255,255,.8)}.main table tr td>div{padding:5px 10px;background:rgba(255,255,255,.1);margin-bottom:10px}.main table tr td .tag{width:5px;height:5px;border-radius:50%;margin-right:8px}.main table tr td .group{display:flex;align-items:center}.main table tr td .group .flag{width:20px;height:14px;margin-right:5px}.main .mr10{margin-right:10px}.main .ml-2{margin-left:-2px}.main .tar{text-align:right}.second-wrap{transition:transform .5s ease-in-out,opacity .3s ease-in-out}"]
            }] }
];
/** @nocollapse */
ComprehensiveListComponent.ctorParameters = () => [
    { type: PluginManagerService },
    { type: componentData }
];
ComprehensiveListComponent.propDecorators = {
    tbodyDiv: [{ type: ViewChild, args: ["tbody",] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHJlaGVuc2l2ZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXByZWhlbnNpdmUtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wcmVoZW5zaXZlLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXJFLHdCQUdDOzs7SUFGQywwQkFBZTs7SUFDZixvQ0FBeUI7Ozs7O0FBRTNCLHdCQUdDOzs7SUFGQyw0QkFBd0I7O0lBQ3hCLDZCQUFrQjs7QUFPcEIsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFNckMsWUFDVSxvQkFBMEMsRUFDbEQsT0FBc0I7UUFEZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBR2xELFVBQVU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLG1CQUNSLE9BQU8sRUFBRSxDQUFDLEVBQ1YsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQ3hDLFFBQVEsRUFBRTtnQkFDUixHQUFHLEVBQUU7b0JBQ0gsS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLGVBQWUsRUFBRSxTQUFTO2lCQUMzQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLGVBQWUsRUFBRSxTQUFTO2lCQUMzQjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFNBQVM7b0JBQ2hCLGVBQWUsRUFBRSxTQUFTO2lCQUMzQjthQUNGLElB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QUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOztjQUM1QixHQUFHLEdBQUcsVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVOztZQUNuRCxHQUFHLEdBQUcsRUFBRSxHQUFHLE9BQU8sR0FBRyxFQUFFLEdBQUcsSUFBSTtRQUVsQywyQ0FBMkM7O1FBQTNDLDJDQUEyQztRQUMzQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQzs7O1lBdEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyx5N0NBQWtEOzthQUVuRDs7OztZQWRRLG9CQUFvQjtZQUFFLGFBQWE7Ozt1QkFnQnpDLFNBQVMsU0FBQyxPQUFPOzs7O0lBQWxCLDhDQUNxQjs7SUFDckIsMENBQVU7O0lBQ1YsMkNBQVc7Ozs7O0lBR1QsMERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tcG9uZW50RGF0YSB9IGZyb20gXCJwbHVnaW4tbWFuYWdlclwiO1xuXG5pbnRlcmZhY2UgVGhlbWVEYXRhIHtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcbn1cbmludGVyZmFjZSBDb2xvckRhdGEge1xuICBjb2xUeXBlPzogQXJyYXk8c3RyaW5nPjtcbiAgdGhlbWVNYXA/OiBzdHJpbmc7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLWNvbXByZWhlbnNpdmUtbGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NvbXByZWhlbnNpdmUtbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vY29tcHJlaGVuc2l2ZS1saXN0LmNvbXBvbmVudC5zdHlsXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wcmVoZW5zaXZlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoXCJ0Ym9keVwiKVxuICB0Ym9keURpdjogRWxlbWVudFJlZjtcbiAgZGF0YTogYW55O1xuICBjb2xvcjogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLFxuICAgIGNvbURhdGE6IGNvbXBvbmVudERhdGFcbiAgKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YS5kYXRhO1xuICAgIHRoaXMuY29sb3IgPSB7XG4gICAgICB2aWV3TnVtOiA1LFxuICAgICAgY29sVHlwZTogW1wiZG90XCIsIFwiaWNvblwiLCBcInRleHRcIiwgXCJ0ZXh0XCJdLFxuICAgICAgdGhlbWVNYXA6IHtcbiAgICAgICAgcmVkOiB7XG4gICAgICAgICAgY29sb3I6IFwiI0ZGNDM1QlwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkY0MzVCXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHllbGxvdzoge1xuICAgICAgICAgIGNvbG9yOiBcIiNGRkJGNTlcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQkY1OVwiLFxuICAgICAgICB9LFxuICAgICAgICBibHVlOiB7XG4gICAgICAgICAgY29sb3I6IFwiIzUyRDJGRlwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjNTJEMkZGXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgLi4uKGNvbURhdGEuY29uZmlnRGF0YS5jb2xvciB8fCB7fSksXG4gICAgfTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCB2aWV3TnVtID0gdGhpcy5jb2xvci52aWV3TnVtIHx8IDU7XG4gICAgaWYgKHRoaXMuZGF0YS50ZC5sZW5ndGggPD0gdmlld051bSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhbmltYXRlRWxlbWVudHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0ckxpc3QgPSB0aGlzLnRib2R5RGl2Lm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWNvbmQtd3JhcFwiKTtcblxuXG4gICAgICB0ckxpc3QuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtMTBweCkgcm90YXRlWCg5MGRlZylcIjtcbiAgICAgICAgICB0ckxpc3RbMF0uc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC00M3B4KVwiO1xuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEudGQucHVzaCh0aGlzLmRhdGEudGQuc2hpZnQoKSk7XG5cbiAgICAgICAgdHJMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKDAsMClcIjtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIm5vbmVcIjtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjVzIGVhc2UsIG9wYWNpdHkgMC41cyBlYXNlXCI7XG4gICAgICAgIH0pO1xuICAgICAgfSwgMzAwKTtcbiAgICB9O1xuICAgIHNldEludGVydmFsKGFuaW1hdGVFbGVtZW50cywgMzAwMCk7XG5cblxuICB9XG5cbiAgZ2V0VGhlbWUobmFtZTogc3RyaW5nKTogVGhlbWVEYXRhIHtcbiAgICBjb25zdCBjb2xvckRhdGE6IENvbG9yRGF0YSA9IHRoaXMuY29sb3I7XG4gICAgY29uc3QgdGhlbWVzID0gT2JqZWN0LmVudHJpZXMoY29sb3JEYXRhLnRoZW1lTWFwIHx8IHt9KS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGl0ZW1bMF07XG4gICAgICBjb25zdCB2YWwgPSBpdGVtWzFdIHx8IHt9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiBrZXksXG4gICAgICAgIGRhdGE6IHZhbCxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IHRoZW1lcy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIGRhdGEgPyBkYXRhLmRhdGEgOiB7fTtcbiAgfVxuICBnZXRDb3VudHJ5SWNvbihpY29uTmFtZSkge1xuICAgIHJldHVybiBgYXNzZXRzL2NvbXByZWhlbnNpdmUtbGlzdC9pbWFnZS8ke2ljb25OYW1lfS5wbmdgO1xuICB9XG5cbiAgZ2V0Qm9keUhlaWdodCgpIHtcbiAgICBjb25zdCBkYXRhTGVuZ3RoID0gdGhpcy5kYXRhLnRkLmxlbmd0aDtcbiAgICBjb25zdCB2aWV3TnVtID0gdGhpcy5jb2xvci52aWV3TnVtO1xuICAgIGNvbnN0IG51bSA9IGRhdGFMZW5ndGggPiB2aWV3TnVtID8gdmlld051bSA6IGRhdGFMZW5ndGg7XG4gICAgbGV0IGhQeCA9IDQzICsgdmlld051bSAqIDQzICsgXCJweFwiXG5cbiAgICAvLyByZXR1cm4gbnVtICogMzEgKyAobnVtIC0gMSkgKiAxMCArIFwicHhcIjtcbiAgICByZXR1cm4gdmlld051bSA/IGhQeCA6ICcxMDAlJztcbiAgfVxufVxuIl19