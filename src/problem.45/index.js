/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var res = 0;
    var temp = 0;
    for (var i = 0; i < 32; i++){
        temp = n >> i; // 一位一位来
        temp &= 1; // 取出最低位
        res += temp; // 累加
    }
    return res;
};
var a = 00000000000000000000000000001011
console.log(hammingWeight(a));
