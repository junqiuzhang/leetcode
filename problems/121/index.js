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
  let minPrice = Infinity;
  let maxPrice = -Infinity;
  let max = 0;
  let len = prices.length;
  for (let i = 0; i < len; i++) {
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
