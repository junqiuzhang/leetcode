/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  if (x < 0) return false;
  let ans = 0;
  let tmp = x;
  while (tmp) {
    ans = ans * 10 + (tmp % 10);
    tmp = parseInt(tmp / 10);
  }
  return ans == x;
}
