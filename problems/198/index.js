/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  const RobMaxArray = [nums[0]];
  const NotRobMaxArray = [0];
  for (let i = 1; i < len; i++) {
    RobMaxArray[i] = NotRobMaxArray[i - 1] + nums[i];
    NotRobMaxArray[i] = Math.max(RobMaxArray[i - 1], NotRobMaxArray[i - 1]);
  }
  return Math.max(RobMaxArray[len - 1], NotRobMaxArray[len - 1]);
};
