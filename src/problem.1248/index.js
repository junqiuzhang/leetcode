/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
  const odds = [];
  odds.push(-1);
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (n % 2) {
      odds.push(i)
    }
  }
  odds.push(nums.length);
  const diffs = [];
  for (let i = 0; i + 1 < odds.length; i++) {
    diffs.push(odds[i + 1] - odds[i]);
  }
  let res = 0;
  for (let i = 0; i + k < diffs.length; i++) {
    res += diffs[i] * diffs[i + k];
  }
  return res;
};
const nums = [2,4,6], k = 1
console.log(numberOfSubarrays(nums, k))