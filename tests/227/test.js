import { it, expect } from '../../libs/test/index.js';
import {
  HighPriorityOperatorSet as high,
  LowPriorityOperatorSet as low,
  generateTokens,
  calculate,
} from '../../problems/227/index.js';
it('227: generateTokens', () => {
  expect(generateTokens)
    .call('3+2*2', high, low)
    .toReturn(['3', '+', ['2', '*', '2']]);
  expect(generateTokens)
    .call(' 3/2 ', high, low)
    .toReturn([['3', '/', '2']]);
  expect(generateTokens)
    .call(' 3+5 / 2 ', high, low)
    .toReturn(['3', '+', ['5', '/', '2']]);
  expect(generateTokens)
    .call('14/3*2', high, low)
    .toReturn([['14', '/', '3', '*', '2']]);
  expect(generateTokens)
    .call('1*2-3/4+5*6-7*8+9/10', high, low)
    .toReturn([
      ['1', '*', '2'],
      '-',
      ['3', '/', '4'],
      '+',
      ['5', '*', '6'],
      '-',
      ['7', '*', '8'],
      '+',
      ['9', '/', '10'],
    ]);
});
it('227: calculate', () => {
  expect(calculate).call('3+2*2').toReturn(7);
  expect(calculate).call(' 3/2 ').toReturn(1);
  expect(calculate).call(' 3+5 / 2 ').toReturn(5);
  expect(calculate).call('14/3*2').toReturn(8);
  expect(calculate).call('1*2-3/4+5*6-7*8+9/10').toReturn(-24);
});
