/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }
  const MAX_LENGTH = Math.max(...strs.map((str) => str.length));
  let j = 0;
  while (j < MAX_LENGTH) {
    let char = strs[0][j];
    for (let i = 1; i < strs.length; i++) {
      if (char !== strs[i][j]) {
        return strs[0].slice(0, j);
      }
    }
    j++;
  }
  return strs[0].slice(0, j);
}
