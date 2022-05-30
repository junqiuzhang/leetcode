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
    var max = 0;
    var len = prices.length;
    for (let i = 0; i < len; i++) {
        if (prices[i] < prices[i + 1]) {
            max += prices[i + 1] - prices[i];
        }
    }
    return max;
};