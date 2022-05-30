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
    return (point1[0] - point2[0]) * (point1[0] - point2[0]) + (point1[1] - point2[1]) * (point1[1] - point2[1]);
  }
  var total = 0;
  var len = points.length;
  /**
   * Object -> Map 用时减 50%
   * Matrix -> null 用时减 25%
   */
  // var distanceMatrix = [];
  // var distanceVector = [];
  for (var i = 0; i < len; i++) {
    var rowDistanceTotal = new Map();
    for (var j = 0; j < len; j++) {
      if (i != j) {
        var distance = getDistance(points[i], points[j])
        var distanceTotal = rowDistanceTotal.get(distance);
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