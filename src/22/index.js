/**
 * 插入括号的三种情况：
 * 1. 插入到字符串左侧
 * 2. 插入到字符串右侧
 * 3. 插入到字符串两侧
 * @param {string} str
 * @param {Set<string>} set
 * @return {Set<string>}
 */
function insertBracket(str, set) {
  set.add(`${str}()`);
  set.add(`(${str})`);
  set.add(`()${str}`);
  return set;
}
/**
 * 排序规则不明
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  let set = new Set([""]);
  for (let i = 0; i < n; i++) {
    let nSet = new Set();
    set.forEach((str) => {
      insertBracket(str, nSet);
    });
    set = nSet;
  }
  const res = [];
  set.forEach((str) => {
    res.push(str);
  });
  return res;
}
