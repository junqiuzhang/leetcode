/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
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
  for (let i = 0; i < houses.length; i++) {
    let minDis = Infinity;
    /**
     * 二分查找
     */
    let left = 0;
    let right = heaters.length - 1;
    let temp = Math.floor((left + right) / 2);
    while (left <= right) {
      let curDis = Math.abs(houses[i] - heaters[temp]);
      if (curDis < minDis) {
        minDis = curDis;
      }
      if (houses[i] > heaters[temp]) {
        left = temp + 1;
      } else {
        right = temp - 1;
      }
      temp = Math.floor((left + right) / 2);
    }
    if (minDis > maxDis) {
      maxDis = minDis;
    }
  }
  return maxDis;
};
