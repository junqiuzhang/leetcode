class UnionFind {
  constructor(tree = [], size = []) {
    this.tree = [...tree];
    this.size = [...size];
  }
  find(el) {
    if (this.tree[el] !== el) {
      this.tree[el] = this.find(this.tree[el]);
    }
    return this.tree[el];
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
    const elRoot1 = this.find(el1);
    const elRoot2 = this.find(el2);
    return elRoot1 === elRoot2;
  }
  union(el1, el2) {
    const elRoot1 = this.find(el1);
    const elRoot2 = this.find(el2);
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
      if (getValue(i, j) === 1) {
        const neighbors = [
          { i: i - 1, j: j },
          { i: i + 1, j: j },
          { i: i, j: j - 1 },
          { i: i, j: j + 1 },
        ];
        for (let m = 0; m < neighbors.length; m++) {
          const neighbor = neighbors[m];
          if (getValue(neighbor.i, neighbor.j) === 0) {
            const tempUf = uf.clone();
            tempUf.add(getKey(neighbor.i, neighbor.j));
            const doubleNeighbors = [
              { i: neighbor.i - 1, j: neighbor.j },
              { i: neighbor.i + 1, j: neighbor.j },
              { i: neighbor.i, j: neighbor.j - 1 },
              { i: neighbor.i, j: neighbor.j + 1 },
            ];
            for (let n = 0; n < doubleNeighbors.length; n++) {
              const doubleNeighbor = doubleNeighbors[n];
              isValid(doubleNeighbor.i, doubleNeighbor.j) &&
                tempUf.union(
                  getKey(neighbor.i, neighbor.j),
                  getKey(doubleNeighbor.i, doubleNeighbor.j)
                );
            }
            const tempMaxSize = tempUf.size.reduce((m, s) => Math.max(m, s), 1);
            if (tempMaxSize > maxSize) {
              maxSize = tempMaxSize;
            }
          }
        }
      }
    }
  }
  return maxSize;
};
