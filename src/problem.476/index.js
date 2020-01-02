/**
 * 数据结构：数字
 * 算法：数学
 */
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let dig = Math.floor(Math.log2(num));
  let exp = Math.pow(2, dig + 1);
  return exp - num - 1;
};