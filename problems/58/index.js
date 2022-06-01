/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  if (!s.trim()) {
    return 0;
  }
  let len = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] != ' ') {
      len++;
    } else {
      if (len > 0) {
        return len;
      }
    }
  }
  return len;
};
