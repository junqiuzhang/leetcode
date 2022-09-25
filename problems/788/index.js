const NumberMap = [0, 1, 5, NaN, NaN, 2, 9, NaN, 8, 6];
/**
 * @param {number} n
 * @return {number}
 */
export const rotateNumber = (n) => {
  let ans = 0;
  let temp = n;
  let i = 0;
  while (temp > 0) {
    if (Number.isNaN(ans)) {
      return NaN;
    }
    ans += NumberMap[temp % 10] * Math.pow(10, i);
    temp = Math.floor(temp / 10);
    i++;
  }
  return ans;
};
/**
 * @param {number} n
 * @return {boolean}
 */
export const isGoodNumber = (n) => {
  const rn = rotateNumber(n);
  return !Number.isNaN(rn) && rn !== n;
};
/**
 * @param {number} n
 * @return {number}
 */
export const rotatedDigits = (n) => {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (isGoodNumber(i)) {
      ans++;
    }
  }
  return ans;
};
