/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
import { NzMessageService } from "ng-zorro-antd";
/**
 * @record
 */
function NgModelItem() { }
if (false) {
    /** @type {?|undefined} */
    NgModelItem.prototype.select1Val;
    /** @type {?|undefined} */
    NgModelItem.prototype.select2Val;
    /** @type {?|undefined} */
    NgModelItem.prototype.inputVal;
}
export class RuleExpressionComponent {
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
                    const { row, name, message } = err;
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
        if (itm.value === "clear") {
            //
        }
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
if (false) {
    /** @type {?} */
    RuleExpressionComponent.prototype.configData;
    /** @type {?} */
    RuleExpressionComponent.prototype.ngModel;
    /** @type {?} */
    RuleExpressionComponent.prototype.symbolList;
    /** @type {?} */
    RuleExpressionComponent.prototype.data;
    /** @type {?} */
    RuleExpressionComponent.prototype.color;
    /** @type {?} */
    RuleExpressionComponent.prototype.containerOperate;
    /**
     * @type {?}
     * @private
     */
    RuleExpressionComponent.prototype.pluginManagerService;
    /**
     * @type {?}
     * @private
     */
    RuleExpressionComponent.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1leHByZXNzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3J1bGUtZXhwcmVzc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9ydWxlLWV4cHJlc3Npb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFakQsMEJBSUM7OztJQUhDLGlDQUFvQjs7SUFDcEIsaUNBQW9COztJQUNwQiwrQkFBa0I7O0FBUXBCLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQTBCbEMsWUFDVSxvQkFBMEMsRUFDMUMsT0FBeUIsRUFDakMsT0FBc0I7UUFGZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBM0JuQyxlQUFVLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLFlBQU8sR0FBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixlQUFVLEdBQUc7WUFDWDtnQkFDRSxLQUFLLEVBQUUsR0FBRztnQkFDVixLQUFLLEVBQUUsR0FBRzthQUNYO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsUUFBUTthQUNoQjtTQUNGLENBQUM7UUFXQSxVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FB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QUN0QyxHQUFHLG1CQUNELEdBQUcsRUFBRSxDQUFDLElBQ0gsY0FBYyxDQUNsQixDQUFDO3dCQUNGLE1BQU07cUJBQ1A7b0JBQ0QsSUFBSSxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNsQyxHQUFHLG1CQUNELEdBQUcsRUFBRSxDQUFDLElBQ0gsWUFBWSxDQUNoQixDQUFDO3dCQUNGLE1BQU07cUJBQ1A7aUJBQ0Y7Z0JBRUQsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2I7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNmO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQTFMRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsK2hHQUErQzs7YUFFaEQ7Ozs7WUFiUSxvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBRE0sYUFBYTs7OztJQWUxQyw2Q0FBcUI7O0lBQ3JCLDBDQUE4Qjs7SUFDOUIsNkNBaUJFOztJQUVGLHVDQUFVOztJQUNWLHdDQUFXOztJQUNYLG1EQUFzQjs7Ozs7SUFHcEIsdURBQWtEOzs7OztJQUNsRCwwQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tcG9uZW50RGF0YSB9IGZyb20gXCJwbHVnaW4tbWFuYWdlclwiO1xuaW1wb3J0IHsgTnpNZXNzYWdlU2VydmljZSB9IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XG5cbmludGVyZmFjZSBOZ01vZGVsSXRlbSB7XG4gIHNlbGVjdDFWYWw/OiBzdHJpbmc7XG4gIHNlbGVjdDJWYWw/OiBzdHJpbmc7XG4gIGlucHV0VmFsPzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibGliLXJ1bGUtZXhwcmVzc2lvblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3J1bGUtZXhwcmVzc2lvbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcnVsZS1leHByZXNzaW9uLmNvbXBvbmVudC5zdHlsXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBSdWxlRXhwcmVzc2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbmZpZ0RhdGE6IGFueSA9IHt9O1xuICBuZ01vZGVsOiBOZ01vZGVsSXRlbVtdID0gW3t9XTtcbiAgc3ltYm9sTGlzdCA9IFtcbiAgICB7XG4gICAgICBsYWJlbDogXCI9XCIsXG4gICAgICB2YWx1ZTogXCI9XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCIhPVwiLFxuICAgICAgdmFsdWU6IFwiIT1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcImluXCIsXG4gICAgICB2YWx1ZTogXCJpblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwibm90IGluXCIsXG4gICAgICB2YWx1ZTogXCJub3QgaW5cIixcbiAgICB9LFxuICBdO1xuXG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcbiAgY29udGFpbmVyT3BlcmF0ZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZTogTnpNZXNzYWdlU2VydmljZSxcbiAgICBjb21EYXRhOiBjb21wb25lbnREYXRhXG4gICkge1xuICAgIC8vIOaOpeaUtuS4remXtOS7tuS8oOWAvFxuICAgIGNvbnNvbGUubG9nKFwiY29tRGF0YVwiLCBjb21EYXRhKTtcbiAgICB0aGlzLmRhdGEgPSBjb21EYXRhLmNvbmZpZ0RhdGEuZGF0YTtcbiAgICB0aGlzLmNvbG9yID0gY29tRGF0YS5jb25maWdEYXRhLmNvbG9yO1xuICAgIHRoaXMuY29uZmlnRGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmNvbmZpZ0RhdGEgJiYgdGhpcy5jb25maWdEYXRhLmVtaXRGdW4pIHtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVyT3BlcmF0ZSB9ID0gdGhpcy5jb25maWdEYXRhLmVtaXRGdW4oKTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3BlcmF0ZSA9IGNvbnRhaW5lck9wZXJhdGUoKS5jYWxsQmFjaygocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuY2hlY2tlZEZvcm0oKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmdNb2RlbCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKGVyciA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHJvdywgbmFtZSwgbWVzc2FnZSB9ID0gZXJyO1xuXG4gICAgICAgICAgICAvLyB0aGlzLm1lc3NhZ2UuY3JlYXRlKFxuICAgICAgICAgICAgLy8gICBcImVycm9yXCIsXG4gICAgICAgICAgICAvLyAgIGBb56ysJHtyb3cgKyAxfeihjC0ke25hbWV9XTogJHttZXNzYWdlfWBcbiAgICAgICAgICAgIC8vICk7XG4gICAgICAgICAgfSk7XG4gICAgICB9LCB0aGlzLmNvbmZpZ0RhdGFbXCJzaG93SWRcIl0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIOaatOmcsuaPkOS6pOaWueazlVxuICBwdWJsaWMgb25TdWJtaXRGb3JtKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLmNoZWNrZWRGb3JtKClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUodGhpcy5uZ01vZGVsKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIgPSB7fSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgcm93LCBuYW1lLCBtZXNzYWdlIH0gPSBlcnI7XG5cbiAgICAgICAgICB0aGlzLm1lc3NhZ2UuY3JlYXRlKFwiZXJyb3JcIiwgYFvnrKwke3JvdyArIDF96KGMLSR7bmFtZX1dOiAke21lc3NhZ2V9YCk7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8g5pWw5YC85pS55Y+Y5pe25Zue6LCDXG4gIG5nTW9kZWxDaGFuZ2UodHlwZSwgaXRtLCBpZHgpIHtcbiAgICBjb25zb2xlLmxvZyh0eXBlLCBpdG0sIGlkeCk7XG4gICAgdGhpcy5jb250YWluZXJPcGVyYXRlICYmXG4gICAgICB0aGlzLmNvbnRhaW5lck9wZXJhdGVcbiAgICAgICAgLlVwZGF0ZURhdGEoe1xuICAgICAgICAgIHNob3dJZDogdGhpcy5jb25maWdEYXRhW1wic2hvd0lkXCJdID8gdGhpcy5jb25maWdEYXRhW1wic2hvd0lkXCJdIDogbnVsbCxcbiAgICAgICAgICBjb250cm9sX3ZhbHVlOiB0aGlzLm5nTW9kZWwsXG4gICAgICAgICAgY29udHJvbF9rZXk6IHRoaXMuY29uZmlnRGF0YVtcImRhdGFcIl0uY29udHJvbF9rZXksXG4gICAgICAgIH0pXG4gICAgICAgIC5Gb3JtVmVyaWZpY2F0aW9uKHtcbiAgICAgICAgICBzaG93SWQ6IHRoaXMuY29uZmlnRGF0YVtcInNob3dJZFwiXSA/IHRoaXMuY29uZmlnRGF0YVtcInNob3dJZFwiXSA6IG51bGwsXG4gICAgICAgICAgZm9ybVJlZ0xpc3Q6IFt0aGlzLmNvbmZpZ0RhdGFbXCJkYXRhXCJdLmNvbnRyb2xfa2V5XSxcbiAgICAgICAgfSk7XG4gIH1cblxuICAvLyDlpLTpg6jlj7PkvqfmjInpkq5cbiAgaGFuZGxlSGVhZGVyQnRuKGl0bSkge1xuICAgIGlmIChpdG0udmFsdWUgPT09IFwiYWRkXCIpIHtcbiAgICAgIGlmICh0aGlzLm5nTW9kZWwubGVuZ3RoID49IDMpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlLmNyZWF0ZShcIndhcm5pbmdcIiwgYOacgOWkp+aVsOmHj+S4jeiDvei2hei/hyR7M31gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5uZ01vZGVsLnB1c2goe30pO1xuICAgIH1cbiAgICBpZiAoaXRtLnZhbHVlID09PSBcImNsZWFyXCIpIHtcbiAgICAgIC8vXG4gICAgfVxuICB9XG5cbiAgLy8g6KGMLeWIoOmZpFxuICBoYW5kbGVEZWwoaXRtLCBpZHgpIHtcbiAgICB0aGlzLm5nTW9kZWwuc3BsaWNlKGlkeCwgMSk7XG4gIH1cblxuICAvLyDlsL7pg6jmjInpkq5cbiAgaGFuZGxlQm90dG9tQnRuKGl0bSkge1xuICAgIGlmIChpdG0udmFsdWUgPT09IFwic2VhcmNoXCIpIHtcbiAgICAgIHRoaXMuY2hlY2tlZEZvcm0oKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5uZ01vZGVsKSk7XG4gICAgICAgICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodGhpcy5uZ01vZGVsKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyID0ge30pID0+IHtcbiAgICAgICAgICBjb25zdCB7IHJvdywgbmFtZSwgbWVzc2FnZSB9ID0gZXJyO1xuXG4gICAgICAgICAgdGhpcy5tZXNzYWdlLmNyZWF0ZShcImVycm9yXCIsIGBb56ysJHtyb3cgKyAxfeihjC0ke25hbWV9XTogJHttZXNzYWdlfWApO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyDmoKHpqoxcbiAgY2hlY2tlZEZvcm0oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRpb25SdWxlID0gdGhpcy5kYXRhLnZhbGlkYXRpb25SdWxlIHx8IFtdO1xuXG4gICAgICBpZiAodmFsaWRhdGlvblJ1bGUubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGNoZWNrZWRTZWxlY3QxID0gdmFsaWRhdGlvblJ1bGUuZmluZChcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBcInNlbGVjdDFcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjaGVja2VkU2VsZWN0MiA9IHZhbGlkYXRpb25SdWxlLmZpbmQoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gXCJzZWxlY3QyXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2hlY2tlZElucHV0ID0gdmFsaWRhdGlvblJ1bGUuZmluZChcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBcImlucHV0XCJcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHJlcyA9IHtcbiAgICAgICAgICByb3c6IC0xLFxuICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubmdNb2RlbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLm5nTW9kZWxbaV0gfHwge307XG5cbiAgICAgICAgICBpZiAoY2hlY2tlZFNlbGVjdDEgJiYgIWl0ZW0uc2VsZWN0MVZhbCkge1xuICAgICAgICAgICAgcmVzID0ge1xuICAgICAgICAgICAgICByb3c6IGksXG4gICAgICAgICAgICAgIC4uLmNoZWNrZWRTZWxlY3QxLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2hlY2tlZFNlbGVjdDIgJiYgIWl0ZW0uc2VsZWN0MlZhbCkge1xuICAgICAgICAgICAgcmVzID0ge1xuICAgICAgICAgICAgICByb3c6IGksXG4gICAgICAgICAgICAgIC4uLmNoZWNrZWRTZWxlY3QyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2hlY2tlZElucHV0ICYmICFpdGVtLmlucHV0VmFsKSB7XG4gICAgICAgICAgICByZXMgPSB7XG4gICAgICAgICAgICAgIHJvdzogaSxcbiAgICAgICAgICAgICAgLi4uY2hlY2tlZElucHV0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXMucm93ID4gLTEpIHtcbiAgICAgICAgICByZWplY3QocmVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=