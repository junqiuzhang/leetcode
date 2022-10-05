import { it, expect } from '../../libs/test/index.js';
import { numSpecial } from '../../problems/1582/index.js';
it('1582', () => {
  expect(numSpecial)
    .call([
      [1, 0, 0],
      [0, 0, 1],
      [1, 0, 0],
    ])
    .toReturn(1);
  expect(numSpecial)
    .call([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ])
    .toReturn(3);
  expect(numSpecial)
    .call([
      [0, 0, 0, 1],
      [1, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ])
    .toReturn(2);
  expect(numSpecial)
    .call([
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1],
    ])
    .toReturn(3);
  expect(numSpecial)
    .call([
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0],
    ])
    .toReturn(1);
});
