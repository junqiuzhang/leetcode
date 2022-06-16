/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findSamePairs = (nums, k) => {
  const set = new Set();
  const sameSet = new Set();
  let ans = 0;
  nums.forEach((num) => {
    if (set.has(num)) {
      sameSet.add(num);
    }
    set.add(num);
  });
  return sameSet.size;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findDiffPairs = (nums, k) => {
  const set = new Set(nums);
  let ans = 0;
  set.forEach((num) => {
    if (set.has(num - k)) {
      ans++;
    }
    if (set.has(num + k)) {
      ans++;
    }
  });
  return ans / 2;
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const findPairs = (nums, k) => {
  if (k === 0) {
    return findSamePairs(nums, k);
  }
  return findDiffPairs(nums, k);
};
