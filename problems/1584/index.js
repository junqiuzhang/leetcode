// import { UnionFind } from '../common/index.js';
/**
 * @param {number[][]} points
 * @return {number}
 */
const calcDistance = (p1, p2) => {
  return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
};
const minCostConnectPoints = (points) => {
  // Prim算法
  const connectedSet = new Array(points.length).fill(false);
  let connectedNumber = 0;
  const distance = new Array(points.length).fill(false);
  // 计算未连通点集的权重
  const calcUnconnectedDistance = (index) => {
    for (let i = 0; i < connectedSet.length; i++) {
      if (!connectedSet[i]) {
        const dis = calcDistance(points[index], points[i]);
        if (!distance[i] || dis < distance[i][2]) {
          distance[i] = [Math.min(index, i), Math.max(index, i), dis];
        }
      }
    }
  };
  // 找到未连通点集中权重最小的
  const findMinUnconnectedDistance = () => {
    let minDis = Number.MAX_VALUE;
    let minDisIndex = -1;
    for (let i = 0; i < connectedSet.length; i++) {
      if (!connectedSet[i]) {
        const dis = distance[i][2];
        if (dis < minDis) {
          minDis = dis;
          minDisIndex = i;
        }
      }
    }
    return minDisIndex;
  };
  // 初始化
  connectedSet[0] = true;
  connectedNumber++;
  calcUnconnectedDistance(0);

  // 循环
  let res = 0;
  while (connectedNumber !== points.length) {
    const minIndex = findMinUnconnectedDistance();
    connectedSet[minIndex] = true;
    connectedNumber++;
    res += distance[minIndex][2];
    calcUnconnectedDistance(minIndex);
  }
  return res;
  // Kruskal+并查集算法
  // // 计算边的权重
  // const distance = [];
  // for (let i = 0; i < points.length; i++) {
  //   const point1 = points[i];
  //   for (let j = i + 1; j < points.length; j++) {
  //     const point2 = points[j];
  //     distance.push([i, j, calcDistance(point1, point2)]);
  //   }
  // }
  // // 边安权重排序
  // distance.sort((a, b) => (a[2] - b[2]));
  // // 并查集
  // const uf = new UnionFind(points.length);
  // let res = 0;
  // for (let i = 0; i < distance.length; i++) {
  //   const dis = distance[i];
  //   // 遍历边，若边连接的两点不连通则连通两点
  //   if (!uf.same(dis[0], dis[1])) {
  //     res += dis[2];
  //     uf.union(dis[0], dis[1]);
  //   }
  //   // 若连通点集数 === 1则终止
  //   if (uf.size === 1) {
  //     return res
  //   }
  // }
  // return res;
};
