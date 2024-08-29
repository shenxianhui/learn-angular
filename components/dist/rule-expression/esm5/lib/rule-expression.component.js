/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
        if (itm.value === "clear") {
            //
        }
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
                        res = tslib_1.__assign({ row: i }, checkedSelect1);
                        break;
                    }
                    if (checkedSelect2 && !item.select2Val) {
                        res = tslib_1.__assign({ row: i }, checkedSelect2);
                        break;
                    }
                    if (checkedInput && !item.inputVal) {
                        res = tslib_1.__assign({ row: i }, checkedInput);
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
export { RuleExpressionComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZS1leHByZXNzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3J1bGUtZXhwcmVzc2lvbi8iLCJzb3VyY2VzIjpbImxpYi9ydWxlLWV4cHJlc3Npb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBRWpELDBCQUlDOzs7SUFIQyxpQ0FBb0I7O0lBQ3BCLGlDQUFvQjs7SUFDcEIsK0JBQWtCOztBQUdwQjtJQStCRSxpQ0FDVSxvQkFBMEMsRUFDMUMsT0FBeUIsRUFDakMsT0FBc0I7UUFGZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBM0JuQyxlQUFVLEdBQVEsRUFBRSxDQUFDO1FBQ3JCLFlBQU8sR0FBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5QixlQUFVLEdBQUc7WUFDWDtnQkFDRSxLQUFLLEVBQUUsR0FBRztnQkFDVixLQUFLLEVBQUUsR0FBRzthQUNYO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsUUFBUTthQUNoQjtTQUNGLENBQUM7UUFXQSxVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FB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QUFjLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO3dCQUN0QyxHQUFHLHNCQUNELEdBQUcsRUFBRSxDQUFDLElBQ0gsY0FBYyxDQUNsQixDQUFDO3dCQUNGLE1BQU07cUJBQ1A7b0JBQ0QsSUFBSSxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNsQyxHQUFHLHNCQUNELEdBQUcsRUFBRSxDQUFDLElBQ0gsWUFBWSxDQUNoQixDQUFDO3dCQUNGLE1BQU07cUJBQ1A7aUJBQ0Y7Z0JBRUQsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQ2I7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNmO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTFMRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IsK2hHQUErQzs7aUJBRWhEOzs7O2dCQWJRLG9CQUFvQjtnQkFDcEIsZ0JBQWdCO2dCQURNLGFBQWE7O0lBb001Qyw4QkFBQztDQUFBLEFBM0xELElBMkxDO1NBdExZLHVCQUF1Qjs7O0lBQ2xDLDZDQUFxQjs7SUFDckIsMENBQThCOztJQUM5Qiw2Q0FpQkU7O0lBRUYsdUNBQVU7O0lBQ1Ysd0NBQVc7O0lBQ1gsbURBQXNCOzs7OztJQUdwQix1REFBa0Q7Ozs7O0lBQ2xELDBDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21wb25lbnREYXRhIH0gZnJvbSBcInBsdWdpbi1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBOek1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcblxuaW50ZXJmYWNlIE5nTW9kZWxJdGVtIHtcbiAgc2VsZWN0MVZhbD86IHN0cmluZztcbiAgc2VsZWN0MlZhbD86IHN0cmluZztcbiAgaW5wdXRWYWw/OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJsaWItcnVsZS1leHByZXNzaW9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcnVsZS1leHByZXNzaW9uLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9ydWxlLWV4cHJlc3Npb24uY29tcG9uZW50LnN0eWxcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFJ1bGVFeHByZXNzaW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uZmlnRGF0YTogYW55ID0ge307XG4gIG5nTW9kZWw6IE5nTW9kZWxJdGVtW10gPSBbe31dO1xuICBzeW1ib2xMaXN0ID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIj1cIixcbiAgICAgIHZhbHVlOiBcIj1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIiE9XCIsXG4gICAgICB2YWx1ZTogXCIhPVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiaW5cIixcbiAgICAgIHZhbHVlOiBcImluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJub3QgaW5cIixcbiAgICAgIHZhbHVlOiBcIm5vdCBpblwiLFxuICAgIH0sXG4gIF07XG5cbiAgZGF0YTogYW55O1xuICBjb2xvcjogYW55O1xuICBjb250YWluZXJPcGVyYXRlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwbHVnaW5NYW5hZ2VyU2VydmljZTogUGx1Z2luTWFuYWdlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlOiBOek1lc3NhZ2VTZXJ2aWNlLFxuICAgIGNvbURhdGE6IGNvbXBvbmVudERhdGFcbiAgKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpO1xuICAgIHRoaXMuZGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YS5kYXRhO1xuICAgIHRoaXMuY29sb3IgPSBjb21EYXRhLmNvbmZpZ0RhdGEuY29sb3I7XG4gICAgdGhpcy5jb25maWdEYXRhID0gY29tRGF0YS5jb25maWdEYXRhO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuY29uZmlnRGF0YSAmJiB0aGlzLmNvbmZpZ0RhdGEuZW1pdEZ1bikge1xuICAgICAgY29uc3QgeyBjb250YWluZXJPcGVyYXRlIH0gPSB0aGlzLmNvbmZpZ0RhdGEuZW1pdEZ1bigpO1xuICAgICAgdGhpcy5jb250YWluZXJPcGVyYXRlID0gY29udGFpbmVyT3BlcmF0ZSgpLmNhbGxCYWNrKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5jaGVja2VkRm9ybSgpXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5uZ01vZGVsKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcm93LCBuYW1lLCBtZXNzYWdlIH0gPSBlcnI7XG5cbiAgICAgICAgICAgIC8vIHRoaXMubWVzc2FnZS5jcmVhdGUoXG4gICAgICAgICAgICAvLyAgIFwiZXJyb3JcIixcbiAgICAgICAgICAgIC8vICAgYFvnrKwke3JvdyArIDF96KGMLSR7bmFtZX1dOiAke21lc3NhZ2V9YFxuICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0sIHRoaXMuY29uZmlnRGF0YVtcInNob3dJZFwiXSk7XG4gICAgfVxuICB9XG5cbiAgLy8g5pq06Zyy5o+Q5Lqk5pa55rOVXG4gIHB1YmxpYyBvblN1Ym1pdEZvcm0oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tlZEZvcm0oKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLm5nTW9kZWwpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVyciA9IHt9KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyByb3csIG5hbWUsIG1lc3NhZ2UgfSA9IGVycjtcblxuICAgICAgICAgIHRoaXMubWVzc2FnZS5jcmVhdGUoXCJlcnJvclwiLCBgW+esrCR7cm93ICsgMX3ooYwtJHtuYW1lfV06ICR7bWVzc2FnZX1gKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyDmlbDlgLzmlLnlj5jml7blm57osINcbiAgbmdNb2RlbENoYW5nZSh0eXBlLCBpdG0sIGlkeCkge1xuICAgIGNvbnNvbGUubG9nKHR5cGUsIGl0bSwgaWR4KTtcbiAgICB0aGlzLmNvbnRhaW5lck9wZXJhdGUgJiZcbiAgICAgIHRoaXMuY29udGFpbmVyT3BlcmF0ZVxuICAgICAgICAuVXBkYXRlRGF0YSh7XG4gICAgICAgICAgc2hvd0lkOiB0aGlzLmNvbmZpZ0RhdGFbXCJzaG93SWRcIl0gPyB0aGlzLmNvbmZpZ0RhdGFbXCJzaG93SWRcIl0gOiBudWxsLFxuICAgICAgICAgIGNvbnRyb2xfdmFsdWU6IHRoaXMubmdNb2RlbCxcbiAgICAgICAgICBjb250cm9sX2tleTogdGhpcy5jb25maWdEYXRhW1wiZGF0YVwiXS5jb250cm9sX2tleSxcbiAgICAgICAgfSlcbiAgICAgICAgLkZvcm1WZXJpZmljYXRpb24oe1xuICAgICAgICAgIHNob3dJZDogdGhpcy5jb25maWdEYXRhW1wic2hvd0lkXCJdID8gdGhpcy5jb25maWdEYXRhW1wic2hvd0lkXCJdIDogbnVsbCxcbiAgICAgICAgICBmb3JtUmVnTGlzdDogW3RoaXMuY29uZmlnRGF0YVtcImRhdGFcIl0uY29udHJvbF9rZXldLFxuICAgICAgICB9KTtcbiAgfVxuXG4gIC8vIOWktOmDqOWPs+S+p+aMiemSrlxuICBoYW5kbGVIZWFkZXJCdG4oaXRtKSB7XG4gICAgaWYgKGl0bS52YWx1ZSA9PT0gXCJhZGRcIikge1xuICAgICAgaWYgKHRoaXMubmdNb2RlbC5sZW5ndGggPj0gMykge1xuICAgICAgICB0aGlzLm1lc3NhZ2UuY3JlYXRlKFwid2FybmluZ1wiLCBg5pyA5aSn5pWw6YeP5LiN6IO96LaF6L+HJHszfWApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLm5nTW9kZWwucHVzaCh7fSk7XG4gICAgfVxuICAgIGlmIChpdG0udmFsdWUgPT09IFwiY2xlYXJcIikge1xuICAgICAgLy9cbiAgICB9XG4gIH1cblxuICAvLyDooYwt5Yig6ZmkXG4gIGhhbmRsZURlbChpdG0sIGlkeCkge1xuICAgIHRoaXMubmdNb2RlbC5zcGxpY2UoaWR4LCAxKTtcbiAgfVxuXG4gIC8vIOWwvumDqOaMiemSrlxuICBoYW5kbGVCb3R0b21CdG4oaXRtKSB7XG4gICAgaWYgKGl0bS52YWx1ZSA9PT0gXCJzZWFyY2hcIikge1xuICAgICAgdGhpcy5jaGVja2VkRm9ybSgpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLm5nTW9kZWwpKTtcbiAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeSh0aGlzLm5nTW9kZWwpKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIgPSB7fSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgcm93LCBuYW1lLCBtZXNzYWdlIH0gPSBlcnI7XG5cbiAgICAgICAgICB0aGlzLm1lc3NhZ2UuY3JlYXRlKFwiZXJyb3JcIiwgYFvnrKwke3JvdyArIDF96KGMLSR7bmFtZX1dOiAke21lc3NhZ2V9YCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIOagoemqjFxuICBjaGVja2VkRm9ybSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGlvblJ1bGUgPSB0aGlzLmRhdGEudmFsaWRhdGlvblJ1bGUgfHwgW107XG5cbiAgICAgIGlmICh2YWxpZGF0aW9uUnVsZS5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY2hlY2tlZFNlbGVjdDEgPSB2YWxpZGF0aW9uUnVsZS5maW5kKFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IFwic2VsZWN0MVwiXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNoZWNrZWRTZWxlY3QyID0gdmFsaWRhdGlvblJ1bGUuZmluZChcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBcInNlbGVjdDJcIlxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjaGVja2VkSW5wdXQgPSB2YWxpZGF0aW9uUnVsZS5maW5kKFxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IFwiaW5wdXRcIlxuICAgICAgICApO1xuICAgICAgICBsZXQgcmVzID0ge1xuICAgICAgICAgIHJvdzogLTEsXG4gICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICBtZXNzYWdlOiBcIlwiLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uZ01vZGVsLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMubmdNb2RlbFtpXSB8fCB7fTtcblxuICAgICAgICAgIGlmIChjaGVja2VkU2VsZWN0MSAmJiAhaXRlbS5zZWxlY3QxVmFsKSB7XG4gICAgICAgICAgICByZXMgPSB7XG4gICAgICAgICAgICAgIHJvdzogaSxcbiAgICAgICAgICAgICAgLi4uY2hlY2tlZFNlbGVjdDEsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjaGVja2VkU2VsZWN0MiAmJiAhaXRlbS5zZWxlY3QyVmFsKSB7XG4gICAgICAgICAgICByZXMgPSB7XG4gICAgICAgICAgICAgIHJvdzogaSxcbiAgICAgICAgICAgICAgLi4uY2hlY2tlZFNlbGVjdDIsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjaGVja2VkSW5wdXQgJiYgIWl0ZW0uaW5wdXRWYWwpIHtcbiAgICAgICAgICAgIHJlcyA9IHtcbiAgICAgICAgICAgICAgcm93OiBpLFxuICAgICAgICAgICAgICAuLi5jaGVja2VkSW5wdXQsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcy5yb3cgPiAtMSkge1xuICAgICAgICAgIHJlamVjdChyZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==