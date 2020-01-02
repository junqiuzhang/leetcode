/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  /**
   * 函数式
   * 22.60%  
  */
  // return nums.filter((val, ind, arr) => val == 1 || arr[ind - 1] == 1)
  //   .join('')
  //   .split('0')
  //   .reduce((pre, cur) => cur.length > pre ? (pre = cur.length) : pre, 0);

  /**
   * 过程式
   * 99.76%
   */
  let max = 0;
  let tempMax = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 1) {
      tempMax++;
    } else {
      if (tempMax > max) {
        max = tempMax;
      }
      tempMax = 0;
    }
  }
  return max;
};
