/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
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
export { ThemeListComponent };
if (false) {
    /** @type {?} */
    ThemeListComponent.prototype.data;
    /** @type {?} */
    ThemeListComponent.prototype.color;
    /** @type {?} */
    ThemeListComponent.prototype.hoverIndex;
    /** @type {?} */
    ThemeListComponent.prototype.tbodyDiv;
    /**
     * @type {?}
     * @private
     */
    ThemeListComponent.prototype.pluginManagerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90aGVtZS1saXN0LyIsInNvdXJjZXMiOlsibGliL3RoZW1lLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQUUvRCxDQUFDLEdBQVEsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLENBQUM7QUFFaEM7SUFjRSw0QkFBb0Isb0JBQTBDLEVBQUUsT0FBc0I7UUFBbEUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM1RCxVQUFVO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQTtRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFBO0lBQ3ZDLENBQUM7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFBQSxpQkFrQ0M7UUFqQ0MsV0FBVzs7O1FBQUM7O2dCQUNOLE1BQU0sR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7WUFDL0QsTUFBTSxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLE9BQU87Z0JBQ3BCLE9BQU8sQ0FBQyxPQUFPLENBQUM7b0JBQ2QsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFO29CQUM5QixFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRTtpQkFDbkMsRUFBRTtvQkFDRCxRQUFRLEVBQUUsR0FBRztvQkFDYixVQUFVLEVBQUUsQ0FBQztpQkFDZCxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUNILHdEQUF3RDtZQUN4RCxvQ0FBb0M7WUFDcEMsdUNBQXVDO1lBQ3ZDLE9BQU87WUFDUCxtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLE1BQU07WUFFTixVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUN6QyxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUE7UUFFVCxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7UUFNVCxvRUFBb0U7UUFDcEUsd0JBQXdCO1FBQ3hCLDRDQUE0QztRQUM1QyxLQUFLO0lBQ1AsQ0FBQzs7Ozs7SUFFRCxxQ0FBUTs7OztJQUFSLFVBQVMsR0FBRztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbEIsQ0FBQzs7Z0JBNURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixrcEJBQTBDOztpQkFFM0M7Ozs7Z0JBUlEsb0JBQW9CO2dCQUFFLGFBQWE7OzsyQkFlekMsU0FBUyxTQUFDLE9BQU87O0lBbURwQix5QkFBQztDQUFBLEFBOURELElBOERDO1NBekRZLGtCQUFrQjs7O0lBRTdCLGtDQUFVOztJQUNWLG1DQUFXOztJQUNYLHdDQUFnQjs7SUFFaEIsc0NBQ29COzs7OztJQUVSLGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbk1hbmFnZXJTZXJ2aWNlLCBjb21wb25lbnREYXRhIH0gZnJvbSAncGx1Z2luLW1hbmFnZXInO1xuXG5jb25zdCAkOiBhbnkgPSAod2luZG93IGFzIGFueSkuJDtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXRoZW1lLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGhlbWUtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RoZW1lLWxpc3QuY29tcG9uZW50LnN0eWwnXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVtZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRhdGE6IGFueTtcbiAgY29sb3I6IGFueTtcbiAgaG92ZXJJbmRleDogYW55O1xuXG4gIEBWaWV3Q2hpbGQoJ3Rib2R5JylcbiAgdGJvZHlEaXY6IEVsZW1lbnRSZWZcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsdWdpbk1hbmFnZXJTZXJ2aWNlOiBQbHVnaW5NYW5hZ2VyU2VydmljZSwgY29tRGF0YTogY29tcG9uZW50RGF0YSkge1xuICAgIC8vIOaOpeaUtuS4remXtOS7tuS8oOWAvFxuICAgIGNvbnNvbGUubG9nKFwiY29tRGF0YVwiLCBjb21EYXRhKVxuICAgIHRoaXMuZGF0YSA9IGNvbURhdGEuY29uZmlnRGF0YS5kYXRhXG4gICAgdGhpcy5jb2xvciA9IGNvbURhdGEuY29uZmlnRGF0YS5jb2xvclxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgbGV0IHRyTGlzdCA9IHRoaXMudGJvZHlEaXYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0cicpXG4gICAgICB0ckxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgZWxlbWVudC5hbmltYXRlKFtcbiAgICAgICAgICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0sXG4gICAgICAgICAgeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC00MHB4KScgfVxuICAgICAgICBdLCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMCxcbiAgICAgICAgICBpdGVyYXRpb25zOiAxXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICAvLyBsZXQgYW5pbWF0aW9uID0gdGhpcy50Ym9keURpdi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoW1xuICAgICAgLy8gICB7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknIH0sXG4gICAgICAvLyAgIHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNDBweCknIH1cbiAgICAgIC8vIF0sIHtcbiAgICAgIC8vICAgZHVyYXRpb246IDYwMCxcbiAgICAgIC8vICAgaXRlcmF0aW9uczogMVxuICAgICAgLy8gfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRhdGEudGQucHVzaCh0aGlzLmRhdGEudGQuc2hpZnQoKSlcbiAgICAgIH0sIDYwMClcblxuICAgIH0sIDMwMDApO1xuXG5cblxuXG5cbiAgICAvLyB0aGlzLnRib2R5RGl2Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywoKT0+e1xuICAgIC8vICAgY29uc29sZS5sb2coXCLmiafooYznu5PmnZ9cIilcbiAgICAvLyAgIHRoaXMuZGF0YS50ZC5wdXNoKHRoaXMuZGF0YS50ZC5zaGlmdCgpKVxuICAgIC8vIH0pXG4gIH1cblxuICBjbGlja1Jvdyh1cmwpIHtcbiAgICBjb25zb2xlLmxvZyhcIueCueWHu+S6hnJvd1wiLCB1cmwpXG4gICAgd2luZG93Lm9wZW4odXJsKVxuICB9XG5cbn1cbiJdfQ==