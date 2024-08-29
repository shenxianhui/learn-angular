import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, NgModule } from '@angular/core';
import { NzMessageService, NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RuleExpressionComponent {
    /**
     * @param {?} pluginManagerService
     * @param {?} message
     * @param {?} comData
     */
    constructor(pluginManagerService, message, comData) {
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
    ngOnInit() {
        if (this.configData && this.configData.emitFun) {
            const { containerOperate } = this.configData.emitFun();
            this.containerOperate = containerOperate().callBack((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                this.checkedForm()
                    .then((/**
                 * @return {?}
                 */
                () => {
                    console.log(this.ngModel);
                }))
                    .catch((/**
                 * @param {?=} err
                 * @return {?}
                 */
                (err = {}) => {
                    // this.message.create(
                    //   "error",
                    //   `[第${row + 1}行-${name}]: ${message}`
                    // );
                }));
            }), this.configData["showId"]);
        }
    }
    // 暴露提交方法
    /**
     * @return {?}
     */
    onSubmitForm() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.checkedForm()
                .then((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                resolve(this.ngModel);
            }))
                .catch((/**
             * @param {?=} err
             * @return {?}
             */
            (err = {}) => {
                const { row, name, message } = err;
                this.message.create("error", `[第${row + 1}行-${name}]: ${message}`);
                reject(err);
            }));
        }));
    }
    // 数值改变时回调
    /**
     * @param {?} type
     * @param {?} itm
     * @param {?} idx
     * @return {?}
     */
    ngModelChange(type, itm, idx) {
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
    }
    // 头部右侧按钮
    /**
     * @param {?} itm
     * @return {?}
     */
    handleHeaderBtn(itm) {
        if (itm.value === "add") {
            if (this.ngModel.length >= 3) {
                this.message.create("warning", `最大数量不能超过${3}`);
                return;
            }
            this.ngModel.push({});
        }
        if (itm.value === "clear") ;
    }
    // 行-删除
    /**
     * @param {?} itm
     * @param {?} idx
     * @return {?}
     */
    handleDel(itm, idx) {
        this.ngModel.splice(idx, 1);
    }
    // 尾部按钮
    /**
     * @param {?} itm
     * @return {?}
     */
    handleBottomBtn(itm) {
        if (itm.value === "search") {
            this.checkedForm()
                .then((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                console.log(JSON.stringify(this.ngModel));
                alert(JSON.stringify(this.ngModel));
            }))
                .catch((/**
             * @param {?=} err
             * @return {?}
             */
            (err = {}) => {
                const { row, name, message } = err;
                this.message.create("error", `[第${row + 1}行-${name}]: ${message}`);
            }));
        }
    }
    // 校验
    /**
     * @return {?}
     */
    checkedForm() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const validationRule = this.data.validationRule || [];
            if (validationRule.length) {
                /** @type {?} */
                const checkedSelect1 = validationRule.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => item.name === "select1"));
                /** @type {?} */
                const checkedSelect2 = validationRule.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => item.name === "select2"));
                /** @type {?} */
                const checkedInput = validationRule.find((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => item.name === "input"));
                /** @type {?} */
                let res = {
                    row: -1,
                    name: "",
                    message: "",
                };
                for (let i = 0; i < this.ngModel.length; i++) {
                    /** @type {?} */
                    const item = this.ngModel[i] || {};
                    if (checkedSelect1 && !item.select1Val) {
                        res = Object.assign({ row: i }, checkedSelect1);
                        break;
                    }
                    if (checkedSelect2 && !item.select2Val) {
                        res = Object.assign({ row: i }, checkedSelect2);
                        break;
                    }
                    if (checkedInput && !item.inputVal) {
                        res = Object.assign({ row: i }, checkedInput);
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
    }
}
RuleExpressionComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-rule-expression",
                template: "<div class=\"filter-rules\">\n  <div class=\"filter-rules-header\">\n    <nz-radio-group [(ngModel)]=\"data.searchType\">\n      <label nz-radio-button nzValue=\"AND\">AND</label>\n      <label nz-radio-button nzValue=\"OR\">OR</label>\n    </nz-radio-group>\n    <div class=\"buttons\">\n      <!-- <button nz-button (click)=\"handleAdd()\"><i nz-icon type=\"plus\"></i>Rule</button> -->\n      <button\n        class=\"ml10\"\n        *ngFor=\"let item of data.executeInfo || []\"\n        [nzType]=\"item.type\"\n        nz-button\n        (click)=\"handleHeaderBtn(item)\"\n      >\n        <i *ngIf=\"item.icon\" nz-icon [type]=\"item.icon\"></i>\n        {{ item.label }}\n      </button>\n    </div>\n  </div>\n  <div class=\"filter-rules-body\">\n    <div *ngFor=\"let item of ngModel || []; let index = index\" class=\"row\">\n      <div class=\"row-l\">\n        <div class=\"row-index\">{{ index + 1 }}</div>\n        <nz-select\n          class=\"select select1 mr5\"\n          [(ngModel)]=\"item.select1Val\"\n          nzAllowClear\n          nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n          (ngModelChange)=\"ngModelChange('select1', item, index)\"\n        >\n          <nz-option\n            *ngFor=\"let opt of data.option || []\"\n            [nzValue]=\"opt.value\"\n            [nzLabel]=\"opt.label\"\n          ></nz-option>\n        </nz-select>\n        <nz-select\n          class=\"select select2 mr5\"\n          [(ngModel)]=\"item.select2Val\"\n          nzAllowClear\n          nzPlaceHolder=\"\u8BF7\u9009\u62E9\"\n          (ngModelChange)=\"ngModelChange('select2', item, index)\"\n        >\n          <nz-option\n            *ngFor=\"let opt of symbolList || []\"\n            [nzValue]=\"opt.value\"\n            [nzLabel]=\"opt.label\"\n          ></nz-option>\n        </nz-select>\n        <div class=\"input\">\n          <nz-input-group [nzSuffix]=\"suffixTemplate\">\n            <input\n              type=\"text\"\n              nz-input\n              [(ngModel)]=\"item.inputVal\"\n              (input)=\"ngModelChange('input', item, index)\"\n              placeholder=\"\u8BF7\u8F93\u5165\"\n            />\n          </nz-input-group>\n          <ng-template #suffixTemplate>\n            <i\n              nz-icon\n              nz-tooltip\n              class=\"ant-input-clear-icon\"\n              nzTheme=\"fill\"\n              nzType=\"close-circle\"\n              *ngIf=\"item.inputVal\"\n              (click)=\"item.inputVal = ''\"\n            ></i>\n          </ng-template>\n        </div>\n      </div>\n      <div class=\"row-r\">\n        <button nz-button nzType=\"danger\" (click)=\"handleDel(item, index)\">\n          <i nz-icon type=\"close\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"filter-rules-footer\">\n    <button\n      class=\"ml10\"\n      *ngFor=\"let item of data.internalApi || []\"\n      [nzType]=\"item.type\"\n      nz-button\n      nzType=\"primary\"\n      (click)=\"handleBottomBtn(item)\"\n    >\n      {{ item.label }}\n    </button>\n  </div> -->\n</div>\n",
                styles: [".mr5{margin-right:5px}.mr10{margin-right:10px}.ml5{margin-left:5px}.ml10{margin-left:10px}.filter-rules{padding:10px;background:#fff}.filter-rules .filter-rules-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}.filter-rules .filter-rules-body .row{display:flex;align-items:center;justify-content:space-between;margin-bottom:5px;border:1px solid #ccc;border-radius:4px;padding:5px}.filter-rules .filter-rules-body .row .row-l{display:flex;align-items:center;justify-content:space-between}.filter-rules .filter-rules-body .row .row-l .row-index{padding:0 20px}.filter-rules .filter-rules-body .row .row-l .select{flex-shrink:0;width:150px}.filter-rules .filter-rules-body .row .row-l .select.select2{width:80px}.filter-rules .filter-rules-body .row .row-l .input{width:250px}.filter-rules .filter-rules-footer{margin-top:10px;display:flex;align-items:center;justify-content:flex-end}"]
            }] }
];
/** @nocollapse */
RuleExpressionComponent.ctorParameters = () => [
    { type: PluginManagerService },
    { type: NzMessageService },
    { type: componentData }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RuleExpressionModule {
}
RuleExpressionModule.decorators = [
    { type: NgModule, args: [{
                declarations: [RuleExpressionComponent],
                entryComponents: [RuleExpressionComponent],
                imports: [CommonModule, NgZorroAntdModule, FormsModule],
                exports: [RuleExpressionComponent],
            },] }
];

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