import { it, expect } from '../../libs/test/index.js';
import { consecutiveNumbersSum } from '../../problems/829/index.js';
it('829', () => {
  expect(consecutiveNumbersSum).call(5).toReturn(2);
  expect(consecutiveNumbersSum).call(9).toReturn(3);
  expect(consecutiveNumbersSum).call(15).toReturn(4);
  expect(consecutiveNumbersSum).call(313653678).toReturn(16);
  expect(consecutiveNumbersSum).call(472330709).toReturn(4);
});
