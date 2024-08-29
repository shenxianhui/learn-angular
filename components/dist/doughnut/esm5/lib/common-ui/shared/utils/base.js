/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * 判断数值是否为空
 * null, undefined, '', '   ', [], {}
 * 都视为空
 * \@param value
 * \@return
 * @type {?}
 */
export var isEmpty = (/**
 * @param {?} value
 * @return {?}
 */
function (value) {
    /** @type {?} */
    var type = Object.prototype.toString.call(value);
    switch (type) {
        case '[object Null]':
            return true;
            break;
        case '[object Undefined]':
            return true;
            break;
        case '[object String]':
            return value.trim().length === 0;
            break;
        case '[object Array]':
            return value.length === 0;
            break;
        case '[object Object]':
            return Object.keys(value).length === 0;
            break;
        default: return false;
    }
});
/**
 * 过滤掉字符串中的特殊字符
 * @type {?}
 */
export var safeStr = (/**
 * @param {?} value
 * @return {?}
 */
function (value) {
    /** @type {?} */
    var strReturn = '';
    for (var i = 0; i < value.length; i++) {
        /** @type {?} */
        var charCode = value.charCodeAt(i);
        if (charCode >= 32 && charCode < 128) {
            strReturn += value[i];
        }
        else {
            strReturn += '.';
        }
    }
    return strReturn;
});
/**
 * 判断某个字符是否是汉字
 * @type {?}
 */
export var isCHChar = (/**
 * @param {?} str
 * @param {?} i
 * @return {?}
 */
function (str, i) {
    if (str.charCodeAt(i) >= 0 && str.charCodeAt(i) <= 255) {
        return false;
    }
    else {
        return true;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RvdWdobnV0LyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi11aS9zaGFyZWQvdXRpbHMvYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxNQUFNLEtBQU8sT0FBTzs7OztBQUFHLFVBQUMsS0FBVTs7UUFDeEIsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbEQsUUFBUSxJQUFJLEVBQUU7UUFDVixLQUFLLGVBQWU7WUFBRSxPQUFPLElBQUksQ0FBQztZQUM5QixNQUFNO1FBQ1YsS0FBSyxvQkFBb0I7WUFBRSxPQUFPLElBQUksQ0FBQztZQUNuQyxNQUFNO1FBQ1YsS0FBSyxpQkFBaUI7WUFBRSxPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQ3JELE1BQU07UUFDVixLQUFLLGdCQUFnQjtZQUFFLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDN0MsTUFBTTtRQUNWLEtBQUssaUJBQWlCO1lBQUUsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7WUFDM0QsTUFBTTtRQUNWLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDO0tBQ3pCO0FBQ0wsQ0FBQyxDQUFBOzs7OztBQUtELE1BQU0sS0FBTyxPQUFPOzs7O0FBQUcsVUFBQyxLQUFhOztRQUM3QixTQUFTLEdBQUcsRUFBRTtJQUVsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDN0IsUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksUUFBUSxJQUFJLEVBQUUsSUFBSSxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ2xDLFNBQVMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNILFNBQVMsSUFBSSxHQUFHLENBQUM7U0FDcEI7S0FDSjtJQUNELE9BQU8sU0FBUyxDQUFDO0FBQ3JCLENBQUMsQ0FBQTs7Ozs7QUFLRCxNQUFNLEtBQU8sUUFBUTs7Ozs7QUFBRyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3BDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7UUFDcEQsT0FBTyxLQUFLLENBQUM7S0FDaEI7U0FBTTtRQUNILE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFDTCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5Yik5pat5pWw5YC85piv5ZCm5Li656m6XHJcbiAqIG51bGwsIHVuZGVmaW5lZCwgJycsICcgICAnLCBbXSwge31cclxuICog6YO96KeG5Li656m6XHJcbiAqIEBwYXJhbSB2YWx1ZVxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBjb25zdCBpc0VtcHR5ID0gKHZhbHVlOiBhbnkpOiBib29sZWFuID0+IHtcclxuICAgIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnW29iamVjdCBOdWxsXSc6IHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdbb2JqZWN0IFVuZGVmaW5lZF0nOiByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzogcmV0dXJuIHZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1tvYmplY3QgQXJyYXldJzogcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzogcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiDov4fmu6TmjonlrZfnrKbkuLLkuK3nmoTnibnmrorlrZfnrKZcclxuICovXHJcbmV4cG9ydCBjb25zdCBzYWZlU3RyID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgIGxldCBzdHJSZXR1cm4gPSAnJztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY2hhckNvZGUgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChjaGFyQ29kZSA+PSAzMiAmJiBjaGFyQ29kZSA8IDEyOCkge1xyXG4gICAgICAgICAgICBzdHJSZXR1cm4gKz0gdmFsdWVbaV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RyUmV0dXJuICs9ICcuJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyUmV0dXJuO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOWIpOaWreafkOS4quWtl+espuaYr+WQpuaYr+axieWtl1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzQ0hDaGFyID0gZnVuY3Rpb24gKHN0ciwgaSkge1xyXG4gICAgaWYgKHN0ci5jaGFyQ29kZUF0KGkpID49IDAgJiYgc3RyLmNoYXJDb2RlQXQoaSkgPD0gMjU1KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufTtcclxuIl19