/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  return nums.filter((val, ind, arr) => val == 1 || arr[ind - 1] == 1)
    .join('')
    .split('0')
    .reduce((pre, cur) => cur.length > pre ? (pre = cur.length) : pre, 0);
};
