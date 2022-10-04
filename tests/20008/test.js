import { it, expect } from '../../libs/test/index.js';
import { add, multi, multiply } from '../../problems/20008/index.js';
it('20008: add', () => {
  expect(add).call('0', '0').toBe('0');
  expect(add).call('1', '1').toBe('2');
  expect(add).call('99', '9').toBe('108');
  expect(add).call('9', '99').toBe('108');
  expect(add)
    .call('-1', '-1')
    .toErr('Error: arguments must be a positive number!');
});
it('20008: multi', () => {
  expect(multi).call('0', '0').toBe('0');
  expect(multi).call('1', '1').toBe('1');
  expect(multi).call('99', '9').toBe('891');
  expect(multi).call('9', '99').toBe('81');
  expect(multi)
    .call('-1', '-1')
    .toErr('Error: arguments must be a positive number!');
});
it('20008: multiply', () => {
  expect(multiply).call('0', '0').toBe('0');
  expect(multiply).call('1', '1').toBe('1');
  expect(multiply).call('99', '9').toBe('891');
  expect(multiply).call('9', '99').toBe('891');
  expect(multiply)
    .call('-1', '-1')
    .toErr('Error: arguments must be a positive number!');
});
