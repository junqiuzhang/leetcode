/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return '';
  }
  const len = strs[0].length;
  let j = 0;
  while (j < len) {
    let char = strs[0][j];
    for (let i = 1; i < strs.length; i++) {
      if (char !== strs[i][j]) {
        return strs[0].slice(0, j);
      }
    }
    j++;
  }
  return strs[0].slice(0, j);
};
