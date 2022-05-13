/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transpose(matrix) {
  const transMatrix = new Array(matrix[0].length)
    .fill(0)
    .map((i) => new Array(matrix.length));
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const n = row[j];
      transMatrix[j][i] = n;
    }
  }
  return transMatrix;
}
