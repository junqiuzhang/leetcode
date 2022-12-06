import { it, expect } from '../../libs/test/index.js';
import { numDifferentIntegers } from '../../problems/1805/index.js';
it('1805', () => {
  expect(numDifferentIntegers).call('a123bc34d8ef34').toReturn(3);
  expect(numDifferentIntegers).call('leet1234code234').toReturn(2);
  expect(numDifferentIntegers).call('a1b01c001').toReturn(1);
});
