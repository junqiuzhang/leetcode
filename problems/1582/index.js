/**
 * @param {number[][]} mat matrix
 * @param {number} row row
 * @param {number} val value
 * @returns {number}
 */
const indexOfMatrixRowUniqueValue = (mat, row, val) => {
  let index = -1;
  for (let column = 0; column < mat[0].length; column++) {
    if (mat[row][column] === val) {
      if (index === -1) {
        index = column;
      } else {
        return -1;
      }
    }
  }
  return index;
};
/**
 * @param {number[][]} mat matrix
 * @param {number} row row
 * @param {number} val value
 * @returns {number}
 */
const indexOfMatrixColumnUniqueValue = (mat, column, val) => {
  let index = -1;
  for (let row = 0; row < mat.length; row++) {
    if (mat[row][column] === val) {
      if (index === -1) {
        index = row;
      } else {
        return -1;
      }
    }
  }
  return index;
};

/**
 * @param {number[][]} mat
 * @return {number}
 */
export const numSpecial = (mat) => {
  if (mat.length === 0) return 0;
  let ans = 0;
  for (let i = 0; i < mat.length; i++) {
    const columnIndex = indexOfMatrixRowUniqueValue(mat, i, 1);
    if (columnIndex !== -1) {
      const rowIndex = indexOfMatrixColumnUniqueValue(mat, columnIndex, 1);
      if (rowIndex !== -1) {
        ans++;
      }
    }
  }
  return ans;
};
