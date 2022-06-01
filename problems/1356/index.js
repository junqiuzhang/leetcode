import { quickSortIteration } from '../../libs/common/index.js';
import { hammingWeight } from '../191/index.js';
/**
 * @param {number[]} arr
 * @return {number[]}
 */
export const sortByBits = (arr) => {
  const compare = (a, b) => {
    if (a.wei < b.wei) {
      return -1;
    }
    if (a.wei > b.wei) {
      return 1;
    }
    if (a.num < b.num) {
      return -1;
    }
    if (a.num > b.num) {
      return 1;
    }
    return 0;
  };
  const transedArr = arr.map((num) => ({
    num,
    wei: hammingWeight(num),
  }));
  const sortedArr = quickSortIteration(transedArr, compare);
  return sortedArr.map((item) => item.num);
};
