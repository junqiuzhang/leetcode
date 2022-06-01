import { it, expect } from '../../libs/test/index.js';
import { isAlienSorted } from '../../problems/953/index.js';
it('953', () => {
  expect(
    isAlienSorted,
    ['hello', 'leetcode'],
    'hlabcdefgijkmnopqrstuvwxyz'
  ).toBe(true);
  expect(
    isAlienSorted,
    ['word', 'world', 'row'],
    'worldabcefghijkmnpqstuvxyz'
  ).toBe(false);
  expect(isAlienSorted, ['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz').toBe(
    false
  );
  expect(isAlienSorted, [], 'abcdefghijklmnopqrstuvwxyz').toBe(true);
});
