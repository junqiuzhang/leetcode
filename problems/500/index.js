/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  const row1 = new Set(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'])
  const row2 = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'])
  return words.filter(word => {
    const chars = word.toLowerCase().split('')
    const row = row1.has(chars[0]) ? 1 : row2.has(chars[0]) ? 2 : 3
    for (let i = 1; i < chars.length; i++) {
      if (row !== (row1.has(chars[i]) ? 1 : row2.has(chars[i]) ? 2 : 3)) {
        return false
      }
    }
    return true;
  })
};
console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));
