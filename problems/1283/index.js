/**
 * @param {number[]} nums
 * @param {number} div
 * @return {number}
 */
const sum = (nums, div) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += Math.ceil(nums[i] / div);
  }
  return sum;
}
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
const smallestDivisor = (nums, threshold) => {
  let left = 1;
  let right = 1;
  let mid = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > right) {
      right = nums[i];
    }
  }
  if (sum(nums, left) <= threshold) {
    return left;
  }
  while (right - left > 1) {
    mid = Math.ceil((left + right) / 2);
    if (sum(nums, mid) <= threshold) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
}
