/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  const cells = [];
  const len = R + C;
  function check(x, y) {
    if (x >= 0 && x < R && y >= 0 && y < C) {
      return true;
    }
    return false;
  }
  // x+y的移动距离
  for (let i = 0; i < len; i++) {
    // x的移动距离
    for (let x = 0; x <= i; x++) {
      let y = i - x;
      if (check(r0 - x, c0 - y)) {
        cells.push([r0 - x, c0 - y]);
      }
      if (x != 0 && check(r0 + x, c0 - y)) {
        cells.push([r0 + x, c0 - y]);
      }
      if (y != 0 && check(r0 - x, c0 + y)) {
        cells.push([r0 - x, c0 + y]);
      }
      if (x != 0 && y != 0 && check(r0 + x, c0 + y)) {
        cells.push([r0 + x, c0 + y]);
      }
    }
  }
  return cells;
};