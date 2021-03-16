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
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const ITotal = matrix.length;
  const JTotal = (matrix[0] && matrix[0].length) || 0;
  const Total = ITotal * JTotal;
  const TraversedSet = new Set();
  const res = [];
  let i = 0;
  let j = 0;
  let curDirection = Direction.right;
  while (true) {
    if (typeof matrix[i][j] === "number") {
      res.push(matrix[i][j]);
      TraversedSet.add(`${i},${j}`);
    }
    if (isNextDisabled(i, j, ITotal, JTotal, curDirection, TraversedSet)) {
      curDirection = DirectionNextMap[curDirection];
    }
    i = i + DirectionStepMap[curDirection].i;
    j = j + DirectionStepMap[curDirection].j;
    if (res.length === Total) {
      return res;
    }
  }
};
/**
 * @param {number} i
 * @param {number} j
 * @param {number} ITotal
 * @param {number} JTotal
 * @param {Direction} direction
 * @param {Set} TraversedSet
 */
function isNextDisabled(i, j, ITotal, JTotal, direction, TraversedSet) {
  const nextI = i + DirectionStepMap[direction].i;
  const nextJ = j + DirectionStepMap[direction].j;
  const isNextDisable =
    nextI < 0 ||
    nextI >= ITotal ||
    nextJ < 0 ||
    nextJ >= JTotal ||
    TraversedSet.has(`${nextI},${nextJ}`);
  return isNextDisable;
}
