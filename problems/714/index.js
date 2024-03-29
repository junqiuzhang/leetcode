/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
  if (prices.length === 1) {
    return 0;
  }
  // 【基本】递增子列：如果递增子列中的递减子列的差均不超过fee，称之为【基本】递增子列
  const stageArray = [];
  let minPrice = prices[0];
  let maxPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < maxPrice - fee || prices[i] < minPrice) {
      // 递增终止条件
      if (maxPrice - minPrice > fee) {
        stageArray.push(minPrice, maxPrice);
      }
      minPrice = prices[i];
      maxPrice = prices[i];
    } else if (prices[i] > maxPrice) {
      // 递增继续条件
      maxPrice = prices[i];
    }
  }
  if (maxPrice - minPrice > fee) {
    stageArray.push(minPrice, maxPrice);
  }
  let ans = 0;
  for (let i = 0; i < stageArray.length; i += 2) {
    ans += stageArray[i + 1] - stageArray[i] - fee;
  }
  return ans;
};
