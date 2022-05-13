// /**
//  * 动态规划，自顶向下
//  * 41.25% 16.83%
//  * @param {number[]} cost cost[i]为离开当前台阶的花费
//  * @return {number}
//  */
// function minCostClimbingStairs(cost) {
//   // 离开第 i 层时的最小花费
//   const cache = [0, 0];
//   function minCost(n) {
//     if (typeof cache[n] === 'number') {
//       return cache[n];
//     }
//     cache[n] = Math.min(
//       minCost(n - 1) + cost[n - 1],
//       minCost(n - 2) + cost[n - 2]
//     );
//     return cache[n];
//   }
//   // 离开第 cost.length 层 === 到达楼顶
//   return minCost(cost.length);
// }
/**
 * 动态规划，自底向上
 * 41.25% 86.56%
 * @param {number[]} cost cost[i]为离开当前台阶的花费
 * @return {number}
 */
function minCostClimbingStairs(cost) {
  // 离开第 i 层时的最小花费
  const cache = [0, 0];
  for (let i = 2; i <= cost.length; i++) {
    cache[i] = Math.min(cache[i - 1] + cost[i - 1], cache[i - 2] + cost[i - 2]);
  }
  // 离开第 cost.length 层 === 到达楼顶
  return cache[cost.length];
}
