/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    return Math.floor(Math.sqrt(1/4 + 2*n) - 1/2);
};