/**
 * @param {string} s
 * @return {string}
 */
const sortString = (s) => {
  const charCountArray = [];
  const aCharCode = "a".charCodeAt();
  for (let i = 0; i < s.length; i++) {
    const charCountIndex = s[i].charCodeAt() - aCharCode;
    if (!charCountArray[charCountIndex]) {
      charCountArray[charCountIndex] = 0;
    }
    charCountArray[charCountIndex]++;
  }
  let res = "";
  while (res.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (charCountArray[i]) {
        res += String.fromCharCode(i + aCharCode);
        charCountArray[i]--;
      }
    }
    for (let i = 25; i >= 0; i--) {
      if (charCountArray[i]) {
        res += String.fromCharCode(i + aCharCode);
        charCountArray[i]--;
      }
    }
  }
  return res;
};
