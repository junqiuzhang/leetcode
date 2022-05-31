/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let maxLength = 0;
  let maxLeft = 0;
  let maxRight = 0;
  // 奇数
  for (let i = 0; i < s.length; i++) {
    let max = Math.min(i, s.length - i - 1);
    for (let j = 0; j <= max; j++) {
      if (s[i - j] !== s[i + j]) {
        break;
      }
      let curLength = j * 2 + 1;
      if (curLength > maxLength) {
        maxLength = curLength;
        maxLeft = i - j;
        maxRight = i + j;
      }
    }
  }
  // 偶数
  for (let i = 0; i < s.length - 1; i++) {
    let max = Math.min(i, s.length - i - 2);
    for (let j = 0; j <= max; j++) {
      if (s[i - j] !== s[i + j + 1]) {
        break;
      }
      let curLength = j * 2 + 2;
      if (curLength > maxLength) {
        maxLength = curLength;
        maxLeft = i - j;
        maxRight = i + j + 1;
      }
    }
  }
  return s.slice(maxLeft, maxRight + 1);
};
