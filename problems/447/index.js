/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
const numberOfBoomerangs = (points) => {
  const getDistance = (point1, point2) => {
    return (
      (point1[0] - point2[0]) * (point1[0] - point2[0]) +
      (point1[1] - point2[1]) * (point1[1] - point2[1])
    );
  };
  let total = 0;
  let len = points.length;
  /**
   * Object -> Map 用时减 50%
   * Matrix -> null 用时减 25%
   */
  // let distanceMatrix = [];
  // let distanceVector = [];
  for (let i = 0; i < len; i++) {
    let rowDistanceTotal = new Map();
    for (let j = 0; j < len; j++) {
      if (i != j) {
        let distance = getDistance(points[i], points[j]);
        let distanceTotal = rowDistanceTotal.get(distance);
        if (distanceTotal) {
          rowDistanceTotal.set(distance, distanceTotal + 1);
          total = total + distanceTotal * 2;
        } else {
          rowDistanceTotal.set(distance, 1);
        }
      }
    }
  }
  return total;
};
