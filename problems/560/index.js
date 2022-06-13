/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
  const preSumMap = new Map();
  let sum = 0;
  let ans = 0;
  preSumMap.set(sum, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (preSumMap.has(sum - k)) {
      ans += preSumMap.get(sum - k);
    }
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, 0);
    }
    preSumMap.set(sum, preSumMap.get(sum) + 1);
  }
  return ans;
};
