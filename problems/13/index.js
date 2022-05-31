/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  let i = s.length - 1;
  let num = 0;
  let numMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let pre = 0;
  let cur = 0;
  while (i > -1) {
    cur = numMap[s[i]];
    if (cur >= pre) {
      num += cur;
    } else {
      num -= cur;
    }
    pre = cur;
    i--;
  }
  return num;
};
