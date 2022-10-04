import { it, expect } from '../../libs/test/index.js';
import { array2tree } from '../../libs/common/index.js';
import { levelOrder } from '../../problems/10032/index.js';
it('10032', () => {
  expect(levelOrder)
    .call(array2tree([3, 9, 20, null, null, 15, 7]))
    .toBe([3, 9, 20, 15, 7]);
  expect(levelOrder)
    .call(array2tree([3, 9, 20, 7]))
    .toBe([3, 9, 20, 7]);
  expect(levelOrder).call(array2tree([])).toBe([]);
});
