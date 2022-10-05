import { it, expect } from '../../libs/test/index.js';
import {
  rotateNumber,
  isGoodNumber,
  rotatedDigits,
} from '../../problems/788/index.js';
it('788: rotateNumber', () => {
  expect(rotateNumber).call(1).toReturn(1);
  expect(rotateNumber).call(2).toReturn(5);
  expect(rotateNumber).call(25).toReturn(52);
});
it('788: isGoodNumber', () => {
  expect(isGoodNumber).call(1).toReturn(false);
  expect(isGoodNumber).call(2).toReturn(true);
  expect(isGoodNumber).call(25).toReturn(true);
});
it('788: rotatedDigits', () => {
  expect(rotatedDigits).call(10).toReturn(4);
  expect(rotatedDigits).call(100).toReturn(40);
  expect(rotatedDigits).call(1000).toReturn(316);
  expect(rotatedDigits).call(10000).toReturn(2320);
  expect(rotatedDigits).call(1).toReturn(0);
  expect(rotatedDigits).call(2).toReturn(1);
  expect(rotatedDigits).call(857).toReturn(247);
});
