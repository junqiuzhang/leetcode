import { it, expect } from '../../libs/test/index.js';
import {
  rotateNumber,
  isGoodNumber,
  rotatedDigits,
} from '../../problems/788/index.js';
it('788:rotateNumber', () => {
  expect(rotateNumber, 1).toBe(1);
  expect(rotateNumber, 2).toBe(5);
  expect(rotateNumber, 25).toBe(52);
});
it('788:isGoodNumber', () => {
  expect(isGoodNumber, 1).toBe(false);
  expect(isGoodNumber, 2).toBe(true);
  expect(isGoodNumber, 25).toBe(true);
});
it('788:rotatedDigits', () => {
  expect(rotatedDigits, 10).toBe(4);
  expect(rotatedDigits, 100).toBe(40);
  expect(rotatedDigits, 1000).toBe(316);
  expect(rotatedDigits, 10000).toBe(2320);
  expect(rotatedDigits, 1).toBe(0);
  expect(rotatedDigits, 2).toBe(1);
  expect(rotatedDigits, 857).toBe(247);
});
