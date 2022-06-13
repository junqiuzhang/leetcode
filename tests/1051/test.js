import { it, expect } from '../../libs/test/index.js';
import { heightChecker } from '../../problems/1051/index.js';
it('1051', () => {
  expect(heightChecker, [1, 1, 4, 2, 1, 3]).toBe(3);
  expect(heightChecker, [5, 1, 2, 3, 4]).toBe(5);
  expect(heightChecker, [1, 2, 3, 4, 5]).toBe(0);
});
