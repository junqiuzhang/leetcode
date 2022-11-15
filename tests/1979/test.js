import { it, expect } from '../../libs/test/index.js';
import { findGCD } from '../../problems/1979/index.js';
it('1979', () => {
  expect(findGCD).call([2, 5, 6, 9, 10]).toReturn(2);
  expect(findGCD).call([7, 5, 6, 8, 3]).toReturn(1);
  expect(findGCD).call([3, 3]).toReturn(3);
});
