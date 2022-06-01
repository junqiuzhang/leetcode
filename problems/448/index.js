/**
 * 数据结构：数组
 * 算法：数组操作
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {
  const changeNums = (num) => {
    if (typeof num !== 'number') {
      return;
    }
    const nextNum = nums[num - 1];
    nums[num - 1] = false;
    if (typeof nextNum !== 'number') {
      return;
    }
    changeNums(nextNum);
  };
  for (let i = 0; i < nums.length; i++) {
    changeNums(nums[i]);
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      res.push(i + 1);
    }
  }
  return res;
};
