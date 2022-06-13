/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
  let xXORy = x ^ y;
  let temp;
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    temp = xXORy >> i;
    temp &= 1;
    ans += temp;
  }
  return ans;
};
