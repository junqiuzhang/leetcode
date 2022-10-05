import { it, expect } from '../../libs/test/index.js';
import { findPairs } from '../../problems/532/index.js';
it('532', () => {
  expect(findPairs).call([3, 1, 4, 1, 5], 2).toReturn(2);
  expect(findPairs).call([1, 2, 3, 4, 5], 1).toReturn(4);
  expect(findPairs).call([1, 3, 1, 5, 4], 0).toReturn(1);
  expect(findPairs).call([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3).toReturn(2);
});
