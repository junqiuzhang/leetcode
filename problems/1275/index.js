const winMatrix = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ],
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ],
];
/**
 * @param {number[][]} moves
 * @return {string}
 */
const tictactoe = (moves) => {
  const chessboard = new Array(3).fill(0).map((i) => new Array(3).fill(0));
  for (let i = 0; i < moves.length; i++) {
    if (i % 2) {
      chessboard[moves[i][0]][moves[i][1]] = -1;
    } else {
      chessboard[moves[i][0]][moves[i][1]] = 1;
    }
  }
  for (let i = 0; i < winMatrix.length; i++) {
    const winArray = winMatrix[i];
    let sum = 0;
    for (let j = 0; j < winArray.length; j++) {
      const winPoint = winArray[j];
      let num = chessboard[winPoint[0]][winPoint[1]];
      sum += num;
    }
    if (sum === 3) {
      return 'A';
    } else if (sum === -3) {
      return 'B';
    }
  }
  if (moves.length === 9) {
    return 'Draw';
  } else {
    return 'Pending';
  }
}
