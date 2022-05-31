/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  let i = 0;
  let len = nums.length;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    } else {
      len--;
    }
  }
  nums.length = len;
  return nums.length;
};
