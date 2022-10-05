import { it, expect } from '../../libs/test/index.js';
import { largestPalindrome } from '../../problems/479/index.js';
it('479', () => {
  expect(largestPalindrome).call(1).toReturn(9);
  expect(largestPalindrome).call(2).toReturn(987);
  expect(largestPalindrome).call(8).toReturn(475);
});
