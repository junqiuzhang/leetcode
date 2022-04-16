import { it, expect } from '../test/index.js';
import { add, multi, multiply } from './index.js';
it('my-interview-8: add', () => {
  expect(add('0', '0')).toBe('0');
  expect(add('1', '1')).toBe('2');
  expect(add('99', '9')).toBe('108');
  expect(add('9', '99')).toBe('108');
});
it('my-interview-8: multi', () => {
  expect(multi('0', '0')).toBe('0');
  expect(multi('1', '1')).toBe('1');
  expect(multi('99', '9')).toBe('891');
  expect(multi('9', '99')).toBe('81');
});
it('my-interview-8: multiply', () => {
  expect(multiply('0', '0')).toBe('0');
  expect(multiply('1', '1')).toBe('1');
  expect(multiply('99', '9')).toBe('891');
  expect(multiply('9', '99')).toBe('891');
});
