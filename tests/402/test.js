import { it, expect } from '../../libs/test/index.js';
import { removeKdigits } from '../../problems/402/index.js';
it('402', () => {
  expect(removeKdigits).call('1432219', 3).toReturn('1219');
  expect(removeKdigits).call('10200', 1).toReturn('200');
  expect(removeKdigits).call('10', 2).toReturn('0');
  expect(removeKdigits).call('10', 1).toReturn('0');
  expect(removeKdigits).call('112', 1).toReturn('11');
});
