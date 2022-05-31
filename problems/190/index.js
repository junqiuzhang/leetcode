/**
 * 数据结构：二进制
 * 算法：二进制操作
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = (n) => {
  let res = 0;
  let temp = 0;
  for (let i = 0; i < 32; i++) {
    temp = n >> i; // 一位一位来
    temp &= 1; // 取出最低位
    temp <<= 31 - i; // 颠倒，左移到前面
    res |= temp; // 累加
  }
  return res;
};
