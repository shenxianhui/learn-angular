/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
export class CarouselCardComponent {
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
if (false) {
    /** @type {?} */
    CarouselCardComponent.prototype.data;
    /** @type {?} */
    CarouselCardComponent.prototype.color;
    /** @type {?} */
    CarouselCardComponent.prototype.pageData;
    /** @type {?} */
    CarouselCardComponent.prototype.pageIndex;
    /** @type {?} */
    CarouselCardComponent.prototype.scrollLeft;
    /** @type {?} */
    CarouselCardComponent.prototype.scrollContainerDiv;
    /**
     * @type {?}
     * @private
     */
    CarouselCardComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jYXJvdXNlbC1jYXJkLyIsInNvdXJjZXMiOlsibGliL2Nhcm91c2VsLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3JFLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBWWhDLFlBQW9CLG9CQUEwQyxFQUFFLE9BQXNCO1FBQWxFLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFQOUQsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBT3JCLFVBQVU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFBO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUE7SUFDdkMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUE7O1lBQzNCLEdBQUcsR0FBRyxDQUFDLENBQUMsd0JBQXdCOzs7O1lBQ2hDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1lBQ25DLGNBQWMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLFNBQVM7Ozs7WUFFdEMsUUFBUSxHQUFHLEVBQUU7O1lBRWIsV0FBVyxHQUFHLEVBQUU7OztZQUNoQixlQUFlLEdBQUcsY0FBYztRQUVwQyxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFOztnQkFDN0IsVUFBVSxHQUFHLENBQUM7WUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDekIsVUFBVSxHQUFHLENBQUMsQ0FBQTthQUNmO2lCQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ2pDLFVBQVUsR0FBRyxDQUFDLENBQUE7YUFDZjtpQkFBTTtnQkFDTCxVQUFVLEdBQUcsQ0FBQyxDQUFBO2FBQ2Y7WUFFRCxHQUFHLElBQUksVUFBVSxDQUFBO1lBRWpCLGtCQUFrQjtZQUNsQixJQUFJLFVBQVUsSUFBSSxlQUFlLEVBQUU7Z0JBQ2pDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLGVBQWUsSUFBSSxVQUFVLENBQUM7YUFDL0I7WUFFRCxtQ0FBbUM7WUFDbkMsSUFBSSxlQUFlLElBQUksQ0FBQyxFQUFFO2dCQUN4QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUMzQixXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixlQUFlLEdBQUcsY0FBYyxDQUFDO2FBQ2xDO1NBQ0Y7UUFFRCwwQkFBMEI7UUFDMUIsSUFBSSxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVCOztZQUVHLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUE7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixPQUFNO1NBQ1A7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEMsT0FBTTtTQUNQO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUE7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzFDLENBQUM7Ozs7SUFFRCxTQUFTOztjQUNELFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYTs7WUFDbkQsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBQzNDLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCxVQUFVOztjQUNGLFNBQVMsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYTs7WUFDbkQsRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBQzNDLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7SUFFRCw0QkFBNEI7UUFDMUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNwRixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFJO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxHQUFHOztZQUNuQixNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU07UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDMUIsSUFBSSxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2YsT0FBTyw4Q0FBOEMsQ0FBQTtTQUN0RDthQUFNLElBQUksTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QixPQUFPLDhDQUE4QyxDQUFBO1NBQ3REO2FBQU07WUFDTCxPQUFPLDhDQUE4QyxDQUFBO1NBQ3REO0lBQ0gsQ0FBQzs7O1lBMUhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5Qiw2N0hBQTZDOzthQUU5Qzs7OztZQU5RLG9CQUFvQjtZQUFFLGFBQWE7OztpQ0FlekMsU0FBUyxTQUFDLGlCQUFpQjs7OztJQU41QixxQ0FBVTs7SUFDVixzQ0FBVzs7SUFDWCx5Q0FBcUI7O0lBQ3JCLDBDQUFzQjs7SUFDdEIsMkNBQXVCOztJQUV2QixtREFDOEI7Ozs7O0lBR2xCLHFEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21wb25lbnREYXRhIH0gZnJvbSAncGx1Z2luLW1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsbGliLWNhcm91c2VsLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwtY2FyZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLWNhcmQuY29tcG9uZW50LnN0eWwnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcbiAgcGFnZURhdGE6IEFycmF5PGFueT47XG4gIHBhZ2VJbmRleDogbnVtYmVyID0gMDtcbiAgc2Nyb2xsTGVmdDogbnVtYmVyID0gMDtcblxuICBAVmlld0NoaWxkKCdzY3JvbGxDb250YWluZXInKVxuICBzY3JvbGxDb250YWluZXJEaXY6IEVsZW1lbnRSZWZcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGx1Z2luTWFuYWdlclNlcnZpY2U6IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21EYXRhOiBjb21wb25lbnREYXRhKSB7XG4gICAgLy8g5o6l5pS25Lit6Ze05Lu25Lyg5YC8XG4gICAgY29uc29sZS5sb2coXCJjb21EYXRhXCIsIGNvbURhdGEpXG4gICAgdGhpcy5kYXRhID0gY29tRGF0YS5jb25maWdEYXRhLmRhdGFcbiAgICB0aGlzLmNvbG9yID0gY29tRGF0YS5jb25maWdEYXRhLmNvbG9yXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YS5hdXRvcGxheSkge1xuICAgICAgdGhpcy5pbml0UGFnZUNvbmZpZygpXG4gICAgfVxuICB9XG5cbiAgaW5pdFBhZ2VDb25maWcoKSB7XG4gICAgY29uc29sZS5sb2coXCLmiafooYxpbml0UGFnZUNvbmZpZ1wiKVxuICAgIGxldCBudW0gPSAwIC8v5oC75YWx5aSa5bCR5Z2XIHNtYWxs5Y2gMSBtZWRpdW3ljaAyXG4gICAgbGV0IGNvbHVtbnMgPSB0aGlzLmRhdGEuY29sdW1ucyAvL+avj+ihjOWkmuWwkeS4qlxuICAgIGxldCBvbmVQYWdlQ2FyZE51bSA9IDQgKiBjb2x1bW5zIC8v5q+P6aG15pyA5aSa5aSa5bCR5LiqXG5cbiAgICBsZXQgcGFnZURhdGEgPSBbXVxuXG4gICAgbGV0IGN1cnJlbnRQYWdlID0gW107IC8vIOWtmOWCqOW9k+WJjemhteeahOaVsOaNrlxuICAgIGxldCByZW1haW5pbmdCbG9ja3MgPSBvbmVQYWdlQ2FyZE51bTsgLy8g5b2T5YmN6aG15Ymp5L2Z5Y+v5a6557qz5Z2X5pWwXG5cbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5kYXRhLmxpc3QpIHtcbiAgICAgIGxldCBibG9ja0NvdW50ID0gMDsgLy8g5b2T5YmNaXRlbeWNoOaNrueahOWdl+aVsFxuICAgICAgaWYgKGl0ZW0uc2l6ZSA9PT0gXCJzbWFsbFwiKSB7XG4gICAgICAgIGJsb2NrQ291bnQgPSAxXG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uc2l6ZSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICBibG9ja0NvdW50ID0gMlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmxvY2tDb3VudCA9IDFcbiAgICAgIH1cblxuICAgICAgbnVtICs9IGJsb2NrQ291bnRcblxuICAgICAgLy8g5aaC5p6c5b2T5YmNaXRlbeWPr+S7peaUvuWFpeW9k+WJjemhtVxuICAgICAgaWYgKGJsb2NrQ291bnQgPD0gcmVtYWluaW5nQmxvY2tzKSB7XG4gICAgICAgIGN1cnJlbnRQYWdlLnB1c2goaXRlbSk7XG4gICAgICAgIHJlbWFpbmluZ0Jsb2NrcyAtPSBibG9ja0NvdW50O1xuICAgICAgfVxuXG4gICAgICAvLyDlpoLmnpzlvZPliY3pobXlt7Lmu6HvvIzlsIblvZPliY3pobXmlbDmja7mt7vliqDliLDkuoznu7TmlbDnu4TkuK3vvIzlubbph43mlrDliJ3lp4vljJblvZPliY3pobVcbiAgICAgIGlmIChyZW1haW5pbmdCbG9ja3MgPD0gMCkge1xuICAgICAgICBwYWdlRGF0YS5wdXNoKGN1cnJlbnRQYWdlKTtcbiAgICAgICAgY3VycmVudFBhZ2UgPSBbXTtcbiAgICAgICAgcmVtYWluaW5nQmxvY2tzID0gb25lUGFnZUNhcmROdW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8g5aSE55CG5pyA5ZCO5LiA6aG177yM5aaC5p6c5pyJ5Ymp5L2Z5Z2X5pWw77yM5re75Yqg5Yiw5LqM57u05pWw57uE5LitXG4gICAgaWYgKGN1cnJlbnRQYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgIHBhZ2VEYXRhLnB1c2goY3VycmVudFBhZ2UpO1xuICAgIH1cblxuICAgIGxldCBwYWdlQ291bnQgPSBNYXRoLmNlaWwobnVtIC8gb25lUGFnZUNhcmROdW0pXG4gICAgY29uc29sZS5sb2coXCJudW1cIiwgbnVtKVxuICAgIGNvbnNvbGUubG9nKFwicGFnZUNvdW50XCIsIHBhZ2VDb3VudClcbiAgICBjb25zb2xlLmxvZyhcInBhZ2VEYXRhXCIsIHBhZ2VEYXRhKVxuICAgIHRoaXMucGFnZURhdGEgPSBwYWdlRGF0YVxuICB9XG5cbiAgcGFnZUNoYW5nZShpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmIChpbmRleCA+IHRoaXMucGFnZURhdGEubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMucGFnZUluZGV4ID0gaW5kZXhcbiAgICBjb25zb2xlLmxvZyhcInBhZ2VJbmRleFwiLCB0aGlzLnBhZ2VJbmRleClcbiAgfVxuXG4gIGNsaWNrTGVmdCgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnNjcm9sbENvbnRhaW5lckRpdi5uYXRpdmVFbGVtZW50XG4gICAgbGV0IHB4ID0gMjU2ICogKHRoaXMuZGF0YS5wbGF5Q2FyZE51bSB8fCAxKVxuICAgIHRoaXMuc2Nyb2xsTGVmdCA9IGNvbnRhaW5lci5zY3JvbGxMZWZ0IC0gcHhcbiAgICBjb250YWluZXIuc2Nyb2xsTGVmdCAtPSBweDtcbiAgfVxuXG4gIGNsaWNrUmlnaHQoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5zY3JvbGxDb250YWluZXJEaXYubmF0aXZlRWxlbWVudFxuICAgIGxldCBweCA9IDI1NiAqICh0aGlzLmRhdGEucGxheUNhcmROdW0gfHwgMSlcbiAgICB0aGlzLnNjcm9sbExlZnQgPSBjb250YWluZXIuc2Nyb2xsTGVmdCArIHB4XG4gICAgY29udGFpbmVyLnNjcm9sbExlZnQgKz0gcHg7XG4gIH1cblxuICBjYWxjdWxhdGVHcmlkVGVtcGxhdGVDb2x1bW5zKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuY29sdW1ucyA/IGByZXBlYXQoJHt0aGlzLmRhdGEuY29sdW1uc30sIDFmcilgIDogJ3JlcGVhdCg0LCAxZnIpJztcbiAgfVxuXG4gIGNoZWNrTGlrZShpdGVtKSB7XG4gICAgaXRlbS5pc0xpa2UgPSAhaXRlbS5pc0xpa2VcbiAgfVxuXG4gIGdldFRhZ0JhY2tncm91bmRJbWFnZSh0YWcpIHtcbiAgICBsZXQgbGVuZ3RoID0gdGFnLmxlbmd0aFxuICAgIGNvbnNvbGUubG9nKFwidGFnXCIsIGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID49IDQpIHtcbiAgICAgIHJldHVybiAndXJsKGFzc2V0cy9jYXJvdXNlbC1jYXJkL2ltYWdlL3RhZy1iZy00LnBuZyknXG4gICAgfSBlbHNlIGlmIChsZW5ndGggPj0gMykge1xuICAgICAgcmV0dXJuICd1cmwoYXNzZXRzL2Nhcm91c2VsLWNhcmQvaW1hZ2UvdGFnLWJnLTMucG5nKSdcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICd1cmwoYXNzZXRzL2Nhcm91c2VsLWNhcmQvaW1hZ2UvdGFnLWJnLTIucG5nKSdcbiAgICB9XG4gIH1cblxufVxuIl19