import { it, expect } from '../../libs/test/index.js';
import { countNumbersWithUniqueDigits } from '../../problems/357/index.js';
it('357', () => {
  expect(countNumbersWithUniqueDigits).call(0).toBe(1);
  expect(countNumbersWithUniqueDigits).call(1).toBe(10);
  expect(countNumbersWithUniqueDigits).call(2).toBe(91);
  expect(countNumbersWithUniqueDigits).call(8).toBe(2345851);
});
