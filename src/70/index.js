// // 到达第 i 层时的方法数
// const cache = [0, 1, 2];
// /**
//  * 动态规划，自顶向下
//  * 41.70% 36.95%
//  * @param {number} n
//  * @return {number}
//  */
// function climbStairs(n) {
//   if (typeof cache[n] === 'number') {
//     return cache[n];
//   }
//   cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
//   return cache[n];
// }

/**
 * 动态规划，自底向上
 * 41.70% 27.30%
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  // 到达第 i 层时的方法数
  const cache = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }
  return cache[n];
}
