/**
 * 数据结构：数字
 * 算法：数学
 */
/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
  if (!num) return 0;
  return num % 9 || 9;
};
