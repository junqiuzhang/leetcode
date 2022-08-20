import { it, expect } from '../../libs/test/index.js';
import { nextGreaterElements } from '../../problems/503/index.js';
it('503', () => {
  expect(nextGreaterElements, [1, 2, 1]).toBe([2, -1, 2]);
  expect(nextGreaterElements, [1, 2, 3, 4, 3]).toBe([2, 3, 4, -1, 4]);
});
