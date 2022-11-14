import { it, expect } from '../../libs/test/index.js';
import { splitArraySameAverage } from '../../problems/805/index.js';
it('805', () => {
  expect(splitArraySameAverage).call([1, 2, 3, 4, 5, 6, 7, 8]).toReturn(true);
  expect(splitArraySameAverage).call([3, 1]).toReturn(false);
});
