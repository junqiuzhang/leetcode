// 旋转群中旋转n次等价于旋转1次
// 题目中的旋转n次表示旋转n个位置
// Math.min空间复杂度最小
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const middleIndex = Math.floor(nums.length / 2);
  const first = nums[0];
  const last = nums[nums.length - 1];
  const middle = nums[middleIndex];
  if (nums.length === 0) {
    return Infinity;
  } else if (nums.length === 1) {
    return first;
  } else if (nums.length === 2) {
    return first < last ? first : last;
  }
  if (middle > last) {
    return findMin(nums.slice(middleIndex));
  } else if (middle < first) {
    return findMin(nums.slice(0, middleIndex + 1));
  } else {
    const left = findMin(nums.slice(0, middleIndex + 1));
    const right = findMin(nums.slice(middleIndex));
    return left < right ? left : right;
  }
};
exports.findMin = findMin;