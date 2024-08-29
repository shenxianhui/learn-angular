import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, ViewChild, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var $ = ((/** @type {?} */ (window))).$;
var ThemeListComponent = /** @class */ (function () {
    function ThemeListComponent(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    ThemeListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setInterval((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var trList = _this.tbodyDiv.nativeElement.querySelectorAll('tr');
            trList.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                element.animate([
                    { transform: 'translateY(0)' },
                    { transform: 'translateY(-40px)' }
                ], {
                    duration: 600,
                    iterations: 1
                });
            }));
            // let animation = this.tbodyDiv.nativeElement.animate([
            //   { transform: 'translateY(0)' },
            //   { transform: 'translateY(-40px)' }
            // ], {
            //   duration: 600,
            //   iterations: 1
            // });
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.data.td.push(_this.data.td.shift());
            }), 600);
        }), 3000);
        // this.tbodyDiv.nativeElement.addEventListener('animationend',()=>{
        //   console.log("执行结束")
        //   this.data.td.push(this.data.td.shift())
        // })
    };
    /**
     * @param {?} url
     * @return {?}
     */
    ThemeListComponent.prototype.clickRow = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        console.log("点击了row", url);
        window.open(url);
    };
    ThemeListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-theme-list',
                    template: "<div class=\"table-box\">\n  <table>\n    <thead>\n      <tr>\n        <th *ngFor=\"let range of data.th\">{{range}}</th>\n      </tr>\n    </thead>\n\n    <tbody #tbody>\n      <tr *ngFor=\"let range of data.td; let i = index\" (click)=\"clickRow(range.url)\" [ngStyle]=\"{'background-color': hoverIndex === i ? color.hoverBgColor || 'rgba(23, 46, 75, 1)' : 'rgba(35, 55, 81, 1)'}\" (mouseover)=\"hoverIndex = i\" (mouseout)=\"hoverIndex = null\">\n        <td *ngFor=\"let item of range.row; let i = index\" [ngStyle]=\"{'color': i % 2 == 0 ? '' : color.intervalColor || '#52D2FF'}\">{{item}}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>",
                    styles: [".table-box{font-size:14px;padding:10px 20px;box-sizing:border-box;height:100%;overflow:hidden}table{border-collapse:separate;border-spacing:2px 2px;width:100%}td,th{text-align:left;padding:8px}th{color:#fff;border-bottom:2px solid #56667d}th:nth-child(odd){border-bottom:2px solid #3e4b5c}thead{position:relative;z-index:10}thead tr{background-color:#10284a}tbody{position:relative}tbody td{padding:10px;position:relative}tbody tr{position:relative;cursor:pointer;color:#fff;background-color:#233751}table tbody:before{content:\"\";position:absolute;top:0;left:-10px;width:5px;height:100%;border-top:2px solid #56667d;border-left:2px solid #56667d;border-bottom:2px solid #56667d}table tbody:after{content:\"\";position:absolute;top:0;right:-10px;width:5px;height:100%;border-top:2px solid #56667d;border-right:2px solid #56667d;border-bottom:2px solid #56667d}table thead:before{content:\"\";position:absolute;top:0;left:-10px;width:5px;height:80%;border-top:2px solid #56667d;border-left:2px solid #56667d;border-bottom:2px solid #56667d}table thead:after{content:\"\";position:absolute;top:0;right:-10px;width:5px;height:80%;border-top:2px solid #56667d;border-right:2px solid #56667d;border-bottom:2px solid #56667d}table tbody tr td:first-child:before{content:\"\";position:absolute;top:0;left:-10px;width:5px;height:100%;z-index:2}table tbody tr td:last-child:after{content:\"\";position:absolute;top:0;right:-10px;width:5px;height:100%;z-index:2}tbody tr:hover td:first-child:before{border-left:2px solid;border-color:#fff}tbody tr:hover td:last-child:after{border-right:2px solid;border-color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    ThemeListComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    ThemeListComponent.propDecorators = {
        tbodyDiv: [{ type: ViewChild, args: ['tbody',] }]
    };
    return ThemeListComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ThemeListModule = /** @class */ (function () {
    function ThemeListModule() {
    }
    ThemeListModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ThemeListComponent],
                    entryComponents: [ThemeListComponent],
                    imports: [CommonModule, NgZorroAntdModule],
                    exports: [ThemeListComponent]
                },] }
    ];
    return ThemeListModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var publicApi = createPlugin({
    name: 'theme-list',
    module: ThemeListModule,
    component: ThemeListComponent
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export default publicApi;

//# sourceMappingURL=theme-list.js.map