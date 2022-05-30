/**
 * @param {string} s
 * @param {number} i
 * @param {number} len
 * @return {boolean}
 */
const isDupSubstring = (s, i, len) => {
  return (
    s.indexOf(s.substring(i, i + len)) !==
    s.lastIndexOf(s.substring(i, i + len))
  );
}
/**
 * @param {string} s
 * @param {number} i
 * @param {number} len
 * @return {number}
 */
const findLongestDupSubstringLength = (s, i, len) => {
  // 二分查找最长重复子串长度
  let left = len;
  let right = s.length - i;
  let temp = 0;
  if (!isDupSubstring(s, i, left)) {
    return left - 1;
  }
  while (left < right) {
    temp = Math.ceil(left + (right - left) / 2);
    if (isDupSubstring(s, i, temp)) {
      left = temp;
    } else {
      right = temp - 1;
    }
  }
  return left;
}
/**
 * @param {string} s
 * @return {string}
 */
const longestDupSubstring = (s) => {
  let maxLen = 0;
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.length - i < maxLen) break;
    const len = findLongestDupSubstringLength(s, i, maxLen + 1);
    if (len > maxLen) {
      maxLen = len;
      start = i;
      end = i + len;
    }
  }
  return s.substring(start, end);
}
