/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var i, j;
  var length = nums.length;
  for (i = 0; i < length; i++) {
      for (j = i + 1; j < length; j++) {
          if (nums[i] + nums[j] == target) {
              return [i, j]
          }
      }
  }
};