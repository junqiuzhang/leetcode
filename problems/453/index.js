/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = (nums) => {
  var min = Infinity;
  var sum = 0;
  var len = nums.length;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return sum - min * len;
};