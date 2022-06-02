// /**
//  * 动态规划
//  * 11.31% 12.05%
//  * @param {number[]} coins
//  * @param {number} amount
//  * @return {number}
//  */
// const coinChange = (coins, amount) => {
//   // 凑成金额 i 所需的最少硬币数
//   const cache = [0];
//   const calcCoinNumber = (amount) => {
//     if (typeof cache[amount] === 'number') {
//       return cache[amount];
//     }
//     if (amount < 0) {
//       return Infinity;
//     }
//     let min = Infinity;
//     for (let j = 0; j < coins.length; j++) {
//       let preAmount = amount - coins[j];
//       let preNumber = calcCoinNumber(preAmount);
//       if (preNumber < min) {
//         min = preNumber;
//       }
//     }
//     cache[amount] = min + 1;
//     return cache[amount];
//   }
//   const num = calcCoinNumber(amount);
//   return num !== Infinity ? num : -1;
// }

/**
 * 动态规划
 * 16.17% 5.09%
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export const coinChange = (coins, amount) => {
  // 凑成金额 i 所需的最少硬币数
  coins = coins.filter((coin) => coin <= amount);
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
};
