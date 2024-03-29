/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numberOfSubarrays = (nums, k) => {
  const odds = [];
  odds.push(-1);
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n % 2) {
      odds.push(i);
    }
  }
  odds.push(nums.length);
  const diffs = [];
  for (let i = 0; i + 1 < odds.length; i++) {
    diffs.push(odds[i + 1] - odds[i]);
  }
  let ans = 0;
  for (let i = 0; i + k < diffs.length; i++) {
    ans += diffs[i] * diffs[i + k];
  }
  return ans;
};
