/**
 * 数据结构：数字
 * 算法：循环
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    var res = 0;
    var temp = n;
    while (temp >= 5) {
        res += Math.floor(temp / 5);
        temp /= 5;
    }
    return res;
};