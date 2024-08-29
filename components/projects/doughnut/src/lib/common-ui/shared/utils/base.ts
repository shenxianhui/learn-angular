/**
 * 判断数值是否为空
 * null, undefined, '', '   ', [], {}
 * 都视为空
 * @param value
 * @returns 
 */
export const isEmpty = (value: any): boolean => {
    const type = Object.prototype.toString.call(value);
    switch (type) {
        case '[object Null]': return true;
            break;
        case '[object Undefined]': return true;
            break;
        case '[object String]': return value.trim().length === 0;
            break;
        case '[object Array]': return value.length === 0;
            break;
        case '[object Object]': return Object.keys(value).length === 0;
            break;
        default: return false;
    }
};

/**
 * 过滤掉字符串中的特殊字符
 */
export const safeStr = (value: string) => {
    let strReturn = '';

    for (let i = 0; i < value.length; i++) {
        const charCode = value.charCodeAt(i);
        if (charCode >= 32 && charCode < 128) {
            strReturn += value[i];
        } else {
            strReturn += '.';
        }
    }
    return strReturn;
};

/**
 * 判断某个字符是否是汉字
 */
export const isCHChar = function (str, i) {
    if (str.charCodeAt(i) >= 0 && str.charCodeAt(i) <= 255) {
        return false;
    } else {
        return true;
    }
};
