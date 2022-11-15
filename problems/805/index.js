const getSum = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const splitArraySameAverage = (nums) => {
  const numsLen = nums.length;

  if (numsLen === 1) {
    return false;
  }

  const halfNumsLen = Math.floor(numsLen / 2);
  const numsSum = getSum(nums);

  const dp = new Array(numsLen + 1).fill(0).map(() => new Set());
  dp[0].add(0);

  for (let i = 0; i < numsLen; i++) {
    for (let curLen = halfNumsLen; curLen >= 1; curLen--) {
      for (const preSum of dp[curLen - 1]) {
        const curSum = preSum + nums[i];
        if (curSum * numsLen === numsSum * curLen) {
          return true;
        }
        dp[curLen].add(curSum);
      }
    }
  }

  return false;
};
