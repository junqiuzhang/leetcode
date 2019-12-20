/**
 * 数据结构：数字
 * 算法：循环
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x <= 1) {
        return x;
    }
    var bin = x.toString(2);
    var Max = Math.ceil(Math.pow(2, bin.length - 1))
    var sub = Max;
    var sup = 0;
    var res = Math.round((sub + sup) / 2);
    for (var i = 0; i < Max; i++) {
        if (res * res <= x && (res + 1) * (res + 1) > x) {
            return res
        }
        if (res * res > x) {
            sub = res;
            res = Math.floor((sub + sup) / 2);
            continue;
        }
        sup = res;
        res = Math.floor((sub + sup) / 2);
    }
    return res;
};