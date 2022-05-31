//@ts-check
const Direction = {
  up: "up",
  down: "down",
  left: "left",
  right: "right",
};
const Path = {
  Street1: 1,
  Street2: 2,
  Street3: 3,
  Street4: 4,
  Street5: 5,
  Street6: 6,
};
const FirstToMap = {
  [Path.Street1]: [Direction.right],
  [Path.Street2]: [Direction.down],
  [Path.Street3]: [Direction.down],
  [Path.Street4]: [Direction.right, Direction.down],
  [Path.Street5]: [],
  [Path.Street6]: [Direction.right],
};
const ToIndexMap = {
  [Direction.up]: [-1, 0],
  [Direction.down]: [1, 0],
  [Direction.left]: [0, -1],
  [Direction.right]: [0, 1],
};
const ToFromMap = {
  [Direction.up]: Direction.down,
  [Direction.down]: Direction.up,
  [Direction.left]: Direction.right,
  [Direction.right]: Direction.left,
};
const FormPathToMap = {
  [Direction.up]: {
    [Path.Street2]: Direction.down,
    [Path.Street5]: Direction.left,
    [Path.Street6]: Direction.right,
  },
  [Direction.down]: {
    [Path.Street2]: Direction.up,
    [Path.Street3]: Direction.left,
    [Path.Street4]: Direction.right,
  },
  [Direction.left]: {
    [Path.Street1]: Direction.right,
    [Path.Street3]: Direction.down,
    [Path.Street5]: Direction.up,
  },
  [Direction.right]: {
    [Path.Street1]: Direction.left,
    [Path.Street4]: Direction.down,
    [Path.Street6]: Direction.up,
  },
};
/**
 * @param {boolean[][]} visited
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
const getVisited = (visited, i, j) => {
  if (i < 0 || i >= visited.length) {
    return true;
  }
  if (j < 0 || j >= visited[0].length) {
    return true;
  }
  return !!visited[i][j];
};
/**
 * @param {Direction[keyof Direction]} to
 * @param {number} i
 * @param {number} j
 * @return {number[]}
 */
const getIndex = (to, i, j) => {
  return [i + ToIndexMap[to][0], j + ToIndexMap[to][1]];
};
/**
 * @param {number[][]} grid
 * @param {number} i
 * @param {number} j
 * @return {Path[keyof Path] | undefined}
 */
const getPath = (grid, i, j) => {
  if (i < 0 || i >= grid.length) {
    return;
  }
  if (j < 0 || j >= grid[0].length) {
    return;
  }
  return grid[i][j];
};
/**
 * @param {Direction[keyof Direction]} to
 * @return {Direction[keyof Direction]}
 */
const getFrom = (to) => {
  return ToFromMap[to];
};
/**
 * @param {Direction[keyof Direction]} from
 * @param {Path[keyof Path]} path
 * @return {Direction[keyof Direction]}
 */
const getTo = (from, path) => {
  return FormPathToMap[from][path];
};
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
const hasValidPath = (grid) => {
  const [m, n] = [grid.length - 1, grid[0].length - 1];
  let [i, j] = [0, 0];
  let curPath = getPath(grid, i, j);
  let firstToArray = FirstToMap[curPath];
  let from = Direction.up;
  let to = Direction.up;
  for (let k = 0; k < firstToArray.length; k++) {
    const visited = new Array(grid.length)
      .fill(0)
      .map(() => new Array(grid[0].length));
    to = firstToArray[k];
    while (!getVisited(visited, i, j)) {
      if (i === m && j === n) return true;
      visited[i][j] = true;
      [i, j] = getIndex(to, i, j);
      curPath = getPath(grid, i, j);
      from = getFrom(to);
      to = getTo(from, curPath);
      if (!curPath) break;
      if (!from) break;
      if (!to) break;
    }
    [i, j] = [0, 0];
    curPath = grid[i][j];
  }
  return false;
};
// let grid = [[2,4,3],[6,5,2]]; // true
// let grid = [[1,2,1],[1,2,1]] // false
// let grid = [[1,1,2]] // false
// let grid = [[1,1,1,1,1,1,3]] // true
// let grid = [[2],[2],[2],[2],[2],[2],[6]] // true
// let grid = [[4, 1],[6, 1]]; // true
// let grid = [[1]] // true
// let grid = [[2, 6]]; // false
