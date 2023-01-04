import { it, expect } from '../../libs/test/index.js';
import { getSum, maxValue } from '../../problems/1802/index.js';
it('1802: getSum', () => {
  expect(getSum).call(4, 3).toReturn(9);
  expect(getSum).call(4, 5).toReturn(11);
});
it('1802: maxValue', () => {
  expect(maxValue).call(4, 2, 6).toReturn(2);
  expect(maxValue).call(6, 1, 10).toReturn(3);
});
