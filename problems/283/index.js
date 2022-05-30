/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  // 函数式方法
  // return nums.filter(n => n != 0).concat(nums.filter(n => n == 0));

  // 统计+移动
  // const posArr = [];
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] == 0) {
  //     posArr.push(i);
  //   }
  // }
  // let pos = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   if (i > posArr[pos + 1]) {
  //     pos++;
  //   }
  //   if (nums[i] != 0 && i > posArr[pos]) {
  //     nums[i - pos - 1] = nums[i];
  //   }
  // }
  // for (let i = nums.length - posArr.length; i < nums.length; i++) {
  //   nums[i] = 0;
  // }
  // return nums;

  // 指针
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
}
