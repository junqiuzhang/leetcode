import { UnionFind } from "../../libs/common/index.js";
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = (isConnected) => {
  const uf = new UnionFind(isConnected.length);
  for (let i = 0; i < isConnected.length; i++) {
    const city = isConnected[i];
    for (let j = i + 1; j < city.length; j++) {
      const isC = city[j];
      if (isC) {
        uf.union(i, j);
      }
    }
  }
  return uf.size;
};
