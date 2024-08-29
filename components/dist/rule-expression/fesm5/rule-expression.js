import { __assign } from 'tslib';
import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, NgModule } from '@angular/core';
import { NzMessageService, NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RuleExpressionComponent = /** @class */ (function () {
    function RuleExpressionComponent(pluginManagerService, message, comData) {
        this.pluginManagerService = pluginManagerService;
        this.message = message;
        this.configData = {};
        this.ngModel = [{}];
        this.symbolList = [
            {
                label: "=",
                value: "=",
            },
            {
                label: "!=",
                value: "!=",
            },
            {
                label: "in",
                value: "in",
            },
            {
                label: "not in",
                value: "not in",
            },
        ];
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
        this.configData = comData.configData;
    }
    /**
     * @return {?}
     */
    RuleExpressionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.configData && this.configData.emitFun) {
            var containerOperate = this.configData.emitFun().containerOperate;
            this.containerOperate = containerOperate().callBack((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                _this.checkedForm()
                    .then((/**
                 * @return {?}
                 */
                function () {
                    console.log(_this.ngModel);
                }))
                    .catch((/**
                 * @param {?=} err
                 * @return {?}
                 */
                function (err) {
                    if (err === void 0) { err = {}; }
                    var row = err.row, name = err.name, message = err.message;
                    // this.message.create(
                    //   "error",
                    //   `[第${row + 1}行-${name}]: ${message}`
                    // );
                }));
            }), this.configData["showId"]);
        }
    };
    // 暴露提交方法
    // 暴露提交方法
    /**
     * @return {?}
     */
    RuleExpressionComponent.prototype.onSubmitForm = 
    // 暴露提交方法
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.checkedForm()
                .then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                resolve(_this.ngModel);
            }))
                .catch((/**
             * @param {?=} err
             * @return {?}
             */
            function (err) {
                if (err === void 0) { err = {}; }
                var row = err.row, name = err.name, message = err.message;
                _this.message.create("error", "[\u7B2C" + (row + 1) + "\u884C-" + name + "]: " + message);
                reject(err);
            }));
        }));
    };
    // 数值改变时回调
    // 数值改变时回调
    /**
     * @param {?} type
     * @param {?} itm
     * @param {?} idx
     * @return {?}
     */
    RuleExpressionComponent.prototype.ngModelChange = 
    // 数值改变时回调
    /**
     * @param {?} type
     * @param {?} itm
     * @param {?} idx
     * @return {?}
     */
    function (type, itm, idx) {
        console.log(type, itm, idx);
        this.containerOperate &&
            this.containerOperate
                .UpdateData({
                showId: this.configData["showId"] ? this.configData["showId"] : null,
                control_value: this.ngModel,
                control_key: this.configData["data"].control_key,
            })
                .FormVerification({
                showId: this.configData["showId"] ? this.configData["showId"] : null,
                formRegList: [this.configData["data"].control_key],
            });
    };
    // 头部右侧按钮
    // 头部右侧按钮
    /**
     * @param {?} itm
     * @return {?}
     */
    RuleExpressionComponent.prototype.handleHeaderBtn = 
    // 头部右侧按钮
    /**
     * @param {?} itm
     * @return {?}
     */
    function (itm) {
        if (itm.value === "add") {
            if (this.ngModel.length >= 3) {
                this.message.create("warning", "\u6700\u5927\u6570\u91CF\u4E0D\u80FD\u8D85\u8FC7" + 3);
                return;
            }
            this.ngModel.push({});
        }
        if (itm.value === "clear") ;
    };
    // 行-删除
    // 行-删除
    /**
     * @param {?} itm
     * @param {?} idx
     * @return {?}
     */
    RuleExpressionComponent.prototype.handleDel = 
    // 行-删除
    /**
     * @param {?} itm
     * @param {?} idx
     * @return {?}
     */
    function (itm, idx) {
        this.ngModel.splice(idx, 1);
    };
    // 尾部按钮
    // 尾部按钮
    /**
     * @param {?} itm
     * @return {?}
     */
    RuleExpressionComponent.prototype.handleBottomBtn = 
    // 尾部按钮
    /**
     * @param {?} itm
     * @return {?}
     */
    function (itm) {
        var _this = this;
        if (itm.value === "search") {
            this.checkedForm()
                .then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                console.log(JSON.stringify(_this.ngModel));
                alert(JSON.stringify(_this.ngModel));
            }))
                .catch((/**
             * @param {?=} err
             * @return {?}
             */
            function (err) {
                if (err === void 0) { err = {}; }
                var row = err.row, name = err.name, message = err.message;
                _this.message.create("error", "[\u7B2C" + (row + 1) + "\u884C-" + name + "]: " + message);
            }));
        }
    };
    // 校验
    // 校验
    /**
     * @return {?}
     */
    RuleExpressionComponent.prototype.checkedForm = 
    // 校验
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            /** @type {?} */
            var validationRule = _this.data.validationRule || [];
            if (validationRule.length) {
                /** @type {?} */
                var checkedSelect1 = validationRule.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.name === "select1"; }));
                /** @type {?} */
                var checkedSelect2 = validationRule.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.name === "select2"; }));
                /** @type {?} */
                var checkedInput = validationRule.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) { return item.name === "input"; }));
                /** @type {?} */
                var res = {
                    row: -1,
                    name: "",
                    message: "",
                };
                for (var i = 0; i < _this.ngModel.length; i++) {
                    /** @type {?} */
                    var item = _this.ngModel[i] || {};
                    if (checkedSelect1 && !item.select1Val) {
                        res = __assign({ row: i }, checkedSelect1);
                        break;
                    }
                    if (checkedSelect2 && !item.select2Val) {
                        res = __assign({ row: i }, checkedSelect2);
                        break;
                    }
                    if (checkedInput && !item.inputVal) {
                        res = __assign({ row: i }, checkedInput);
                        break;
                    }
                }
                if (res.row > -1) {
                    reject(res);
                }
                else {
                    resolve(true);
                }
            }
            else {
                resolve(true);
            }
        }));
    };
    RuleExpressionComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-rule-expression",
                    template: "<div class=\"filter-rules\">\n  <div class=\"filter-rules-header\">\n    <nz-radio-group [(ngModel)]=\"data.searchType\">\n      <label nz-radio-button nzValue=\"AND\">AND</label>\n      <label nz-radio-button nzValue=\"OR\">OR</label>\n    </nz-radio-group>\n    <div class=\"buttons\">\n      <!-- <button nz-button (click)=\"handleAdd()\"><i nz-icon type=\"plus\"></i>Rule</button> -->\n      <button\n        class=\"ml10\"\n        *ngFor=\"let item of data.executeInfo || []\"\n        [nzType]=\"item.type\"\n        nz-button\n        (click)=\"handleHeaderBtn(item)\"\n      >\n        <i *ngIf=\"item.icon\" nz-icon [type]=\"item.icon\"></i>\n        {{ item.label }}\n      </button>\n    </div>\n  </div>\n  <div class=\"filter-rules-body\">\n    <div *ngFor=\"let item of ngModel || []; let index = index\" class=\"row\">\n      <div class=\"row-l\">\n        <div class=\"row-index\">{{ index + 1 }}</div>\n        <nz-select\n          class=\"select select1 mr5\"\n          [(ngModel)]=\"item.select1Val\"\n          nzAllowClear\n          nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n          (ngModelChange)=\"ngModelChange('select1', item, index)\"\n        >\n          <nz-option\n            *ngFor=\"let opt of data.option || []\"\n            [nzValue]=\"opt.value\"\n            [nzLabel]=\"opt.label\"\n          ></nz-option>\n        </nz-select>\n        <nz-select\n          class=\"select select2 mr5\"\n          [(ngModel)]=\"item.select2Val\"\n          nzAllowClear\n          nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n          (ngModelChange)=\"ngModelChange('select2', item, index)\"\n        >\n          <nz-option\n            *ngFor=\"let opt of symbolList || []\"\n            [nzValue]=\"opt.value\"\n            [nzLabel]=\"opt.label\"\n          ></nz-option>\n        </nz-select>\n        <div class=\"input\">\n          <nz-input-group [nzSuffix]=\"suffixTemplate\">\n            <input\n              type=\"text\"\n              nz-input\n              [(ngModel)]=\"item.inputVal\"\n              (input)=\"ngModelChange('input', item, index)\"\n              placeholder=\"\u8BF7\u8F93\u5165\"\n            />\n          </nz-input-group>\n          <ng-template #suffixTemplate>\n            <i\n              nz-icon\n              nz-tooltip\n              class=\"ant-input-clear-icon\"\n              nzTheme=\"fill\"\n              nzType=\"close-circle\"\n              *ngIf=\"item.inputVal\"\n              (click)=\"item.inputVal = ''\"\n            ></i>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"row-r\">\n        <button nz-button nzType=\"danger\" (click)=\"handleDel(item, index)\">\n          <i nz-icon type=\"close\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"filter-rules-footer\">\n    <button\n      class=\"ml10\"\n      *ngFor=\"let item of data.internalApi || []\"\n      [nzType]=\"item.type\"\n      nz-button\n      nzType=\"primary\"\n      (click)=\"handleBottomBtn(item)\"\n    >\n      {{ item.label }}\n    </button>\n  </div> -->\n</div>\n",
                    styles: [".mr5{margin-right:5px}.mr10{margin-right:10px}.ml5{margin-left:5px}.ml10{margin-left:10px}.filter-rules{padding:10px;background:#fff}.filter-rules .filter-rules-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.filter-rules .filter-rules-body .row{display:flex;align-items:center;justify-content:space-between;margin-bottom:5px;border:1px solid #ccc;border-radius:4px;padding:5px}.filter-rules .filter-rules-body .row .row-l{display:flex;align-items:center;justify-content:space-between}.filter-rules .filter-rules-body .row .row-l .row-index{padding:0 20px}.filter-rules .filter-rules-body .row .row-l .select{flex-shrink:0;width:150px}.filter-rules .filter-rules-body .row .row-l .select.select2{width:80px}.filter-rules .filter-rules-body .row .row-l .input{width:250px}.filter-rules .filter-rules-footer{margin-top:10px;display:flex;align-items:center;justify-content:flex-end}"]
                }] }
    ];
    /** @nocollapse */
    RuleExpressionComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: NzMessageService },
        { type: componentData }
    ]; };
    return RuleExpressionComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RuleExpressionModule = /** @class */ (function () {
    function RuleExpressionModule() {
    }
    RuleExpressionModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [RuleExpressionComponent],
                    entryComponents: [RuleExpressionComponent],
                    imports: [CommonModule, NgZorroAntdModule, FormsModule],
                    exports: [RuleExpressionComponent],
                },] }
    ];
    return RuleExpressionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var publicApi = createPlugin({
    name: "rule-expression",
    module: RuleExpressionModule,
    component: RuleExpressionComponent,
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export default publicApi;

//# sourceMappingURL=rule-expression.js.map