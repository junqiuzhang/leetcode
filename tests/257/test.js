import { it, expect } from '../../libs/test/index.js';
import { array2tree } from '../../libs/common/index.js';
import { binaryTreePaths } from '../../problems/257/index.js';
it('112', () => {
  expect(binaryTreePaths)
    .call(array2tree([1, 2, 3, null, 5]))
    .toReturn(['1->2->5', '1->3']);
  expect(binaryTreePaths)
    .call(array2tree([1]))
    .toReturn(['1']);
});
