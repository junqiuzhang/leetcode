/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const charMap = new Map();
  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    let charObj = charMap.get(char);
    if (!charObj) {
      charObj = {
        start: i,
        end: i
      };
      charMap.set(char, charObj);
    } else {
      if (charObj.end < i) {
        charObj.end = i;
        charMap.set(char, charObj);
      }
    }
  }
  const charArr = [];
  charMap.forEach(val => {
    charArr.push(val);
  });
  let condition = true;
  while (condition) {
    condition = false;
    for (let i = 0; i < charArr.length - 1; i++) {
      const obj = charArr[i];
      const nextObj = charArr[i + 1];
      if (obj.end > nextObj.start) {
        obj.end = Math.max(obj.end, nextObj.end);
        charArr[i] = obj;
        charArr.splice(i + 1, 1);
        condition = true;
      }
    }
  }
  return charArr.map(obj => obj.end - obj.start + 1)
};