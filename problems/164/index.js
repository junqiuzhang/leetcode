/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumGap = (nums) => {
  if (nums.length < 2) {
    return 0;
  }
  const sortedNums = nums.sort((a, b) => a - b);
  let maxGap = 0;
  let len = sortedNums.length - 1;
  let num = 0;
  let nextNum = 0;
  let gap = 0;
  for (let i = 0; i < len; i++) {
    num = sortedNums[i];
    nextNum = sortedNums[i + 1];
    gap = nextNum - num;
    if (gap > maxGap) {
      maxGap = gap;
    }
  }
  return maxGap;
};