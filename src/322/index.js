/**
 * 动态规划
 * 16.17% 5.09%
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  // 凑成金额 i 所需的最少硬币数
  const cache = [0];
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (let j = 0; j < coins.length; j++) {
      let preAmount = i - coins[j];
      if (cache[preAmount] < min) {
        min = cache[preAmount];
      }
    }
    cache[i] = min + 1;
  }
  return cache[amount] !== Infinity ? cache[amount] : -1;
}
