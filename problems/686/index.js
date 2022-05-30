/**
 * @param {string} a
 * @param {string} b
 * @param {number} repeatCount
 * @return {number}
 */
const isRepeatedStringSubstring = (a, b, repeatCount) => {
  const repeatStr = new Array(repeatCount).fill(a).join('');
  return repeatStr.includes(b);
}
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const repeatedStringMatch = (a, b) => {
  if (a.includes(b)) return 1;
  let left = 1;
  let right = Math.ceil(b.length / a.length) + 1;
  let temp = 0;
  if (isRepeatedStringSubstring(a, b, left)) {
    return left;
  }
  if (!isRepeatedStringSubstring(a, b, right)) {
    return -1;
  }
  while (left < right) {
    temp = Math.floor(left + (right - left) / 2);
    if (isRepeatedStringSubstring(a, b, temp)) {
      right = temp;
    } else {
      left = temp + 1;
    }
  }
  return left;
}
