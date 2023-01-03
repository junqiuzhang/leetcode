const Nums = '0123456789';
/**
 * @param {string} s
 * @return {boolean}
 */
export const areNumbersAscending = (s) => {
  let token = '';
  let preNum = -Infinity;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (Nums.includes(c)) {
      token += c;
    } else if (token !== '' && c === ' ') {
      const curNum = parseInt(token);
      if (curNum <= preNum) {
        return false;
      }
      token = '';
      preNum = curNum;
    }
  }
  const num = parseInt(token);
  if (num <= preNum) {
    return false;
  }
  return true;
};
