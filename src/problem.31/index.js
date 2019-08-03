/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) {
        return 0;
    }
    var tempMax = -1;
    var max = -1;
    for (var i = 0; i < prices.length; i++) {
        for (var j = i; j < prices.length; j++) {
            tempMax = prices[j] - prices[i];
            if (tempMax > max) {
                max = tempMax;
            }
        }
    }
    if (max > 0) {
        return max;
    }
    return 0;
};