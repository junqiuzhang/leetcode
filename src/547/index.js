/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  class UnionFind {
    constructor(ids) {
      this.idMap = new Map();
      this.size = ids.length;
      ids.forEach(id => {
        this.idMap.set(id, id);
      })
    }
    get = (id) => {
      let iid = id;
      while (iid !== this.idMap.get(iid)) {
        iid = this.idMap.get(iid);
      }
      return iid;
    }
    set = (id1, id2) => {
      const iid1 = this.get(id1);
      const iid2 = this.get(id2);
      if (iid1 === iid2) return;
      this.idMap.set(iid1, iid2);
      this.size--;
    }
  }
  const uf = new UnionFind(isConnected.map((v, i) => i));
  for (let i = 0; i < isConnected.length; i++) {
    const city = isConnected[i];
    for (let j = i + 1; j < city.length; j++) {
      const isC = city[j];
      if (isC) {
        uf.set(i, j);
      }
    }
  }
  return uf.size;
};