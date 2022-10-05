import { it, expect } from '../../libs/test/index.js';
import { countNumbersWithUniqueDigits } from '../../problems/357/index.js';
it('357', () => {
  expect(countNumbersWithUniqueDigits).call(0).toReturn(1);
  expect(countNumbersWithUniqueDigits).call(1).toReturn(10);
  expect(countNumbersWithUniqueDigits).call(2).toReturn(91);
  expect(countNumbersWithUniqueDigits).call(8).toReturn(2345851);
});
