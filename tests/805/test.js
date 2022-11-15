import { it, expect } from '../../libs/test/index.js';
import { splitArraySameAverage } from '../../problems/805/index.js';
it('805', () => {
  expect(splitArraySameAverage).call([1, 2, 3, 4, 5, 6, 7, 8]).toReturn(true);
  expect(splitArraySameAverage).call([3, 1]).toReturn(false);
  expect(splitArraySameAverage).call([0]).toReturn(false);
  expect(splitArraySameAverage).call([18, 0, 16, 2]).toReturn(true);
  expect(splitArraySameAverage)
    .call([
      60, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    ])
    .toReturn(false);
  expect(splitArraySameAverage)
    .call([
      5000, 5001, 5002, 5003, 5004, 5005, 5006, 5007, 5008, 5009, 5010, 5011,
      5012, 5013, 5114, 5115, 5116, 5117, 5118, 5119, 5120, 5121, 5122, 5123,
      5124, 5125, 5126, 5127, 6128, 7724,
    ])
    .toReturn(true);
  expect(splitArraySameAverage)
    .call([
      9990, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
    ])
    .toReturn(false);
  expect(splitArraySameAverage)
    .call([
      1, 1000, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 10000,
    ])
    .toReturn(false);
});
