/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    var res = 0;
    var temp = x;
    while (temp) {
        res = res * 10 + temp % 10;
        temp = parseInt(temp / 10);
    }
    return res == x;
};