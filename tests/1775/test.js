import { it, expect } from '../../libs/test/index.js';
import { minOperations } from '../../problems/1775/index.js';
it('1805', () => {
  expect(minOperations)
    .call([1, 2, 3, 4, 5, 6], [1, 1, 2, 2, 2, 2])
    .toReturn(3);
  expect(minOperations).call([1, 1, 1, 1, 1, 1, 1], [6]).toReturn(-1);
  expect(minOperations).call([6, 6], [1]).toReturn(3);
});
