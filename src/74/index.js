/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const array = matrix.reduce((pre, cur) => pre.concat(cur))
  return array.includes(target)
};