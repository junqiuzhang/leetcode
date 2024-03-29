/**
 * 数据结构：数字
 * 算法：循环
 */
/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
  if (n < 2) {
    return 0;
  }
  let num = [];
  let sum = 0;
  let primes = 2;
  let i, j;
  while (primes < n) {
    sum++;
    for (i = primes; i < n; i += primes) {
      num[i] = false;
    }
    for (j = primes; j <= n; j++) {
      if (typeof num[j] == 'undefined') {
        primes = j;
        break;
      }
    }
  }
  return sum;
};
