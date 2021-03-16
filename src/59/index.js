const Direction = {
  top: "top",
  bottom: "bottom",
  left: "left",
  right: "right",
};
const DirectionStepMap = {
  [Direction.top]: { i: -1, j: 0 },
  [Direction.bottom]: { i: 1, j: 0 },
  [Direction.left]: { i: 0, j: -1 },
  [Direction.right]: { i: 0, j: 1 },
};
const DirectionNextMap = {
  [Direction.top]: Direction.right,
  [Direction.bottom]: Direction.left,
  [Direction.left]: Direction.top,
  [Direction.right]: Direction.bottom,
};
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = new Array(n).fill(0).map(() => new Array(n));
  const total = n * n + 1;
  let i = 0;
  let j = 0;
  let index = 1;
  let curDirection = Direction.right;
  while (true) {
    matrix[i][j] = index;
    index++;
    if (isNextDisabled(i, j, n, curDirection, matrix)) {
      curDirection = DirectionNextMap[curDirection];
    }
    i = i + DirectionStepMap[curDirection].i;
    j = j + DirectionStepMap[curDirection].j;
    if (index === total) {
      return matrix;
    }
  }
};
/**
 * @param {number} i
 * @param {number} j
 * @param {number} n
 * @param {Direction} direction
 * @param {number[][]} matrix
 */
function isNextDisabled(i, j, n, direction, matrix) {
  const nextI = i + DirectionStepMap[direction].i;
  const nextJ = j + DirectionStepMap[direction].j;
  const isNextDisable =
    nextI < 0 ||
    nextI >= n ||
    nextJ < 0 ||
    nextJ >= n ||
    typeof matrix[nextI][nextJ] === "number";
  return isNextDisable;
}
