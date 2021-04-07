const {quickFind} = require('../common')
/**
 * @param {number[]} nums
 * @return {number}
 */
function findRotatedIndex(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return i + 1
    }
  }
  return 0
}
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  const rotatedIndex = findRotatedIndex(nums)
  const sortedNums = nums.slice(rotatedIndex).concat(nums.slice(0, rotatedIndex))
  const num = quickFind(sortedNums, (val, i) => {
    if (val < target) {
      return false
    }
    return true
  })
  if (num === target) return true
  return false
};