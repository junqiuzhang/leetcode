import { it, expect } from '../../libs/test/index.js';
import { largestIsland } from '../../problems/827/index.js';
it('827', () => {
  expect(largestIsland)
    .call([
      [1, 0],
      [0, 1],
    ])
    .toReturn(3);
  expect(largestIsland)
    .call([
      [1, 1],
      [1, 0],
    ])
    .toReturn(4);
  expect(largestIsland)
    .call([
      [1, 1],
      [1, 1],
    ])
    .toReturn(4);
  expect(largestIsland)
    .call([
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ])
    .toReturn(9);
  expect(largestIsland)
    .call([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 0, 0],
    ])
    .toReturn(18);
  expect(largestIsland)
    .call([
      [1, 0, 1],
      [0, 0, 0],
      [0, 1, 1],
    ])
    .toReturn(4);
  expect(largestIsland)
    .call([
      [0, 0],
      [0, 0],
    ])
    .toReturn(1);
  expect(largestIsland)
    .call([
      [1, 0, 0, 1, 1],
      [1, 0, 0, 1, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 0, 1],
      [0, 0, 0, 1, 0],
    ])
    .toReturn(16);
});
