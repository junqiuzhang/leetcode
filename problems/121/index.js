/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
    if (!prices.length) {
        return 0;
    }
    var minPrice = Infinity;
    var maxPrice = -Infinity;
    var max = 0;
    var len = prices.length;
    for (var i = 0; i < len; i++) {
        if (prices[i] < minPrice) {
            if (maxPrice - minPrice > max) {
                max = maxPrice - minPrice;
            }
            minPrice = prices[i];
            maxPrice = prices[i];
        } else if (prices[i] > maxPrice) {
            maxPrice = prices[i];
        }
    }
    return max;
};