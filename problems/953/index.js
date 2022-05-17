/**
 * @param {string} order
 * @return {Map<string|undefined, number>}
 */
function generateDictionary(order) {
  const dictionary = new Map();
  dictionary.set(undefined, -1);
  for (let i = 0; i < order.length; i++) {
    const char = order[i];
    dictionary.set(char, i);
  }
  return dictionary;
}
/**
 * @param {string} word1
 * @param {string} word2
 * @param {Map<string|undefined, number>} dictionary
 * @return {boolean}
 */
function isOrder(word1, word2, dictionary) {
  const len = Math.max(word1.length, word2.length);
  for (let i = 0; i < len; i++) {
    if (dictionary.get(word1[i]) > dictionary.get(word2[i])) {
      return false;
    } else if (dictionary.get(word1[i]) < dictionary.get(word2[i])) {
      return true;
    }
  }
  return true;
}
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function isAlienSorted(words, order) {
  const dictionary = generateDictionary(order);
  for (let i = 1; i < words.length; i++) {
    if (!isOrder(words[i - 1], words[i], dictionary)) return false;
  }
  return true;
}
export { isAlienSorted };
