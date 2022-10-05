import { it, expect } from '../../libs/test/index.js';
import { largestDivisibleSubset } from '../../problems/368/index.js';
it('368', () => {
  expect(largestDivisibleSubset).call([1, 2, 3]).toReturn([2, 1]);
  expect(largestDivisibleSubset).call([1, 2, 4, 8]).toReturn([8, 4, 2, 1]);
  expect(largestDivisibleSubset)
    .call([5, 9, 18, 54, 108, 540, 90, 180, 360, 720])
    .toReturn([720, 360, 180, 90, 18, 9]);
});
