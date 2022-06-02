import { it, expect } from '../../libs/test/index.js';
import { largestDivisibleSubset } from '../../problems/368/index.js';
it('368', () => {
  // expect(largestDivisibleSubset, [1, 2, 3]).toBe([1, 2]);
  // expect(largestDivisibleSubset, [1, 2, 4, 8]).toBe([1, 2, 4, 8]);
  expect(
    largestDivisibleSubset,
    [5, 9, 18, 54, 108, 540, 90, 180, 360, 720]
  ).toBe([9, 18, 90, 180, 360, 720]);
});
