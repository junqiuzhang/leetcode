/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (k, prices) => {
  if (k < 1) {
    return 0;
  }
  if (prices.length < 2) {
    return 0;
  }
  // haveStock[i][j]表示在第i天持有股票，交易了j次
  // noStock[i][j]表示在第i天不持有股票，交易了j次
  const haveStock = new Array(prices.length);
  const noStock = new Array(prices.length);
  haveStock[0] = new Array(k + 1).fill(-Number.MAX_VALUE);
  noStock[0] = new Array(k + 1).fill(-Number.MAX_VALUE);
  haveStock[0][0] = -prices[0];
  noStock[0][0] = 0;
  for (let i = 1; i < prices.length; i++) {
    haveStock[i] = new Array(k + 1).fill(0);
    noStock[i] = new Array(k + 1).fill(0);
    haveStock[i][0] = Math.max(
      haveStock[i - 1][0],
      noStock[i - 1][0] - prices[i]
    );
    for (let j = 1; j <= k; j++) {
      haveStock[i][j] = Math.max(
        haveStock[i - 1][j],
        noStock[i - 1][j] - prices[i]
      );
      noStock[i][j] = Math.max(
        noStock[i - 1][j],
        haveStock[i - 1][j - 1] + prices[i]
      );
    }
  }
  return Math.max(...noStock[noStock.length - 1]);
}
