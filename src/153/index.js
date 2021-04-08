const { quickFind } = require("../common");
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 旋转群中旋转n次等价于旋转1次
  let left = nums[0];
  let right = nums[nums.length - 1];
  const min = quickFind(nums, (val) => {
    if (val <= right) {
      right = val;
      return true;
    }
    left = val;
    return false;
  });
  return min;
};
