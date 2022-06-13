/**
 * 数据结构：数字
 * 算法：循环
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
  if (rowIndex === 0) {
    return [1];
  }
  let temp1 = 1;
  let temp2 = 1;
  let ans = new Array(rowIndex + 1);
  ans[0] = 1;
  ans[1] = 1;
  for (let i = 2; i <= rowIndex; i++) {
    temp1 = 1;
    for (let j = 1; j < (i + 1) / 2; j++) {
      temp2 = ans[j];
      ans[j] = temp1 + ans[j];
      ans[i - j] = ans[j];
      temp1 = temp2;
    }
    ans[i] = 1;
  }
  return ans;
};
