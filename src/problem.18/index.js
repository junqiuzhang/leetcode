/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var Max = Math.floor(n / 2);
    var two = 0;
    var one = 0;
    var res = 0;
    var resArr = {};
    function C_nm(n, m) {
        if (m == 0 || n == m) {
            return 1;
        }
        var firStr = (n - 1).toString() + ',' + (m - 1).toString();
        var secStr = (n - 1).toString() + ',' + m.toString();
        var fir = resArr[firStr];
        var sec = resArr[secStr];
        if (!fir) {
            fir = C_nm(n - 1, m - 1);
            resArr[firStr] = fir;
        }
        if (!sec) {
            sec = C_nm(n - 1, m);
            resArr[secStr] = sec;
        }
        return fir + sec;
    }
    for (var two = 0; two <= Max; two++) {
        one = n - 2 * two;
        res += C_nm(one + two, one > two ? two : one);
    }
    return res;
}
console.log(climbStairs(44))

