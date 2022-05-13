/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length <= 1) {
    return true;
  }
  var str = s.replace(/[^0-9a-zA-Z]+/g, '').toLocaleLowerCase();
  var left = 0;
  var right = str.length - 1;
  while (left <= right) {
    if (str[left] != str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
export default isPalindrome;
