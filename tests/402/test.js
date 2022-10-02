import { it, expect } from '../../libs/test/index.js';
import { removeKdigits } from '../../problems/402/index.js';
it('402', () => {
  expect(removeKdigits).call('1432219', 3).toBe('1219');
  expect(removeKdigits).call('10200', 1).toBe('200');
  expect(removeKdigits).call('10', 2).toBe('0');
  expect(removeKdigits).call('10', 1).toBe('0');
  expect(removeKdigits).call('112', 1).toBe('11');
});
