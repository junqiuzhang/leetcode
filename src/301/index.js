/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  let pushChar, popChar;
  for (let i = 0; i < s.length; i++) {
    pushChar = s[i];
    if (pushChar === "(") {
      stack.push(pushChar);
    } else if (pushChar === ")") {
      popChar = stack.pop();
      if (popChar !== "(") {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};
/**
 * @param {string[]} strs
 * @return {string[]}
 */
function generateSubStr(strs) {
  const subStrSet = new Set();
  strs.forEach((s) => {
    for (let i = 0; i < s.length; i++) {
      const subStr = s.slice(0, i) + s.slice(i + 1);
      subStrSet.add(subStr);
    }
  });
  const subStrs = [];
  subStrSet.forEach((s) => subStrs.push(s));
  return subStrs;
}
/**
 * @param {string} s
 * @return {string[]}
 */
function removeInvalidParentheses(s) {
  if (isValid(s)) return [s];
  let subStrArr = [s];
  let invalidStrArr = [];
  while (invalidStrArr.length === 0) {
    for (let i = 0; i < subStrArr.length; i++) {
      const subStr = subStrArr[i];
      if (isValid(subStr)) {
        invalidStrArr.push(subStr);
      }
    }
    subStrArr = generateSubStr(subStrArr);
  }
  return invalidStrArr;
}
