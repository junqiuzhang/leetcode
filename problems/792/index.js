import { memorize } from '../../libs/common/index.js';
/**
 * @param {string} str
 * @param {string} substr
 * @returns {boolean}
 */
export const isMatchSubseq = (substr, str) => {
  let strI = 0;
  let strJ = 0;
  let subI = 0;
  while (strI > -1 && strI <= str.length - substr.length) {
    while (strJ > -1 && strJ < str.length) {
      if (str[strJ] === substr[subI]) {
        subI++;
        if (subI === substr.length) {
          return true;
        }
      }
      strJ = str.indexOf(substr[subI], strJ + 1);
    }
    strI = str.indexOf(substr[0], strI + 1);
    strJ = strI;
    subI = 0;
  }
  return false;
};
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
export const numMatchingSubseq = (s, words) => {
  const isMatch = memorize(isMatchSubseq);
  let ans = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (isMatch(word, s)) {
      ans++;
    }
  }
  return ans;
};
