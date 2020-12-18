/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  if (prices.length === 1) {
    return 0;
  } else if (prices.length === 2) {
    return prices[1] - prices[0];
  }
  const stageArray = [];
  let minPrice = prices[0];
  let maxPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < maxPrice - fee) {
      if (maxPrice - minPrice > fee) {
        stageArray.push([minPrice, maxPrice]);
      }
      minPrice = prices[i];
      maxPrice = prices[i];
    } else if (prices[i] > maxPrice) {
      maxPrice = prices[i];
    } else if (prices[i] < minPrice) {
      minPrice = prices[i];
      maxPrice = prices[i];
    }
  }
  if (maxPrice - minPrice > fee) {
    stageArray.push([minPrice, maxPrice]);
  }
  let ret = 0;
  for (let i = 0; i < stageArray.length; i++) {
    ret += stageArray[i][1] - stageArray[i][0] - fee;
  }
  return ret;
};
