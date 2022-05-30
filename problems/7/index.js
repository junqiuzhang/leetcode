/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const sign = Math.sign(x);
  let ans = 0;
  let tmp = Math.abs(x);
  while (tmp !== 0) {
    ans = ans * 10 + (tmp % 10);
    tmp = Math.floor(tmp / 10);
  }
  ans = sign * ans;
  if (ans < -Math.pow(2, 31) || ans > Math.pow(2, 31) - 1) {
    return 0;
  }
  return ans;
}
