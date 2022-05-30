/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = (nums) => {
  const posNums = [];
  const negNums = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) {
      posNums.push(num);
    } else {
      negNums.push(num);
    }
  }
  posNums.sort((a, b) => b - a);
  negNums.sort((a, b) => a - b);
  const options = [
    posNums[0] * posNums[1] * posNums[2], // 3正0负
    posNums[0] * posNums[1] * negNums[negNums.length - 1], // 2正1负
    posNums[0] * negNums[0] * negNums[1], // 1正2负
    negNums[negNums.length - 1] * negNums[negNums.length - 2] * negNums[negNums.length - 3], // 0正3负
  ];
  return Math.max(...options.filter(o => !Number.isNaN(o)));
};