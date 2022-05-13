import { UnionFind } from '../common/index.js';
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const points = new Set();
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    points.add(edge[0]);
    points.add(edge[1]);
  }
  const uf = new UnionFind(points.size);
  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    if (uf.same(edge[0], edge[1])) {
      return edge;
    }
    uf.union(edge[0], edge[1]);
  }
  return [];
};