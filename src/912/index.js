/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  return nums.sort((a, b) => { 
    return a - b > 0 ? 1 : -1;
  })
};