/**
 * @param {number[][]} mat
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
function getMatrixDefault(mat, i, j) {
  const rows = mat.length;
  const columns = mat[0].length;
  if (i < 0 || i >= rows || j < 0 || j >= columns) {
    return 0;
  }
  return mat[i][j];
}
/**
 * @param {number[][]} mat
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
function getMatrixClosest(mat, i, j) {
  const rows = mat.length;
  const columns = mat[0].length;
  if (i < 0 || j < 0) {
    return 0;
  }
  if (i >= rows) {
    i = rows - 1;
  }
  if (j >= columns) {
    j = columns - 1;
  }
  return mat[i][j];
}
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
function matrixBlockSum(mat, k) {
  const rows = mat.length;
  const columns = mat[0].length;
  const prefixMat = new Array(rows).fill(0).map((i) => new Array(columns));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      prefixMat[i][j] =
        getMatrixDefault(mat, i, j) +
        getMatrixDefault(prefixMat, i - 1, j) +
        getMatrixDefault(prefixMat, i, j - 1) -
        getMatrixDefault(prefixMat, i - 1, j - 1);
    }
  }
  const sumMat = new Array(rows).fill(0).map((i) => new Array(columns));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      sumMat[i][j] =
        getMatrixClosest(prefixMat, i + k, j + k) +
        getMatrixClosest(prefixMat, i - k - 1, j - k - 1) -
        getMatrixClosest(prefixMat, i + k, j - k - 1) -
        getMatrixClosest(prefixMat, i - k - 1, j + k);
    }
  }
  return sumMat;
}
