/**
 * 数据结构：数组
 * 算法：贪心算法
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  // 手写快速排序不如自带排序
  const compare = (a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
  g.sort(compare);
  s.sort(compare);
  let res = 0;
  let i = g.length - 1;
  let j = s.length - 1;
  while (i > -1 && j > -1) {
    if (s[j] >= g[i]) {
      res++;
      i--;
      j--;
    } else {
      i--;
    }
  }
  return res;
};