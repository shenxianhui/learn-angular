/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 函数节流函数在给定的时间间隔内只允许你提供的回调函数执行一次，
 * 以此降低它的执行频率,当遇到高频触发的事件时，这样的限制显得尤为重要。
 * 示例：
 * var myEfficientFn = debounce(function() {
 *       // All the taxing stuff you do
 * }, 250);
 * window.addEventListener('resize', myEfficientFn);
 *
 * \@param func      [函数]
 * \@param wait        [毫秒]
 * \@param immediate     [立即执行一次]
 * \@return [返回一个降频后的函数]
 * @type {?}
 */
export const debounce = (/**
 * @param {?} func
 * @param {?=} wait
 * @param {?=} immediate
 * @return {?}
 */
(func, wait = 200, immediate = true) => {
    /** @type {?} */
    let timeout;
    return (/**
     * @param {...?} args
     * @return {?}
     */
    function (...args) {
        /** @type {?} */
        let context = this;
        /** @type {?} */
        let later = (/**
         * @return {?}
         */
        function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        });
        /** @type {?} */
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVib3VuY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kb3VnaG51dC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24tdWkvc2hhcmVkL3V0aWxzL2RlYm91bmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxNQUFNLE9BQU8sUUFBUTs7Ozs7O0FBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBZSxHQUFHLEVBQUUsWUFBcUIsSUFBSSxFQUFFLEVBQUU7O1FBQ3hFLE9BQU87SUFDWDs7OztJQUFPLFVBQVUsR0FBRyxJQUFJOztZQUNoQixPQUFPLEdBQUcsSUFBSTs7WUFDZCxLQUFLOzs7UUFBRztZQUNSLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDZixJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdCO1FBQ0wsQ0FBQyxDQUFBOztZQUNHLE9BQU8sR0FBRyxTQUFTLElBQUksQ0FBQyxPQUFPO1FBQ25DLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QixPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLE9BQU8sRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQyxFQUFDO0FBQ04sQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWHveaVsOiKgua1geWHveaVsOWcqOe7meWumueahOaXtumXtOmXtOmalOWGheWPquWFgeiuuOS9oOaPkOS+m+eahOWbnuiwg+WHveaVsOaJp+ihjOS4gOasoe+8jFxyXG4gKiDku6XmraTpmY3kvY7lroPnmoTmiafooYzpopHnjocs5b2T6YGH5Yiw6auY6aKR6Kem5Y+R55qE5LqL5Lu25pe277yM6L+Z5qC355qE6ZmQ5Yi25pi+5b6X5bCk5Li66YeN6KaB44CCXHJcbiAqIOekuuS+i++8mlxyXG4gKiB2YXIgbXlFZmZpY2llbnRGbiA9IGRlYm91bmNlKGZ1bmN0aW9uKCkge1xyXG4gKiAgICAgICAvLyBBbGwgdGhlIHRheGluZyBzdHVmZiB5b3UgZG9cclxuICogfSwgMjUwKTtcclxuICogd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG15RWZmaWNpZW50Rm4pO1xyXG4gKlxyXG4gKiBAcGFyYW0gIGZ1bmMgICAgICBb5Ye95pWwXVxyXG4gKiBAcGFyYW0gICB3YWl0ICAgICAgICBb5q+r56eSXVxyXG4gKiBAcGFyYW0gIGltbWVkaWF0ZSAgICAgW+eri+WNs+aJp+ihjOS4gOasoV1cclxuICogQHJldHVybiAgICAgICAgICAgIFvov5Tlm57kuIDkuKrpmY3popHlkI7nmoTlh73mlbBdXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdDogbnVtYmVyID0gMjAwLCBpbW1lZGlhdGU6IGJvb2xlYW4gPSB0cnVlKSA9PiB7XHJcbiAgICBsZXQgdGltZW91dDtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgIGxldCBjb250ZXh0ID0gdGhpcztcclxuICAgICAgICBsZXQgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcclxuICAgICAgICBpZiAoY2FsbE5vdykge1xyXG4gICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn07XHJcbiJdfQ==