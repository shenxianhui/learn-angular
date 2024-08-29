/**
 * 判断数值是否为空
 * null, undefined, '', '   ', [], {}
 * 都视为空
 * @param value
 * @returns
 */
export declare const isEmpty: (value: any) => boolean;
/**
 * 过滤掉字符串中的特殊字符
 */
export declare const safeStr: (value: string) => string;
/**
 * 判断某个字符是否是汉字
 */
export declare const isCHChar: (str: any, i: any) => boolean;
