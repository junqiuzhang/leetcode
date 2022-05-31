/**
 * @param {string} S
 * @return {string}
 */
const reorganizeString = (S) => {
  const charMap = new Map();
  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    if (!charMap.get(char)) {
      charMap.set(char, 0);
    }
    charMap.set(char, charMap.get(char) + 1);
  }
  let maxChar = "";
  let max = 0;
  for (const [key, value] of charMap) {
    if (value > S.length / 2 + 0.5) {
      return "";
    }
    if (value > max) {
      maxChar = key;
      max = value;
    }
  }
  charMap.delete(maxChar);
  const strArray = [];
  for (let i = 0; i < max; i++) {
    strArray[i] = maxChar;
  }
  let index = 0;
  for (const [key, value] of charMap) {
    for (let i = 0; i < value; i++) {
      strArray[index % strArray.length] += key;
      index++;
    }
  }
  return strArray.reduce((pre, cur) => {
    return pre + cur;
  });
};
