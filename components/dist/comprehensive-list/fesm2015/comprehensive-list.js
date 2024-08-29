import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, ViewChild, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComprehensiveListComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ComprehensiveListModule {
}
ComprehensiveListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ComprehensiveListComponent],
                entryComponents: [ComprehensiveListComponent],
                imports: [CommonModule, NgZorroAntdModule],
                exports: [ComprehensiveListComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var publicApi = createPlugin({
    name: "comprehensive-list",
    module: ComprehensiveListModule,
    component: ComprehensiveListComponent,
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export default publicApi;

//# sourceMappingURL=comprehensive-list.js.map