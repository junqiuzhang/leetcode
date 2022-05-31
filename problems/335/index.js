/**
 * @param {number[]} distance
 * @param {number} i
 */
const getDistance = (distance, i) => {
  if (i < 0 || i >= distance.length) {
    return 0;
  }
  return distance[i];
};
/**
 * @param {number[]} distance
 * @return {boolean}
 */
const isSelfCrossing = (distance) => {
  for (let i = 0; i < distance.length; i++) {
    if (i > 2) {
      console.log(i, distance[i]);
      // 如果上一个线段的长度 <= 上三个线段的长度，则需要判断是否相交，否则永不会相交
      if (getDistance(distance, i - 1) <= getDistance(distance, i - 3)) {
        // 如果上二个线段的长度 < 上四个线段的长度，则说明当前转到了框框里，否则说明当前转到了框框外
        if (getDistance(distance, i - 2) < getDistance(distance, i - 4)) {
          // 框框里，如果当前线段的长度 >= 上二个线段的长度，则相交
          if (getDistance(distance, i) >= getDistance(distance, i - 2)) {
            return true;
          }
        } else {
          // 框框外，如果上一个线段的长度 + 上五个线段的长度 < 上三个线段的长度，则需要判断当前线段与上三个线段是否相交，否则需要判断当前线段与上五个线段是否相交
          if (
            getDistance(distance, i - 1) + getDistance(distance, i - 5) <
            getDistance(distance, i - 3)
          ) {
            // 如果当前线段的长度 >= 上二个线段的长度，则相交
            if (getDistance(distance, i) >= getDistance(distance, i - 2)) {
              return true;
            }
          } else {
            // 如果当前线段的长度 + 上四个线段的长度 >= 上二个线段的长度，则相交
            if (
              getDistance(distance, i) + getDistance(distance, i - 4) >=
              getDistance(distance, i - 2)
            ) {
              return true;
            }
          }
        }
      }
    }
  }
  return false;
};
