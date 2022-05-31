/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let step = Math.floor((right - left) / 3);
  while (step !== 0) {
    const nLeft = left + step;
    const nRight = left + 2 * step;
    if (nums[nLeft] > nums[nRight]) {
      right = nRight;
    } else {
      left = nLeft;
    }
    step = Math.floor((right - left) / 3);
  }
  let max = left;
  if (nums[right] > nums[max]) {
    max = right;
  }
  if (typeof nums[right - 1] === "number" && nums[right - 1] > nums[max]) {
    max = right - 1;
  }
  return max;
};
