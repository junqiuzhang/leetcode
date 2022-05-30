/**
 * 数据结构：数字
 * 算法：数学
 */
/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = (n) => {
    return Math.floor(Math.sqrt(1/4 + 2*n) - 1/2);
};