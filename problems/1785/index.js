/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
function minElements(nums, limit, goal) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  const diff = Math.abs(goal - sum);
  return Math.ceil(diff / limit);
};