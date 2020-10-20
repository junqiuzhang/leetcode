/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) {
        return 0;
    }
    var left = Infinity;
    var right = -1;
    var max = 0;
    var temp = -1;
    var len = prices.length;
    for (var i = 0; i < len; i++) {
        temp = prices[i];
        if (temp < left) {
            left = temp;
            right = temp;
        } else if (temp > right) {
            right = temp;
            if (right - left > max) {
                max = right - left;
            }
        }
    }
    return max;
};