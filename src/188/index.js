/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (k < 1) {
    return 0;
  }
  if (prices.length < 2) {
    return 0;
  }
  // 递增子列
  const stageArray = [];
  let minPrice = prices[0];
  let maxPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < maxPrice) {
      // 递增终止条件
      if (maxPrice - minPrice > 0) {
        stageArray.push(minPrice, maxPrice);
      }
      minPrice = prices[i];
      maxPrice = prices[i];
    } else {
      // 递增继续条件
      maxPrice = prices[i];
    }
  }
  if (maxPrice - minPrice > 0) {
    stageArray.push(minPrice, maxPrice);
  }
  if (stageArray.length <= 2 * k) {
    let ret = 0;
    for (let i = 0; i < stageArray.length; i += 2) {
      ret += stageArray[i + 1] - stageArray[i];
    }
    return ret;
  }
  // haveStock[i][j]表示在第i天持有股票，交易了j次
  // noStock[i][j]表示在第i天不持有股票，交易了j次
  const haveStock = new Array(stageArray.length);
  const noStock = new Array(stageArray.length);
  haveStock[0] = new Array(k + 1).fill(-Number.MAX_VALUE);
  noStock[0] = new Array(k + 1).fill(-Number.MAX_VALUE);
  haveStock[0][0] = -stageArray[0];
  noStock[0][0] = 0;
  for (let i = 1; i < stageArray.length; i++) {
    haveStock[i] = new Array(k + 1).fill(0);
    noStock[i] = new Array(k + 1).fill(0);
    haveStock[i][0] = Math.max(haveStock[i - 1][0], noStock[i - 1][0] - stageArray[i]);
    for (let j = 1; j <= k; j++) {
      haveStock[i][j] = Math.max(haveStock[i - 1][j], noStock[i - 1][j] - stageArray[i]);
      noStock[i][j] = Math.max(noStock[i - 1][j], haveStock[i - 1][j - 1] + stageArray[i]);
    }
  }
  return Math.max(...noStock[noStock.length - 1]);
};
