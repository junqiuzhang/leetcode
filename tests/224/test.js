import { it, expect } from '../../libs/test/index.js';
import {
  OperatorSet,
  OperatorMap,
  generateTokens,
  calculateTokens,
  calculate,
} from '../../problems/224/index.js';
it('224: generateTokens', () => {
  expect(generateTokens).call('1 + 1', OperatorSet).toReturn(['1', '+', '1']);
  expect(generateTokens)
    .call(' 2-1 + 2 ', OperatorSet)
    .toReturn(['2', '-', '1', '+', '2']);
  expect(generateTokens)
    .call('(1+(4+5+2)-3)+(6+8)', OperatorSet)
    .toReturn([
      ['1', '+', ['4', '+', '5', '+', '2'], '-', '3'],
      '+',
      ['6', '+', '8'],
    ]);
});
it('224: calculateTokens', () => {
  expect(calculateTokens)
    .call(generateTokens('1 + 1', OperatorSet), OperatorMap)
    .toReturn(2);
  expect(calculateTokens)
    .call(generateTokens(' 2-1 + 2 ', OperatorSet), OperatorMap)
    .toReturn(3);
  expect(calculateTokens)
    .call(generateTokens('(1+(4+5+2)-3)+(6+8)', OperatorSet), OperatorMap)
    .toReturn(23);
});
it('224: calculate', () => {
  expect(calculate).call('1 + 1').toReturn(2);
  expect(calculate).call(' 2-1 + 2 ').toReturn(3);
  expect(calculate).call('(1+(4+5+2)-3)+(6+8)').toReturn(23);
});
