/**
 * 数据结构：哈希表
 * 算法：查找
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  function getDistance(point1, point2) {
    return (point1[0] - point2[0]) * (point1[0] - point2[0]) + (point1[1] - point2[1]) * (point1[1] - point2[1]);
  }
  var total = 0;
  var len = points.length;
  var distanceMatrix = [];
  for (var i = 0; i < len; i++) {
    var rowDistanceTotal = {};
    var distanceVector = [];
    for (var j = 0; j < len; j++) {
      if (i != j) {
        var distance = distanceMatrix[i] && distanceMatrix[i][j];
        if (typeof distance !== 'number') {
          distance = getDistance(points[i], points[j])
          distanceVector[j] = distance;
        }
        if (rowDistanceTotal[distance]) {
          total = total + rowDistanceTotal[distance] * 2;
          rowDistanceTotal[distance]++;
        } else {
          rowDistanceTotal[distance] = 1;
        }
      }
    }
    distanceMatrix[i] = distanceVector;
  }
  return total;
};