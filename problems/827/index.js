/**
 * @param {number[][]} grid
 * @return {number}
 */
export const largestIsland = (grid) => {
  const len = grid.length;
  const isValid = (i, j) => i >= 0 && j >= 0 && i < len && j < len;
  const getId = (i, j) => i * len + j + 1;
  const getValue = (mat, i, j) => (isValid(i, j) ? mat[i][j] : null);
  const getNeighbors = (i, j) => [
    { i: i - 1, j: j },
    { i: i + 1, j: j },
    { i: i, j: j - 1 },
    { i: i, j: j + 1 },
  ];
  const islandGrid = new Array(len).fill(0).map(() => new Array(len).fill(0));
  const islandSizeMap = new Map();
  const dfs = (id, i, j) => {
    if (getValue(grid, i, j) === 0 || getValue(islandGrid, i, j) !== 0) {
      return;
    }
    islandGrid[i][j] = id;
    islandSizeMap.set(id, (islandSizeMap.get(id) || 0) + 1);
    const neighbors = getNeighbors(i, j);
    neighbors.forEach((neighbor) => {
      dfs(id, neighbor.i, neighbor.j);
    });
  };
  let maxSize = 1;
  // initialize id map and size map
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (getValue(grid, i, j) === 1) {
        dfs(getId(i, j), i, j);
      }
    }
  }
  // use id map and size map to find max size
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (getValue(grid, i, j) === 0) {
        const neighbors = getNeighbors(i, j);
        const islandSet = new Set();
        let tempMaxSize = 1;
        neighbors.forEach((neighbor) => {
          if (getValue(grid, neighbor.i, neighbor.j)) {
            islandSet.add(getValue(islandGrid, neighbor.i, neighbor.j));
          }
        });
        islandSet.forEach((island) => {
          tempMaxSize += islandSizeMap.get(island);
        });
        if (tempMaxSize > maxSize) {
          maxSize = tempMaxSize;
        }
      }
    }
  }
  if (islandSizeMap.size === 1) {
    islandSizeMap.forEach((size) => {
      if (size > maxSize) {
        maxSize = size;
      }
    });
  }
  return maxSize;
};
