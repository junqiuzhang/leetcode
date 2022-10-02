import { it, expect } from '../../libs/test/index.js';
import { findDiagonalOrder } from '../../problems/498/index.js';
it('498', () => {
  expect(findDiagonalOrder)
    .call([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
    .toBe([1, 2, 4, 7, 5, 3, 6, 8, 9]);
  expect(findDiagonalOrder)
    .call([
      [1, 2],
      [3, 4],
    ])
    .toBe([1, 2, 3, 4]);
});
