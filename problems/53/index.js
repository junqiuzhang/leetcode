/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let sum = 0;
  let ans = nums[0];
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    ans = Math.max(ans, sum);
  }
  return ans;
};
