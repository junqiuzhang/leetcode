/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length === 0) {
    return 0;
  }
  const sortedPoints = points.sort((a, b) => {
    return a[1] - b[1];
  });
  let count = 1;
  let axis = sortedPoints[0][1];
  console.log(sortedPoints);
  for (let i = 1; i < sortedPoints.length; i++) {
    console.log(axis, sortedPoints[i][0]);
    if (axis < sortedPoints[i][0]) {
      count++;
      axis = sortedPoints[i][1];
    }
  }
  return count;
};