import { it, expect } from '../../libs/test/index.js';
import { consecutiveNumbersSum } from '../../problems/829/index.js';
it('829', () => {
  expect(consecutiveNumbersSum).call(5).toBe(2);
  expect(consecutiveNumbersSum).call(9).toBe(3);
  expect(consecutiveNumbersSum).call(15).toBe(4);
  expect(consecutiveNumbersSum).call(313653678).toBe(16);
  expect(consecutiveNumbersSum).call(472330709).toBe(4);
});
