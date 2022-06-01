import { it, expect } from '../../libs/test/index.js';
import { array2tree } from '../../libs/common/index.js';
import { sortedArrayToBST } from '../../problems/108/index.js';
it('108', () => {
  expect(sortedArrayToBST, [-10, -3, 0, 5, 9]).toBe(
    array2tree([0, -3, 9, -10, null, 5])
  );
  expect(sortedArrayToBST, [1, 3]).toBe(array2tree([3, 1]));
});
