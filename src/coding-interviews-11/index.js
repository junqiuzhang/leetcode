/**
 * @param {number[]} nums
 * @return {number}
 */
function minArray(nums) {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (right - left > 1) {
    middle = Math.floor((left + right) / 2);
    while (true) {
      if (nums[middle] < nums[right]) {
        right = middle;
        break;
      } else if (nums[middle] > nums[right]) {
        left = middle;
        break;
      } else if (middle >= right) {
        right = Math.floor((left + right) / 2);
        break;
      }
      middle++;
    }
  }
  return Math.min(nums[left], nums[right]);
}
