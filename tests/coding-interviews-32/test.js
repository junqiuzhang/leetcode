import { it, expect } from '../../libs/test/index.js';
import { array2tree } from '../../libs/common/index.js';
import { levelOrder } from '../../problems/coding-interviews-32/index.js';
it('coding-interviews-32', () => {
  expect(levelOrder, array2tree([3, 9, 20, null, null, 15, 7])).toBe([
    3, 9, 20, 15, 7,
  ]);
  expect(levelOrder, array2tree([3, 9, 20, 7])).toBe([3, 9, 20, 7]);
  expect(levelOrder, array2tree([])).toBe([]);
});
