/**
 * 数据结构：数字
 * 算法：循环
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1]++;
    for (var i = digits.length - 2; i >= 0; i--) {
        if (digits[i + 1] > 9) {
            digits[i + 1] = 0;
            digits[i]++;
        } else {
            break;
        }
    }
    if (digits[0] == 10) {
        digits[0] = 0;
        return [1].concat(digits);
    }
    return digits;
};