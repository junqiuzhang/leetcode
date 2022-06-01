/**
 * 二分查找-迭代实现
 * @param {any[]} arr
 * @param {(val: any, index: number, array: any[]) => boolean)} predicate
 * @returns {number}
 */
export const quickFindIndexRecursion = (arr, predicate) => {
  if (!isArray(arr)) throw new Error("Error: arguments must be an array!");
  if (isEmpty(arr)) return -1;
  let min = 0;
  let max = arr.length - 1;
  let mid = Math.floor((min + max) / 2);
  if (predicate(arr[min], min, arr)) return 0;
  if (!predicate(arr[max], max, arr)) return -1;
  if (predicate(arr[mid], mid, arr)) {
    return quickFindIndexRecursion(arr.slice(0, mid), predicate);
  }
  return mid + quickFindIndexRecursion(arr.slice(mid + 1), predicate);
};
/**
 * 二分查找-迭代实现
 * @param {any[]} arr
 * @param {(val: any, index: number, array: any[]) => boolean)} predicate
 * @returns {number}
 */
export const quickFindIndexIteration = (arr, predicate) => {
  if (!isArray(arr)) throw new Error("Error: arguments must be an array!");
  if (isEmpty(arr)) return -1;
  let min = 0;
  let max = arr.length - 1;
  let mid = Math.floor((min + max) / 2);
  if (predicate(arr[min], min, arr)) return 0;
  if (!predicate(arr[max], max, arr)) return -1;
  while (max - min > 1) {
    mid = Math.floor((min + max) / 2);
    if (predicate(arr[mid], mid, arr)) max = mid;
    else min = mid;
  }
  return max;
};
/**
 * 二分查找值-递归实现
 * @param {any[]} array
 * @param {(val: any, index: number, array: any[]) => boolean)} predicate
 * @returns {any}
 */
export const quickFindRecursion = (array, predicate) => {
  const index = quickFindIndexRecursion(array, predicate);
  if (index === -1) return null;
  return array[index];
};
/**
 * 二分查找值-迭代实现
 * @param {any[]} array
 * @param {(val: any, index: number, array: any[]) => boolean)} predicate
 * @returns {any}
 */
export const quickFindIteration = (array, predicate) => {
  const index = quickFindIndexIteration(array, predicate);
  if (index === -1) return null;
  return array[index];
};
