/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
const makesquare = (matchsticks) => {
  const len = matchsticks.length;
  const sum = matchsticks.reduce((pre, cur) => pre + cur);
  if (sum % 4) return false;
  const sideSum = [0, 0, 0, 0];
  const dfs = (i) => {
    if (i === len && sideSum.every((val) => val === sum / 4)) return true;
    const cur = matchsticks[i] || 0;
    for (let j = 0; j < 4; j++) {
      if (sideSum[j] + cur <= sum / 4) {
        sideSum[j] += cur;
        if (dfs(i + 1)) {
          return true;
        }
        sideSum[j] -= cur;
      }
    }
    return false;
  };
  return dfs(0);
};
