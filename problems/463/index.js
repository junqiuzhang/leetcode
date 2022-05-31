/**
 * 数据结构：数组
 * 算法：数学 遍历
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
  if (!grid.length || !grid[0].length) {
    return 0;
  }
  let land = 0;
  let common = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        land++;
        if (grid[i][j + 1] === 1) {
          common++;
        }
        if (grid[i + 1] && grid[i + 1][j] === 1) {
          common++;
        }
      }
    }
  }
  return land * 4 - common * 2;
};
