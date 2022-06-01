const kthLarge = (nums, k) => {
  for (let i = 0; i < k; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      } else if (nums[j] === nums[i]) {
        nums.splice(j, 1);
        j--;
      }
    }
  }
  return typeof nums[k - 1] !== 'number' ? -1 : nums[k - 1];
};
