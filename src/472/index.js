// 超出时间限制
/**
 * @param {string} word
 * @param {string[]} words
 * @return {string[]}
 */
function isConcatenatedWord(word, words) {
  function dfs(index) {
    if (index === word.length) {
      return true;
    }
    for (let i = 0; i < words.length; i++) {
      const w = words[i];
      if (w === word.substring(index, index + w.length)) {
        if (dfs(index + w.length)) {
          return true;
        }
      }
    }
    return false;
  }
  return dfs(0);
}
/**
 * @param {string[]} words
 * @return {string[]}
 */
function findAllConcatenatedWordsInADict(words) {
  words = words.filter((w) => w !== "").sort((a, b) => b.length - a.length);
  const ans = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const curWords = words.filter((w) => w.length < word.length);
    if (isConcatenatedWord(word, curWords)) {
      ans.push(word);
    }
  }
  return ans;
}
