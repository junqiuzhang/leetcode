/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return nums[0];
  }
  const RobMaxArray = [nums[0]];
  const NotRobMaxArray = [0];
  const ReverseRobMaxArray = [nums[len - 1]];
  const ReverseNotRobMaxArray = [0];
  for (let i = 1; i < len; i++) {
    RobMaxArray[i] = NotRobMaxArray[i - 1] + nums[i];
    NotRobMaxArray[i] = Math.max(RobMaxArray[i - 1], NotRobMaxArray[i - 1]);
    ReverseRobMaxArray[i] = ReverseNotRobMaxArray[i - 1] + nums[len - i - 1];
    ReverseNotRobMaxArray[i] = Math.max(ReverseRobMaxArray[i - 1], ReverseNotRobMaxArray[i - 1]);
  }
  return Math.max(NotRobMaxArray[len - 1], ReverseNotRobMaxArray[len - 1]);
};