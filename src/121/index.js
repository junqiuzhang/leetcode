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
    var right = -Infinity;
    var max = 0;
    var len = prices.length;
    for (var i = 0; i < len; i++) {
        if (prices[i] < left) {
            left = prices[i];
            right = prices[i];
        } else if (prices[i] > right) {
            right = prices[i];
        }
        if (right - left > max) {
            max = right - left;
        }
    }
    return max;
};