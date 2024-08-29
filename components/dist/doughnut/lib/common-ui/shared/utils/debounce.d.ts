/**
 * 函数节流函数在给定的时间间隔内只允许你提供的回调函数执行一次，
 * 以此降低它的执行频率,当遇到高频触发的事件时，这样的限制显得尤为重要。
 * 示例：
 * var myEfficientFn = debounce(function() {
 *       // All the taxing stuff you do
 * }, 250);
 * window.addEventListener('resize', myEfficientFn);
 *
 * @param  func      [函数]
 * @param   wait        [毫秒]
 * @param  immediate     [立即执行一次]
 * @return            [返回一个降频后的函数]
 */
export declare const debounce: (func: any, wait?: number, immediate?: boolean) => (...args: any[]) => void;
