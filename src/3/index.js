/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const len = s.length;
  let i = 0;
  let j = 0;
  let maxLength = 0;
  function update() {
    if (j - i + 1 > maxLength) {
      maxLength = j - i + 1;
    }
  }
  while (j < len) {
    const subString = s.substring(i, j);
    const subIndex = subString.indexOf(s[j]);
    if (subIndex !== -1) {
      i = i + subIndex + 1;
      j++;
      continue;
    }
    update();
    j++;
  }
  return maxLength;
}
