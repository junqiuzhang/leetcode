/**
 * 排列组合A
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
export const A = (m, n) => {
  if (m > n) throw new Error('Error: m must be smaller than n!');
  if (m === 0) return 1;
  if (m === 1) return n;
  let num = 1;
  for (let i = 0; i < m; i++) {
    num = num * (n - i);
  }
  return num;
};
/**
 * 排列组合C
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
export const C = (m, n) => {
  return A(m, n) / A(m, m);
};
