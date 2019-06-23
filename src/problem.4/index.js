/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var i = s.length - 1;
    var num = 0;
    var numMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    var pre = 0;
    var cur = 0;
    while (i > -1) {
        cur = numMap[s[i]];
        if (cur >= pre) {
            num += cur;            
        } else {
            num -= cur;
        }
        pre = cur;
        i--;
    }
    return num;
};