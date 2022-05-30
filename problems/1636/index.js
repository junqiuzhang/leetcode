/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = (nums) => {
  const freMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!freMap.get(num)) {
      freMap.set(num, 0);
    }
    freMap.set(num, freMap.get(num) + 1);
  }
  nums.sort((a, b) => {
    const diff = freMap.get(a) - freMap.get(b);
    if (diff === 0) {
      return b - a;
    }
    return diff;
  });
  return nums;
}
