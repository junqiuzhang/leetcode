import { it, expect } from '../test/index.js';
import largestPalindrome from './index.js';
it('479', () => {
  expect(largestPalindrome, 1).toBe(9);
  expect(largestPalindrome, 2).toBe(987);
  expect(largestPalindrome, 8).toBe(475);
});
