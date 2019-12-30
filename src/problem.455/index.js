/**
 * 数据结构：数组
 * 算法：贪心算法 快速排序
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[0]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat([arr[0]]).concat(quickSort(right));
  }
  const sortG = quickSort(g);
  const sortS = quickSort(s);
  let res = 0;
  let i = 0;
  let j = 0;
  while (i < sortG.length) {
    if (sortS[j] >= sortG[i]) {
      res++;
      i++;
      j++;
    } else {
      i++;
    }
  }
  return res;
};
