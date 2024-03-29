import { it, expect } from '../../libs/test/index.js';
import { sortByBits } from '../../problems/1356/index.js';
it('1356', () => {
  expect(sortByBits)
    .call([0, 1, 2, 3, 4, 5, 6, 7, 8])
    .toReturn([0, 1, 2, 4, 8, 3, 5, 6, 7]);
  expect(sortByBits)
    .call([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1])
    .toReturn([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]);
  expect(sortByBits).call([10000, 10000]).toReturn([10000, 10000]);
});
