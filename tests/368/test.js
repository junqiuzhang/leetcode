import { it, expect } from '../../libs/test/index.js';
import { largestDivisibleSubset } from '../../problems/368/index.js';
it('368', () => {
  expect(largestDivisibleSubset, [1, 2, 3]).toBe([2, 1]);
  expect(largestDivisibleSubset, [1, 2, 4, 8]).toBe([8, 4, 2, 1]);
  expect(
    largestDivisibleSubset,
    [5, 9, 18, 54, 108, 540, 90, 180, 360, 720]
  ).toBe([720, 360, 180, 90, 18, 9]);
});
