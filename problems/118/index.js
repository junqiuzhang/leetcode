/**
 * 数据结构：数字
 * 算法：循环
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  if (numRows === 0) {
    return [];
  }
  if (numRows === 1) {
    return [[1]];
  }
  let ans = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    ans.push(new Array(i + 1));
    ans[i][0] = 1;
    for (let j = 1; j < (i + 1) / 2; j++) {
      ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
      ans[i][i - j] = ans[i][j];
    }
    ans[i][i] = 1;
  }
  return ans;
};
