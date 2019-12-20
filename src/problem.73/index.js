/**
 * 数据结构：数字
 * 算法：数学
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    var num = Math.log(n) / Math.log(4);
    return num - Math.floor(num) < 0.00000000000001;
};