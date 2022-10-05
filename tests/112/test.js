import { it, expect } from '../../libs/test/index.js';
import { array2tree } from '../../libs/common/index.js';
import { hasPathSum } from '../../problems/112/index.js';
it('112', () => {
  expect(hasPathSum)
    .call(array2tree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22)
    .toReturn(true);
  expect(hasPathSum)
    .call(array2tree([1, 2, 3]), 5)
    .toReturn(false);
  expect(hasPathSum).call(array2tree([]), 0).toReturn(false);
  expect(hasPathSum)
    .call(array2tree([1, 2]), 1)
    .toReturn(false);
});
