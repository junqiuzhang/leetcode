import { it, expect } from '../../libs/test/index.js';
import { consecutiveNumbersSum } from '../../problems/829/index.js';
it('829', () => {
  expect(consecutiveNumbersSum, 5).toBe(2);
  expect(consecutiveNumbersSum, 9).toBe(3);
  expect(consecutiveNumbersSum, 15).toBe(4);
  expect(consecutiveNumbersSum, 313653678).toBe(16);
  expect(consecutiveNumbersSum, 472330709).toBe(4);
});
