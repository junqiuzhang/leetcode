import { it, expect } from '../../libs/test/index.js';
import { clumsy } from '../../problems/1006/index.js';
it('1006', () => {
  expect(clumsy).call(4).toReturn(7);
  expect(clumsy).call(10).toReturn(12);
});
