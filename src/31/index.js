/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let exchangeIndex1 = -1;
  let exchangeIndex2 = -1;
  let minMax = Infinity;
  // 找到交换的两个元素
  for (let i = nums.length - 1; i > -1; i--) {
    const num1 = nums[i];
    exchangeIndex2 = -1;
    for (let j = i; j < nums.length; j++) {
      const num2 = nums[j];
      if (num2 > num1 && num2 < minMax) {
        exchangeIndex2 = j;
        minMax = nums[exchangeIndex2];
      }
    }
    if (exchangeIndex2 !== -1) {
      exchangeIndex1 = i;
      break;
    }
  }
  if (exchangeIndex1 === -1) {
    return nums.reverse();
  }
  // 交换
  const temp = nums[exchangeIndex1];
  nums[exchangeIndex1] = nums[exchangeIndex2];
  nums[exchangeIndex2] = temp;
  // 排序的子数组
  const tempNums = nums.splice(exchangeIndex1 + 1, nums.length);
  // 交换元素后的元素重新排列
  tempNums.sort((a, b) => (a - b));
  // 拼接排序的子数组
  for (let i = 0; i < tempNums.length; i++) {
    const num = tempNums[i];
    nums.push(num);
  }
};