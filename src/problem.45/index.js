/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var res = 0;
    for (var i = 0; i < 32; i++){
        res += (n >> i) & 1; // 累加
    }
    return res;
};
