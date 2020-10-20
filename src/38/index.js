/**
 * 数据结构：数字
 * 算法：循环
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n == 1) {
        return '1';
    }
    var suf = n % 2 == 0 ? '11' : '21';
    if (n <= 3) {
        return suf;
    }
    function iteration(str) {
        var newStr = '';
        var num = 1;
        var pre = str[0];
        for (var i = 1; i <= str.length; i++) {
            if (str[i] != pre) {
                newStr += '' + num + pre;
                pre = str[i];
                num = 0;
            }
            num++;
        }
        return newStr;
    }
    var str = '21';
    for (var i = 0; i < n - 3; i++) {
        str = iteration(str);
    }
    return str;
};