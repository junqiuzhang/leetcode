// 旋转群中旋转n次等价于旋转1次
// 题目中的旋转n次表示旋转n个位置
// Math.min时间复杂度最小
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (right - left > 1) {
    middle = Math.floor((left + right) / 2);
    if (nums[middle] < nums[right]) {
      right = middle;
    } else {
      left = middle;
    }
  }
  return Math.min(nums[left], nums[right]);
};
export default findMin;
