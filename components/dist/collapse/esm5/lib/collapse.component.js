/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
var CollapseComponent = /** @class */ (function () {
    function CollapseComponent(pluginManagerService, comData) {
        this.pluginManagerService = pluginManagerService;
        // 接收中间件传值
        console.log("comData", comData);
        this.data = comData.configData.data;
        /** @type {?} */
        var color = comData.configData.color;
        this.color = {
            "firstBackground": color.firstBackground || "linear-gradient(180deg, rgba(24, 73, 110, 1) 0%, rgba(16, 42, 66, 1) 100%)",
            //父级面板背景
            "firstColor": color.firstColor || "#FFF",
            //父级文字颜色
            "firstFontSize": color.firstFontSize || "14px",
            //父级文字大小
            "firstPadding": color.firstPadding || "10px 16px",
            //父级内边距
            "firstMargin": color.firstMargin || "8px",
            //父级外边距
            "firstActiveBackground": color.firstActiveBackground || "linear-gradient(180deg, rgba(40, 123, 179, 1) 0%, rgba(16, 46, 73, 1) 100%)",
            //父级面板选中背景 
            "firstActiveColor": color.firstActiveColor || "#FFF",
            //父级面板选中文字颜色  
            "firstActiveFonteSize": color.firstActiveFonteSize || "14px",
            //父级面板选中文字大小
            "secondBackground": color.secondBackground || "linear-gradient(180deg, rgba(18, 49, 79, 1) 0%, rgba(12, 30, 51, 1) 100%)",
            //子级面板背景
            "secondColor": color.secondColor || "#FFF",
            // 子级面板文字颜色
            "secondFontSize": color.secondFontSize || "14px",
            // 子级面板字体大小
            "secondPadding": color.secondPadding || "10px 0 10px 28px",
            // 子级面板内边距
            "secondMargin": color.secondMargin || "0px",
            // 子级面板外边距
            "secondActiveBackground": color.secondActiveBackground || "linear-gradient(180deg, rgba(25, 74, 112, 1) 0%, rgba(15, 42, 68, 1) 100%)",
            // 子级面板选中背景
            "secondActiveColor": color.secondActiveColor || "#FFF",
            // 子级面板选中文字颜色
            "secondActiveFonteSize": color.secondActiveFonteSize || "14px" // 子级面板选中文字大小
        };
        console.log("color", this.color);
    }
    /**
     * @return {?}
     */
    CollapseComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CollapseComponent.prototype.clickFirst = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        item.isCollapse = !item.isCollapse;
        console.log("clickFirst", item);
    };
    CollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-collapse',
                    template: "<div class=\"collapse-box\">\n  <ul>\n    <li class=\"sub-menu\" *ngFor=\"let item of data.list\" [ngStyle]=\"{'marginBottom':color.firstMargin}\">\n      <div class=\"sub-menu-title\" (click)=\"clickFirst(item)\" [ngClass]=\"{'sub-menu-check': item.isCollapse}\"\n        [ngStyle]=\"{'background':item.isCollapse ? color.firstActiveBackground : color.firstBackground,\n                    'color': item.isCollapse ? color.firstActiveColor : color.firstColor,\n                    'fontSize': item.isCollapse ? color.firstActiveFonteSize : color.firstFontSize,\n                    'padding':color.firstPadding\n                  }\">\n        <span>{{item.title}}</span>\n        <img src=\"assets/collapse/image/icon-down.png\" alt=\"\" [ngClass]=\"{'rotate-x180':item.isCollapse}\">\n      </div>\n      <ul class=\"menu-item\" [ngClass]=\"{'max-height-0':!item.isCollapse}\" [ngStyle]=\"{'background':color.secondBackground,'margin':color.secondMargin}\">\n        <li *ngFor=\"let mItem of item.children\">\n          <div class=\"menu-item-title\" [ngClass]=\"{'menu-item-check':mItem.isActive}\"\n            [ngStyle]=\"{'background':mItem.isActive ? color.secondActiveBackground : '',\n                        'color': mItem.isActive ? color.secondActiveColor : color.secondColor,\n                        'fontSize': mItem.isActive ? color.secondActiveFonteSize : color.secondFontSize,\n                        'padding':color.secondPadding\n                      }\">{{mItem.title}}</div>\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>",
                    styles: ["li,ul{list-style:none;margin:0;padding:0}.collapse-box{color:#fff;font-size:14px;overflow-y:auto}.sub-menu{margin-bottom:8px;border-radius:4px;overflow:hidden}.sub-menu-title{background:linear-gradient(180deg,#18496e 0,#102a42 100%);padding:10px 16px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;transition:.3s;font-weight:700}.sub-menu-title:hover{background:linear-gradient(#287bb3 0,#102e49 100%)!important}.sub-menu-title img{width:12px;height:12px;transition:.3s}.rotate-x180{transform:rotateZ(180deg)}.sub-menu-check{background:linear-gradient(180deg,#287bb3 0,#102e49 100%)}.menu-item{transition:max-height .3s;max-height:500px;background:linear-gradient(180deg,#12314f 0,#0c1e33 100%)}.menu-item-title{padding:10px 0 10px 28px;cursor:pointer;transition:.3s}.menu-item-check,.menu-item-title:hover{background:linear-gradient(180deg,#194a70 0,#0f2a44 100%)}.display-none{display:none}.max-height-0{max-height:0}"]
                }] }
    ];
    /** @nocollapse */
    CollapseComponent.ctorParameters = function () { return [
        { type: PluginManagerService },
        { type: componentData }
    ]; };
    return CollapseComponent;
}());
export { CollapseComponent };
if (false) {
    /** @type {?} */
    CollapseComponent.prototype.data;
    /** @type {?} */
    CollapseComponent.prototype.color;
    /**
     * @type {?}
     * @private
     */
    CollapseComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29sbGFwc2UvIiwic291cmNlcyI6WyJsaWIvY29sbGFwc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRTtJQVVFLDJCQUFvQixvQkFBMEMsRUFBRSxPQUFzQjtRQUFsRSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzVELFVBQVU7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFBOztZQUMvQixLQUFLLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLO1FBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsZUFBZSxJQUFJLDRFQUE0RTs7WUFDeEgsWUFBWSxFQUFFLEtBQUssQ0FBQyxVQUFVLElBQUksTUFBTTs7WUFDeEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxhQUFhLElBQUksTUFBTTs7WUFDOUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxZQUFZLElBQUksV0FBVzs7WUFDakQsYUFBYSxFQUFFLEtBQUssQ0FBQyxXQUFXLElBQUksS0FBSzs7WUFDekMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQixJQUFJLDZFQUE2RTs7WUFDckksa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixJQUFJLE1BQU07O1lBQ3BELHNCQUFzQixFQUFFLEtBQUssQ0FBQyxvQkFBb0IsSUFBSSxNQUFNOztZQUM1RCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLElBQUksMkVBQTJFOztZQUN6SCxhQUFhLEVBQUUsS0FBSyxDQUFDLFdBQVcsSUFBSSxNQUFNOztZQUMxQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsY0FBYyxJQUFJLE1BQU07O1lBQ2hELGVBQWUsRUFBRSxLQUFLLENBQUMsYUFBYSxJQUFJLGtCQUFrQjs7WUFDMUQsY0FBYyxFQUFFLEtBQUssQ0FBQyxZQUFZLElBQUksS0FBSzs7WUFDM0Msd0JBQXdCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQixJQUFJLDRFQUE0RTs7WUFDdEksbUJBQW1CLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixJQUFJLE1BQU07O1lBQ3RELHVCQUF1QixFQUFFLEtBQUssQ0FBQyxxQkFBcUIsSUFBSSxNQUFNLENBQUMsYUFBYTtTQUM3RSxDQUFBO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2xDLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELHNDQUFVOzs7O0lBQVYsVUFBVyxJQUFTO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ2pDLENBQUM7O2dCQTNDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLGdpREFBd0M7O2lCQUV6Qzs7OztnQkFOUSxvQkFBb0I7Z0JBQUUsYUFBYTs7SUErQzVDLHdCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0F4Q1ksaUJBQWlCOzs7SUFFNUIsaUNBQVU7O0lBQ1Ysa0NBQVc7Ozs7O0lBRUMsaURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21wb25lbnREYXRhIH0gZnJvbSAncGx1Z2luLW1hbmFnZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY29sbGFwc2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vY29sbGFwc2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb2xsYXBzZS5jb21wb25lbnQuc3R5bCddXG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBkYXRhOiBhbnk7XG4gIGNvbG9yOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbHVnaW5NYW5hZ2VyU2VydmljZTogUGx1Z2luTWFuYWdlclNlcnZpY2UsIGNvbURhdGE6IGNvbXBvbmVudERhdGEpIHtcbiAgICAvLyDmjqXmlLbkuK3pl7Tku7bkvKDlgLxcbiAgICBjb25zb2xlLmxvZyhcImNvbURhdGFcIiwgY29tRGF0YSlcbiAgICB0aGlzLmRhdGEgPSBjb21EYXRhLmNvbmZpZ0RhdGEuZGF0YVxuICAgIGxldCBjb2xvciA9IGNvbURhdGEuY29uZmlnRGF0YS5jb2xvclxuICAgIHRoaXMuY29sb3IgPSB7XG4gICAgICBcImZpcnN0QmFja2dyb3VuZFwiOiBjb2xvci5maXJzdEJhY2tncm91bmQgfHwgXCJsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI0LCA3MywgMTEwLCAxKSAwJSwgcmdiYSgxNiwgNDIsIDY2LCAxKSAxMDAlKVwiLCAvL+eItue6p+mdouadv+iDjOaZr1xuICAgICAgXCJmaXJzdENvbG9yXCI6IGNvbG9yLmZpcnN0Q29sb3IgfHwgXCIjRkZGXCIsIC8v54i257qn5paH5a2X6aKc6ImyXG4gICAgICBcImZpcnN0Rm9udFNpemVcIjogY29sb3IuZmlyc3RGb250U2l6ZSB8fCBcIjE0cHhcIiwgLy/niLbnuqfmloflrZflpKflsI9cbiAgICAgIFwiZmlyc3RQYWRkaW5nXCI6IGNvbG9yLmZpcnN0UGFkZGluZyB8fCBcIjEwcHggMTZweFwiLCAvL+eItue6p+WGhei+uei3nVxuICAgICAgXCJmaXJzdE1hcmdpblwiOiBjb2xvci5maXJzdE1hcmdpbiB8fCBcIjhweFwiLCAvL+eItue6p+Wklui+uei3nVxuICAgICAgXCJmaXJzdEFjdGl2ZUJhY2tncm91bmRcIjogY29sb3IuZmlyc3RBY3RpdmVCYWNrZ3JvdW5kIHx8IFwibGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg0MCwgMTIzLCAxNzksIDEpIDAlLCByZ2JhKDE2LCA0NiwgNzMsIDEpIDEwMCUpXCIsIC8v54i257qn6Z2i5p2/6YCJ5Lit6IOM5pmvIFxuICAgICAgXCJmaXJzdEFjdGl2ZUNvbG9yXCI6IGNvbG9yLmZpcnN0QWN0aXZlQ29sb3IgfHwgXCIjRkZGXCIsIC8v54i257qn6Z2i5p2/6YCJ5Lit5paH5a2X6aKc6ImyICBcbiAgICAgIFwiZmlyc3RBY3RpdmVGb250ZVNpemVcIjogY29sb3IuZmlyc3RBY3RpdmVGb250ZVNpemUgfHwgXCIxNHB4XCIsIC8v54i257qn6Z2i5p2/6YCJ5Lit5paH5a2X5aSn5bCPXG4gICAgICBcInNlY29uZEJhY2tncm91bmRcIjogY29sb3Iuc2Vjb25kQmFja2dyb3VuZCB8fCBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTgsIDQ5LCA3OSwgMSkgMCUsIHJnYmEoMTIsIDMwLCA1MSwgMSkgMTAwJSlcIiwgLy/lrZDnuqfpnaLmnb/og4zmma9cbiAgICAgIFwic2Vjb25kQ29sb3JcIjogY29sb3Iuc2Vjb25kQ29sb3IgfHwgXCIjRkZGXCIsIC8vIOWtkOe6p+mdouadv+aWh+Wtl+minOiJslxuICAgICAgXCJzZWNvbmRGb250U2l6ZVwiOiBjb2xvci5zZWNvbmRGb250U2l6ZSB8fCBcIjE0cHhcIiwgLy8g5a2Q57qn6Z2i5p2/5a2X5L2T5aSn5bCPXG4gICAgICBcInNlY29uZFBhZGRpbmdcIjogY29sb3Iuc2Vjb25kUGFkZGluZyB8fCBcIjEwcHggMCAxMHB4IDI4cHhcIiwgLy8g5a2Q57qn6Z2i5p2/5YaF6L656LedXG4gICAgICBcInNlY29uZE1hcmdpblwiOiBjb2xvci5zZWNvbmRNYXJnaW4gfHwgXCIwcHhcIiwgLy8g5a2Q57qn6Z2i5p2/5aSW6L656LedXG4gICAgICBcInNlY29uZEFjdGl2ZUJhY2tncm91bmRcIjogY29sb3Iuc2Vjb25kQWN0aXZlQmFja2dyb3VuZCB8fCBcImxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjUsIDc0LCAxMTIsIDEpIDAlLCByZ2JhKDE1LCA0MiwgNjgsIDEpIDEwMCUpXCIsIC8vIOWtkOe6p+mdouadv+mAieS4reiDjOaZr1xuICAgICAgXCJzZWNvbmRBY3RpdmVDb2xvclwiOiBjb2xvci5zZWNvbmRBY3RpdmVDb2xvciB8fCBcIiNGRkZcIiwgLy8g5a2Q57qn6Z2i5p2/6YCJ5Lit5paH5a2X6aKc6ImyXG4gICAgICBcInNlY29uZEFjdGl2ZUZvbnRlU2l6ZVwiOiBjb2xvci5zZWNvbmRBY3RpdmVGb250ZVNpemUgfHwgXCIxNHB4XCIgLy8g5a2Q57qn6Z2i5p2/6YCJ5Lit5paH5a2X5aSn5bCPXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJjb2xvclwiLCB0aGlzLmNvbG9yKVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjbGlja0ZpcnN0KGl0ZW06IGFueSl7XG4gICAgaXRlbS5pc0NvbGxhcHNlID0gIWl0ZW0uaXNDb2xsYXBzZVxuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tGaXJzdFwiLCBpdGVtKVxuICB9XG5cbn1cbiJdfQ==