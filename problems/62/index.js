import { C } from '../../libs/common/index.js';
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = (m, n) => {
  return C(m - 1, m + n - 2);
};
