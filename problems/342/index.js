/**
 * 数据结构：数字
 * 算法：数学
 */
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = (n) => {
    let num = Math.log(n) / Math.log(4);
    return num - Math.floor(num) < 0.00000000000001;
};