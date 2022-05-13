function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  // 基准值p
  const p = nums[0];
  // 比p小的
  let left = [];
  // 比p大的
  let right = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= p) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  left = quickSort(left);
  right = quickSort(right);
  return [...left, p, ...right];
}
function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let p = nums[0];
  let left = 0;
  let right = nums.length - 1;
  const stack = [left, right];
  while (stack.length > 0) {
    right = stack.pop();
    left = stack.pop();
    if (left >= right) continue;
    p = nums[right];
    let i = left;
    for (let j = left; j <= right; j++) {
      if (nums[j] >= p) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
    stack.push(left, i - 1, i + 1, right);
  }
  return nums;
}
