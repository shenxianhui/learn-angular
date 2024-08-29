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
export var debounce = (/**
 * @param {?} func
 * @param {?=} wait
 * @param {?=} immediate
 * @return {?}
 */
function (func, wait, immediate) {
    if (wait === void 0) { wait = 200; }
    if (immediate === void 0) { immediate = true; }
    /** @type {?} */
    var timeout;
    return (/**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        /** @type {?} */
        var context = this;
        /** @type {?} */
        var later = (/**
         * @return {?}
         */
        function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        });
        /** @type {?} */
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVib3VuY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9kb3VnaG51dC8iLCJzb3VyY2VzIjpbImxpYi9jb21tb24tdWkvc2hhcmVkL3V0aWxzL2RlYm91bmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSxNQUFNLEtBQU8sUUFBUTs7Ozs7O0FBQUcsVUFBQyxJQUFJLEVBQUUsSUFBa0IsRUFBRSxTQUF5QjtJQUE3QyxxQkFBQSxFQUFBLFVBQWtCO0lBQUUsMEJBQUEsRUFBQSxnQkFBeUI7O1FBQ3BFLE9BQU87SUFDWDs7OztJQUFPO1FBQVUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCx5QkFBTzs7O1lBQ2hCLE9BQU8sR0FBRyxJQUFJOztZQUNkLEtBQUs7OztRQUFHO1lBQ1IsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNmLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDN0I7UUFDTCxDQUFDLENBQUE7O1lBQ0csT0FBTyxHQUFHLFNBQVMsSUFBSSxDQUFDLE9BQU87UUFDbkMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksT0FBTyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDLEVBQUM7QUFDTixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5Ye95pWw6IqC5rWB5Ye95pWw5Zyo57uZ5a6a55qE5pe26Ze06Ze06ZqU5YaF5Y+q5YWB6K645L2g5o+Q5L6b55qE5Zue6LCD5Ye95pWw5omn6KGM5LiA5qyh77yMXHJcbiAqIOS7peatpOmZjeS9juWug+eahOaJp+ihjOmikeeOhyzlvZPpgYfliLDpq5jpopHop6blj5HnmoTkuovku7bml7bvvIzov5nmoLfnmoTpmZDliLbmmL7lvpflsKTkuLrph43opoHjgIJcclxuICog56S65L6L77yaXHJcbiAqIHZhciBteUVmZmljaWVudEZuID0gZGVib3VuY2UoZnVuY3Rpb24oKSB7XHJcbiAqICAgICAgIC8vIEFsbCB0aGUgdGF4aW5nIHN0dWZmIHlvdSBkb1xyXG4gKiB9LCAyNTApO1xyXG4gKiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgbXlFZmZpY2llbnRGbik7XHJcbiAqXHJcbiAqIEBwYXJhbSAgZnVuYyAgICAgIFvlh73mlbBdXHJcbiAqIEBwYXJhbSAgIHdhaXQgICAgICAgIFvmr6vnp5JdXHJcbiAqIEBwYXJhbSAgaW1tZWRpYXRlICAgICBb56uL5Y2z5omn6KGM5LiA5qyhXVxyXG4gKiBAcmV0dXJuICAgICAgICAgICAgW+i/lOWbnuS4gOS4qumZjemikeWQjueahOWHveaVsF1cclxuICovXHJcbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0OiBudW1iZXIgPSAyMDAsIGltbWVkaWF0ZTogYm9vbGVhbiA9IHRydWUpID0+IHtcclxuICAgIGxldCB0aW1lb3V0O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBsYXRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsZXQgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xyXG4gICAgICAgIGlmIChjYWxsTm93KSB7XHJcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTtcclxuIl19