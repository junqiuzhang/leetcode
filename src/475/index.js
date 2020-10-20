/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
  function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
  houses.sort(compare);
  heaters.sort(compare);
  let maxDis = 0;
  /**
   * 二分查找
   * 45.88%
   */
  // for (let i = 0; i < houses.length; i++) {
  //   let minDis = Infinity;
  //   let left = 0;
  //   let right = heaters.length - 1;
  //   let j = Math.floor((left + right) / 2);
  //   while (left <= right) {
  //     let curDis = Math.abs(houses[i] - heaters[j]);
  //     if (curDis < minDis) {
  //       minDis = curDis;
  //     }
  //     if (houses[i] > heaters[j]) {
  //       left = j + 1;
  //     } else {
  //       right = j - 1;
  //     }
  //     j = Math.floor((left + right) / 2);
  //   }
  //   if (minDis > maxDis) {
  //     maxDis = minDis;
  //   }
  // }
  /**
   * 选取初值+步进
   * 47.06%
   */
  for (let i = 0; i < houses.length; i++) {
    let minDis = Infinity;
    let j = Math.floor(i / (houses.length - 1) * (heaters.length - 1)) || 0;
    while (j > -1 && j < heaters.length) {
      let curDis = Math.abs(houses[i] - heaters[j]);
      if (curDis < minDis) {
        minDis = curDis;
      } else {
        break;
      }
      if (houses[i] > heaters[j]) {
        j++;
      } else {
        j--;
      }
    }
    if (minDis > maxDis) {
      maxDis = minDis;
    }
  }
  return maxDis;
};