/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  let temp = [];
  let i = 0;
  for (i = 0; i < t.length; i++) {
    if (typeof temp[t[i].charCodeAt() - 97] == 'number') {
      temp[t[i].charCodeAt() - 97]++;
    } else {
      temp[t[i].charCodeAt() - 97] = 1;
    }
  }
  for (i = 0; i < s.length; i++) {
    if (typeof temp[s[i].charCodeAt() - 97] == 'number') {
      temp[s[i].charCodeAt() - 97]--;
    } else {
      temp[s[i].charCodeAt() - 97] = -1;
    }
  }
  for (i = 0; i < temp.length; i++) {
    if (typeof temp[i] == 'number' && temp[i] === 1) {
      return String.fromCharCode(i + 97);
    }
  }
  return;
};
