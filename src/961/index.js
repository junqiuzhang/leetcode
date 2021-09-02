/**
 * @param {number[]} nums
 * @return {number}
 */
function repeatedNTimes(nums) {
  const numSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (numSet.has(num)) {
      return num;
    }
    numSet.add(num);
  }
  return 0;
}
