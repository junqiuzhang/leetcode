import { it, expect } from '../../libs/test/index.js';
import {
  trimStartRecursion,
  trimStartLoop,
  numDifferentIntegers,
} from '../../problems/1805/index.js';
it('1805: trimStartRecursion', () => {
  expect(trimStartRecursion).call('').toReturn('');
  expect(trimStartRecursion).call(' a ').toReturn('a ');
  expect(trimStartRecursion).call('aba', 'a').toReturn('ba');
  expect(trimStartRecursion).call('abadbab', 'ab').toReturn('adbab');
});
it('1805: trimStartLoop', () => {
  expect(trimStartLoop).call('').toReturn('');
  expect(trimStartLoop).call(' a ').toReturn('a ');
  expect(trimStartLoop).call('aba', 'a').toReturn('ba');
  expect(trimStartLoop).call('abadbab', 'ab').toReturn('adbab');
});
it('1805: numDifferentIntegers', () => {
  expect(numDifferentIntegers).call('a123bc34d8ef34').toReturn(3);
  expect(numDifferentIntegers).call('leet1234code234').toReturn(2);
  expect(numDifferentIntegers).call('a1b01c001').toReturn(1);
});
