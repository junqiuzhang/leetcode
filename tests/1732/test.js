import { it, expect } from '../../libs/test/index.js';
import { largestAltitude } from '../../problems/1732/index.js';
it('1732', () => {
  expect(largestAltitude).call([-5, 1, 5, 0, -7]).toReturn(1);
  expect(largestAltitude).call([-4, -3, -2, -1, 4, 3, 2]).toReturn(0);
});
