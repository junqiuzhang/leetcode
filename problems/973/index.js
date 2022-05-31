/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = (points, K) => {
  const calcDistance = (point) => {
    return point[0] * point[0] + point[1] * point[1];
  };
  const compare = (a, b) => {
    return a.distance - b.distance;
  };
  const formattedPoints = points.map((point) => ({
    point,
    distance: calcDistance(point),
  }));
  formattedPoints.sort(compare);
  return formattedPoints.map((item) => item.point).slice(0, K);
};
