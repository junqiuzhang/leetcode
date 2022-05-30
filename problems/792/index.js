/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
const numMatchingSubseq = (s, words) => {
  const charMap = new Map();
  for (let i = 0; i < s.length; i++) {
    let arr = charMap.get(s[i]);
    if (!Array.isArray(arr)) {
      arr = [];
    }
    arr.push(i);
    charMap.set(s[i], arr);
  }
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (isMatch(word, charMap)) {
      res++;
    }
  }
  return res;
}
const isMatch = (reg, map) => {
  let cur = 0;
  const is = (value) => (value >= cur)
  for (let i = 0; i < reg.length; i++) {
    let arr = map.get(reg[i])
    if (!Array.isArray(arr)) return false
    const index = arr.findIndex(is)
    if (index === -1) return false
    cur = arr[index] + 1
  }
  return true;
}