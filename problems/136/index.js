/**
 * 数据结构：数组
 * 算法：遍历
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => {
  let ans = 0;
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    ans = ans ^ nums[i];
  }
  return ans;
};
