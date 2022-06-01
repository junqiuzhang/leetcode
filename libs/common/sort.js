/**
 * 快速排序-递归实现
 * @param {any[]} arr
 * @param {((val1: any, val2: any) => boolean)} compare
 * @returns {any[]}
 */
export const quickSortRecursion = (arr, compare) => {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  const middle = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const ele = arr[i];
    if (compare(ele, middle) <= 0) {
      left.push(ele);
    } else {
      right.push(ele);
    }
  }
  const sortedLeft = quickSortRecursion(left, compare);
  const sortedRight = quickSortRecursion(right, compare);
  return [...sortedLeft, middle, ...sortedRight];
};
/**
 * 快速排序-迭代实现
 * @param {any[]} arr
 * @param {((val1: any, val2: any) => boolean)} compare
 * @returns {any[]}
 */
export const quickSortIteration = (arr, compare) => {
  if (arr.length <= 1) return arr;
  let left = 0;
  let right = arr.length - 1;
  let pivot = right;
  const stack = [left, right];
  while (stack.length > 0) {
    right = stack.pop();
    left = stack.pop();
    if (left >= right) continue;
    pivot = right;
    let i = left;
    for (let j = left; j <= right; j++) {
      if (compare(j, pivot) <= 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    stack.push(left, i - 2, i, right);
  }
  return arr;
};
