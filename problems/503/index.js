/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const nextGreaterElements = (nums) => {
  const stack = [];
  const ans = new Array(nums.length).fill(-1);
  for (let i = 0; i < nums.length * 2 - 1; i++) {
    const j = i % nums.length;
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[j]) {
      const top = stack.pop();
      ans[top] = nums[j];
    }
    stack.push(j);
  }
  return ans;
};
