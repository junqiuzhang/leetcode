import { it, expect } from '../../libs/test/index.js';
import { areNumbersAscending } from '../../problems/2042/index.js';
it('2042', () => {
  expect(areNumbersAscending)
    .call('1 box has 3 blue 4 red 6 green and 12 yellow marbles')
    .toReturn(true);
  expect(areNumbersAscending).call('hello world 5 x 5').toReturn(false);
  expect(areNumbersAscending)
    .call('sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s')
    .toReturn(false);
  expect(areNumbersAscending).call('4 5 11 26').toReturn(true);
});
