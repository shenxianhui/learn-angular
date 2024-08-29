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
export const isEmpty = (/**
 * @param {?} value
 * @return {?}
 */
(value) => {
    /** @type {?} */
    const type = Object.prototype.toString.call(value);
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
export const safeStr = (/**
 * @param {?} value
 * @return {?}
 */
(value) => {
    /** @type {?} */
    let strReturn = '';
    for (let i = 0; i < value.length; i++) {
        /** @type {?} */
        const charCode = value.charCodeAt(i);
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
export const isCHChar = (/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2RvdWdobnV0LyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi11aS9zaGFyZWQvdXRpbHMvYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFPQSxNQUFNLE9BQU8sT0FBTzs7OztBQUFHLENBQUMsS0FBVSxFQUFXLEVBQUU7O1VBQ3JDLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ2xELFFBQVEsSUFBSSxFQUFFO1FBQ1YsS0FBSyxlQUFlO1lBQUUsT0FBTyxJQUFJLENBQUM7WUFDOUIsTUFBTTtRQUNWLEtBQUssb0JBQW9CO1lBQUUsT0FBTyxJQUFJLENBQUM7WUFDbkMsTUFBTTtRQUNWLEtBQUssaUJBQWlCO1lBQUUsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztZQUNyRCxNQUFNO1FBQ1YsS0FBSyxnQkFBZ0I7WUFBRSxPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQzdDLE1BQU07UUFDVixLQUFLLGlCQUFpQjtZQUFFLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1lBQzNELE1BQU07UUFDVixPQUFPLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQztLQUN6QjtBQUNMLENBQUMsQ0FBQTs7Ozs7QUFLRCxNQUFNLE9BQU8sT0FBTzs7OztBQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7O1FBQ2pDLFNBQVMsR0FBRyxFQUFFO0lBRWxCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUM3QixRQUFRLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxRQUFRLElBQUksRUFBRSxJQUFJLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDbEMsU0FBUyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ0gsU0FBUyxJQUFJLEdBQUcsQ0FBQztTQUNwQjtLQUNKO0lBQ0QsT0FBTyxTQUFTLENBQUM7QUFDckIsQ0FBQyxDQUFBOzs7OztBQUtELE1BQU0sT0FBTyxRQUFROzs7OztBQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDcEMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtRQUNwRCxPQUFPLEtBQUssQ0FBQztLQUNoQjtTQUFNO1FBQ0gsT0FBTyxJQUFJLENBQUM7S0FDZjtBQUNMLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDliKTmlq3mlbDlgLzmmK/lkKbkuLrnqbpcclxuICogbnVsbCwgdW5kZWZpbmVkLCAnJywgJyAgICcsIFtdLCB7fVxyXG4gKiDpg73op4bkuLrnqbpcclxuICogQHBhcmFtIHZhbHVlXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlICdbb2JqZWN0IE51bGxdJzogcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1tvYmplY3QgVW5kZWZpbmVkXSc6IHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOiByZXR1cm4gdmFsdWUudHJpbSgpLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnW29iamVjdCBBcnJheV0nOiByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOiByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOi/h+a7pOaOieWtl+espuS4suS4reeahOeJueauiuWtl+esplxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNhZmVTdHIgPSAodmFsdWU6IHN0cmluZykgPT4ge1xyXG4gICAgbGV0IHN0clJldHVybiA9ICcnO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjaGFyQ29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgaWYgKGNoYXJDb2RlID49IDMyICYmIGNoYXJDb2RlIDwgMTI4KSB7XHJcbiAgICAgICAgICAgIHN0clJldHVybiArPSB2YWx1ZVtpXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdHJSZXR1cm4gKz0gJy4nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdHJSZXR1cm47XHJcbn07XHJcblxyXG4vKipcclxuICog5Yik5pat5p+Q5Liq5a2X56ym5piv5ZCm5piv5rGJ5a2XXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXNDSENoYXIgPSBmdW5jdGlvbiAoc3RyLCBpKSB7XHJcbiAgICBpZiAoc3RyLmNoYXJDb2RlQXQoaSkgPj0gMCAmJiBzdHIuY2hhckNvZGVBdChpKSA8PSAyNTUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59O1xyXG4iXX0=