import { it, expect } from '../../libs/test/index.js';
import {
  OperatorSet,
  OperatorMap,
  generateTokens,
  calculateTokens,
  calculate,
} from '../../problems/224/index.js';
it('224: generateTokens', () => {
  expect(generateTokens).call('1 + 1', OperatorSet).toBe(['1', '+', '1']);
  expect(generateTokens)
    .call(' 2-1 + 2 ', OperatorSet)
    .toBe(['2', '-', '1', '+', '2']);
  expect(generateTokens)
    .call('(1+(4+5+2)-3)+(6+8)', OperatorSet)
    .toBe([
      ['1', '+', ['4', '+', '5', '+', '2'], '-', '3'],
      '+',
      ['6', '+', '8'],
    ]);
});
it('224: calculateTokens', () => {
  expect(calculateTokens)
    .call(generateTokens('1 + 1', OperatorSet), OperatorMap)
    .toBe(2);
  expect(calculateTokens)
    .call(generateTokens(' 2-1 + 2 ', OperatorSet), OperatorMap)
    .toBe(3);
  expect(calculateTokens)
    .call(generateTokens('(1+(4+5+2)-3)+(6+8)', OperatorSet), OperatorMap)
    .toBe(23);
});
it('224: calculate', () => {
  expect(calculate).call('1 + 1').toBe(2);
  expect(calculate).call(' 2-1 + 2 ').toBe(3);
  expect(calculate).call('(1+(4+5+2)-3)+(6+8)').toBe(23);
});
