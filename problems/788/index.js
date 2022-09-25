const NumberMap = [0, 1, 5, NaN, NaN, 2, 9, NaN, 8, 6];
/**
 * @param {number} n
 * @return {number}
 */
export const rotateNumber = (n) =>
  Number(
    String(n)
      .split('')
      .map((c) => NumberMap[c])
      .join('')
  );
/**
 * @param {number} n
 * @return {boolean}
 */
export const isHalfGoodNumber = (n) => {
  const s = String(n);
  return !s.includes('3') && !s.includes('4') && !s.includes('7');
};
/**
 * @param {number} n
 * @return {boolean}
 */
export const isGoodNumber = (n) => {
  if (!isHalfGoodNumber(n)) {
    return false;
  }
  return rotateNumber(n) !== n;
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
