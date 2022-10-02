import { it, expect } from '../../libs/test/index.js';
import { coinChange } from '../../problems/322/index.js';
it('322', () => {
  expect(coinChange).call([1, 2, 5], 11).toBe(3);
  expect(coinChange).call([2], 3).toBe(-1);
  expect(coinChange).call([1], 0).toBe(0);
  expect(coinChange).call([1], 1).toBe(1);
  expect(coinChange).call([1], 2).toBe(2);
});
