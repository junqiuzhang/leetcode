import { it, expect } from '../../libs/test/index.js';
import { largestIsland } from '../../problems/827/index.js';
it('827', () => {
  expect(largestIsland, [
    [1, 0],
    [0, 1],
  ]).toBe(3);
  expect(largestIsland, [
    [1, 1],
    [1, 0],
  ]).toBe(4);
  expect(largestIsland, [
    [1, 1],
    [1, 1],
  ]).toBe(4);
  expect(largestIsland, [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]).toBe(9);
  expect(largestIsland, [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 0],
  ]).toBe(18);
  expect(largestIsland, [
    [1, 0, 1],
    [0, 0, 0],
    [0, 1, 1],
  ]).toBe(4);
  expect(largestIsland, [
    [0, 0],
    [0, 0],
  ]).toBe(1);
});
