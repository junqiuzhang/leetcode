/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var map = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
    var cantMap = [true,,true,,true,true,,,true];
    var temp = n;
    var num = 0;
    var sum = 0;
    while (!cantMap[temp]) {
        sum = 0;
        while (temp >= 1) {
            num = temp % 10;
            sum = sum + map[num];
            temp = Math.floor(temp / 10);
        }
        if (sum == 1) {
            return true;
        }
        temp = sum;
    }
    return false;
};
