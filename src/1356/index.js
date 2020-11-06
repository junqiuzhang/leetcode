/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  function quickSort(arr, compare) {
    if (arr.length <= 1) {
      return arr;
    }
    const left = [];
    const right = [];
    const middle = arr[0];
    for (let i = 1; i < arr.length; i++) {
      const ele = arr[i];
      if (compare(ele, middle)) {
        left.push(ele);
      } else {
        right.push(ele);
      }
    }
    const sortedLeft = quickSort(left, compare);
    const sortedRight = quickSort(right, compare);
    return sortedLeft.concat([middle]).concat(sortedRight);
  }
  function compare(a, b) {
    if (a.len < b.len) {
      return true;
    } else if (a.len === b.len && a.num < b.num) {
      return true;
    } else {
      return false;
    }
  }
  const formattedArr = arr.map(num => {
    const len = num.toString(2).replace(/0/g, '').length;
    return {
      num,
      len
    }
  })
  const sortedArr = quickSort(formattedArr, compare);
  return sortedArr.map(item => {
    return item.num;
  })
};