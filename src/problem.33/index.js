/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (!s.length) {
        return true;
    }
    var str = s.replace(/[^0-9a-zA-Z]+/ig, '').toLocaleLowerCase();
    var left = 0;
    var right = str.length - 1;
    while (left !== right) {
        if (str[left] != str[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
};