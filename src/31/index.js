/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
  const len = nums.length;
  // 从右向左，找到 i < i + 1 的第一个元素位置 index
  let index = -1;
  for (let i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }
  // 找到 index 右边最小的元素位置 minIndex
  let min = Infinity;
  let minIndex = -1;
  for (let j = index + 1; j < len; j++) {
    if (nums[j] <= min && nums[j] > nums[index]) {
      min = nums[j];
      minIndex = j;
    }
  }
  if (index !== -1) {
    // 交换 minIndex 元素和 index 元素
    [nums[index], nums[minIndex]] = [nums[minIndex], nums[index]];
    console.log(nums, index);
    // 将 index 右边的元素倒序
    let left = index + 1;
    let right = len - 1;
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
    return;
  }
  nums.reverse();
  return;
}
