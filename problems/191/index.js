/**
 * 数据结构：二进制
 * 算法：二进制操作
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
    var res = 0;
    for (var i = 0; i < 32; i++){
        res += (n >> i) & 1; // 累加
    }
    return res;
};
