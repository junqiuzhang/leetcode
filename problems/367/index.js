/**
 * 数据结构：哈希表 数字
 * 算法：查找 循环
 */
/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
  let map = [true, true, false, false, true, true, true, false, false, true];
  if (!map[num % 10]) {
    return map[num % 10];
  }
  let n = Math.ceil(num / 2);
  for (let i = 1; i <= n; i++) {
    if (i * i === num) {
      return true;
    } else if (i * i > num) {
      return false;
    }
  }
  return false;
};
