/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var res = 0;
    var temp = x;
    while (temp) {
        res = res * 10 + temp % 10;
        temp = parseInt(temp / 10);
    }
    if ( res > 2147483647 || res < -2147483648) {
        return 0;
    }
    return res;
};