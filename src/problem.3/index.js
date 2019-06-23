/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    var i = 1;
    var len = x.toString().length;
    for (var j = 0; j < len/2; j++) {
        if (parseInt(x/i)%10 != parseInt(x/Math.pow(10, len - j - 1))%10) return false;
        i *= 10; 
    }

    return true;
};