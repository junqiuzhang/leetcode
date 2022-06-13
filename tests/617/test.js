import { it, expect } from '../../libs/test/index.js';
import { array2tree } from '../../libs/common/index.js';
import { mergeTrees } from '../../problems/617/index.js';
it('617', () => {
  expect(
    mergeTrees,
    array2tree([1, 3, 2, 5]),
    array2tree([2, 1, 3, null, 4, null, 7])
  ).toBe(array2tree([3, 4, 5, 5, 4, null, 7]));
  expect(mergeTrees, array2tree([1, 3, 2, 5]), null).toBe(
    array2tree([1, 3, 2, 5])
  );
  expect(mergeTrees, null, null).toBe(null);
});
