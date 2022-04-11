import { UnionFind } from '../utils/index.js';
// /**
//  * 二分查找+dfs
//  * @param {number[][]} heights
//  * @return {number}
//  */
// function minimumEffortPath(heights) {
//   const m = heights.length;
//   const n = heights[0].length;
//   function check(cost) {
//     const visited = new Array(m).fill(0).map(() => new Array(n));
//     function dfs(i, j) {
//       if (i === m - 1 && j === n - 1) {
//         return true;
//       }
//       visited[i][j] = true;
//       if (i + 1 < m && !visited[i + 1][j]) {
//         const curCost = Math.abs(heights[i][j] - heights[i + 1][j]);
//         if (curCost <= cost) {
//           if (dfs(i + 1, j)) {
//             return true;
//           }
//         }
//       }
//       if (i - 1 >= 0 && !visited[i - 1][j]) {
//         const curCost = Math.abs(heights[i][j] - heights[i - 1][j]);
//         if (curCost <= cost) {
//           if (dfs(i - 1, j)) {
//             return true;
//           }
//         }
//       }
//       if (j + 1 < n && !visited[i][j + 1]) {
//         const curCost = Math.abs(heights[i][j] - heights[i][j + 1]);
//         if (curCost <= cost) {
//           if (dfs(i, j + 1)) {
//             return true;
//           }
//         }
//       }
//       if (j - 1 >= 0 && !visited[i][j - 1]) {
//         const curCost = Math.abs(heights[i][j] - heights[i][j - 1]);
//         if (curCost <= cost) {
//           if (dfs(i, j - 1)) {
//             return true;
//           }
//         }
//       }
//       visited[i][j] = false;
//       return false;
//     }
//     return dfs(0, 0);
//   }
//   let left = 0;
//   let right = 999999;
//   let mid = 0;
//   while (right - left > 1) {
//     mid = Math.floor((left + right) / 2);
//     if (check(mid)) {
//       right = mid;
//     } else {
//       left = mid;
//     }
//   }
//   return check(left) ? left : right;
// }
/**
 * @param {number[][]} heights
 * @return {number}
 */
function minimumEffortPath(heights) {
  const m = heights.length;
  const n = heights[0].length;
  const edges = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const id = i * n + j;
      if (i > 0) {
        edges.push([id - n, id, Math.abs(heights[i][j] - heights[i - 1][j])]);
      }
      if (j > 0) {
        edges.push([id - 1, id, Math.abs(heights[i][j] - heights[i][j - 1])]);
      }
    }
  }
  edges.sort((a, b) => a[2] - b[2]);
  const uf = new UnionFind(m * n);
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    uf.union(edge[0], edge[1]);
    if (uf.same(0, m * n - 1)) {
      return edge[2];
    }
  }
  return 0;
}
var heights = [[1,2,2],[3,8,2],[5,3,5]]
console.log(minimumEffortPath(heights));
