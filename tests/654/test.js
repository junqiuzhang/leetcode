import { it, expect } from '../../libs/test/index.js';
import { array2tree } from '../../libs/common/index.js';
import { constructMaximumBinaryTree } from '../../problems/654/index.js';
it('654', () => {
  expect(constructMaximumBinaryTree)
    .call([3, 2, 1, 6, 0, 5])
    .toReturn(array2tree([6, 3, 5, null, 2, 0, null, null, null, null, 1]));
  expect(constructMaximumBinaryTree)
    .call([3, 2, 1])
    .toReturn(array2tree([3, null, 2, null, null, null, 1]));
});
