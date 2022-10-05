import { it, expect } from '../../libs/test/index.js';
import { isAlienSorted } from '../../problems/953/index.js';
it('953', () => {
  expect(isAlienSorted)
    .call(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz')
    .toReturn(true);
  expect(isAlienSorted)
    .call(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz')
    .toReturn(false);
  expect(isAlienSorted)
    .call(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz')
    .toReturn(false);
  expect(isAlienSorted).call([], 'abcdefghijklmnopqrstuvwxyz').toReturn(true);
});
