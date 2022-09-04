import { it, expect } from '../../libs/test/index.js';
import { numSpecial } from '../../problems/1582/index.js';
it('1582', () => {
  expect(numSpecial, [
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0],
  ]).toBe(1);
  expect(numSpecial, [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]).toBe(3);
  expect(numSpecial, [
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ]).toBe(2);
  expect(numSpecial, [
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ]).toBe(3);
  expect(numSpecial, [
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
  ]).toBe(1);
});
