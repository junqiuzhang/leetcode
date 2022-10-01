/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export const solveSudoku = (board) => {
  const line = new Array(9).fill(0).map(() => new Array(9));
  const column = new Array(9).fill(0).map(() => new Array(9));
  const block = new Array(3)
    .fill(0)
    .map(() => new Array(3).fill(0).map(() => new Array(9)));
  const spaces = [];
  let valid = false;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == '.') {
        spaces.push([i, j]);
      } else {
        const digit = Number(board[i][j]) - 1;
        line[i][digit] =
          column[j][digit] =
          block[Math.floor(i / 3)][Math.floor(j / 3)][digit] =
            true;
      }
    }
  }
  const dfs = (index) => {
    if (index === spaces.length) {
      valid = true;
      return;
    }
    const [i, j] = spaces[index];
    for (let digit = 0; digit < 9 && !valid; digit++) {
      if (
        !line[i][digit] &&
        !column[j][digit] &&
        !block[Math.floor(i / 3)][Math.floor(j / 3)][digit]
      ) {
        line[i][digit] =
          column[j][digit] =
          block[Math.floor(i / 3)][Math.floor(j / 3)][digit] =
            true;
        board[i][j] = String(digit + 1);
        dfs(index + 1);
        line[i][digit] =
          column[j][digit] =
          block[Math.floor(i / 3)][Math.floor(j / 3)][digit] =
            false;
      }
    }
  };
  dfs(0);
};
