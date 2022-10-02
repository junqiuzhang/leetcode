import { it, expect } from '../../libs/test/index.js';
import {
  rotateNumber,
  isGoodNumber,
  rotatedDigits,
} from '../../problems/788/index.js';
it('788:rotateNumber', () => {
  expect(rotateNumber).call(1).toBe(1);
  expect(rotateNumber).call(2).toBe(5);
  expect(rotateNumber).call(25).toBe(52);
});
it('788:isGoodNumber', () => {
  expect(isGoodNumber).call(1).toBe(false);
  expect(isGoodNumber).call(2).toBe(true);
  expect(isGoodNumber).call(25).toBe(true);
});
it('788:rotatedDigits', () => {
  expect(rotatedDigits).call(10).toBe(4);
  expect(rotatedDigits).call(100).toBe(40);
  expect(rotatedDigits).call(1000).toBe(316);
  expect(rotatedDigits).call(10000).toBe(2320);
  expect(rotatedDigits).call(1).toBe(0);
  expect(rotatedDigits).call(2).toBe(1);
  expect(rotatedDigits).call(857).toBe(247);
});
