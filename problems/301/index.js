/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === '(') {
      count++;
    } else if (char === ')') {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }
  return count === 0;
};
/**
 * @param {string[]} strs
 * @return {string[]}
 */
const generateSubStr = (strs) => {
  const subStrSet = new Set();
  strs.forEach((s) => {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === ')') {
        const subStr = s.slice(0, i) + s.slice(i + 1);
        subStrSet.add(subStr);
      }
    }
  });
  const subStrs = [];
  subStrSet.forEach((s) => subStrs.push(s));
  return subStrs;
};
/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = (s) => {
  if (isValid(s)) return [s];
  let subStrArr = [s];
  let invalidStrArr = [];
  while (invalidStrArr.length === 0) {
    subStrArr = generateSubStr(subStrArr);
    for (let i = 0; i < subStrArr.length; i++) {
      const subStr = subStrArr[i];
      if (isValid(subStr)) {
        invalidStrArr.push(subStr);
      }
    }
  }
  return invalidStrArr;
};
