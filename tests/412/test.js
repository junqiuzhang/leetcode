import { it, expect } from '../../libs/test/index.js';
import { fizzBuzz } from '../../problems/412/index.js';
it('412', () => {
  expect(fizzBuzz)
    .call(15)
    .toBe([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]);
});
