/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let preNum = nums[0];
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    if (num !== preNum) {
      nums[index] = num;
      preNum = num;
      index++;
    }
  }
  nums.length = index;
  return nums.length;
}
