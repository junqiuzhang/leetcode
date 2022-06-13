/**
 * @param {number} n - a positive integer
 * @return {number}
 */
export const hammingWeight = (n) => {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    ans += (n >> i) & 1; // 累加
  }
  return ans;
};
