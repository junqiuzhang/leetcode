// 动态规划思路
// 首先确定可递推值
// 其次确定可递推值的递推关系
// 最后通过递归实现
/**
 * @param {string} s
 * @return {number}
 */
function strangePrinter(s) {
  const dp = new Array(s.length).fill(0).map((i) => new Array(s.length));
  function calculate(i, j) {
    if (typeof dp[i][j] === 'number') {
      return dp[i][j];
    }
    if (j - i < 1) {
      dp[i][j] = 1;
      return 1;
    }
    let currentDP = calculate(i + 1, j) + 1;
    for (let k = i + 1; k < j; k++) {
      if (s[i] === s[k]) {
        const tempDP = calculate(i + 1, k) + calculate(k + 1, j);
        if (tempDP < currentDP) {
          currentDP = tempDP;
        }
      }
    }
    if (s[i] === s[j]) {
      const tempDP = calculate(i + 1, j)
      if (tempDP < currentDP) {
        currentDP = tempDP;
      }
    }
    dp[i][j] = currentDP;
    return dp[i][j];
  }
  return calculate(0, s.length - 1);
}