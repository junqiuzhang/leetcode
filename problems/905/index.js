/**
 *
 * @param {number[]} nums
 * @param {number} index
 * @param {(value: number) => boolean} condition
 */
export const findIndex = (nums, index, condition) => {
  const len = nums.length;
  let i = index;
  while (i < len && !condition(nums[i])) {
    i++;
  }
  return i;
};
/**
 * @param {number[]} nums
 * @param {number} index
 */
export const findEvenIndex = (nums, index) => {
  return findIndex(nums, index, (num) => !(num & 1));
};
/**
 * @param {number[]} nums
 * @param {number} index
 */
export const findOddIndex = (nums, index) => {
  return findIndex(nums, index, (num) => num & 1);
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const sortArrayByParity = (nums) => {
  let oddIndex = 0;
  let evenIndex = 0;
  const len = nums.length;
  while (evenIndex < len) {
    [nums[evenIndex], nums[oddIndex]] = [nums[oddIndex], nums[evenIndex]];
    oddIndex = findOddIndex(nums, oddIndex);
    evenIndex = findEvenIndex(nums, Math.max(oddIndex, evenIndex));
  }
  return nums;
};
