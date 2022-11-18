export const factorial = (n) => {
  if (n < 0) throw new Error('Error: n must be a non-negative number!');
  if (n === 0) return 1;
  let num = 1;
  for (let i = 1; i <= n; i++) {
    num *= i;
  }
  return num;
};
/**
 * 排列组合A
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
export const A = (m, n) => {
  if (m > n) throw new Error('Error: m must be less than or equal to n!');
  return factorial(n) / factorial(n - m);
};
/**
 * 排列组合C
 * @param {number} m
 * @param {number} n
 * @returns {number}
 */
export const C = (m, n) => {
  if (m > n) throw new Error('Error: m must be less than or equal to n!');
  return factorial(n) / (factorial(n - m) * factorial(m, m));
};
