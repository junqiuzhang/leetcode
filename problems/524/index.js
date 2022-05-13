/**
 * @param {string} s1
 * @param {string} s2
 */
function isContain(s1, s2) {
  let i = 0;
  let j = 0;
  while (i < s1.length && j < s2.length) {
    if (s1[i] !== s2[j]) {
      i++;
    } else {
      i++;
      j++;
    }
  }
  return j === s2.length;
}
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
function findLongestWord(s, dictionary) {
  dictionary.sort((word1, word2) => {
    if (word2.length - word1.length !== 0) {
      return word2.length - word1.length;
    }
    return word1 > word2 ? 1 : -1;
  });
  for (let i = 0; i < dictionary.length; i++) {
    const word = dictionary[i];
    if (isContain(s, word)) {
      return word;
    }
  }
  return '';
}
