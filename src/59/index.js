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
var generateMatrix = function(n) {
  const ITotal = matrix.length;
  const JTotal = (matrix[0] && matrix[0].length) || 0;
  const Total = ITotal * JTotal;
  const TraversedSet = new Set();
  let curDirection = Direction.right;
  let i = 0,
    j = 0;
  const res = [];
  while (true) {
    if (typeof matrix[i][j] === "number") {
      res.push(matrix[i][j]);
      TraversedSet.add(`${i},${j}`);
    }
    const nextI = i + DirectionStepMap[curDirection].i;
    const nextJ = j + DirectionStepMap[curDirection].j;
    const isNextTraversed =
      nextI < 0 ||
      nextI >= ITotal ||
      nextJ < 0 ||
      nextJ >= JTotal ||
      TraversedSet.has(`${nextI},${nextJ}`);
    if (isNextTraversed) {
      curDirection = DirectionNextMap[curDirection];
    }
    i = i + DirectionStepMap[curDirection].i;
    j = j + DirectionStepMap[curDirection].j;
    if (res.length === Total) {
      return res;
    }
  }
};