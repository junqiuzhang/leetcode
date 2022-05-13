/**
 * @param {string} s
 * @return {number}
 */
function maxPower(s) {
  let maxCount = 1;
  let curCount = 1;
  let preChar = 'pre';
  let curChar = 'cur';
  for (let i = 0; i < s.length; i++) {
    curChar = s[i];
    if (curChar !== preChar) {
      if (curCount > maxCount) {
        maxCount = curCount;
      }
      preChar = curChar;
      curCount = 1;
    } else {
      curCount++;
    }
  }
  if (curCount > maxCount) {
    maxCount = curCount;
  }
  return maxCount;
}
