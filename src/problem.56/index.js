/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }
    var sum = 0;
    for (var i = 0; i < 32; i++) {
        sum += (n >> i) & 1;
        if (sum > 1) {
            return false;
        }
    }
    return true;
};