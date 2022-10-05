import { it, expect } from '../../libs/test/index.js';
import { nextGreaterElements } from '../../problems/503/index.js';
it('503', () => {
  expect(nextGreaterElements).call([1, 2, 1]).toReturn([2, -1, 2]);
  expect(nextGreaterElements).call([1, 2, 3, 4, 3]).toReturn([2, 3, 4, -1, 4]);
});
