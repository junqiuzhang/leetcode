/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  // 循环
  if (x === 0) return 0;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let res = 1;
  while (n > 0) {
    if (n & 1) {
      res *= x;
    }
    x *= x;
    n = Math.floor(n / 2);
  }
  return res;
  // 递归
  // if (x === 0) return 0;
  // const cache = [];
  // function calc(x, n) {
  //   if (cache[n]) {
  //     return cache[n];
  //   }
  //   const half = Math.floor(n / 2);
  //   if (n === 0) {
  //     cache[n] = 1;
  //   } else if (n % 2 === 0) {
  //     cache[n] = calc(x, half) * calc(x, half);
  //   } else {
  //     cache[n] = calc(x, half) * calc(x, half) * x;
  //   }
  //   return cache[n];
  // }
  // if (n < 0) {
  //   return 1 / calc(x, -n);
  // }
  // return calc(x, n);
}
