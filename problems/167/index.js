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
  let ans = [1, len];
  let diff = 0;
  for (let i = 0; i < len; i++) {
    diff = numbers[ans[0] - 1] + numbers[ans[1] - 1] - target;
    if (diff === 0) {
      return ans;
    } else if (diff < 0) {
      ans[0]++;
    } else if (diff > 0) {
      ans[1]--;
    }
  }
  return ans;
};
