import KthHeap from "../703/index.js";
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = (words, k) => {
  const freMap = new Map();
  for (let i = 0; i < words.length; i++) {
    let fre = freMap.get(words[i]);
    if (!fre) {
      fre = 0;
    }
    freMap.set(words[i], fre + 1);
  }
  const compare = (a, b) => {
    if (freMap.get(a) > freMap.get(b)) {
      return true;
    }
    return false;
  };
  const hp = new KthHeap({ k, items: words, compare });
  const freWords = [];
  for (let i = 0; i < k; i++) {
    freWords.push(hp.pop());
  }
  return freWords;
};
