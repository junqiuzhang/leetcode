// /**
//  * 排列组合
//  * @param {number} n
//  * @return {number}
//  */
// function climbStairs(n) {
//   if (n < 4) {
//     return n;
//   }
//   var Max = Math.floor(n / 2);
//   var one = 0;
//   var two = 0;
//   var res = 0;
//   var resArr = [];
//   function C_nm(n, m) {
//     if (m == 0 || n == m) {
//       return 1;
//     }
//     var fir = resArr[n - 1] ? resArr[n - 1][m - 1] : 0;
//     var sec = resArr[n - 1] ? resArr[n - 1][m] : 0;
//     if (!fir) {
//       fir = C_nm(n - 1, m - 1);
//       resArr[n - 1] = [];
//       resArr[n - 1][m - 1] = fir;
//     }
//     if (!sec) {
//       sec = C_nm(n - 1, m);
//       resArr[n - 1] = [];
//       resArr[n - 1][m] = sec;
//     }
//     return fir + sec;
//   }
//   for (var two = 0; two <= Max; two++) {
//     one = n - 2 * two;
//     res += C_nm(one + two, one > two ? two : one);
//   }
//   return res;
// }
const cache = [0, 1, 2];
/**
 * 动态规划，自顶向下
 * 41.70% 36.95%
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  if (cache[n]) {
    return cache[n];
  }
  cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return cache[n];
};