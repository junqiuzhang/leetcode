/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  return [nums.indexOf(target), nums.lastIndexOf(target)]
};