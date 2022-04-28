/**
 *
 * @param {number[]} nums
 * @param {number} index
 * @param {(value: number) => boolean} condition
 */
function findIndex(nums, index, condition) {
  const len = nums.length;
  let i = index;
  while (!condition(nums[i]) && i < len) {
    i++;
  }
  if (!condition(nums[i])) {
    return -1;
  }
  return i;
}
/**
 * @param {number[]} nums
 * @param {number} index
 */
function findEvenIndex(nums, index) {
  return findIndex(nums, index, (num) => !(num & 1));
}
/**
 * @param {number[]} nums
 * @param {number} index
 */
function findOddIndex(nums, index) {
  return findIndex(nums, index, (num) => num & 1);
}
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayByParity(nums) {
  let evenIndex = 0;
  let oddIndex = 0;
  const len = nums.length;
  while (evenIndex < len) {
    evenIndex = findEvenIndex(nums, 0);
    oddIndex = findOddIndex(nums, Math.max(evenIndex, oddIndex));
    [nums[evenIndex], nums[oddIndex]] = [nums[oddIndex], nums[evenIndex]];
  }
  return nums;
}
export default sortArrayByParity;
