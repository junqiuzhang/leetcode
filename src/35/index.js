/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (right - left > 1) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }
  if (nums[left] >= target) {
    return left;
  }
  if (nums[right] < target) {
    return right + 1;
  }
  return right;
}
