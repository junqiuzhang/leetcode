import { it, expect } from '../../libs/test/index.js';
import {
  findIntersection,
  getNumCountMap,
  getNumCountArr,
  minOperations,
} from '../../problems/1775/index.js';
it('1805: findIntersection', () => {
  expect(findIntersection).call([1, 3], [2, 4]).toReturn([2, 3]);
  expect(findIntersection).call([1, 3], [3, 4]).toReturn([3, 3]);
});
it('1805: getNumCountMap', () => {
  expect(getNumCountMap)
    .call([1, 2, 4])
    .toReturn(
      new Map([
        [1, 1],
        [2, 1],
        [4, 1],
      ])
    );
  expect(getNumCountMap)
    .call([1, 3, 3, 4])
    .toReturn(
      new Map([
        [1, 1],
        [3, 2],
        [4, 1],
      ])
    );
});
it('1805: getNumCountArr', () => {
  expect(getNumCountArr)
    .call([1, 2, 4])
    .toReturn([
      [1, 1],
      [2, 1],
      [4, 1],
    ]);
  expect(getNumCountArr)
    .call([1, 3, 3, 4])
    .toReturn([
      [1, 1],
      [3, 2],
      [4, 1],
    ]);
});
it('1805: minOperations', () => {
  expect(minOperations)
    .call([1, 2, 3, 4, 5, 6], [1, 1, 2, 2, 2, 2])
    .toReturn(3);
  expect(minOperations).call([1, 1, 1, 1, 1, 1, 1], [6]).toReturn(-1);
  expect(minOperations).call([6, 6], [1]).toReturn(3);
  expect(minOperations)
    .call([5, 6, 4, 3, 1, 2], [6, 3, 3, 1, 4, 5, 3, 4, 1, 3, 4])
    .toReturn(4);
  expect(minOperations)
    .call([5, 2, 1, 5, 2, 2, 2, 2, 4, 3, 3, 5], [1, 4, 5, 5, 6, 3, 1, 3, 3])
    .toReturn(1);
});
