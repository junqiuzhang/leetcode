const StartPoints = [
  [0, 0],
  [0, 3],
  [3, 0],
  [3, 3],
  [0, 6],
  [6, 0],
  [3, 6],
  [6, 3],
  [6, 6],
];
/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  for (let i = 0; i < 9; i++) {
    const numSet = new Set();
    for (let j = 0; j < 9; j++) {
      if (numSet.has(board[i][j])) return false;
      if (board[i][j] !== '.') numSet.add(board[i][j]);
    }
  }
  for (let i = 0; i < 9; i++) {
    const numSet = new Set();
    for (let j = 0; j < 9; j++) {
      if (numSet.has(board[j][i])) return false;
      if (board[j][i] !== '.') numSet.add(board[j][i]);
    }
  }
  for (let m = 0; m < StartPoints.length; m++) {
    const startPoint = StartPoints[m];
    const numSet = new Set();
    for (let i = startPoint[0]; i < startPoint[0] + 3; i++) {
      for (let j = startPoint[1]; j < startPoint[1] + 3; j++) {
        if (numSet.has(board[i][j])) return false;
        if (board[i][j] !== '.') numSet.add(board[i][j]);
      }
    }
  }
  return true;
}
