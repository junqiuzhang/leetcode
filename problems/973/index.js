/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  function calcDistance(point) {
    return point[0] * point[0] + point[1] * point[1];
  }
  function compare(a, b) {
    return a.distance - b.distance;
  }
  const formattedPoints = points.map(point => ({ point, distance: calcDistance(point) }));
  formattedPoints.sort(compare);
  return formattedPoints.map(item => item.point).slice(0, K);
};