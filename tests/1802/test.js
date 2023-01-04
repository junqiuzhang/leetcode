import { it, expect } from '../../libs/test/index.js';
import { maxValue } from '../../problems/1802/index.js';
it('1802', () => {
  expect(maxValue).call(4, 2, 6).toReturn(2);
  expect(maxValue).call(6, 1, 10).toReturn(3);
});
