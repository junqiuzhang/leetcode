/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findTargetSumWays = (nums, target) => {
  // 缓存还不如不缓存
  const calcTargetSumWays = (index, target) => {
    if (index === 1) {
      return Number(nums[0] === target) + Number(nums[0] === -target);
    }
    const nextIndex = index - 1;
    return (
      calcTargetSumWays(nextIndex, target - nums[nextIndex]) +
      calcTargetSumWays(nextIndex, target + nums[nextIndex])
    );
  }
  return calcTargetSumWays(nums.length, target);
}
