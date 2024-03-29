/**
 * 数据结构：数字
 * 算法：循环
 */
/**
 * @param {number} n
 * @return {boolean}
 */
export const isPowerOfTwo = (n) => {
  if (n <= 0) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < 32; i++) {
    sum += (n >> i) & 1;
    if (sum > 1) {
      return false;
    }
  }
  return true;
};
