/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  let len = numbers.length;
  let res = [1, len];
  let diff = 0;
  for (let i = 0; i < len; i++) {
    diff = numbers[res[0] - 1] + numbers[res[1] - 1] - target;
    if (diff === 0) {
      return res;
    } else if (diff < 0) {
      res[0]++;
    } else if (diff > 0) {
      res[1]--;
    }
  }
  return res;
};
