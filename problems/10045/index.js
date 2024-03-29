import { quickSortIteration } from '../../libs/common/index';
/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
const compare = (str1, str2) => {
  str1 = str1.replace(/^\s*/, '');
  str2 = str2.replace(/^\s*/, '');
  if (str1.length > str2.length) {
    return -1;
  } else if (str1.length < str2.length) {
    return 1;
  }
  return str1 > str2 ? 1 : -1;
};
/**
 * @param {number[]} nums
 * @return {string}
 */
const minNumber = (nums) => {
  const strs = nums.map((n) => `${n}`);
  return quickSortIteration(strs, (i, j) => {
    const a = strs[i] + strs[j];
    const b = strs[j] + strs[i];
    return compare(a, b);
  }).join('');
};
