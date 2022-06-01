/**
 * @param {number} n - a positive integer
 * @return {number}
 */
export const hammingWeight = (n) => {
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res += (n >> i) & 1; // 累加
  }
  return res;
};
