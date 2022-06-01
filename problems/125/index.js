/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = (s) => {
  if (s.length <= 1) {
    return true;
  }
  let str = s.replace(/[^0-9a-zA-Z]+/g, '').toLocaleLowerCase();
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
