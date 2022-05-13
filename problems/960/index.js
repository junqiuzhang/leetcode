/**
 * @param {string[]} strs
 * @return {number}
 */
function minDeletionSize(strs) {
  if (strs.length === 0) return 0;
  const len = strs.length;
  const subLen = strs[0].length;
  const dp = new Array(subLen).fill(1);
  for (let i = 0; i < subLen; i++) {
    for (let j = i + 1; j < subLen; j++) {
      let flag = true;
      for (let k = 0; k < len; k++) {
        if (strs[k][j] < strs[k][i]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
  }
  let dpLen = dp.length;
  let max = 0;
  for (let i = 0; i < dpLen; i++) {
    if (dp[i] > max) {
      max = dp[i];
    }
  }
  return subLen - max;
}
