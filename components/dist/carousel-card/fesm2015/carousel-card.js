import { PluginManagerService, componentData, createPlugin } from 'plugin-manager';
import { Component, ViewChild, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselCardComponent {
    /**
     * @param {?} pluginManagerService
     * @param {?} comData
     */
    constructor(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        this.pageIndex = 0;
        this.scrollLeft = 0;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        this.color = comData.configData.color;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.data.autoplay) {
            this.initPageConfig();
        }
    }
    /**
     * @return {?}
     */
    initPageConfig() {
        console.log("执行initPageConfig");
        /** @type {?} */
        let num = 0 //总共多少块 small占1 medium占2
        ;
        //总共多少块 small占1 medium占2
        /** @type {?} */
        let columns = this.data.columns //每行多少个
        ;
        //每行多少个
        /** @type {?} */
        let onePageCardNum = 4 * columns //每页最多多少个
        ;
        //每页最多多少个
        /** @type {?} */
        let pageData = [];
        /** @type {?} */
        let currentPage = [];
        // 存储当前页的数据
        /** @type {?} */
        let remainingBlocks = onePageCardNum;
        for (const item of this.data.list) {
            /** @type {?} */
            let blockCount = 0;
            if (item.size === "small") {
                blockCount = 1;
            }
            else if (item.size === "medium") {
                blockCount = 2;
            }
            else {
                blockCount = 1;
            }
            num += blockCount;
            // 如果当前item可以放入当前页
            if (blockCount <= remainingBlocks) {
                currentPage.push(item);
                remainingBlocks -= blockCount;
            }
            // 如果当前页已满，将当前页数据添加到二维数组中，并重新初始化当前页
            if (remainingBlocks <= 0) {
                pageData.push(currentPage);
                currentPage = [];
                remainingBlocks = onePageCardNum;
            }
        }
        // 处理最后一页，如果有剩余块数，添加到二维数组中
        if (currentPage.length > 0) {
            pageData.push(currentPage);
        }
        /** @type {?} */
        let pageCount = Math.ceil(num / onePageCardNum);
        console.log("num", num);
        console.log("pageCount", pageCount);
        console.log("pageData", pageData);
        this.pageData = pageData;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    pageChange(index) {
        if (index < 0) {
            return;
        }
        if (index > this.pageData.length - 1) {
            return;
        }
        this.pageIndex = index;
        console.log("pageIndex", this.pageIndex);
    }
    /**
     * @return {?}
     */
    clickLeft() {
        /** @type {?} */
        const container = this.scrollContainerDiv.nativeElement;
        /** @type {?} */
        let px = 256 * (this.data.playCardNum || 1);
        this.scrollLeft = container.scrollLeft - px;
        container.scrollLeft -= px;
    }
    /**
     * @return {?}
     */
    clickRight() {
        /** @type {?} */
        const container = this.scrollContainerDiv.nativeElement;
        /** @type {?} */
        let px = 256 * (this.data.playCardNum || 1);
        this.scrollLeft = container.scrollLeft + px;
        container.scrollLeft += px;
    }
    /**
     * @return {?}
     */
    calculateGridTemplateColumns() {
        return this.data.columns ? `repeat(${this.data.columns}, 1fr)` : 'repeat(4, 1fr)';
    }
    /**
     * @param {?} item
     * @return {?}
     */
    checkLike(item) {
        item.isLike = !item.isLike;
    }
    /**
     * @param {?} tag
     * @return {?}
     */
    getTagBackgroundImage(tag) {
        /** @type {?} */
        let length = tag.length;
        console.log("tag", length);
        if (length >= 4) {
            return 'url(assets/carousel-card/image/tag-bg-4.png)';
        }
        else if (length >= 3) {
            return 'url(assets/carousel-card/image/tag-bg-3.png)';
        }
        else {
            return 'url(assets/carousel-card/image/tag-bg-2.png)';
        }
    }
}
CarouselCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'llib-carousel-card',
                template: "<div class=\"carousel-card\">\n\n  <!-- \u4E00\u884C\u81EA\u52A8\u64AD\u653E\u5E03\u5C40 -->\n  <div class=\"display-row-box\" *ngIf=\"data.autoplay\">\n    <div class=\"card-list-row\" #scrollContainer>\n      <div class=\"card card-r\" *ngFor=\"let item of data.list\">\n        <div class=\"top-box\">\n          <span>{{item.title}}</span>\n          <img class=\"icon-like\" (click)=\"checkLike(item)\" *ngIf=\"item.isLike\"\n            src=\"assets/carousel-card/image/icon-like-1.png\" alt=\"\">\n          <img class=\"icon-like\" (click)=\"checkLike(item)\" *ngIf=\"!item.isLike\"\n            src=\"assets/carousel-card/image/icon-like-0.png\" alt=\"\">\n        </div>\n        <div class=\"content-box\">\n          <img class=\"cover-img\" [src]=\"item.cover\" alt=\"\"\n            [ngStyle]=\"{'width':item.coverWidth || '100%','height': item.coverHeight || '100%'}\">\n          <div class=\"mask-box\">\n            <div class=\"hover-btn\" *ngFor=\"let btn of item.hoverBtn\"\n              [ngStyle]=\"{'fontSize': item.hoverBtnSize || '14px'}\">\n              {{btn.text}}\n            </div>\n          </div>\n        </div>\n        <div class=\"bottom-box\">\n          <div class=\"tags\">\n            <div class=\"tag-item\" *ngFor=\"let tag of item.tags\"\n              [ngStyle]=\"{'background-image': getTagBackgroundImage(tag)}\">{{tag}}</div>\n          </div>\n          <div>\n            <img class=\"icon-count\" src=\"assets/carousel-card/image/icon-count.png\" alt=\"\">\n            <span class=\"count-text\">{{item.num || 0}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row-left-box\" *ngIf=\"scrollLeft > 0\">\n      <img (click)=\"clickLeft()\" src=\"assets/carousel-card/image/icon-right.png\" alt=\"\">\n    </div>\n    <div class=\"row-right-box\">\n      <img (click)=\"clickRight()\" src=\"assets/carousel-card/image/icon-right.png\" alt=\"\">\n    </div>\n  </div>\n\n\n  <!-- grid\u5E03\u5C40 -->\n  <div class=\"card-list\" *ngIf=\"!data.autoplay\" [ngStyle]=\"{'grid-template-columns':calculateGridTemplateColumns()}\">\n    <div class=\"card\" *ngFor=\"let item of pageData[pageIndex]\"\n      [ngClass]=\"{'card-m': item.size == 'medium', 'card-s': item.size == 'small'}\">\n      <div class=\"top-box\">\n        <span>{{item.title}}</span>\n        <img class=\"icon-like\" *ngIf=\"item.isLike\" (click)=\"checkLike(item)\"\n          src=\"assets/carousel-card/image/icon-like-1.png\" alt=\"\">\n        <img class=\"icon-like\" *ngIf=\"!item.isLike\" (click)=\"checkLike(item)\"\n          src=\"assets/carousel-card/image/icon-like-0.png\" alt=\"\">\n      </div>\n      <div class=\"content-box\">\n        <img class=\"cover-img\" [src]=\"item.cover\" alt=\"\"\n          [ngStyle]=\"{'width':item.coverWidth || '100%','height': item.coverHeight || '100%'}\">\n        <div class=\"mask-box\">\n          <div class=\"hover-btn\" *ngFor=\"let btn of item.hoverBtn\"\n            [ngStyle]=\"{'fontSize': item.hoverBtnSize || '14px'}\">\n            {{btn.text}}\n          </div>\n        </div>\n      </div>\n      <div class=\"bottom-box\">\n        <div class=\"tags\">\n          <div class=\"tag-item\" *ngFor=\"let tag of item.tags\"\n            [ngStyle]=\"{'background-image': getTagBackgroundImage(tag)}\">{{tag}}</div>\n        </div>\n        <div>\n          <img class=\"icon-count\" src=\"assets/carousel-card/image/icon-count.png\" alt=\"\">\n          <span class=\"count-text\">{{item.num || 0}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \u5206\u9875\u76D2\u5B50 -->\n  <div class=\"pagination-box\" *ngIf=\"!data.autoplay\">\n    <div class=\"page-btn\" (click)=\"pageChange(pageIndex-1)\">&lt;</div>\n    <div class=\"page-btn\" [ngClass]=\"{'page-btn-check': pageIndex == i}\" *ngFor=\"let page of pageData;let i = index\"\n      (click)=\"pageChange(i)\">{{i+1}}</div>\n    <div class=\"page-btn\" (click)=\"pageChange(pageIndex+1)\">&gt;</div>\n  </div>\n</div>",
                styles: [".carousel-card{width:100%;height:100%;overflow:hidden;display:flex;flex-direction:column}.display-row-box{position:relative}.card-list-row{display:flex;overflow-x:scroll;scroll-behavior:smooth;white-space:nowrap}.card-list-row:hover::-webkit-scrollbar-thumb,.card-list:hover::-webkit-scrollbar-thumb{background-color:#888}.card-list-row::-webkit-scrollbar{height:5px}.card-list::-webkit-scrollbar{width:5px}.card-list-row::-webkit-scrollbar-track,.card-list::-webkit-scrollbar-track{background-color:transparent}.card-list-row::-webkit-scrollbar-thumb,.card-list::-webkit-scrollbar-thumb{background-color:transition;border-radius:6px}.card-list-row::-webkit-scrollbar-corner,.card-list::-webkit-scrollbar-corner{background-color:transparent}.row-right-box{background-image:linear-gradient(269deg,#02050f 43%,rgba(2,5,15,0) 100%);position:absolute;height:211px;width:100px;z-index:11;right:0;top:0;display:flex;justify-content:flex-end;align-items:center}.row-left-box{background-image:linear-gradient(269deg,#02050f 43%,rgba(2,5,15,0) 100%);position:absolute;height:211px;width:100px;z-index:11;left:0;top:0;display:flex;justify-content:flex-end;align-items:center;transform:rotateY(180deg)}.row-left-box img,.row-right-box img{width:32px;height:32px;cursor:pointer}.card-list{display:grid;grid-template-columns:repeat(4,1fr);row-gap:30px;-moz-column-gap:25px;column-gap:25px;box-sizing:border-box;flex:1;overflow-y:auto}.card{height:247px;display:flex;flex-direction:column;overflow:hidden;box-sizing:border-box;color:#fff;border-radius:6px 6px 12px 12px;background-size:100% 100%;background-repeat:no-repeat;flex-shrink:0}.card-r{background-image:url(assets/carousel-card/image/card-s.png);width:244px;height:211px;margin-right:12px}.card-m{grid-column:span 2;background-image:url(assets/carousel-card/image/card-m.png)}.card-s{grid-column:span 1;background-image:url(assets/carousel-card/image/card-s.png)}.top-box{font-size:16px;padding:0 12px;box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;height:30px}.content-box{flex:1;box-sizing:border-box;padding:12px 18px 9px 12px;overflow:hidden;position:relative;display:flex;justify-content:center;align-items:center}.bottom-box{height:40px;padding:0 12px;box-sizing:border-box;display:flex;align-items:center;display:flex;justify-content:space-between;align-items:center;font-size:12px}.tags{display:flex}.tag-item{background-image:url(assets/carousel-card/image/tag-bg.png);background-repeat:no-repeat;margin-right:5px;background-size:100% 100%;padding:2px 14px 2px 8px;box-sizing:border-box;font-weight:400}.count-text{margin-left:5px}.cover-img{height:100%;width:100%;border-radius:4px}.icon-like{width:14px;height:14px}.icon-count{opacity:.8}.mask-box{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:10;justify-content:center;align-items:center;display:none}.card:hover .mask-box{display:flex}.mask-box .hover-btn{background-image:linear-gradient(180deg,#18517c 0,rgba(24,81,124,.5) 100%);background-size:100% 100%;border-radius:4px;box-sizing:border-box;display:flex;align-items:center;padding:0 10px;font-size:14px;overflow:hidden;cursor:pointer;margin-right:5px}.mask-box .hover-btn:last-child{margin-right:0}.pagination-box{display:flex;justify-content:center;margin-top:20px}.page-btn{width:32px;height:32px;background-image:linear-gradient(179deg,#070c18 0,#102e49 100%);border-radius:4px;display:flex;justify-content:center;align-items:center;color:#fff;cursor:pointer;margin-right:5px;font-size:14px;transition:.3s}.page-btn:last-child{margin-right:0}.page-btn-check{background-image:linear-gradient(179deg,rgba(55,178,255,.1) 0,rgba(55,178,255,.88) 100%)}"]
            }] }
];
/** @nocollapse */
CarouselCardComponent.ctorParameters = () => [
    { type: PluginManagerService },
    { type: componentData }
];
CarouselCardComponent.propDecorators = {
    scrollContainerDiv: [{ type: ViewChild, args: ['scrollContainer',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CarouselCardModule {
}
CarouselCardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CarouselCardComponent],
                entryComponents: [CarouselCardComponent],
                imports: [CommonModule, NgZorroAntdModule],
                exports: [CarouselCardComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var publicApi = createPlugin({
    name: 'carousel-card',
    module: CarouselCardModule,
    component: CarouselCardComponent
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export default publicApi;

//# sourceMappingURL=carousel-card.js.map