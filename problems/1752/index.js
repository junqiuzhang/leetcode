/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const check = (nums) => {
  let hasDecreasingNum = false;
  let pre = nums[nums.length - 1];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < pre) {
      if (hasDecreasingNum) {
        return false;
      }
      hasDecreasingNum = true;
    }
    pre = num;
  }
  return true;
};
