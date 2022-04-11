/**
 * @param {string[]} board
 * @param {string} char
 * @return {boolean}
 */
function isWin(board, char) {
  let win = true;
  for (let i = 0; i < 3; i++) {
    if (board[i][i] !== char) {
      win = false;
      break;
    }
  }
  if (win) {
    return true;
  }
  win = true;
  for (let i = 0; i < 3; i++) {
    if (board[i][2 - i] !== char) {
      win = false;
      break;
    }
  }
  if (win) {
    return true;
  }
  for (let i = 0; i < 3; i++) {
    win = true;
    for (let j = 0; j < 3; j++) {
      if (board[i][j] !== char) {
        win = false;
        break;
      }
    }
    if (win) {
      return true;
    }
    win = true;
    for (let j = 0; j < 3; j++) {
      if (board[j][i] !== char) {
        win = false;
        break;
      }
    }
    if (win) {
      return true;
    }
  }
  return false;
}
/**
 * @param {string[]} board
 * @return {boolean}
 */
function validTicTacToe(board) {
  let [totalX, totalO] = [0, 0];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === 'X') {
        totalX++;
      } else if (board[i][j] === 'O') {
        totalO++;
      }
    }
  }
  const [isXWin, isOWin] = [isWin(board, 'X'), isWin(board, 'O')];
  if (isXWin && !isOWin && totalX === totalO + 1) {
    return true;
  }
  if (isOWin && !isXWin && totalX === totalO) {
    return true;
  }
  if (!isXWin && !isOWin && (totalX === totalO || totalX === totalO + 1)) {
    return true;
  }
  return false;
}
