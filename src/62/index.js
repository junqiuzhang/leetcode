const {C} = require('../common')
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  return C(m - 1, m + n  - 2);
};