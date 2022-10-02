import { it, expect } from '../../libs/test/index.js';
import { isAlienSorted } from '../../problems/953/index.js';
it('953', () => {
  expect(isAlienSorted)
    .call(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz')
    .toBe(true);
  expect(isAlienSorted)
    .call(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')
    .toBe(false);
  expect(isAlienSorted)
    .call(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz')
    .toBe(false);
  expect(isAlienSorted).call([], 'abcdefghijklmnopqrstuvwxyz').toBe(true);
});
