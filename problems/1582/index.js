/**
 * @param {number[][]} mat
 * @return {number}
 */
export const numSpecial = (mat) => {
  if (mat.length === 0) return 0;
  let ans = 0;
  const rowSum = new Array(mat.length).fill(0);
  const columnSum = new Array(mat[0].length).fill(0);
  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    for (let j = 0; j < row.length; j++) {
      const num = row[j];
      rowSum[i] += num;
      columnSum[j] += num;
    }
  }
  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    for (let j = 0; j < row.length; j++) {
      if (mat[i][j] === 1 && rowSum[i] === 1 && columnSum[j] === 1) {
        ans++;
      }
    }
  }
  return ans;
};
