/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const findRadius = (houses, heaters) => {
  const compare = (a, b) => {
    return a - b;
  };
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
}
