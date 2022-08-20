import { it, expect } from '../../libs/test/index.js';
import { array2tree } from '../../libs/common/index';
import { constructMaximumBinaryTree } from '../../problems/654/index.js';
it('402', () => {
  expect(constructMaximumBinaryTree, [3, 2, 1, 6, 0, 5]).toBe(
    array2tree([6, 3, 5, null, 2, 0, null, null, 1])
  );
  expect(constructMaximumBinaryTree, [3, 2, 1]).toBe(
    array2tree([3, null, 2, null, 1])
  );
});
