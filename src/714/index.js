/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  if (prices.length === 1) {
    return 0;
  }
  // 【基本】递增子列：如果递增子列中的递减子列的差均不超过fee，称之为【基本】递增子列
  const stageArray = [];
  let minPrice = prices[0];
  let maxPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if ((prices[i] < maxPrice - fee) || (prices[i] < minPrice)) {
      if (maxPrice - minPrice > fee) {
        stageArray.push(minPrice, maxPrice);
      }
      minPrice = prices[i];
      maxPrice = prices[i];
    } else if (prices[i] > maxPrice) {
      maxPrice = prices[i];
    }
  }
  if (maxPrice - minPrice > fee) {
    stageArray.push(minPrice, maxPrice);
  }
  let ret = 0;
  for (let i = 0; i < stageArray.length; i += 2) {
    ret += stageArray[i + 1] - stageArray[i] - fee;
  }
  return ret;
};
