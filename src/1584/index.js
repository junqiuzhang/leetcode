const { UnionFind } = require('../common');
/**
 * @param {number[][]} points
 * @return {number}
 */
function calcDistance(p1, p2) {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
}
var minCostConnectPoints = function (points) {
  // Kruskal算法
  const distance = [];
  for (let i = 0; i < points.length; i++) {
    const point1 = points[i];
    for (let j = i + 1; j < points.length; j++) {
      const point2 = points[j];
      distance.push([i, j, calcDistance(point1, point2)]);
    }
  }
  distance.sort((a, b) => (a[2] - b[2]));
  const uf = new UnionFind(points.length);
  let res = 0;
  for (let i = 0; i < distance.length; i++) {
    const dis = distance[i];
    if (!uf.same(dis[0], dis[1])) {
      res += dis[2];
      uf.union(dis[0], dis[1]);
    }
    if (uf.size === 1) {
      return res
    }
  }
  return res;
};
