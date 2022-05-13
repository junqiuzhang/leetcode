// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// function searchMatrix(matrix, target) {
//   const array = matrix.reduce((pre, cur) => pre.concat(cur))
//   return array.includes(target)
// };
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let min = 0;
  let max = rows * columns - 1;
  let ans = 0;
  while (min <= max) {
    ans = min + Math.floor((max - min) / 2);
    let i = Math.floor(ans / columns);
    let j = ans % columns;
    if (matrix[i][j] < target) {
      min = ans + 1;
    } else if (matrix[i][j] > target) {
      max = ans - 1;
    } else {
      return true;
    }
  }
  return false;
}
