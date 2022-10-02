import { it, expect } from '../../libs/test/index.js';
import { sortArrayByParity } from '../../problems/905/index.js';
it('905', () => {
  expect(sortArrayByParity).call([0]).toBe([0]);
  expect(sortArrayByParity).call([3, 1, 2, 4]).toBe([2, 4, 3, 1]);
  expect(sortArrayByParity).call([2, 4, 6, 8]).toBe([2, 4, 6, 8]);
  expect(sortArrayByParity).call([1, 3, 5, 7]).toBe([1, 3, 5, 7]);
});
