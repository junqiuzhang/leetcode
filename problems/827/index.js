class UnionFind {
  constructor(tree = [], size = []) {
    this.tree = [...tree];
    this.size = [...size];
  }
  findSet(el) {
    if (this.tree[el] !== el) {
      this.tree[el] = this.findSet(this.tree[el]);
    }
    return this.tree[el];
  }
  findSize(el) {
    return this.size[this.findSet(el)];
  }
  add(el) {
    this.tree[el] = el;
    this.size[el] = 1;
  }
  delete(el) {
    this.tree[el] = el;
    this.size[el] = 0;
  }
  same(el1, el2) {
    const elRoot1 = this.findSet(el1);
    const elRoot2 = this.findSet(el2);
    return elRoot1 === elRoot2;
  }
  union(el1, el2) {
    const elRoot1 = this.findSet(el1);
    const elRoot2 = this.findSet(el2);
    if (elRoot1 === elRoot2) return;
    this.tree[Math.max(elRoot1, elRoot2)] = Math.min(elRoot1, elRoot2);
    const el1Size = this.size[elRoot1];
    const el2Size = this.size[elRoot2];
    this.size[elRoot1] = el1Size + el2Size;
    this.size[elRoot2] = el1Size + el2Size;
  }
  clone() {
    return new UnionFind(this.tree, this.size);
  }
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
export const largestIsland = (grid) => {
  const len = grid.length;
  const isValid = (i, j) => i >= 0 && j >= 0 && i < len && j < len;
  const getKey = (i, j) => i * len + j;
  const getValue = (i, j) => (isValid(i, j) ? grid[i][j] : null);
  const uf = new UnionFind();
  // initialize
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (getValue(i, j)) {
        uf.add(getKey(i, j));
      } else {
        uf.delete(getKey(i, j));
      }
    }
  }
  // union
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (getValue(i, j) === 1) {
        if (getValue(i + 1, j) === 1) {
          uf.union(getKey(i, j), getKey(i + 1, j));
        }
        if (getValue(i, j + 1) === 1) {
          uf.union(getKey(i, j), getKey(i, j + 1));
        }
      }
    }
  }
  let maxSize = uf.size.reduce((m, s) => Math.max(m, s), 1);
  // try to union
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (getValue(i, j) === 0) {
        const neighbors = [
          { i: i - 1, j: j },
          { i: i + 1, j: j },
          { i: i, j: j - 1 },
          { i: i, j: j + 1 },
        ];
        const islandSet = new Set();
        let tempMaxSize = 1;
        for (let m = 0; m < neighbors.length; m++) {
          const neighbor = neighbors[m];
          if (getValue(neighbor.i, neighbor.j) === 1) {
            const island = uf.findSet(getKey(neighbor.i, neighbor.j));
            if (!islandSet.has(island)) {
              islandSet.add(island);
              tempMaxSize += uf.findSize(getKey(neighbor.i, neighbor.j));
            }
          }
        }
        if (tempMaxSize > maxSize) {
          maxSize = tempMaxSize;
        }
      }
    }
  }
  return maxSize;
};
