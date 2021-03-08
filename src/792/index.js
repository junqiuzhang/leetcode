/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
  let res = 0
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (isMatch(s, word)) {
      res++
    }
  }
  return res
};
function isMatch(str, reg) {
  let cur = 0;
  for (let i = 0; i < reg.length; i++) {
    let flag = false
    for (let j = cur; j < str.length; j++) {
      if (str[j] === reg[i]) {
        cur = j + 1;
        flag = true
        break
      }
    }
    if (!flag) {
      return false
    } else if (i === reg.length - 1) {
      return true
    }
  }
  return false
}