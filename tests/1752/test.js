import { it, expect } from '../../libs/test/index.js';
import { soupServings as check } from '../../problems/1752/index.js';
it('1752', () => {
  expect(check).call([3, 4, 5, 1, 2]).toReturn(true);
  expect(check).call([2, 1, 3, 4]).toReturn(false);
  expect(check).call([1, 2, 3]).toReturn(true);
});
