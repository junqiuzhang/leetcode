/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var map = [true, true, false, false, true, true, true, false, false, true]
    if (!map[num % 10]) {
        return map[num % 10];
    }
    var n = Math.ceil(num / 2)
    for (var i = 1; i <= n; i++) {
        if (i * i === num) {
            return true;
        } else if (i * i > num) {
            return false;
        }
    }
    return false;
};